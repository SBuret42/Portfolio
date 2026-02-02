<script setup>
import FooterCompo from '../components/footerCompo.vue';
import NavbarHaut from '../components/navbarHaut.vue';


</script>

<template>
    <NavbarHaut></NavbarHaut>
    <main>
        <img src="/img/siteCapBan.avif" alt="">
        <div id="entete">
            <article>
                <h3>Projet réalisé avec :</h3>
                <ul>
                    <li>Grataloup Tanguy</li>
                    <li>Llabres Raphaël</li>
                </ul>
            </article>
            <section>
                <ul>
                    <li><img src="/img/html.png" alt=""></li>
                    <li><img src="/img/CSS3_logo.svg" alt=""></li>
                </ul>
                <a href="#">Lien vers le dépot Git du projet</a>
            </section>
        </div>
        <div class="content">
            <div class="desc">
                <section>
                    <h2>C'est quoi ce projet ?</h2>
                    <p>
                        Durant le premier semestre de ma première année à l’IUT, j’ai dû réaliser en groupe un site institutionnel. Depuis la demande client par un wireframe et une maquette graphique pour finir par un vrai site. Nous devions présenter l’entreprise par ses valeurs, son engagement écologique et aussi  sur quoi et avec qui ils travaillent. Le site a été réalisé en HTML/CSS. Le site est structuré en 5 pages.
                    </p>
                </section>  
            </div>
            <div class="desc">
                <img src="/img/siteCapHP.avif" alt="" class="desc-img">
                <section>
                    <h2>La page d'accueil</h2>
                    <p>
                        D'abord une grande page d'accueil présentant les valeurs les plus importantes de l’entreprise puis présente les autres pages avec des liens vers eux
                    </p>
                </section>
                
            </div>
            <div class="desc" >
                <section>
                    <h2>Les secteurs d'activités</h2>
                    <p>
                        Ensuite, une page décrivant certains secteurs d'activités de l'entreprise.
                    </p>
                    <p>
                        Cette page est composée d'articles parlant des différents secteurs avec une description du secteur d'activité, et ce que fait l'entreprise dans ce secteur. L'article présente aussi les partenaires en lien avec ce secteur et un article directement écrit par l'entreprise sur l'un de leurs projets. L'article présente également la ou les filiales de l'entreprise travaillant dans ce secteur.
                    </p>
                </section>
                <img src="/img/siteCapSA.avif" alt="" class="desc-img">
            </div>
            <div class="desc">
                <img  src="/img/siteCapS.avif" alt="" class="desc-img">
                <section>
                    <h2>Les services</h2>
                    <p>
                        La page des services présente les différents services que l'entreprise propose, que ce soit en B to B ou B to C.
                    </p>
                    <p>
                        La page se présente également sous forme d'articles avec un descriptif du service et des liens vers différents articles et vidéos de l'entreprise présentant leurs solutions.
                    </p>
                </section>
                
            </div>
            <div class="desc">
                <section>
                    <h2>Les clients</h2>
                    <p>
                        La page des clients montre des exemples des plus "gros" clients de l'entreprise.
                    </p>
                    <p>
                        Cette page est composée d'articles parlant des différents "gros" clients avec une description de ce que fait l'entreprise pour ces clients, les solutions, les services proposés. On y trouve aussi des liens vers d'autres articles parlant de ces projets et un lien menant vers la filiale s'occupant de ce client.
                    </p>
                </section>
                <img src="/img/siteCapC.avif" alt="" class="desc-img">
            </div>
            <div class="desc">
                <img  src="/img/siteCapFC.avif" alt="" class="desc-img">
                <section>
                    <h2>Le formulaire de contact</h2>
                    <p>
                        La page de contact propose aux élèves d'envoyer un message à l'entreprise en vue d'un stage.
                    </p>
                    <p>
                        Ici les élèves peuvent entrer leurs informations : nom, prénom, email, numéro de téléphone, une lettre de motivation et envoyer leur CV. Le formulaire n'est pas réellement fonctionnel car, tout d'abord, le site n'est pas un site officiel de l'entreprise et aussi car à ce moment de mes études je n'avais pas encore commencé de cours pouvant m'expliquer comment faire.
                    </p>
                </section>
                
            </div>
            <div class="desc">
                <section>
                    <h2>Conclusion</h2>
                    <p>
                        De mon côté j’ai réalisé la barre de navigation du site, le formulaire de contact et la page présentant les secteurs d’activité. J’ai aussi pu trouver une bonne manière de travailler avec mon groupe en séparant correctement le travail tout en gardant des bouts de codes créés par chacun qui se fusionneraient de manière simple. Chacun a donc fait l’HTML de ses pages et le CSS lié.
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
  min-height: 400px;
  height: max-content;
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