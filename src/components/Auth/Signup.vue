<template>
  <v-container text-xs-center mt-5 pt-5>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <h1>Register</h1>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <v-card color="next" dark>
          <v-card-text>
            <v-container>
              <form @submit.prevent="onSubmit" autocomplete="off">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      class="input"
                      :class="{invalid: $v.email.$error}"
                      name="email"
                      label="Mail"
                      id="email"
                      @blur="$v.email.$touch()"
                      v-model="email"
                      type="email"
                      required
                    >
                    </v-text-field>
                  </v-flex>
                </v-layout>
                <p v-if="!$v.email.email">
                  Please provide a valid email address.
                </p>
                <p v-if="!$v.email.required">
                  This field must not be empty.
                </p>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      class="input"
                      :class="{invalid: $v.password.$error}"
                      name="password"
                      label="Password"
                      id="password"
                      @blur="$v.password.$touch()"
                      v-model="password"
                      type="password"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <p v-if="!$v.password.minLen">
                  Min 6 characters
                </p>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      class="input"
                      :class="{invalid: $v.confirmPassword.$error}"
                      name="confirmPassword"
                      label="Confirm Password"
                      id="confirmPassword"
                      @blur="$v.confirmPassword.$touch()"
                      v-model="confirmPassword"
                      type="password"
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <p v-if="!$v.confirmPassword.sameAs">
                  Password do not match!
                </p>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn type="submit" :disabled="$v.$invalid">Sign up</v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

  export default {
    data() {
      return {
        email: "",
        password: "",
        confirmPassword: ""
      };
    },
    validations: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLen: minLength(6)
      },
      confirmPassword: {
        sameAs: sameAs(vm => {
          return vm.password;
        })
      }
    },
    methods: {
      onSubmit() {
        const formData = {
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword
        };
        console.log(formData);
        this.$store.dispatch("signup", formData);
      }
    },
    computed: {
      user() {
        return this.$store.getters.user;
      }
    }
  };
</script>
