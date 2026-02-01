<script setup>
import FooterCompo from '../components/footerCompo.vue';
import NavbarHaut from '../components/navbarHaut.vue';


</script>

<template>
    <NavbarHaut></NavbarHaut>
    <main>
        <img src="../assets/img/projetsC.jpg" alt="">
            <div id="entete">
                <article>
                    <h3>Projet réalisé avec :</h3>
                    <ul>
                        <li>Grataloup Tanguy</li>
                    </ul>
                </article>
                <section>
                    <ul>
                        <li><img src="../assets/img/java_logo_icon_169577.png" alt=""></li>
                    </ul>
                    <a href="#">Lien vers le dépot Git du projet</a>
                </section>
            </div>
        <div class="content">
            <div class="desc">
                <section>
                    <h2>C'est quoi ce projet ?</h2>
                    <p>
                        Durant le premier semestre de ma première année j’ai pu réaliser un classificateur de dépêche journalistique en Java en groupe de 2. Notre but était de partir de fichiers TXT contenant des dépêches pour trouver des moyens de les classer en 5 catégories : sciences, politique, sport, économie et culture. Nous avons ainsi réalisé 3 algorithmes.
                    </p>
                </section>
                <img src="../assets/img/placeholder.png" alt="" class="desc-img">
            </div>
            <div class="desc">
                <img src="../assets/img/placeholder.png" alt="" class="desc-img">
                <section>
                    <h2>Algorithme par lexique manuel</h2>
                    <p>
                        C’était le plus simple à faire : premièrement nous avons récupéré quelques mots apparaissant surtout dans telle ou telle catégorie. Ainsi, quand ces mots apparaissent dans la dépêche que l’algorithme doit trier, il donne des points à la catégorie correspondante. Enfin l’algorithme sélectionne la catégorie qui a le plus de points et catégorise la dépêche, puis passe à la suivante. Cette technique est assez rapide mais peu fiable, seulement 60% des dépêches étaient correctement triées, car les lexiques sont trop limités.
                    </p>
                </section>
            </div>
            <div class="desc">
                <section>
                    <h2>Algorithme par lexique automatique trié</h2>
                    <p>
                        Ensuite, nous avons grandement amélioré le premier algorithme en faisant en sorte que le lexique soit créé par l’algorithme en lui-même. L’algorithme stocke tous les mots de toutes les dépêches dans tous les lexiques (en enlevant les mots outils comme le, la, un, comme etc.), attribuer des points pour chaque fois qu'un mot apparaît dans une dépêche de la catégorie du lexique mais en enlève un pour toutes les fois où il apparaît dans une dépêche d’une autre catégorie. Puis l’algorithme fonctionne de la même manière que le précédent.
                    </p>
                    <p>
                        Cette méthode est très fiable (95,6% des dépêches sont correctement classées), mais lente à cause de la taille des lexiques. Nous avons donc amélioré ce processus en triant les lexiques via un tri à fusion (le plus rapide que nous sachions programmer) afin d’utiliser des recherches plus rapides que les séquentielles, comme la dichotomie.
                    </p>
                </section>
                <img src="../assets/img/placeholder.png" alt="" class="desc-img">
            </div>
            <div class="desc">
                <img src="../assets/img/shémaKNN.png" alt="" class="desc-img">
                <section>
                    <h2>Algorithme par KNN (K plus proches voisins)</h2>
                    <p>
                        Ce type d’algorithme est assez simple à faire mais complexe à expliquer. L’algorithme se base sur cette affirmation : “Si 5 de mes 6 voisins sont bleus, je suis statistiquement bleu.” Ainsi, KNN se base sur ses voisins donc nous devons définir ce qu’est un voisin en définissant ce qu’est la distance dans notre algorithme.
                    </p>                    
                    <p>
                        Prennons l'exemple de l'image à gauche, si la distance est de 1 (le cercle plein), alors les voisins les plus proches sont ceux dans ce cercle : 2 triangles et 1 carré. Ainsi, le disque au centre est un triangle selon KNN. Mais si la distance est de 2 (le cercle en pointillé), alors il y a 3 carrés pour 2 triangles, ainsi le disque est un carré.
                    </p>
                    <p>
                        La distance est donc une valeur très importante. Des chercheurs ont passé des années à chercher les meilleures distances, mais nos professeurs nous ont demandé de calculer la distance via le nombre de mots communs.
                    </p>
                    <p>
                       Ainsi l’algorithme compare les mots de la dépêche à classer avec tous les mots (sauf les mots outils) des dépêches de sa base de données. Il attribut ainsi un score à chaque catégorie. Ensuite, il sélectionne les 5 dépêches de la base de données avec les plus grands scores de mots communs et choisit la catégorie qui apparaît le plus parmi elles. Cet algorithme peut être très puissant, mais notre manière de calculer le rend très faible. Il a un taux de réussite (65%) équivalent au lexique manuel et est le plus lent. Pour l'améliorer, il faudrait utiliser de vraies formules de calcul de distances.
                    </p>
                </section>
            </div>
            <div class="desc">
                <section>
                    <h2>Conclusion</h2>
                    <p>
                        Durant ce projet j’ai programmé l’algorithme KNN, une bonne partie de l’algorithme par lexique trié et son amélioration par le tri.
                    </p>
                </section>
                <img src="../assets/img/placeholder.png" alt="" class="desc-img">
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
  height: 460px;
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