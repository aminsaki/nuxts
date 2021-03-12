<template>
  <div class="product container">

    <div id="carousel-example" class="carousel slide hidden-xs" data-ride="carousel">
      <!-- Wrapper for slides -->
      <div class="carousel-inner">

        <div class="item">
          <div class="row">

            <div class="col-sm-3" v-for=" post in  posts[0]" :key="post.id">
              <div class="col-item" >
                <div class="info">
                  <div class="row">
                    <div class="price col-md-6">
                      <h5>{{post.title}}</h5>
                      <h5 class="price-text-color">{{post.price}}</h5>
                    </div>
                    <div class="rating hidden-sm col-md-6">
                      <i class="price-text-color fa fa-star"></i>
                      <i class="price-text-color fa fa-star"></i>
                    </div>
                  </div>
                </div>

                <div class="photo">
                  <img :src=post.img
                       class="img-responsive" alt="a"/>
                </div>
                <div class="info">
                  <div class="separator clear-left">
                    <p class="btn-add">
                      <i class="fa fa-shopping-cart"></i><a href="#" class="hidden-sm">Add to cart</a>
                    </p>
                    <p class="btn-details">
                      <i class="fa fa-list"></i><a href="#" class="hidden-sm">
                      <nuxt-link to="posts/5">ادامه مطلب</nuxt-link>

                    </a>
                    </p>
                  </div>
                  <div class="clearfix">
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>


      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
     posts: {
       type: Array,
       required: true
     }
  },

}
</script>


