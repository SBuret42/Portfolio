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
                link="/projetFractales"
                title="Explorateur de fractales"
                description="Un script permettant de se déplacer et de zoomer dans une fractale. Il permet d'explorer les fractales de Julia (en modifiant les coordonnées du point c) et celle de Mandelbrot."
                :technos="['/img/python_logo_icon_168886.png']"
                git="https://github.com/SBuret42/Explorateur-de-fractales"
                img="/img/Julia.png"
            />
            <ProjetCompo
                link="/projetRobot"
                title="Automate météorologue"
                description="Un robot en Lego équipé de moteurs contrôlés par un ESP32 connecté à des API météo. Il peut ainsi déplacer ses bras et son bassin, reconnaître l’endroit où il se trouve pour donner précisément la météo, afficher l’heure, la météo et la température ambiante, d’avoir quelques réactions faciales etc..."
                :technos="['/img/Micropython-logo-wide.png','/img/electronique.svg']"
                git="https://github.com/SBuret42/RobKey"
                img="/img/robot.jpg"
            />
            <ProjetCompo
                link="/projetClassificateur"
                title="Classificateur automatique"
                description="Un classificateur de dépêche journalistique en Java en groupe de 2. Notre but était de partir de fichiers TXT contenant des dépêches pour trouver des moyens de les classer en 5 catégories."
                :technos="['/img/java_logo_icon_169577.png']"
                git="#"
                img="/img/projetsC.jpg"
            />
            <ProjetCompo
                link="/projetSiteInstitutionnel"
                title="Site institutionnel"
                description="Développement d'un site institutionnel avec un wireframe et une maquette graphique pour finir par un vrai site."
                :technos="['/img/html.png','/img/CSS3_logo.svg']"
                git="#"
                img="/img/projetsSCap.png"
            />
            <ProjetCompo
                link="/projetAnalyseBD"
                title="Analyse d'une base de données"
                description="Via une base de données publique sur les relevés de la police sur les accidents s’étant déroulés en France entre 2006 et 2023.  Nous avons, en groupe de 2, analysé l'accidentologie des accidents survenus dans le Grand Est chez les jeunes (18-25 ans) conducteurs ou passagers de voitures."
                :technos="['/img/Postgresql_elephant.svg.png','/img/R_logo.svg.png']"
                git="#"
                img="/img/analyseBD.jpg"
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
