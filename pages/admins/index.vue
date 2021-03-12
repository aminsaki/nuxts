<template>
    <div class="admin">
      <h4>Create New Post</h4>
      <b-nav-item>  <nuxt-link to='admins/new-post' class="btn btn-success">create</nuxt-link>  </b-nav-item>

      <h3>Blog</h3> <br><br>
      <product/>
    </div>
</template>
<script>
import Product from "@/components/Product/Product";
 export  default {
   layout : 'admin',
   components: {
     Product,
   }

 }
</script>


