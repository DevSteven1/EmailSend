const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

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

const destinatarios = [
    'stevenpajaro66@gmail.com',
    'stiuwigaming@gmail.com',
    'arnoldpajaro20@gmail.com'
    // Agrega más correos electrónicos si es necesario
];

destinatarios.forEach(destinatario => {
    transporter.sendMail({
        from: 'stevenpajarodev@gmail.com',
        to: destinatario,
        subject: 'Asunto del correo electrónico',
        text: 'Hola mundo',
    }, (error, info) => {
        if (error) {
            console.error('Error al enviar el correo electrónico a', destinatario, ':', error);
        } else {
            console.log('Correo electrónico enviado a', destinatario, ':', info.response);
        }
    });
});

console.timeLog("Enviar correo");
