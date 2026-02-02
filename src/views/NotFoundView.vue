<script setup>
import { ref } from 'vue';
import FooterCompo from '../components/footerCompo.vue';
import NavbarHaut from '../components/navbarHaut.vue';
import ProjetCompo from '../components/projetCompo.vue';

</script>

<template>
        <NavbarHaut></NavbarHaut>
        <Main>
            <h1>Erreur 404</h1>
            <p>La ressource que vous chercher soit n'existe pas soit est entrain d'être rédigé.</p>
            <RouterLink to="/"><button class="link">Revenir à l'accueil</button></RouterLink>
        </Main>
        <FooterCompo></FooterCompo>
</template>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 71vh;
}

p, h1, .link {
    color: white;
}

p, .link {
    font-size: x-large;
}

.link {
    background: linear-gradient(43deg, rgba(0, 7, 43, 1) 0%, rgb(39, 0, 53) 100%);
    border: solid 3px #350d91;
    border-radius: 15px;
}

.link:hover {
    background: linear-gradient(43deg, rgb(0, 5, 31) 0%, rgb(30, 0, 41) 100%);
    border: solid 3px #2b0b75;
}

h1 {
    font-size: xx-large;
}


</style>
