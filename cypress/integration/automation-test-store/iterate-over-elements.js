/// <reference types="Cypress" />

describe("Iterate over elements", () => {

    beforeEach(() => {
        //cypress code
        cy.visit("https://automationteststore.com/");
        cy.xpath("//*[contains(@href,'product/category&path')]").contains("Hair Care").click()
        }
    )

    it("TC001 - Log information of all hair care products", () => {        
        cy.get('.fixed_wrapper .prdocutname')
            .each(($el, index, $list) => {
                cy.log("Index: " + index)
                cy.log("Product name: " + $el.text())
            })
    })

    it("TC002 - Add specific product to basket", () => {
        
        // cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {   
        //     if ($el.text() === 'Curls to straight Shampoo') {
        //         // if ($el.text().includes('Curls to straight Shampoo'))
        //         // wrap this element so we can use cypress commands on it
        //         cy.wrap($el).click()
        //     }
        // })

        cy.selectProduct('Curls to straight Shampoo');
    })

    it("TC003 - Add another specific product to basket", () => {
        cy.selectProduct('Pantene Pro-V Conditioner, Classic Care');
    })

    it("TC004 - Add more another specific product to basket", () => {
        cy.selectProduct('Eau Parfumee au The Vert Shampoo');
    })

})