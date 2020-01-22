<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col md="3">
            <v-card>
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
                    >パスワード忘れた方はコチラ</a
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
    </v-content>
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
