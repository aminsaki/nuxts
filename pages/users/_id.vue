<template>
  <div>
     <div class="container">
       <br><br><br><br>
          <div class="card-title text-danger text-center font-weight-bold " >
            <h3>
             {{id}} این کاربر شماره هست
            </h3>
          </div>
     </div>
  </div>
</template>

<script>
export default {

  data(){
    return {
      id:this.$route.params.id
    }

  },
  validate(data) {


    return /^\d+$/.test(data.params.id);

  }


}


</script>

<style scoped>

</style>
