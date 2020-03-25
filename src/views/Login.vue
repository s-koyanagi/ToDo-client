<template>
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
          <v-form ref="loginForm" v-model="isValidated">
            <v-text-field
              id="userid"
              label="ID"
              type="text"
              placeholder=" "
              dense="true"
              outlined
              class="login-form"
              v-model="email"
              :rules="required"
            />
            <v-text-field
              id="password"
              label="Password"
              type="password"
              placeholder=" "
              dense="true"
              outlined
              class="login-form"
              v-model="password"
              :rules="required"
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
            :disabled="!isValidated"
            large
            rounded
            @click="submit()"
            >ログイン</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import LoginForm from '../models/form/loginForm'
import { loginModule } from '@/store/modules/loginUser'

@Component
export default class Login extends Vue {
  // フォーム
  email: string = ''
  password: string = ''

  // バリデーション
  isValidated: boolean = false
  private required = [(v: any) => !!v || '必ず入力してください']

  submit() {
    loginModule.login(new LoginForm(this.email, this.password))
  }
}
</script>
<style lang="stylus" scoped>
.login-form {
  margin-left: 40px
  margin-right: 40px
}
</style>
