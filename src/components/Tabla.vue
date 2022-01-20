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
                   <button class="option_btn  eliminate_btn" @click="removePokemon(slotProps.data)"><i class="fas fa-times"></i></button>
  
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
                       <button class="option_btn add_btn" @click="addFavorite(slotProps.data)"><i class="far fa-star"></i></button>
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

        let removePokemon = (pokemon)=>{
          store.dispatch("removePokemon", pokemon)
        }
        
        
      return {test, addFavorite, removePokemon};
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
       background-color: transparent;
        border: none;
        font-size: 1.2em;
        color: gray;
        
    }
    .eliminate_btn:hover{
        color: red;
    }
    .add_btn:hover{
        color: yellow
    }
    Column{
        text-align: center !important;
    }
</style>
