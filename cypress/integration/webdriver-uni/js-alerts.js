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
    
    it("TC002 - Validate js confirm alert box work correctly when clicking ok", () => {
        //cypress code
        cy.visit("http://www.webdriveruniversity.com/")

        // cy.get('#popup-alerts > .thumbnail > .section-title > h1')
        cy.xpath('//*[@id="popup-alerts"]').invoke('removeAttr', 'target').click({force:true})

        // Press the button
        cy.get('#button4').click()

        // Press OK under confirmation window
        cy.on('window:confirm', (str) => {
            return true
        })

        cy.get('#confirm-alert-text').contains('You pressed OK!')

    })

    it("TC003 - Validate js confirm alert box work correctly when clicking cancel", () => {
        //cypress code
        cy.visit("http://www.webdriveruniversity.com/")

        // cy.get('#popup-alerts > .thumbnail > .section-title > h1')
        cy.xpath('//*[@id="popup-alerts"]').invoke('removeAttr', 'target').click({force:true})

        // Press the button
        cy.get('#button4').click()

        // Collect the message available under alert
        cy.on('window:confirm', (str) => {
            return false;
        })

        cy.get('#confirm-alert-text').contains('You pressed Cancel!')

    })

    it("TC004 - Validate js confirm alert box using a stub", () => {
        //cypress code
        cy.visit("http://www.webdriveruniversity.com/")

        // cy.get('#popup-alerts > .thumbnail > .section-title > h1')
        cy.xpath('//*[@id="popup-alerts"]').invoke('removeAttr', 'target').click({force:true})

        // Create a STUB variable
        const stub = cy.stub()
        // Link the stub with the confirm
        cy.on('window:confirm', stub)

        // Press the button
        cy.get('#button4').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(() => {
            true
        }).then(() => {
            cy.get('#confirm-alert-text').contains('You pressed OK!')
        })
    })

})