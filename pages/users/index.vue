<template>
  <div>

    <div class="container">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="form-group col-md-5">
          <h1 class="text-center text-danger users" style="margin-top: 200px">users</h1>
          <input type="text" name="id" v-model="id" class="col-md-12">
          <input type="submit" @click="methodSendId(index)" class="col-md-3 btn btn-danger" value="load User">

          <nuxt-link to="users/1" class="btn btn-success"> users for id</nuxt-link>

        </div>
        <div class="col-md-3"></div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  middleware: 'log',
  layout:'admin',
 date(){
   return{
      id:'',
   }
 },
  methods:{
    methodSendId(index){
      this.$router.push(`/users/${this.id}`);
    }
  }

}
</script>


