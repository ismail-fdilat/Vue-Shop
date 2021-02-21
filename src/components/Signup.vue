<template>
  <div class="signup">
    <h3 class="d-flex justify-content-center">Create new account</h3>
    <form>
      <div class="form-group">
        <label for="Name"> Name</label>
        <input type="text" v-model="name" class="form-control" id="Name " />
      </div>
      <div class="form-group">
        <label for="InputEmail">Email address</label>
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="InputEmail"
          aria-describedby="emailHelp"
        />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <div class="form-group">
        <label for="InputPassword">Password</label>
        <input
          @keyup.enter="register"
          v-model="password"
          type="password"
          class="form-control"
          id="InputPassword"
          autocomplete="on"
        />
      </div>
      <a @click="register" class="btn btn-success">
        Submit
      </a>
    </form>
  </div>
</template>

<script>
import { fb } from "../firebase";
export default {
  name: "Signup",
  props: {
    msg: String
  },
  data() {
    return {
      name: null,
      email: null,
      password: null
    };
  },
  methods: {
    register() {
      fb.auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(userCredential => {
          // Signed in
          $("#Authentication").modal("hide");
          this.$router.replace("admin");
          var user = userCredential.user;
          // ...
        })
        .catch(error => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // ..
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
