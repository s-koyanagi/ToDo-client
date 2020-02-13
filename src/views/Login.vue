<template>
  <v-app id="login">
    <!-- <v-container> -->
    <!-- <v-row>
        <v-col align="center"><v-icon>mdi-home</v-icon></v-col>
      </v-row>
      <v-row>
        <v-col align="center"><h2>ToDo管理アプリ</h2></v-col>
      </v-row> -->
    <v-row justify="center" align-content="center">
      <v-col cols="2" sm="3" md="3" lg="3" xl="2">
        <v-card>
          <v-card-text>
            <p class="text-center">
              <v-icon size="70">mdi-account</v-icon>
            </p>
            <p class="text-center mb-6 headline font-weight-light">
              Sign In
            </p>
            <v-form>
              <v-text-field
                id="userid"
                label="ID"
                type="text"
                placeholder=" "
                dense="true"
                outlined
                class="login-form"
              />
              <v-text-field
                id="password"
                label="Password"
                type="password"
                placeholder=" "
                dense="true"
                outlined
                class="login-form"
                hide-details="true"
              />
              <a style="text-align:center;" href="#"
                >パスワードを忘れた方はコチラ</a
              >
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn
              block="true"
              color="primary"
              full-width="true"
              class="login-button mb-2"
              large
              rounded
              >ログイン</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <!-- </v-container> -->
    <!-- <v-row class="blue lighten-4" justify="center" align-content="center">
      <v-col cols="3">
        <v-card color="blue" outlined tile height="150"></v-card>
      </v-col>
    </v-row> -->
  </v-app>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Login extends Vue {}
</script>
<style lang="stylus" scoped>
.login-form {
  margin-left: 40px
  margin-right: 40px
}
</style>
