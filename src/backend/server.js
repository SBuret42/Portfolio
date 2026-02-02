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
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  tls: { rejectUnauthorized: false },
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
  console.log('📩 Route /send-email appelée');
  console.log('Body reçu :', req.body);


  const mailOptions = {
    from: "sylvain.buret.contact@gmail.com",
    to: "sylvain.buret.contact@gmail.com",
    subject: `Nouveau message de ${name}: ${subject}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erreur détaillée :', error);
      res.status(500).send("Erreur lors de l'envoi de l'email.");
    } else {
      console.log('Email envoyé :', info.response);
      res.status(200).send('Email envoyé avec succès !');
    }
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





