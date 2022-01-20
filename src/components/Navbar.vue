<template lang="">
  <div>
    <Menubar :model="items" >
         <template #end>
      <h1 class="navbar_logo" @click="$router.push('/')">API-Pokémon</h1>
    </template>
  
     </Menubar>
  </div>
</template>
<script>
  import Menubar from "primevue/menubar";
  import { ref } from "vue";

  export default {
    components: {
      Menubar,
    },
    setup() {

      let items = ref([
        {
          label: "Inicio",
          icon: "pi pi-fw pi-file",
          to: "/"

        },
        {
          label: "Pokemones",
          icon: "pi pi-fw pi-pencil",
          to: "/pokemones"

        },
        {
          label: "Favoritos",
          icon: "pi pi-fw pi-pencil",
          to: "/favoritos"
        },
      ]);
      return { items };
    },
  };
</script>
<style scoped >
  .navbar_logo{
    font-size: 1.3em;
    margin-right: 2em;
    cursor: pointer;
  }
  .navbar_logo:hover{
    color: white;
  }
</style>
