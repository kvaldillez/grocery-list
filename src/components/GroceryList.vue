
<template>
  <div class="hello container">
    <h1>{{ msg }}</h1>
    <div class="row">
      <div class="col-md-6">
        <h2>Add New Item</h2>
        <form id="form" class="form-inline" v-on:submit.prevent="addGrocery">
          <div class="form-group">
            <label for="groceryTitle">Title:</label>
            <input type="text" id="groceryTitle" class="form-control" v-model="newGrocery.title">
          </div>
          <div class="form-group">
            <label for="groceryQuantity">Quantity:</label>
            <input type="text" id="groceryQuantity" class="form-control" v-model="newGrocery.quantity">
          </div>
          <input type="submit" class="btn btn-primary" value="Add to list">
        </form>
      </div>
      <div class="col-md-6">
        <h2>Current List</h2>
        <ul>
          <li v-for="grocery in groceries">
            {{grocery.title}} - {{grocery.quantity}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyDm0HCT7YEseSSdeOxAQmGD_GVWaPuLIiA',
  authDomain: 'grocery-list-64e5a.firebaseapp.com',
  databaseURL: 'https://grocery-list-64e5a.firebaseio.com',
  storageBucket: 'grocery-list-64e5a.appspot.com',
  messagingSenderId: '1051666625921'
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
  margin: 30px 0;
  font-weight: normal;
}

h2 {
  margin: 0 0 15px;
  font-weight: normal;
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

div[class*="col-"] {
  margin: 0 0 30px;
}
</style>
