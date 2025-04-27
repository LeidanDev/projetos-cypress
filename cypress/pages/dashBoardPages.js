class dashboardPages {
    selectorList() {
        const selectors = {
            dashboardGrid: ".orangehrm-dashboard-grid",
            
        }

        return selectors

    }

    checkDashboardPage() {
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        
    }
}

export default dashboardPages

