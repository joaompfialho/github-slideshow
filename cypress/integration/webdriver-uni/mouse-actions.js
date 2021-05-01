/// <reference types="Cypress" />

describe("Test mouse actions via webdriveruni", () => {
    
    it("TC001 - Scroll element into view", () => {
        //cypress code
        cy.visit("http://www.webdriveruniversity.com/")
        
        cy.get('#actions')
            .scrollIntoView()
            .invoke('removeAttr', 'target')
            .click({force:true})
    
    })

    it("TC002 - I should be able to drag and drop a draggable item", () => {
        //cypress code
        cy.visit("http://www.webdriveruniversity.com/")
        
        cy.get('#actions')
            .scrollIntoView()
            .invoke('removeAttr', 'target')
            .click({force:true})
    
        cy.get('#draggable').trigger('mousedown', {which: 1})

        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force:true})
    })

    it("TC003 - Double click an item", () => {
        //cypress code
        cy.visit("http://www.webdriveruniversity.com/")
        
        cy.get('#actions')
            .scrollIntoView()
            .invoke('removeAttr', 'target')
            .click({force:true})
    
        cy.get('#double-click').dblclick()

    })

    it("TC004 - I should be able hold down the left mouse click button on a given element", () => {
        //cypress code
        cy.visit("http://www.webdriveruniversity.com/")
        
        cy.get('#actions')
            .scrollIntoView()
            .invoke('removeAttr', 'target')
            .click({force:true})
    
        // Pressionar o botão esquerdo do rato    
        cy.get('#click-box').trigger('mousedown', {whick:1}).then(($element) => {
            // validar a cor do background do elemento web
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')
        })

    })

})