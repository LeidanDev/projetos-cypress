import userData from '../fixtures/userData.json'


describe('Orange Hrm test', () => {

  const  selectorList = {
    userameField:"[name='username']",
    passwordField:"[name='password']",
    loginButton:"[type='submit']",
    sectionTitleTopBar:".oxd-topbar-header-breadcrumb-module",
    dashboardGrid:".orangehrm-dashboard-grid",
    wrongCredentialAlert:".oxd-alert",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    datefield: "[placeholder='yyyy-mm-dd']",
    dataCloseButton: ".--close",
    submitButton: "[type='submit']"

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

  it.only('user info update - sucess', () => {
    cy.visit('/auth/login')
    // Seletor diferente afim de não deixar o script flake
    cy.get(selectorList.userameField).type(userData.userSuccess.username)
    cy.get(selectorList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.firstNameField).clear().type('FirstNameTeste')
    cy.get(selectorList.lastNameField).clear().type('lastnameTest')
    cy.get(selectorList.genericField).eq(3).clear().type('EmploeTest')
    cy.get(selectorList.genericField).eq(4).clear().type('OtherIdTeste')
    cy.get(selectorList.genericField).eq(5).clear().type('54786245')
    cy.get(selectorList.genericField).eq(6).clear( ).type('2025-03-12')
    cy.get(selectorList.dataCloseButton).click()
    cy.get(selectorList.submitButton).eq(1).click()
    cy.get('body').should('contain', 'Successfully Saved')
    

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