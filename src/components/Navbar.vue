<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
      <a class="navbar-brand" href="#">Vue shop</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/" id="home" class="nav-link">Home </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">about </router-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <a
            class="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            data-toggle="modal"
            data-target="#Authentication"
          >
            Get Strated
          </a>
        </form>
      </div>
    </div>
  </nav>

  <Authentication></Authentication>
</template>

<script>
import Authentication from "../components/Authentication.vue";
export default {
  name: "Navbar",
  props: {
    msg: String
  },
  components: {
    Authentication
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar {
  background-color: #3f3d56;
  min-height: 4rem;
}
.navbar .navbar-brand {
  color: #28a745;
  font-weight: bold;
  font-size: 5vh;
}
.nav-item .nav-link,
#home {
  color: #28a745;
}
</style>
