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
    background-color:#2b0b75;
    border: solid 3px #350d91;
    border-radius: 5px;
    padding: 10px;
}

.link:hover {
    background-color: #1a0647;
    border: solid 3px #2b0b75;
}

h1 {
    font-size: xx-large;
}


</style>
