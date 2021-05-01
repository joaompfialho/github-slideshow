/// <reference types="Cypress" />

describe("Handling with checkboxes", () => {
    
    beforeEach(() => {
        cy.log(Cypress.env("name"))
        cy.navigateTo_WebdriverUni_Checkbox_Page()
    })

    it("TC001 - Check and validate checkbox", () => {
        //cy.get('#checkboxes > :nth-child(1) > input').check()
        cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')
        //cy.get(':nth-child(3) > input').uncheck()
        //cy.get(':nth-child(3) > input').uncheck().should('not.be.checked')

        // With ALIAS
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
        cy.get('@option-1').check().should('be.checked')
    })

    it("TC002 - Uncheck and validate checkbox", () => {
        cy.get(':nth-child(5) > input').as('option-3')
        cy.get('@option-3').uncheck().should('not.be.checked')
    })

    it("TC003 - Check multiple checkboxs", () => {
        // select multiple checkboxes
        cy.get("input[type='checkbox']").check(["option-1", "option-2", "option-3", "option-4"]).should('be.checked')
    })
})