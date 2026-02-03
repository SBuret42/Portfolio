<script setup>
import { ref } from 'vue';
import FooterCompo from '../components/footerCompo.vue';
import NavbarHaut from '../components/navbarHaut.vue';
import ProjetCompo from '../components/projetCompo.vue';

</script>

<template>
        <NavbarHaut></NavbarHaut>
        <Main>
            <ProjetCompo
                link="/projetAidly"
                title="Application Web complète"
                description="Réalisation d'une application web en groupe de 7, un projet vraiment complet et long : conceptualisation, réalisation de maquettes, organisation du groupe, etc... Un projet vraiment complet que j'ai adoré faire avec des amis."
                :technos="['/img/vue-logo.png','/img/html.png','/img/CSS3_logo.svg','/img/php-logo.png']"
                git="https://github.com/Theswarmlord26/Aidly"
                img="/img/Aidly.avif"
            />
            <ProjetCompo
                link="/projetNDI"
                title="Nuit de l'info 2025"
                description="Une compétition de dev où le but est de réaliser un site web en groupe, le conceptualiser, réaliser et déployer en 16h maximum."
                :technos="['/img/vue-logo.png','/img/html.png','/img/CSS3_logo.svg']"
                git="https://github.com/Hashemking21/Nuit-info-2025"
                img="/img/ndi.avif"
            />
            <ProjetCompo
                link="/projetCodamasy"
                title="Site Codamasy"
                description="Réalisation d'un petit site de présentation de l'entreprise Codamasy durant un stage d'un mois durant l'été 2025."
                :technos="['/img/html.png','/img/CSS3_logo.svg']"
                git="https://github.com/SBuret42/Site_Codamasy"
                img="/img/codamasy.avif"
            />
            <ProjetCompo
                link="/projetClassificateur"
                title="Classificateur automatique"
                description="Un classificateur de dépêche journalistique en Java en groupe de 2. Notre but était de partir de fichiers TXT contenant des dépêches pour trouver des moyens de les classer en 5 catégories."
                :technos="['/img/vue-logo.png']"
                git="#"
                img="/img/projetsC.avif"
            />
            <ProjetCompo
                link="/projetAnalyseBD"
                title="Analyse d'une base de données"
                description="Via une base de données publique sur les relevés de la police sur les accidents s’étant déroulés en France entre 2006 et 2023.  Nous avons, en groupe de 2, analysé l'accidentologie des accidents survenus dans le Grand Est chez les jeunes (18-25 ans) conducteurs ou passagers de voitures."
                :technos="['/img/Postgresql_elephant.svg.png','/img/R_logo.svg.png']"
                git="#"
                img="/img/analyseBD.avif"
            />
            <ProjetCompo
                link="/projetSiteInstitutionnel"
                title="Site institutionnel"
                description="Développement d'un site institutionnel avec un wireframe et une maquette graphique pour finir par un vrai site."
                :technos="['/img/html.png','/img/CSS3_logo.svg']"
                git="#"
                img="/img/projetsSCap.avif"
            />
            <ProjetCompo
                link="/projetRobot"
                title="Automate météorologue"
                description="Un robot en Lego équipé de moteurs contrôlés par un ESP32 connecté à des API météo. Il peut ainsi déplacer ses bras et son bassin, reconnaître l’endroit où il se trouve pour donner précisément la météo, afficher l’heure, la météo et la température ambiante, d’avoir quelques réactions faciales etc..."
                :technos="['/img/Micropython-logo-wide.png','/img/electronique.svg']"
                git="https://github.com/SBuret42/RobKey"
                img="/img/robot.avif"
            />
            <ProjetCompo
                link="/projetFractales"
                title="Explorateur de fractales"
                description="Un script permettant de se déplacer et de zoomer dans une fractale. Il permet d'explorer les fractales de Julia (en modifiant les coordonnées du point c) et celle de Mandelbrot."
                :technos="['/img/python_logo_icon_168886.png']"
                git="https://github.com/SBuret42/Explorateur-de-fractales"
                img="/img/Julia.avif"
            />
        </Main>
        <FooterCompo></FooterCompo>
</template>

<style scoped>
main {
    min-height: 70vh;
    margin-left: 0px;
    display: flex;
    flex-wrap: wrap;
    padding-left: 5%;
    padding-right: 5%;
    justify-content: space-around;
}

p, h1, h2, li {
    color: white;
}

p {
    font-size: 20px;
}

ul {
    list-style: none;
}


</style>
