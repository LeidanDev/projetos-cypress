class MyInfoPage {
    selectorList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            datefield: "[placeholder='yyyy-mm-dd']",
            dataCloseButton: ".--close",
            submitButton: "[type='submit']",
            nationalityField: ".oxd-select-wrapper",
            nationalityFieldSelector: ".oxd-select-dropdown"
        }

        return selectors

    }

    accessMyInfoPages() {
        cy.get(this.selectorList().firstNameField).clear().type('FirstNameTeste')
        cy.get(this.selectorList().lastNameField).clear().type('lastnameTest')
        cy.get(this.selectorList().genericField).eq(3).clear().type('EmploeTest')
        cy.get(this.selectorList().genericField).eq(4).clear().type('OtherIdTeste')
        cy.get(this.selectorList().genericField).eq(5).clear().type('54786245')
        cy.get(this.selectorList().genericField).eq(6).clear().type('2025-03-12')
        cy.get(this.selectorList().dataCloseButton).click()
        cy.get(this.selectorList().nationalityField).eq(0).click()
        cy.get(this.selectorList().nationalityFieldSelector, { timeout: 10000 }).should('be.visible')
        cy.get(this.selectorList().nationalityFieldSelector).contains('Brazilian').click({ force: true })
        cy.get(this.selectorList().submitButton).eq(1).click()
        cy.get('body').should('contain', 'Successfully Saved')
    }

}

export default MyInfoPage