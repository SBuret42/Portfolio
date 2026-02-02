process.on('uncaughtException', err => {
  console.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', err => {
  console.error('Unhandled Rejection:', err);
});


const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path'); // Ajout pour servir les fichiers statiques

const app = express();

// Configuration de CORS pour Alwaysdata (remplacez l'URL par celle de votre site)
app.use(cors({ origin: ['http://sylvain-buret.alwaysdata.net', 'https://sylvain-buret.alwaysdata.net'] }));


app.use(bodyParser.json());

// Configuration de Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  }
});


// Test de la connexion SMTP
transporter.verify((error, success) => {
  if (error) {
    console.error('Erreur SMTP:', error);
  } else {
    console.log('SMTP prêt à envoyer des emails !');
  }
});

// Route pour envoyer un email
app.post('/send-email', (req, res) => {
  const { name: senderName, subject, message } = req.body;

  console.log('📩 Route /send-email appelée');
  console.log('Body reçu :', { senderName, subject, message });

  const mailOptions = {
    from: process.env.MAIL_USER,
    to: process.env.MAIL_USER,
    subject: `Nouveau message de ${senderName} : ${subject}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('❌ Erreur envoi mail :', error);
      return res.status(500).send("Erreur lors de l'envoi de l'email.");
    }

    console.log('✅ Email envoyé :', info.response);
    res.status(200).send('Email envoyé avec succès !');
  });
});

// Servir les fichiers statiques du dossier 'dist'
const distPath = path.resolve(__dirname, '../../dist');
app.use(express.static(distPath));

// Rediriger toutes les requêtes non-API vers index.html
app.use((req, res, next) => {
  if (!req.path.startsWith('/api/')) {
    res.sendFile(path.join(distPath, 'index.html'));
  } else {
    next();
  }
});



// Écouter sur l'IP et le port fournis par Alwaysdata
const port = process.env.PORT;
const host = process.env.HOST;

app.listen(port, host, () => {
  console.log(`Serveur démarré sur ${host}:${port}`);
});





