<script setup>
import FooterCompo from '../components/footerCompo.vue';
import NavbarHaut from '../components/navbarHaut.vue';


</script>

<template>
    <NavbarHaut></NavbarHaut>
    <main>
        <img src="/img/projBDban.jpg" alt="">
            <div id="entete">
                <article>
                    <h3>Projet réalisé avec :</h3>
                    <ul>
                        <li>Michoulier-Dyon Lelio</li>
                    </ul>
                </article>
                <section>
                    <ul>
                        <li><img src="/img/Postgresql_elephant.svg.png" alt=""></li>
                        <li><img src="/img/R_logo.svg.png" alt=""></li>
                    </ul>
                    <a href="#">Lien vers le dépot du projet</a>
                </section>
            </div>
        <div class="content">
            <div class="desc">
                <section>
                    <h2>C'est quoi ce projet ?</h2>
                    <p>
                       Durant ce projet, nous avons dû, en groupes de 2, utiliser une base de données publique sur les relevés de la police concernant les accidents s’étant déroulés en France entre 2006 et 2023.  Nous avions comme sujet l’analyse accidentologique des accidents survenus dans le Grand Est chez les jeunes (18-25 ans) conducteurs ou passagers de voitures.
                    </p>
                </section>
                <img src="/img/placeholder.png" alt="" class="desc-img">
            </div>
            <div class="desc">
                <img src="/img/placeholder.png" alt="" class="desc-img">
                <section>
                    <h2>Nettoyer la base de données</h2>
                    <p>
                        D’abord, nous avons nettoyé la base de données en ne gardant que les accidents qui nous intéressaient. Puis nous les avons regroupés en 4 tables.  Les différents usagers impliqués dans les accidents, le lieu de l’accident, les véhicules impliqués et les caractéristiques globales de l’accident.
                    </p>
                </section>
            </div>
            <div class="desc">
                <section>
                    <h2>Rédiger un document d’analyse de nos résultats</h2>
                    <p>Nous avons pu ensuite créer un PDF via le langage R qui réalise l’étude en elle-même. Le document regroupe 6 graphiques et tableaux montrant l’implication des jeunes dans les accidents routiers, sont-ils plus souvent passagers ou combien d’accidents impliquent des jeunes au fil des ans, etc.</p>
                </section>
                <img src="/img/placeholder.png" alt="" class="desc-img">
            </div>
            <div class="desc">
                <img src="/img/placeholder.png" alt="" class="desc-img">
                <section>
                    <h2>Conclusion</h2>
                    <p>
                        Durant ce projet j’ai pu toucher à tout, j’ai donc réalisé une bonne partie du SQL et puis du R.
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

#entete > article > ul > li {
    color: white;
}

#entete > section {
    color: white;
    width: 20%;
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
        width: 60%;
        margin-bottom: 30px;
    }

    #entete > article > h3 {
        margin-left: 20px;
    }
}

</style>