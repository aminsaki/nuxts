<template>
  <div class="Login">
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4 form-login">
        <h4>فرم ورود</h4>
        <div class="form-group">
          <label> ایمیل</label>
          <div class="form-group">
            <input type="text" name="email" class="form-control" v-model="username"
                   placeholder="لطفا ایمیل خود را وارد نمایید">
          </div>
          <label> رمز ورود</label>
          <div class="form-group">
            <input type="text" name="password" class="form-control" v-model="password"
                   placeholder="لطفا رمز ورود خود را وارد نمایید">
          </div>
        </div>
        <div class="form-group">
          <input type="submit" @click="submit()" name="submit" class="btn btn-success" value="save">
          <nuxt-link to="/" class="btn btn-danger">back</nuxt-link>
        </div>

      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>


<script>
export default {
  layout: 'admin',
  data() {
    return {
      islogin: true,
      username: "",
      password: ""
    }
  },
  methods: {

    submit() {
      if (!this.username || !this.password) {
        alert(" please fill up both username password");
        return;

      }
      if (this.islogin) {

         this.$store.dispatch('login', {
          username: this.username,
          password: this.password

        })
         console.log(this.$store.token);

      }
    }


  }
}
</script>



















