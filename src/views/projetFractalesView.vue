<script setup>
import FooterCompo from '../components/footerCompo.vue';
import NavbarHaut from '../components/navbarHaut.vue';


</script>

<template>
    <NavbarHaut></NavbarHaut>
    <main>
        <img src="../assets/img/projetExploJulia.png" alt="">
        <div id="entete">
            <article>
                    <h3>Projet réalisé seul sur mon temps libre</h3>
            </article>
            <section>
                <ul>
                    <li><img src="../assets/img/python_logo_icon_168886.png" alt=""></li>
                    <li><img src="../assets/img/java_logo_icon_169577.png" alt=""></li>
                </ul>
                <p>lien vers les projets : <a href="https://github.com/SBuret42/Explorateur-de-fractales">python</a> et <a href="github.com/SBuret42/fractal-explorer-Java">Java</a></p>
            </section>
        </div>
        <div class="content">
            <div class="desc">
                <section>
                    <h2>C'est quoi ce projet ?</h2>
                    <p>
                        Ce projet est un logiciel d'exploration de fractales fait entièrement en Python. Ce logiciel permet d'explorer soit la tracté de Mandelbrot soit une fractale de l'ensemble de Julia en permettant de choisir la valeur de c. Le logiciel permet également de sélectionner la couleur de la fractale parmi tout une palette.
                    </p>
                </section>
            </div>
            <div class="desc">
                <img src="../assets/img/placeholder.png" alt="" class="desc-img">
                <section>
                    <h2>Optimisation</h2>
                    <p>
                        Pour faire mon explorateur, je veux générer une nouvelle fractale à chaque zoom, dézoome et déplacement. Ainsi, il me faut un script qui génère des images assez vite pour que l'exploration soit fluide. Pour accélérer le processus j'ai utilisé 2 bibliothèques, d'abord PIL/Pillow qui me permet de générer des PNG beaucoup plus vite que la librairie Kandinsky que j'utilisais avant, et Numpy une librairie très utilisée pour le calcul matriciel. Ainsi j'obtiens une image de qualité suffisante en quelques dizaines de centièmes de seconde.
                    </p>
                </section>
            </div>
            <div class="desc">
                <section>
                  <h2>Polir le logiciel</h2>
                  <p>
                        Ensuite j'ai tenté de rendre le logiciel plus "user friendly". Pour cela j'ai utilisé la bibliothèque Tkinter pour générer la fenêtre de mon logiciel, j'ai ajouté les touches pour le déplacement et le zoom/dézoom, la possibilité de choisir la fractale, c, et les couleurs. J'ai également ajouté une manière de prévisualiser la fractale dans le menu et une touche pour prendre des "captures d'écran" qui en réalité génèrent une nouvelle image avec les mêmes valeurs mais de meilleure qualité. Et finalement j'ai ajouté une page de tutoriel des touches.
                  </p>
                </section>
                <img src="../assets/img/placeholder.png" alt="" class="desc-img">
            </div>
            <div class="desc">
                <img src="../assets/img/placeholder.png" alt="" class="desc-img">
                <section>
                    <h2>Conclusion</h2>
                    <p>
                        Durant ce projet j’ai pu utiliser l'ensemble de mes compétences en Python pour faire mon premier gros projet. J'ai ensuite refait ce même programme en Java pour tester mes capacités en utilisant JavaFX pour les interfaces. La version Java est un peu moins fournie en fonctionnalités mais permet d'explorer les mêmes fractales de manière bien plus fluide.
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