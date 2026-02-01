<script setup>
import { ref } from 'vue';
import FooterCompo from '../components/footerCompo.vue';
import NavbarHaut from '../components/navbarHaut.vue';

// données du formulaire
const form = ref({
  name: '',
  subject: '',
  message: ''
});

// gestion du formulaire
const submitForm = async () => {
  try {
    const response = await fetch('http://localhost:3000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value),
    });

    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const result = await response.text();
    alert(result);
    form.value = { name: '', subject: '', message: '' };
  } catch (error) {
    console.error('Erreur:', error);
    alert("Une erreur est survenue lors de l'envoi du message. Veuillez réessayer plus tard.");
  }
};


</script>

<template>
        <NavbarHaut></NavbarHaut>
        <Main>
            <div class="banner">
                <article>
                    <h1>Sylvain BURET</h1>
                    <h2>developpeur FullStack</h2>
                </article>
            </div>
            <div class="desc">
                <img src="../assets/img/IndGalaxie.jpg" alt="galaxie" class="desc-img">
                <section>
                    <h2>Qui suis-je ?</h2>
                    <p>Né en 2006, dans le sud de la France, je suis étudiant en développement informatique. Dans mon temps libre, je réalise des projets plus ou moins gros en fonctions de mes envies. <br>
                    Je suis également photographe amateur et plus particulièrement en astro-photo. Je fais également du ski depuis tout petit dans le Vercors. <br>
                    Je passe la plupart de mon temps libre devant des vidéos de vulgarisation diverses, informatique, astronomie, en droit ou autre. Ou alors à écouter de la musique.</p>
                </section>
            </div>
            <div class="desc">
                <section>
                    <h2>Métier prédestiné</h2>
                    <p>Dans le futur je souhaiterais devenir developpeur, fullstack ou bien frontend. J'aime beaucoup discuter avec les utilisateurs, comprendre leurs besoins et developper un outil qui y répond au mieux. C'est pour cela que je préfère developper la partie front-end d'une application mais j'apprécie aussi le developpement d'algorythme.</p>
                </section>
                <img src="../assets/img/IndMontagne.jpg" alt="montagne" class="desc-img">
            </div>
            <div class="desc">
                <img src="../assets/img/IndEccureuil.jpg" alt="Calendrier partagé" class="desc-img">
                <section>
                    <h2>2024 - Aujourd’hui : IUT</h2>
                    <p>Étudiant à l'IUT 2 de Grenoble en informatique, j'y apprend notamment le Java, C et C++, le développement web (HTML, CSS, JavaScript et PHP), la modélisation UML, la réalisation d'interfaces accessible répondantes à de vrai besoins, le SQL et plus particulièrement le PostgreSQL et d'autres technologies.</p>
                </section>
            </div>
            <div class="desc">
                <section>
                    <h2>2021 - 2024 : Lycée</h2>
                    <p>Lycéen au lycée Louis Pasteur d'Avignon en spécialité NSI, maths (maths expertes) et physique en première. J'ai pu, en NSI, participer à des concours divers, pour l'entreprise <a href="https://www.numworks.com/fr/">Numworks</a>, la nuit du code et 2 concours du forum <a href="https://tiplanet.org/forum/portal.php">Ti-planet</a>. J'ai pu obtenir mon bac mention assez bien à rien de la mention bien</p>
                </section>
                <img src="../assets/img/IndLac.jpg" alt="Calendrier partagé" class="desc-img">
            </div>
            <div class="contact">
                <form @submit.prevent="submitForm">
                    <h1>Me contacter</h1>
                    <label for="name">Votre nom :</label>
                    <input type="text" id="name" v-model="form.name" required>
                    <label for="subject">Objet du message :</label>
                    <input type="text" id="subject" v-model="form.subject" required>
                    <div>
                        <label for="message">Message :</label>
                        <textarea id="message" v-model="form.message" required></textarea>
                    </div>
                    <button type="submit">Envoyer</button>
                </form>
            </div>
        </Main>
        <FooterCompo></FooterCompo>
</template>

<style scoped>
main {
    min-height: 70vh;
    width: 99.5vw;
    margin-left: 0px;
}

.banner {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  padding-top: 25vh;
  width: 100vw;
  object-fit: contain;
  background-image: url("../assets/img/IndBanner.jpg");
  height: 70vh;
  position: relative;
  margin-left: -8px;
  margin-bottom: 75px;
}

article {
    background: #00072b;
    background: linear-gradient(43deg, rgba(0, 7, 43, 1) 0%, rgba(54, 0, 74, 1) 100%);
    display: flex;
    flex-direction: column;
    width: 300px;
    position: absolute;
    left: 0px;
    padding-left: 50px;
    padding:30px 10px 20px 50px ;
}

article > h1, article > h2 {
    display: inline-block;
    margin-top: 0px;
}

.desc {
  margin-bottom: 75px;
  gap: 100px;
  height: 400px;
  display: flex;
  flex-direction: row;
  margin-left: 12%;
  margin-right: 12%;
  width: 76%;
}

a {
    text-decoration: none;
    color:#5b14ff;
}

p, h1, h2, li {
    color: white;
}

p {
    font-size: 20px;
}

br {
    margin-top: 10px;
}

.desc-img {
  object-fit: cover;
  width: 48%;
  border-radius: 250px;
}

section {
  padding-top: 20px;
  width: 55%;
  height: fit-content;
}

.contact {
    margin-left: -8px;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #3709a0;
    padding-top: 30px;
    padding-bottom: 50px;
}

form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 30%;
}

label {
    margin-bottom: 10px;
    font-size: large;
}

input, button {
    height: 30px;
    font-size: large;
}

input, textarea {
    border: solid 3px #5b14ff;
    border-radius: 5px;
    margin-bottom: 10px;
}

textarea {
    display: block;
    width: 98%;
    height: 100px;
    resize: none;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: large;
}

button {
    margin-top: 15px;
    background: #00072b;
    background: linear-gradient(43deg, rgba(0, 7, 43, 1) 0%, rgba(54, 0, 74, 1) 100%);
    color: white;
    border: none;
    border-radius: 5px;
    height: 40px;
}

button:hover {
    background: linear-gradient(43deg, rgb(0, 6, 37) 0%, rgb(42, 0, 58) 100%);
    color: rgb(206, 206, 206);
    cursor: pointer;
}

@media (max-width: 930px) {
  .desc-img {
    display: none; /* Cache les images sur mobile */
  }

  section {
    padding-top: 20px;
    width: 100%; /* Section prend toute la largeur */
    height: max-content;
  }

  .desc {
    flex-direction: column;
    margin-bottom: 110px;
  }

  form {
    width: 60%;
  }
}

@media (max-width: 720px) {
    .banner > article {
        display: none;
    }
}
</style>
