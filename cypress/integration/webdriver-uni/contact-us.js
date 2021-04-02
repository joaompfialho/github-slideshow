/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    
    it("TC001 - Should be able to submit a sucessful submission via contact us form", () => {
        //cypress code
        cy.visit("http://www.webdriveruniversity.com/")
        //cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        //cy.document().should("have.property", "charset").and("eq", "UTF-8")
        cy.document().should('have.property', 'charset', 'UTF-8')
        cy.title().should('eql', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus')
        //cy.get('#contact-us > .thumbnail').click()
        //cy.get('#contact-us').click({ log: false })
        cy.get('[name="first_name"]').type('John')
        cy.get('[name="last_name"]').type('Doe')
        cy.get('[name="email"]').type('john.doe@mail.com')
        cy.get('textarea.feedback-input').type('This is my comment inside comments area.')
        cy.get('[type="submit"]').click()
        //cy.get('h1').contains('Thank You for your Message!')        
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })

    it("TC002 - Should not be able to submit a sucessful submission via contact us form as all fields are required", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.get('[name="first_name"]').type('John')
        cy.get('[name="last_name"]').type('Doe')
        cy.get('textarea.feedback-input').type('This is my comment inside comments area.')
        cy.get('[type="submit"]').click()
        cy.get('body')
            .contains('all fields are required')
            .contains('Invalid email address')
        cy.contains('body', 'Invalid')
    })

})