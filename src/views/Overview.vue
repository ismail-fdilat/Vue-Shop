<template>
  <div class="Overview">
    <div class="container h-100">
      <div class="intro h-100">
        <div
          class="row mt-5 h-100 d-flex justify-content-center align-items-center"
        >
          <div class="col-md-6 ">
            <h1 class="d-flex justify-content-center">Overview</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
              quibusdam, cum quam doloribus maxime voluptas mollitia, at
              recusandae aliquam fuga nulla nam illum nesciunt excepturi libero
              dignissimos adipisci ipsam a?
            </p>
          </div>
          <div class="col-md-6 ">
            <img src="/img/overview.svg" alt="" class="img-overview" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Overview",
  components: {}
};
</script>
<style scoped>
.img-overview {
  width: 100%;
  height: 100%;
}
</style>
