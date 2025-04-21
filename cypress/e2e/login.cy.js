import userData from '../fixtures/userData.json'


describe('Orange Hrm test', () => {

  const  selectorList = {
    userameField:"[name='username']",
    passwordField:"[name='password']",
    loginButton:"[type='submit']",
    sectionTitleTopBar:".oxd-topbar-header-breadcrumb-module",
    dashboardGrid:".orangehrm-dashboard-grid",
    wrongCredentialAlert:".oxd-alert"

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

  it('login - sucess', () => {
    cy.visit('/auth/login')
    // Seletor diferente afim de não deixar o script flake
    cy.get(selectorList.userameField).type(userData.userSuccess.username)
    cy.get(selectorList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
  })
  it('login - fail', () => {
    cy.visit('/auth/login')
    // Seletores copiados diretamente do cypress
    cy.get(selectorList.userameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get('.oxd-alert')
  })

  it.skip('login - sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // Utilzando seletor como variavel, melhor forma de utilizar
    cy.get(selectorList.userameField).type('Admin')
    cy.get(selectorList.passwordField).type('admin123')
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    // Seletor contendo palavra chave
    // cy.get(selectorList.sectionTitleTopBar).contains('Dashboard')
    // Seletor contendo um container
    cy.get(selectorList.dashboardGrid)
  })

  it.skip('login - fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // Seletores copiados diretamente do cypress
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Test')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get(selectorList.wrongCredentialAlert)
  })

  it.skip('login - sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // Seletor diferente afim de não deixar o script flake
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin123')
    cy.get("[type='submit']").click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')
  })
  it.skip('login - fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // Seletores copiados diretamente do cypress
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Test')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert')
  })
}) 