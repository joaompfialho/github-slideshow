/// <reference types="Cypress" />

describe("Handling with iframes & modals", () => {
    
    it("TC001 - Handle webdriveruni iframe modal", () => {
        //cypress code
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#iframe').invoke('removeAttr', 'target').click({force:true})

        cy.get('#frame').then($iframe => {
            // Grab the body content
            const body = $iframe.contents().find('body')
            // wrap the body const to be manipulated with cypress commands and define an alias
            cy.wrap(body).as('iframe')
        })

        cy.get('@iframe').find('#button-find-out-more').click()

        cy.get('@iframe').find('#myModal').as('modal')

        cy.get('@modal').should(($expectedText) => {
            const text = $expectedText.text()
            console.log(text)
            expect(text).to.include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops')
        })

        cy.get('@modal').contains('Close').click()
    })
    
})