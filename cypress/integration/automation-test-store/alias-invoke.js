/// <reference types="Cypress" />

describe("Alias and Invoke", () => {

    let productsCount = 0

    it("TC001 - Validate a specific Hair Care product", () => {
        //cypress code
        cy.visit("https://automationteststore.com/");
        cy.xpath("//*[contains(@href,'product/category&path')]").contains("Hair Care").click()

        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')

    })

    it("TC002 - Count how many products exists on homepage", () => {
        //cypress code
        cy.visit("https://automationteststore.com/");
        
        cy.get('.thumbnail').as('productThumbnail')
        cy.get('@productThumbnail').should('have.length', 16)
        cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
    })

    it("TC003 - Calculate total of normal and sale products", () => {
        //cypress code
        cy.visit("https://automationteststore.com/");
        
        cy.get('.thumbnail').as('productThumbnail')
        // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {          
        //     cy.log($el.text())
        // })
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')

        var itemsTotal = 0

        cy.get('@itemPrice').then($linkText => {
            //cy.log($linkText)
            var itemsPriceTotal = 0
            var itemPrice = $linkText.split('$')
            //console.log('This is my string splited: ' + itemPrice)
            var i
            for(i = 0; i < itemPrice.length; i++) {
                cy.log(itemPrice[i])
                itemsPriceTotal += Number(itemPrice[i])
            }
           
            itemsTotal += itemsPriceTotal
            cy.log("Non sale price items total: " + itemsPriceTotal)
        })

        cy.get('@saleItemPrice').then($linkText => {
            var saleItemsPriceTotal = 0
            var saleItemPrice = $linkText.split('$')
            var i
            for(i = 0; i < saleItemPrice.length; i++) {
                cy.log(saleItemPrice[i])
                saleItemsPriceTotal += Number(saleItemPrice[i])
            }
           
            itemsTotal += saleItemsPriceTotal
            cy.log("Sale price items total: " + saleItemsPriceTotal)
        })
        .then(() => {
            cy.log("All items total: " + itemsTotal)
            expect(itemsTotal).to.equal(663.1)
        })

        .then(() => {
            cy.log("TERMINOU O MEU TESTE")
        })

    })

})