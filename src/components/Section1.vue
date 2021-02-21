<template>
  <section class=" hero  row ">
    <div
      class="col-md-6  pl-5 d-flex flex-column justify-content-center align-items-center "
    >
      <div class=" hero-container m-5 p-5 ">
        <h1 class="titre-hero  ">
          Aji khsser <br />
          flossek 3endna
        </h1>
        <p class=" mt-4 text-hero ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus reprehenderit temporibus corrupti illo soluta cum? Quo
          eaque qui incidunt totam voluptate debitis libero pariatur dolorem
          molestiae, esse accusamus delectus. Et.
        </p>
        <div class=" btns mt-5  ">
          <button type="button" class=" btn btn-success">Success</button>
          <button type="button " class="ml-3 btn btn-outline-success">
            Success
          </button>
        </div>
      </div>
    </div>
    <figure class="d-flex justify-content-center col-md-6 image-section pt-5">
      <img id="image-hero" src="/img/hero.svg" alt="holla" />
    </figure>
  </section>
</template>

<script>
export default {
  name: "Section1",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hero {
  max-width: 101%;
  min-height: 88vh;
  // #973F81
}

.hero-container {
  max-height: 90vh;
}
#image-hero {
  max-width: 90%;
  max-height: 90%;
}
</style>
