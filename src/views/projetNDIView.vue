<script setup>
import FooterCompo from '../components/footerCompo.vue';
import NavbarHaut from '../components/navbarHaut.vue';


</script>

<template>
    <NavbarHaut></NavbarHaut>
    <main>
    <img src="/img/imgNDI.avif" alt="L'Isère, photo panoramique de nuit, David Leclerc, licence Creative Commons Attribution 3.0 Non Transposé.">
        <div id="entete">
            <article>
                    <h3>Projet réalisé avec :</h3>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/l%C3%A9lio-michoulier-dyon-a80689209/">Lélio Michoullier-Dyons</a></li>
                        <li><a href="https://www.linkedin.com/in/ali-kus-fr/">Ali Kus</a></li>
                        <li><a href="https://www.linkedin.com/in/hashem-belal-921369206/">Hashem Belal</a></li>
                        <li><a href="https://www.linkedin.com/in/benjamin-mitton-311594225/">Benjamin Mitton</a></li>
                        <li><a href="https://www.linkedin.com/in/julien-beltrame-9b7a82225/">Julien Beltrame</a></li>
                        <li><a href="https://www.linkedin.com/in/valentin-wouters/">Valentin Wouters</a></li>
                        <li>et d'autres</li>
                    </ul>
            </article>
            <section>
                <ul>
                    <li><img src="/img/vue-logo.png" alt=""></li>
                    <li><img src="/img/html.png" alt=""></li>
                    <li><img src="/img/CSS3_logo.svg" alt=""></li>
                </ul>
                <a href="https://github.com/Theswarmlord26/Aidly">Lien vers le dépot Git du projet</a>
            </section>
        </div>
        <div class="content">
            <div class="desc">
                <section>
                    <h2>C'est quoi la <a href="https://www.nuitdelinfo.com/">nuit de l'info</a></h2>
                    <p>
                        La <a href="https://www.nuitdelinfo.com/">nuit de l'info</a> est une compétition de développement d'une application en une seule nuit, de 16h30 à 8h00. Cette compétition se faisait en groupe, nous étions 9 avec notamment Benjamin Mitton et Julien Beltrame qui étaient nos "coach" car ils travaillent déjà en entreprise chez <a href="https://www.avisto.com/fr/a-propos/implantations/avisto-grenoble/">Avisto Grenoble</a>.
                    </p>
                </section>
                <img id="imgRK" src="/img/ndiGroupe1.avif" alt="" class="desc-img">
            </div>
            <div class="desc">
                <img src="/img/ndiGroupe.avif" alt="" class="desc-img">
                <section >
                    <h2>Le sujet</h2>
                    <p>
                        Nous y avons participé en 2025 et le sujet était de créer une application web centrée autour de la sensibilisation à la démarche NIRD. La démarche NIRD vise à accompagner les écoles et les gens vers l'adoption du numérique plus responsable et durable. C'est-à-dire montrer les alternatives européennes, libres et écologiquement responsables aux logiciels, OS, LLM ou autre.
                    </p>
                </section>
            </div>
            <div class="desc">
                <section>
                    <h2>Notre projet</h2>
                    <p>
                        Nous, nous avons choisi d'expliquer ces problématiques via le jeu. Mais comme nos coachs nous suppliaient de ne surtout pas faire de Quizz (ce qu'une grande partie des groupes ont fait), nous avons pris pour exemple le site <a href="https://luffah.xyz/bidules/Terminus/">Terminus</a>, une sorte de RPG textuel qui se joue en utilisant les commandes bash. Un jeu que j'ai découvert au lycée et qui m'avait vraiment aidé à apprendre ces commandes.
                    </p>
                    <p>
                        Notre jeu lui se basait sur les mêmes mécaniques de jeux, les commandes, mais en plus le jeu cherche à raconter une histoire, écrite par moi-même, montrant des alternatives à Windows, Apple et chatGPT en les dé-sacralisant.
                    </p>
                </section>
                <img src="/img/ndiTableau.avif" alt="" class="desc-img">
            </div>
            <div class="desc">
                <img src="/img/placeholder.png" alt="" class="desc-img">
                <section>
                    <h2>Les problèmes</h2>
                    <p>
                        Malheureusement, nous avons eu plusieurs problèmes notamment avec Git que certains du groupe ne connaissaient pas du tout, posant beaucoup d'erreurs au moment des merges. Ainsi, avec les retards de certaines fonctionnalités, nous n'avons pas réussi à correctement déployer l'application. 
                    </p>
                </section>
            </div>
            <div class="desc">
                <section>
                    <h2>Conclusion</h2>
                    <p>
                        Ainsi, durant ce projet j'ai pu écrire l'histoire du jeu, m'introduire à Vue Js et comprendre comment gérer et participer à un projet quand on ne connaît pas tout le monde tout en étant sous le stress de la compétition. Malgré que nous n'ayons pas pu déployer le projet, j'ai adoré l'expérience et je pense que je retenterai en 2026.
                    </p>
                </section>
                <img src="/img/placeholder.png" alt="" class="desc-img">
            </div>
        </div>
    </main>
    <FooterCompo></FooterCompo>
</template>

<style scoped>

.content {
    min-height: 70vh;
    margin-left: 0px;
    padding-left: 10%;
    padding-right: 10%;
}

img { 
    margin-top: -10px;
    margin-left: -10px;
    margin-bottom: 10px;
    object-fit: cover;
    height: 66.5vh;
    width: 100vw;
}

#entete {
    display: flex;
    justify-content: space-between;
    background-color: #1d0a49;
    border-bottom:  #36128a solid 5px;
    padding-top: 20px;
    margin-top: -15px;
    margin-left: -8px;
    width: 100vw;
}

#entete > article > h3 {
    margin-left: 40px;
    color: white;
}

#entete > article {
    width: 30%;
}

#entete > article > ul > li {
    color: white;
}

#entete > article > ul {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    max-height: 80px ;
}

#entete > section {
    color: white;
    width: 30%;
    padding-bottom: 15px;
    align-items: end;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 40px;
}

#entete > section > ul {
    list-style-type: none;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 100%;
    margin-right: 30px;
}

#entete > section > ul > li {
    margin-left: 50px;
    width: 80px;
}

#entete > section > ul > li > img {
    width: 40px;
    height: 40px;
}

a {
    color: white;
}

#entete > section a{
    text-decoration: none;
    color: #5b14ff;
}

.content {
    padding-left: 0px;
    padding-right: 0px;
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
  align-items: center;
}

.desc-img {
  object-fit: cover;
  width: 48%;
  height: 260px;
}

section {
    width: 55%;
}

section > p {
    font-size: large;
}

h1 > a {
    text-decoration: none;
    color: #15001b;
}

@media (max-width: 1200px) {
    #entete > article > ul {
        padding-left: 20px;
    }

  .content > .desc {
    height: max-content;
    width: 85%;
    margin-left: 10%;
    margin-right: 10%;
  }

  .content > div > section {
    margin: 0px;
    width: 100%;
  }

  .content > div > section > p {
    width: 100%;
  }

  .desc-img {
    display: none;
  }
}

@media (max-width: 550px){
    #entete {
        flex-direction: column;
        align-items: center;
    }

    #entete > section {
        width: 60%;
        margin-right: 0px;
        align-items: center;
    }

    #entete > section > ul {
        margin: 0px;
        padding-left: 0px;
        width: 100%;
    }

    #entete > section > ul > li {
        margin-right: 0px;
    }

    #entete > article {
        width: 60%;
        margin-bottom: 30px;
    }

    #entete > article > h3 {
        margin-left: 20px;
    }
}

</style>