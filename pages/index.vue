<template>
  <div>
    <h1> {{ Messges }} </h1>
    <Product :posts="loadedPost"/>
  </div>
</template>
<script>
import Product from "@/components/Product/Product";
import data from '/Api/data.json';

export default {
  components: {
    Product,
  },
  data() {
    return {
      Messges: '',
      loadedPost: []
    }
  },

  asyncData(context , callback) {
     return{
       loadedPost : context.$store.state.loadedPosts
     }
  }




}
</script>
