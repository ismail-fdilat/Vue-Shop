<template>
  <div class="Aut">
    <!-- Button trigger modal -->
    <!-- <button
      type="button"
      class="btn btn-primary"
      data-toggle="modal"
      data-target="#Authentication"
    >
      Launch static backdrop modal
    </button> -->

    <!-- Modal -->
    <div
      class="modal fade"
      id="Authentication"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="AuthenticationLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body ">
            <div class="modal-btns d-flex justify-content-between ">
              <div
                class="btn-group btn-group-lg"
                role="group"
                aria-label="Basic example"
              >
                <button
                  type="button"
                  @click="login = !login"
                  class="btn btn-success"
                >
                  <div v-if="login">
                    Sign Up
                  </div>
                  <!-- ////Signup -->
                  <div v-if="!login">
                    Sign In
                  </div>
                </button>
              </div>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div class="log mt-3">
              <!-- ////Login> -->
              <div v-if="login">
                <div><Login></Login></div>
              </div>
              <!-- ////Signup -->
              <div v-if="!login">
                <!-- <Signup></Signup> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Login from "./Login.vue";
import Signup from "./Signup.vue";
export default {
  name: "Authentication",
  props: {
    msg: String
  },
  components: { Login, Signup },
  data() {
    return { login: true };
  }
  // methods: {
  //   signup() {
  //     login = !login;
  //   },
  //   signin() {
  //     login = !login;
  //   }
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
