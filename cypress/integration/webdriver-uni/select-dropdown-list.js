/// <reference types="Cypress" />

describe("Handling with dropdown list via webdriveruni", () => {
    
    it("TC001 - Select specific values via select dropdown lists", () => {
        //cypress code
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

        cy.get('#dropdowm-menu-1').select('C#')
        cy.get('#dropdowm-menu-2').select('Maven').should('have.value', 'maven')
        cy.get('#dropdowm-menu-3').select('CSS').contains('CSS')
    })

    it("TC002 - Select Maven through value", () => {
        //cypress code
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

        cy.get('#dropdowm-menu-2').select('Maven').should('have.value', 'maven')
    })

    it("TC003 - Select TestNG through text", () => {
        //cypress code
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

        cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG')
    })

})