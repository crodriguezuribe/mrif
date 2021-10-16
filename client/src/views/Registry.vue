<template>
  <div class="registry" id="#login">
    <h3>Registro de usuarios</h3>
    <hr />
    <div class="mt-3" style="width: 600px;">
    <form @submit.prevent="addPerson()">
      <h5>Agregar una nueva Persona</h5>
      <input type="text" class="form-control my-2" placeholder="Nombre">
      <input type="text" class="form-control my-2" placeholder="Apellido">
      <input type="number" class="form-control my-2" placeholder="Edad">
      <b-button class="btn-success my-2" type="submit">Añadir</b-button>

    </form>
    </div>
    <!-- <b-table :items="items" :busy="isBusy" class="mt-3" outlined>


      <template #table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
    </b-table> -->
    <!-- DOS TABLAS -->
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Descripción</th>
      <th scope="col">Fecha</th>
      <th scope="col">Acciones</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item, index) in notas" :key="index">
      <th scope="row">{{item._id}}</th>
      <td>{{item.nombre}}</td>
      <td>{{item.descripcion}}</td>
      <td>{{item.date}}</td>
      <td>
        <b-button class="btn-warning btn-sm mx-2" @click="activarEdicion(item._id)">Actualizar</b-button>
        <b-button class="btn-danger btn-sm mx-2" @click="eliminarNota(item._id)">Eliminar</b-button>
      </td>
    </tr>
  </tbody>
</table>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        isBusy: false,
        items: [
          { first_name: 'Dickerson', last_name: 'MacDonald', age: 40 },
          { first_name: 'Larsen', last_name: 'Shaw', age: 21 },
          { first_name: 'Geneva', last_name: 'Wilson', age: 89 },
          { first_name: 'Dickerson', last_name: 'MacDonald', age: 40 },
          { first_name: 'Larsen', last_name: 'Shaw', age: 21 },
          { first_name: 'Geneva', last_name: 'Wilson', age: 89 },
          { first_name: 'Jami', last_name: 'Carney', age: 38 }
        ],
        notas: [],
      }
    },

    created() {
      this.listPersons();
    },
    
    methods: {
      listPersons(){
        this.axios.get('/person')
        .then(res => {
          console.log(this.items);
          this.items=res.data;
          !this.isBusy
        })
        .catch(e => {
          console.log(e.response)
        })
      },
      addPerson(){

      },
      toggleBusy() {
        this.isBusy = !this.isBusy
      }
    },
  }
</script>