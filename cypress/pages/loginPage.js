class LoginPage {
    selectorList() {
        const selectors = {
            userameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            wrongCredentialAlert: ".oxd-alert",

        }

        return selectors

    }


    acessLoginPage(){
        cy.visit('/auth/login')
    }

    loginWithAnyUser(username, password){
        cy.get(this.selectorList().userameField).type(username)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().loginButton).click()

    }
}

export default LoginPage