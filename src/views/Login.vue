<template>
  <v-app id="login">
    <v-container>
      <v-row>
        <v-col align="center"><v-icon>mdi-home</v-icon></v-col>
      </v-row>
      <v-row>
        <v-col align="center"><h2>タイトル</h2></v-col>
      </v-row>
      <v-row>
        <v-col align="center">
          <v-card max-width="300">
            <v-card-text>
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
                class="login-button"
                large
                rounded
                >ログイン</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
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
