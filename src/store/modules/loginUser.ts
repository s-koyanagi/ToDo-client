import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule
} from 'vuex-module-decorators'
import store from '../index'
import User from '@/models/dto/user'
import axios from 'axios'
import LoginForm from '@/models/form/loginForm'

@Module({
  dynamic: true,
  store,
  name: 'LoginUser',
  namespaced: true
})
class LoginUser extends VuexModule {
  private user: User = new User()

  @Mutation
  public SET_LOGIN_USER_INFO(user: User) {
    this.user = user
  }

  @Mutation
  public DROP_LOGIN_USER_INFO() {
    this.user = new User()
  }

  @Action
  async login(loginForm: LoginForm) {
    console.log(loginForm.id + '：' + loginForm.password)
    const formData = new FormData()
    formData.append('email', loginForm.id)
    formData.append('password', loginForm.password)
    await axios.post('http://localhost:8080/login', formData).then(res => {
      console.log(res)
    })
  }
}
export const loginModule = getModule(LoginUser)
