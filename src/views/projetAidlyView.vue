<script setup>
import FooterCompo from '../components/footerCompo.vue';
import NavbarHaut from '../components/navbarHaut.vue';


</script>

<template>
    <NavbarHaut></NavbarHaut>
    <main>
    <img src="/img/AidlyBanner.jpg" alt="">
        <div id="entete">
            <article>
                    <h3>Projet réalisé avec :</h3>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/l%C3%A9lio-michoulier-dyon-a80689209/">Lélio Michoullier-Dyons</a></li>
                        <li><a href="https://www.linkedin.com/in/tanguy-grataloup/">Tanguy Grataloup</a></li>
                        <li><a href="https://www.linkedin.com/in/hashem-belal-921369206/">Hashem Belal</a></li>
                        <li>Mattis Flood</li>
                        <li>Lucas Arrod</li>
                        <li>Antoine Maurin</li>
                    </ul>
            </article>
            <section>
                <ul>
                    <li><img src="/img/vue-logo.png" alt=""></li>
                    <li><img src="/img/html.png" alt=""></li>
                    <li><img src="/img/CSS3_logo.svg" alt=""></li>
                    <li><img src="/img/php-logo.png" alt=""></li>
                </ul>
                <a href="https://github.com/Theswarmlord26/Aidly">Lien vers le dépot Git du projet</a>
            </section>
        </div>
        <div class="content">
            <div class="desc">
                <section>
                    <h2>C'est quoi ce projet ?</h2>
                    <p>
                        Projet de début de 2ème année de BUT, développé en 3 semaines, <a href="https://aidly.nfteam.ovh/">Aidly</a> est une application web visant à aider les aidants de personnes en perte d'autonomie. C'est une plateforme qui permet d'aider ces personnes dans l'organisation de leurs foyers d'aide.
                    </p>
                </section>
                <img id="imgRK" src="/img/Aidly.png" alt="" class="desc-img">
            </div>
            <div class="desc">
                <img src="/img/placeholder.png" alt="" class="desc-img">
                <section >
                    <h2>Les fonctionnalités</h2>
                    <p>
                        <a href="https://aidly.nfteam.ovh/">Aidly</a> propose de gérer plusieurs foyers d'aide, d'y inviter d'autres aidants ou l'aidé, de gérer un emploi du temps, une liste de tâches à faire, un coffre-fort numérique où déposer des fichiers, une messagerie d'où vous pouvez créer des fils de discussion et une carte montrant si un lieu est accessible pour les personnes à mobilité réduite, et qui permet également d'enregistrer des lieux importants pour le foyer. Et surtout toutes ces fonctionnalités sont partagées au reste du foyer.
                    </p>
                </section>
            </div>
            <div class="desc">
                <section>
                    <h2>L'organisation</h2>
                    <p>
                        Dans le groupe, nous étions 5 du parcours développement d'application et 2 du parcours administration de réseau, ainsi le groupe s'est réparti suivant le parcours même si certains d'un parcours ont aidé ceux de l'autre et inversement. De mon côté, je me suis occupé de l'interface, j'ai réalisé en grande partie les maquettes et le développement du Front end de l'application.
                    </p>
                </section>
                <img src="/img/Aidlyinterface.png" alt="" class="desc-img">
            </div>
            <div class="desc">
                <img src="/img/AidlyGroupe.avif" alt="" class="desc-img">
                <section>
                    <h2>Conclusion</h2>
                    <p>
                        Ainsi, durant ce projet j'ai pu vraiment tester de nouvelles choses au niveau des interfaces, et même si je ne suis pas satisfait de l'intégralité du site, il reste des problèmes. J'ai énormément aimé ce projet, je me suis beaucoup amusé pendant ces 3 semaines de programmation intensive avec mes amis.
                    </p>
                    <p>
                        Aidly est toujours en ligne vous pouvez l'essayer en suivant ce <a href="https://aidly.nfteam.ovh/">lien</a> !
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