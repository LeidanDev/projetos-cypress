import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import dashboardPages from '../pages/dashBoardPages.js'
import MenuPage from '../pages/menuPage.js'
import myInfoPage from '../pages/myInfoPage.js'

const loginPage = new LoginPage()
const Dashboard = new dashboardPages()
const menu = new MenuPage()
const info = new myInfoPage()

describe('Orange Hrm test', () => {

  const selectorList = {
   
    
    
  }

  // const userData = {
  //   userSuccess:{
  //     username: 'Admin',
  //     password: 'admin123'
  //   },
  //   userFail:{
  //     username: 'teste',
  //     password: 'teste'
  //   }
  // }

  it('user info update - sucess', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    Dashboard.checkDashboardPage()
    menu.accessMyInfo()
    info.fillPersonalDetails('André', 'Polo')
    info.fillEmployeeDetails('457852','OtherIdTest', '23478957','2025-07-29')
    info.fillStatus()
    info.saveform()
    
  })

  it('login - fail', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
    
  })

  

  // it.skip('login - sucess', () => {
  //   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  //   // Utilzando seletor como variavel, melhor forma de utilizar
  //   cy.get(selectorList.userameField).type('Admin')
  //   cy.get(selectorList.passwordField).type('admin123')
  //   cy.get(selectorList.loginButton).click()
  //   cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
  //   // Seletor contendo palavra chave
  //   // cy.get(selectorList.sectionTitleTopBar).contains('Dashboard')
  //   // Seletor contendo um container
  //   cy.get(selectorList.dashboardGrid)
  // })

  // it('login - fail', () => {
  //   cy.visit('/auth/login')
  //   // Seletores copiados diretamente do cypress
  //   cy.get(selectorList.userameField).type(userData.userFail.username)
  //   cy.get(selectorList.passwordField).type(userData.userFail.password)
  //   cy.get(selectorList.loginButton).click()
  //   cy.get('.oxd-alert')
  // })

  

  // it.skip('login - sucess', () => {
  //   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  //   // Seletor diferente afim de não deixar o script flake
  //   cy.get("[name='username']").type('Admin')
  //   cy.get("[name='password']").type('admin123')
  //   cy.get("[type='submit']").click()
  //   cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
  //   cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')
  // })
  // it.skip('login - fail', () => {
  //   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  //   // Seletores copiados diretamente do cypress
  //   cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Test')
  //   cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
  //   cy.get('.oxd-button').click()
  //   cy.get('.oxd-alert')
  // })
}) 