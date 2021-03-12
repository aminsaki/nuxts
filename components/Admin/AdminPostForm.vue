<template>
  <div class="new-post container" dir="rtl">
    <div class="row" style="margin-top: 20px">
      <div class="col-md-4"></div>
      <div class="col-md-6">
        <form>
          <h4 class="text-center text-justify">Create Post</h4>
          <label>author</label>
          <div class="form-group">
            <input type="text" class="form-control" v-model="editPost.title">
          </div>
          <label>thumbmail</label>
          <div class="form-group">

            <input type="text" class="form-control" v-model="editPost.thumbmail">
          </div>
          <label>author</label>
          <div class="form-group">

            <textarea type="text" class="form-control" v-model="editPost.body"></textarea>
          </div>
          <div class="form-group">
            <input type="submit" class="btn btn-success col-md-3" value="ثبت کردن">
            <nuxt-link to="/admins" class="btn btn-danger">Cancel</nuxt-link>
          </div>
        </form>
      </div>
      <div class="col-md-2"></div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'admin',

  props: {

       post:{
           type: object,
           required:true,

       }

  },

  data() {

    return {
      editPost: {
        title: '',
        thumbmail: '',
        body: ''
      }
    }
  }


}
</script>





