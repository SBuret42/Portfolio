<script setup>
import { ref } from 'vue';
import FooterCompo from '../components/footerCompo.vue';
import NavbarHaut from '../components/navbarHaut.vue';

</script>

<template>
        <NavbarHaut></NavbarHaut>
        <Main>
            <RouterLink to="/projetFractales">
            <div class="projet">
                <h2>Explorateur de fractales</h2>
                <p id="desc">Un script permettant de se déplacer et de zoomer dans une fractale. Il permet d'explorer les fractales de Julia (en modifiant les coordonnées du point c) et celle de Mandelbrot</p>
                <section>
                    <ul>
                        <li><img src="../assets/img/python_logo_icon_168886.png" alt=""></li>
                    </ul>
                </section>
                <p id="link"><a target="_blank" @click.stop href="https://github.com/SBuret42/Explorateur-de-fractales">dépot Git</a></p>
                <img src="../assets/img/Julia.png" alt="">
            </div>
            </RouterLink>
            <RouterLink to="/projetRobot">
            <div class="projet">
                <h2>Automate météorologue</h2>
                <p id="desc">Un robot en Lego équipé de moteurs contrôlés par un ESP32 connecté à des API météo. Il peut ainsi déplacer ses bras et son bassin, reconnaître l’endroit où il se trouve pour donner précisément la météo, afficher l’heure, la météo et la température ambiante, d’avoir quelques réactions faciales etc...</p>
                <section>
                    <ul>
                        <li><img src="../assets/img/Micropython-logo-wide.png" alt=""></li>
                        <li><img src="../assets/img/electronique.svg" alt=""></li>
                    </ul>
                </section>
                <p id="link"><a target="_blank" @click.stop href="https://github.com/SBuret42/RobKey">dépot Git</a></p>
                <img src="../assets/img/robot.jpg" alt="">
            </div>
            </RouterLink>
            <RouterLink to="/projetClassificateur">
            <div class="projet">
                <h2>Classificateur automatique</h2>
                <p id="desc">Un classificateur de dépêche journalistique en Java en groupe de 2. Notre but était de partir de fichiers TXT contenant des dépêches pour trouver des moyens de les classer en 5 catégories.</p>
                <section>
                    <ul>
                        <li><img src="../assets/img/java_logo_icon_169577.png" alt=""></li>
                    </ul>
                </section>
                <p id="link"><a target="_blank" @click.stop href="#">dépot Git</a></p>
                <img src="../assets/img/projetsC.jpg" alt="">
            </div>
            </RouterLink>
            <RouterLink to="/projetSiteInstitutionnel">
            <div class="projet">
                <h2>Site institutionnel</h2>
                <p id="desc">Développement d'un site institutionnel avec un wireframe et une maquette graphique pour finir par un vrai site.</p>
                <section>
                    <ul>
                        <li><img src="../assets/img/html.png" alt=""></li>
                        <li><img src="../assets/img/CSS3_logo.svg" alt=""></li>
                    </ul>
                </section>
                <p id="link"><a target="_blank" @click.stop href="#">dépot Git</a></p>
                <img src="../assets/img/projetsSCap.png" alt="">
            </div>
            </RouterLink>
            <RouterLink to="/projetAnalyseBD">
            <div class="projet">
                <h2>Analyse d'une base de données</h2>
                <p id="desc">Via une base de données publique sur les relevés de la police sur les accidents s’étant déroulés en France entre 2006 et 2023.  Nous avons, en groupe de 2, analysé l'accidentologie des accidents survenus dans le Grand Est chez les jeunes (18-25 ans) conducteurs ou passagers de voitures.</p>
                <section>
                    <ul>
                        <li><img src="../assets/img/Postgresql_elephant.svg.png" alt=""></li>
                        <li><img src="../assets/img/R_logo.svg.png" alt=""></li>
                    </ul>
                </section>
                <p id="link"><a target="_blank" @click.stop href="#">dépot Git</a></p>
                <img src="../assets/img/analyseBD.jpg" alt="">
            </div>
            </RouterLink>
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

.projet {
    background: #00072b;
    background: linear-gradient(43deg, rgba(0, 7, 43, 1) 0%, rgb(39, 0, 53) 100%);
    margin-top: 35px;
    margin-bottom: 35px;
    max-width: 500px;
    min-width: 250px;
    border: solid 5px #350d91;
    border-radius: 15px;
    padding-bottom: 20px;
    height: 85%;
}

.projet > h2 {
    text-align: center;
}

.projet > #desc {
    text-align: justify;
    margin-left: 40px;
    margin-right: 40px;
    min-height: 150px;
}

.projet > ul {
    display: flex;
    list-style: none;
    justify-content: center;
    align-items: center;
}

.projet>section>ul {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 30px;
    margin-top:30px;
    margin-left: -40px;
    list-style: none;
}

.projet > ul > li {
    margin-top: 10px;
}

.projet > section > ul > li > img{
    width: 35px;
    height: 35px;
    object-fit:contain;
}

.projet > #link {
    text-align: center;
}

.projet > p > a {
    color: white;
    text-decoration: none;
    z-index: 100;
}

.projet > p > a:hover {
    text-decoration: none;
    color:#3d0faa;
}

a {
    color: white;
    text-decoration: none;
}

.projet > img {
    margin-left: 9%;
    margin-right: 9%;
    width: 82%;
    height: 200px;
    object-fit: cover;
}
</style>
