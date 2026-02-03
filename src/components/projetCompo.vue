<script setup>

const props = defineProps({
  link: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "Aucune description disponible.",
  },
  technos: {
    type: Array,
    default: () => [],
  },
  git: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  }
});

</script>

<template>
    <RouterLink :to="link">
        <div class="projet">
            <h2>{{ title }}</h2>
            <p id="desc">{{ description }}</p>
            <section>
                <ul>                    
                    <li v-for="techno in technos" :key="techno">
                        <img :src="techno" alt="">
                    </li>
                </ul>
            </section>
            <p id="link" v-if="git!='#'"><a target="_blank" @click.stop :href="git">dépot Git</a></p>
            <p id="link" v-else><br></p>
            <img :src=img alt="">
        </div>
    </RouterLink>
</template>

<style scoped>

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