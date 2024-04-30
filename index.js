const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

// Configura OAuth2
const oauth2Client = new OAuth2(
    '101443194688-4ba53h87svl2s2oora4h3eeb5558sev4.apps.googleusercontent.com',
    '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',
    'REDIRECT_URL' // Puede ser cualquier URL, no se utilizará
);

oauth2Client.setCredentials({
    refresh_token: '1//04UBaes0nJsOaCgYIARAAGAQSNwF-L9IrHY0152991vzfYLQx5oJQMXyhUdMmLeETLIL9FZiVH8JPkY1Ib0D3DgXYPUdKdM2xdY8'
});

// Configura el transporte SMTP con OAuth2
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: 'stevenpajarodev@gmail.com',
        clientId: '101443194688-4ba53h87svl2s2oora4h3eeb5558sev4.apps.googleusercontent.com',
        clientSecret: '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',
        refreshToken: '1//04UBaes0nJsOaCgYIARAAGAQSNwF-L9IrHY0152991vzfYLQx5oJQMXyhUdMmLeETLIL9FZiVH8JPkY1Ib0D3DgXYPUdKdM2xdY8',
        accessToken: oauth2Client.getAccessToken()
    }
});

console.time("Enviar correo");

// Envía el correo electrónico
transporter.sendMail({
    from: 'stevenpajarodev@gmail.com',
    to: 'stevenpajaro66@gmail.com',
    subject: 'Asunto del correo electrónico',
    text: 'Hola mundo',
}, (error, info) => {
    if (error) {
        console.error('Error al enviar el correo electrónico:', error);
    } else {
        console.log('Correo electrónico enviado:', info.response);
	console.timeLog("Enviado");
    }
});
