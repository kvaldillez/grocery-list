
<template>
  <div class="hello container">
    <h1>{{ msg }}</h1>
    <h2>Add New Item</h2>
    <form id="form" class="form-inline row" v-on:submit.prevent="addGrocery">
      <div class="col-md-6 mb-3">
        <input type="text" class="form-control" id="groceryTitle" placeholder="Enter grocery title" v-model="newGrocery.title" required>
        <div class="invalid-feedback">
          Please provide a title to the grocery you wish to add.
        </div>
      </div>
      <div class="col-md-3 mb-3">
        <input type="number" class="form-control" id="groceryQuantity" placeholder="Enter quantity" v-model="newGrocery.quantity" required>
        <div class="invalid-feedback">
          Please enter a quantity.
        </div>
      </div>
      <div class="col-md-3 mb-3">
        <input type="submit" class="btn btn-primary" value="Add to list">
      </div>
    </form>

    <h2>Current List</h2>
    <div class="row table-bordered">
      <table class="table thead-light">
        <thead class="thead-light">
          <tr>
            <th scope="col">Grocery Title</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="grocery in groceries">
            <td>{{grocery.title}}</td>
            <td>{{grocery.quantity}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Firebase from 'firebase'

let config = {
  apiKey: 'ENTER_API_KEY_HERE',
  authDomain: 'ENTER_AUTH_DOMAIN_HERE',
  databaseURL: 'ENTER_DB_URL_HERE',
  storageBucket: 'ENTER_STORAGE_BUCKET_HERE',
  messagingSenderId: 'ENTER_SENDER_ID_HERE'
}

let app = Firebase.initializeApp(config)
let db = app.database()
let groceryListRef = db.ref('grocery_list')

export default {
  name: 'GroceryList',
  data () {
    return {
      msg: 'Create Your Grocery List Below',
      newGrocery: {
        title: '',
        quantity: ''
      }
    }
  },
  methods: {
    addGrocery: function () {
      groceryListRef.push(this.newGrocery)
      this.newGrocery.title = ''
      this.newGrocery.quantity = ''
    }
  },
  firebase: {
    groceries: groceryListRef
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 30px 0 15px;
  font-weight: normal;
}

h2 {
  margin: 30px 0 20px;
  font-size: 1.4em;
  text-align: center;
  font-weight: bold;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

table {
  margin: 0;
}

.form-control, .btn-primary {
  width: 100%;
}

div[class*="col-"] {
  margin: 0 0 30px;
}
</style>
