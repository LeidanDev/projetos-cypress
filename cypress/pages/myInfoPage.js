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

    fillPersonalDetails(firstName,lastName){
        cy.get(this.selectorList().firstNameField).clear().type(firstName)
        cy.get(this.selectorList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(EmployeeId,OtherId, DriversLicenseDate,dateOfBirth){
        cy.get(this.selectorList().genericField).eq(3).clear().type(EmployeeId)
        cy.get(this.selectorList().genericField).eq(4).clear().type(OtherId)
        cy.get(this.selectorList().genericField).eq(5).clear().type(DriversLicenseDate)
        cy.get(this.selectorList().genericField).eq(6).clear().type(dateOfBirth)
        cy.get(this.selectorList().dataCloseButton).click()
        cy.get(this.selectorList().nationalityField).eq(0).click()
    }

    fillStatus(){
        cy.get(this.selectorList().nationalityFieldSelector, { timeout: 10000 }).should('be.visible')
        cy.get(this.selectorList().nationalityFieldSelector).contains('Brazilian').click({ force: true })
    }

    saveform(){
        cy.get(this.selectorList().submitButton).eq(1).click()
        cy.get('body').should('contain', 'Successfully Saved')
    }

}

export default MyInfoPage