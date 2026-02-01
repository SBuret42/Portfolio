const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));
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

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
