<template>
  <v-container fill-height>
    <v-row justify="center">
      <v-card width="350">
        <v-card-text>
          <p class="text-center">
            <v-icon size="70">mdi-account</v-icon>
          </p>
          <p class="text-center mb-6 headline font-weight-light">
            Sign In
          </p>
          <p class="text-center red--text" v-if="isVisible">
            {{ validationMessage }}
          </p>
          <v-form ref="loginForm">
            <v-text-field
              id="userid"
              label="ID"
              type="text"
              placeholder=" "
              dense="true"
              outlined
              class="login-form"
              v-model="email"
              validate-on-blur="true"
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
            large
            rounded
            @click="submit()"
            >ログイン</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import LoginForm from '../models/form/loginForm';
  import { loginUser } from '@/store/modules/loginUser';

  @Component
  export default class Login extends Vue {
    // フォーム
    email: string = '';
    password: string = '';

    // バリデーション
    private required: Array<(v: string) => void> = [];
    validationMessage: string = '';

    // バリデーションメッセージ表示フラグ
    isVisible: boolean = false;

    // ログインボタン押下
    async submit() {
      this.required = [(v: string) => !!v || ''];
      const isInputError: boolean = (this.$refs.loginForm as Vue & {
        validate: () => boolean;
      }).validate();
      if (isInputError) {
        //Submit処理
        await loginUser.login(new LoginForm(this.email, this.password));
        if (!loginUser.GET_IS_AUTHENTICATED) {
          this.validationMessage = 'IDまたはパスワードが違います。';
          this.isVisible = true;
        }
      } else {
        this.validationMessage = 'IDとPasswordは入力必須です。';
        this.isVisible = true;
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .login-form {
    margin-left: 40px
    margin-right: 40px
  }
</style>
