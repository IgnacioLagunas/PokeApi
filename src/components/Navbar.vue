<template lang="">
  <div>
    <Menubar :model="items" >
         <template #end>
        <h1>Poke-API</h1>
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
          url: "https://pokeapi.co/docs/v2#resource-listspagination-section",
        },
        {
          label: "Pokemones",
          icon: "pi pi-fw pi-pencil",
        },
        {
          label: "Favoritos",
          icon: "pi pi-fw pi-pencil",
        },
      ]);
      return { items };
    },
  };
</script>
<style lang="" >
</style>
