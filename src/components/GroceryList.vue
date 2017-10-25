<template>
  <div class="hello container">
    <h1>{{ msg }}</h1>
    <div class="row">
      <div class="col-md-6">
        <h2>Add New Item</h2>
        <input type="text" value="" name="title" placeholder="Enter item title here..." required />
        <input type="number" value="1" name="quantity" required />
        <button>Add to list</button>
      </div>
      <div class="col-md-6">
        <h2>Current List</h2>
        <ul>
          <li>To be populated by database.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GroceryList',
  data () {
    return {
      msg: 'Create Your Grocery List Below'
    }
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
