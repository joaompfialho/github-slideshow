/// <reference types="Cypress" />

describe("Same Origin Policy", () => {

    it("TC001 - Validate visiting two different domains", () => {
        //cypress code
        cy.visit("https://webdriveruniversity.com/")
        cy.visit("https://automationteststore.com/")
    })

    it("TC002 - Validate visiting two different domains via user action", () => {
        //cypress code
        cy.visit("https://webdriveruniversity.com/")
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click()
    })

})