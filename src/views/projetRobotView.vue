<script setup>
import FooterCompo from '../components/footerCompo.vue';
import NavbarHaut from '../components/navbarHaut.vue';


</script>

<template>
    <NavbarHaut></NavbarHaut>
    <main>
    <img src="/img/projAutoMeteoBan.avif" alt="">
        <div id="entete">
            <article>
                    <h3>Projet réalisé avec :</h3>
                    <ul>
                        <li>Sanchez Thomas</li>
                    </ul>
            </article>
            <section>
                <ul>
                    <li><img src="/img/Micropython-logo-wide.png" alt=""></li>
                    <li><img src="/img/electronique.svg" alt=""></li>
                </ul>
                <a href="https://github.com/SBuret42/RobKey">Lien vers le dépot Git du projet</a>
            </section>
        </div>
        <div class="content">
            <div class="desc">
                <section>
                    <h2>C'est quoi ce projet ?</h2>
                    <p>
                        Ce projet est un robot piloté par un ESP32. Il indique sur son écran l'heure, la météo actuelle, la température de la pièce, où il est et la température moyenne de la journée d'aujourd'hui et de demain. Il peut également danser en bougeant ses bras et son bassin.
                    </p>
                </section>
                <img id="imgRK" src="/img/robkey.avif" alt="" class="desc-img">
            </div>
            <div class="desc">
                <img src="/img/placeholder.png" alt="" class="desc-img">
                <section >
                    <h2>Construction</h2>
                    <p>
                        Ce robot est entièrement fait en Lego. Sa base vient d'un véhicule Lego technique d'autochenille. Il est équipé de 3 servomoteurs, 1 capteur de température et 2 boutons pour les différentes fonctions, qui ont été implémentés car les boutons de l'ESP n'étaient pas suffisants.
                    </p>
                </section>
            </div>
            <div class="desc">
                <section>
                    <h2>Programation du robot</h2>
                    <p>
                        D'abord, nous avons codé les briques élémentaires de notre micrologiciel : une classe pour les 4 boutons qui fait une liste des boutons et des PIN rattachés, une classe qui récupère les informations du capteur de température, et les classes gérant les servomoteurs (elles trouvées sur internet).
                    </p>
                </section>
                <img src="/img/placeholder.png" alt="" class="desc-img">
            </div>
            <div class="desc">
                <img src="/img/placeholder.png" alt="" class="desc-img">
                <section>
                    <h2>La partie sans-fils</h2>
                    <p>
                        Ce robot est également capable de se connecter à un réseau Wi-Fi pour savoir où il se trouve. Pour faire cela, le robot a une fonction lui permettant de se connecter à un wifi à partir d'un ssid et du mot de passe, une autre fonction pour se géolocaliser et une autre qui utilise une API pour connaître la météo de là où il est.</p>
                </section>
            </div>
            <div class="desc">
                <section>
                    <h2>Conclusion</h2>
                    <p>
                        Ainsi, durant ce projet j'ai pu designer et construire entièrement le robot, j'ai également pu programmer toute la partie logicielle liée aux mouvements du robot.
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
    gap: 30px;
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
        justify-content: space-around;
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