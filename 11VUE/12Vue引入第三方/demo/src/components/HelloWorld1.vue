<template>
  <div class="hello">
    <swiper :modules="modules" :pagination="{ clickable:ture }">
      <swiper-slide>
        <img src="../assets/2.jpg">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/2.jpg">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/2.jpg">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/2.jpg">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from "swiper/vue";
import {Pagination} from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';

export default {
  name: 'HelloWorld1',
  setup() {
    return {
      modules: [Pagination]
    }
  },
  components: {
    Swiper,
    SwiperSlide
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  width: 400px;
  height: 200px;
}
</style>
