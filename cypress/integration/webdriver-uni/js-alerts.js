/// <reference types="Cypress" />

describe("Handle js alerts", () => {
    
    it("TC001 - Confirm js alert contains the correct text", () => {
        //cypress code
        cy.visit("http://www.webdriveruniversity.com/")

        // cy.get('#popup-alerts > .thumbnail > .section-title > h1')
        cy.xpath('//*[@id="popup-alerts"]').invoke('removeAttr', 'target').click({force:true})

        // Press the button
        cy.get('#button1').click()

        // Collect the message available under alert
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!')
        })
    })
    
    it.only("TC002 - Validate js confirm alert box work correctly when clicking ok", () => {
        //cypress code
        cy.visit("http://www.webdriveruniversity.com/")

        // cy.get('#popup-alerts > .thumbnail > .section-title > h1')
        cy.xpath('//*[@id="popup-alerts"]').invoke('removeAttr', 'target').click({force:true})

        // Press the button
        cy.get('#button4').click()


    })


})