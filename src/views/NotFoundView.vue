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
            <RouterLink to="/">Revenir à l'accueil</RouterLink>
        </Main>
        <FooterCompo></FooterCompo>
</template>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 70vh;
}

p, h1, h2, li {
    color: white;
}

p {
    font-size: x-large;
}

h1 {
    font-size: xx-large;
}


</style>
