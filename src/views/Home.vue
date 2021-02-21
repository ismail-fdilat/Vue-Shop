<template>
  <div class="home">
    <Navbar></Navbar>
    <Section1></Section1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Section1 from "../components/Section1.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Section1
  }
};
</script>
