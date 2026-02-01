const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path'); // Ajout pour servir les fichiers statiques

const app = express();

// Configuration de CORS pour Alwaysdata (remplacez l'URL par celle de votre site)
app.use(cors({ origin: 'http://sylvain-buret.alwaysdata.net' }));

app.use(bodyParser.json());

// Configuration de Nodemailer
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: "sylvain.buret.contact@gmail.com",
    pass: 'qxpy xrtu sern hyec',
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
  const { name, subject, message } = req.body;
  console.log('Données reçues :', { name, subject, message });

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

// Servir les fichiers statiques du dossier 'dist' (généré par Vue.js)
app.use(express.static(path.join(__dirname, 'dist')));

// Rediriger toutes les requêtes vers index.html (pour le routage Vue.js)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Écouter sur l'IP et le port fournis par Alwaysdata
const ip = process.env.IP || '127.0.0.1'; // Alwaysdata injecte l'IP
const port = process.env.PORT || 3000;   // Alwaysdata injecte le port
app.listen(port, ip, () => {
  console.log(`Serveur démarré sur http://${ip}:${port}`);
});
