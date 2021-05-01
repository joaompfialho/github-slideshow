/// <reference types="Cypress" />

describe("Handling with autocomplete dropdown list via webdriveruni", () => {
    
    it("TC001 - Select specific product via autocomplete list", () => {
        //cypress code
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force:true})

        cy.get('#myInput').type('A')
        
        cy.xpath("//*[@id='myInputautocomplete-list']/*").each(($el, index, $list) => {
            const prod = $el.text()
            const productToSelect = 'Avacado'

            // cy.log('This is my selected product: ' + prod)

            if(prod === productToSelect) {
                $el.click()
                cy.get('#submit-button').click()

                cy.url().should('include', productToSelect)
            }

        }).then(() => {
            cy.get('#myInput').type('G')
            //cy.wait(5000)

            cy.xpath("//*[@id='myInputautocomplete-list']/*").each(($el, index, $list) => {
                const prod = $el.text()
                const productToSelect = 'Grapes'

                if(prod === productToSelect) {
                    $el.click()
                    cy.get('#submit-button').click()
                    cy.url().should('include', productToSelect)
                    cy.wait(5000)
                }
            })

        })


    })

})