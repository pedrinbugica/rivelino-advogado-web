
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ContactFormData {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { 
        status: 405, 
        headers: { 'Content-Type': 'application/json', ...corsHeaders }
      }
    );
  }

  try {
    const formData: ContactFormData = await req.json();
    
    // Validate required fields
    if (!formData.nome || !formData.email || !formData.telefone || !formData.mensagem) {
      return new Response(
        JSON.stringify({ error: 'Todos os campos são obrigatórios' }),
        { 
          status: 400, 
          headers: { 'Content-Type': 'application/json', ...corsHeaders }
        }
      );
    }

    // Get SMTP configuration from environment
    const smtpHost = Deno.env.get('SMTP_HOST');
    const smtpPort = parseInt(Deno.env.get('SMTP_PORT') || '465');
    const smtpUser = Deno.env.get('SMTP_USER');
    const smtpPass = Deno.env.get('SMTP_PASS');
    const emailTo = Deno.env.get('EMAIL_TO');
    const fromName = Deno.env.get('SMTP_FROM_NAME') || 'Site Rivelino';

    console.log('=== CONFIGURAÇÕES SMTP ===');
    console.log('Host:', smtpHost);
    console.log('Port:', smtpPort);
    console.log('User:', smtpUser);
    console.log('To:', emailTo);
    console.log('From Name:', fromName);
    console.log('Has Password:', !!smtpPass);

    if (!smtpHost || !smtpUser || !smtpPass || !emailTo) {
      console.error('SMTP configuration missing');
      return new Response(
        JSON.stringify({ error: 'Configuração de email não encontrada' }),
        { 
          status: 500, 
          headers: { 'Content-Type': 'application/json', ...corsHeaders }
        }
      );
    }

    console.log('=== DADOS DO FORMULÁRIO ===');
    console.log('Nome:', formData.nome);
    console.log('Email:', formData.email);
    console.log('Telefone:', formData.telefone);
    console.log('Mensagem:', formData.mensagem.substring(0, 100) + '...');

    // Create email content
    const emailSubject = `Nova mensagem de contato de ${formData.nome}`;
    const emailBody = `
Nome: ${formData.nome}
E-mail: ${formData.email}
Telefone: ${formData.telefone}

Mensagem:
${formData.mensagem}

---
Esta mensagem foi enviada através do formulário de contato do site.
    `;

    console.log('=== TENTANDO ENVIAR EMAIL ===');
    console.log('Assunto:', emailSubject);

    try {
      // Initialize SMTP client
      const client = new SMTPClient({
        connection: {
          hostname: smtpHost,
          port: smtpPort,
          tls: true,
          auth: {
            username: smtpUser,
            password: smtpPass,
          },
        },
      });

      console.log('Cliente SMTP criado, conectando...');
      
      // Send email
      await client.send({
        from: `${fromName} <${smtpUser}>`,
        to: emailTo,
        subject: emailSubject,
        content: emailBody,
      });

      console.log('✅ EMAIL ENVIADO COM SUCESSO!');
      
      await client.close();
      console.log('Conexão SMTP fechada');

      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Mensagem enviada com sucesso!' 
        }),
        { 
          status: 200, 
          headers: { 'Content-Type': 'application/json', ...corsHeaders }
        }
      );

    } catch (emailError) {
      console.error('❌ ERRO AO ENVIAR EMAIL:', emailError);
      console.error('Detalhes do erro:', {
        name: emailError.name,
        message: emailError.message,
        stack: emailError.stack
      });

      // Return error to user
      return new Response(
        JSON.stringify({ 
          error: 'Erro ao enviar email. Tente novamente ou entre em contato por telefone.' 
        }),
        { 
          status: 500, 
          headers: { 'Content-Type': 'application/json', ...corsHeaders }
        }
      );
    }

  } catch (error) {
    console.error('❌ ERRO GERAL NA FUNÇÃO:', error);
    return new Response(
      JSON.stringify({ error: 'Erro interno do servidor' }),
      { 
        status: 500, 
        headers: { 'Content-Type': 'application/json', ...corsHeaders }
      }
    );
  }
};

serve(handler);
