/// <reference types="Cypress" />

describe("Handling with radio buttons via webdriveruni", () => {
    
    before(() => {
        //cypress code
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
    })

    it("TC001 - Check specific radio buttons", () => {
        cy.get('#radio-buttons').find("[type='radio']").first().check()
        cy.get('#radio-buttons').find("[type='radio']").eq(1).check()
    })

    it("TC002 - Validate the states of specific radio buttons", () => {        
        // Assertions to validate radio buttons status
        cy.get('[value="lettuce"]').should('not.be.checked')
        cy.get('[value="cabbage"]').should('be.disabled')
        cy.get('[value="pumpkin"]').should('be.checked')
      })
})