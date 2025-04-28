import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import dashboardPages from '../pages/dashBoardPages.js'
import MenuPage from '../pages/menuPage.js'
import myInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance');

const chance = new Chance()
const loginPage = new LoginPage()
const Dashboard = new dashboardPages()
const menu = new MenuPage()
const info = new myInfoPage()

describe('Orange Hrm test', () => {
  it('user info update - sucess', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    Dashboard.checkDashboardPage()
    menu.accessMyInfo()
    info.fillPersonalDetails(chance.first(), chance.last())
    info.fillEmployeeDetails('457852', 'OtherIdTest', '23478957', '2025-07-29')
    info.fillStatus()
    info.saveform()

  })

}) 