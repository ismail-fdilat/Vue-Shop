<template>
  <div class="login">
    <form>
      <div class="form-group">
        <label for="Email1">Email address</label>
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="Email1"
          aria-describedby="emailHelp"
        />
        <small id="emailHelp" class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>
      <div class="form-group">
        <label for="Password1">Password</label>
        <input
          @keyup.enter="login"
          v-model="password"
          type="password"
          class="form-control"
          id="Password1"
          autocomplete="on"
        />
      </div>

      <a type="submit" @click="login" class="btn btn-success">
        Submit
      </a>
    </form>
  </div>
</template>

<script>
import { fb } from "../firebase";
export default {
  name: "Login",
  props: {
    msg: String
  },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {
      console.log("sssssssign");
      fb.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(userCredential => {
          //redirect to admin
          this.$router.replace("admin");
          // Signed in
          var user = userCredential.user;
          // ...
        })
        .catch(error => {
          var errorCode = error.code;
          var errorMessage = error.message;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
