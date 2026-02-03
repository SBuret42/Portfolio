<script setup>
import FooterCompo from '../components/footerCompo.vue';
import NavbarHaut from '../components/navbarHaut.vue';


</script>

<template>
    <NavbarHaut></NavbarHaut>
    <main>
    <img src="/img/codamasy.avif" alt="">
        <div id="entete">
            <article>
                    <h3>Projet réalisé Seul</h3>
            </article>
            <section>
                <ul>
                    <li><img src="/img/html.png" alt=""></li>
                    <li><img src="/img/CSS3_logo.svg" alt=""></li>
                </ul>
                <a href="https://github.com/SBuret42/Site_Codamasy">Lien vers le dépot Git du projet</a>
            </section>
        </div>
        <div class="content">
            <div class="desc">
                <section>
                    <h2>C'est quoi ce projet ?</h2>
                    <p>
                        Durant l'été 2025, j'ai pu faire un stage chez Codamasy Audits & Conseils durant 1 mois. Durant ce mois, il m'a été demandé de concevoir, présenter, développer, mettre en ligne et référencer le site vitrine de l'entreprise. Le site avait uniquement pour but de montrer ce que propose Codamasy en vue d'augmenter le nombre de clients de l'entreprise.
                    </p>
                </section>
                <img id="imgRK" src="/img/ndiGroupe1.avif" alt="" class="desc-img">
            </div>
            <div class="desc">
                <img src="/img/ndiGroupe.avif" alt="" class="desc-img">
                <section >
                    <h2>Conceptualisation</h2>
                    <p>
                        D'abord j'ai dû comprendre ce que souhaitait Codamasy en termes de contenu, de fonctionnalités, de couleurs, etc... J'ai donc commencé par rédiger un cahier des charges du projet listant les besoins de Codamasy, l'objectif du site, qui seront les utilisateurs, le contenu du site, la charte graphique et prévoir le référencement et l'hébergement du site.
                    </p>
                </section>
            </div>
            <div class="desc">
                <section>
                    <h2>Défendre mes idées</h2>
                    <p>
                        Quand mon cahier des charges a été validé, j'ai pu commencer à maquetter le site d'abord sous forme de wireframe puis de maquette graphique. J'en ai fait un site mono-page pour fluidifier la lecture jusqu'à arriver à une proposition de contact. J'ai longuement pu débattre avec ma tutrice sur la maquette pour vraiment cerner ce qu'elle attendait et le représenter au mieux.
                    </p>
                </section>
                <img src="/img/ndiTableau.avif" alt="" class="desc-img">
            </div>
            <div class="desc">
                <img src="/img/placeholder.png" alt="" class="desc-img">
                <section>
                    <h2>Réalisation du site</h2>
                    <p>
                        Ensuite j'ai pu commencer le développement du site, étant assez simple et ne demandant pas de backend, je l'ai réalisé en pur HTML CSS en suivant la maquette graphique, ce qui m'a fait aller vraiment plus vite que prévu. Ainsi, avec ma tutrice, nous avons pu remarquer ce qui, en réalité, ne rendait pas bien sur le site. J'ai donc dû corriger la maquette et repasser la validation, mais en somme, le développement s'est très bien passé.
                    </p>
                </section>
            </div>
            <div class="desc">
                <section>
                    <h2>Hébergement et référencement</h2>
                    <p>
                        Suite à la fin de la réalisation du site j'ai pu commencer à mettre en production le site. Grâce à mes recherches de début de projet j'ai vite choisi OVH qui permettait d'héberger le site au plus bas prix en proposant d'acheter notre propre nom de domaine au moins cher. Et pour le référencement je me suis renseigné sur comment faire. Ensuite j'ai publié le site sur google search pour qu'il soit trouvable autrement que par l'url et j'ai placé des balises dans le code du site pour que google puisse référencer au mieux le site.
                    </p>
                </section>
                <img src="/img/placeholder.png" alt="" class="desc-img">
            </div>
            <div class="desc">
                <img src="/img/placeholder.png" alt="" class="desc-img">
                <section>
                    <h2>Conclusion</h2>
                    <p>
                        Ce projet a été ma première expérience professionnelle, j'ai beaucoup apprécié travailler chez Codamasy, c'est même la première fois que je réalisais un projet du tout début à la toute fin en touchant à absolument tout.
                    </p>
                </section>
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
        width: 90%;
        margin-bottom: 30px;
    }

    #entete > article > ul {
        padding-left: 20px;
    }

    #entete > article > h3 {
        margin-left: 20px;
    }
}

</style>