<template lang="">
  <div>
    <DataTable
      :value="$store.state.currentPokemons"
      :scrollable="true"
      responsiveLayout="scroll"
    >
    <template #empty>
                <div class="wrapper">No has agregado ningun pokémon.</div>
    </template>
    <Column>
            <template #body="slotProps" >
                   <button class="option_btn  eliminate_btn" @click="test(slotProps.data)">X</button>
  
            </template>
        </Column>
      <Column field="name" header="Nombre"> </Column>
      <Column field="height" header="Alto"></Column>
      <Column field="weight" header="Peso"></Column>
      <Column field="sprite" header="Sprite">
      <template #body="slotProps">
                    <img :src="slotProps.data.sprite"  class="product-image" />
                </template></Column>
        <Column >
               
                <template #body="slotProps">
                <div class="wrapper">
                       <button class="option_btn add_btn" @click="addFavorite(slotProps.data)">E</button>
                               </div>
                </template>
          
        </Column>

    </DataTable>

  </div>
</template>
<script>
  import DataTable from "primevue/datatable";
  import Column from "primevue/column";
    import { useStore } from "vuex";

  export default {
    components: {
      DataTable,
      Column,
    },

    setup() {
        let store = useStore()
        let test = (pokemon)=>{
            console.log(pokemon.name)
        }
        let addFavorite = (pokemon)=>{store.dispatch("addFavorite", pokemon)}
        
      return {test, addFavorite};
    },
  };
</script>
<style >
    .wrapper{
        width: 100%;
    
        display: flex;
        justify-content: center;
    }
    .option_btn{
        cursor: pointer;
        border-radius: 50%;
        border: none;
        padding: 0.3em 0.6em;
    }
    .eliminate_btn{
        background-color: red;
    }
    .add_btn{
        background-color: cyan;
    }
    Column{
        text-align: center !important;
    }
</style>
