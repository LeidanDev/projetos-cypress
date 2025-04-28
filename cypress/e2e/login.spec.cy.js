import userData from '../fixtures/userData.json'
import dashboardPages from '../pages/dashBoardPages.js'
import LoginPage from '../pages/loginPage.js'

const loginPage = new LoginPage()
const dashBoardPages = new dashboardPages()


describe('Login Orange Hrm test', () => {

  it('login - fail', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
    
  })

  it('Login - Success', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashBoardPages.checkDashboardPage()
    
  })

}) 