/// <reference types="Cypress" />

import HomePage_PO from '../../support/pageObjects/webdriver-uni/Homepage_PO';
import Contact_Us_PO from '../../support/pageObjects/webdriver-uni/Contact_Us_PO';

describe("Test Contact Us form via WebdriverUni", () => {
    // Explicit timeout
    //Cypress.config('defaultCommandTimeout', 20000)
    
    // Page Object constants creation
    const homepage_PO = new HomePage_PO;
    const contact_Us_PO = new Contact_Us_PO();

    before(() => {
        cy.fixture('example').then((data) => {
            globalThis.data = data;
        })
        const contact_Us_PO = new Contact_Us_PO();
    })

    beforeEach(function () {
        //cy.visit(Cypress.env("webdriveruni_homepage") + "/Contact-Us/contactus.html")
        //cy.visit("/" + "/Contact-Us/contactus.html")

        // POM
        homepage_PO.visitHomepage();
        //cy.wait(3000)
        homepage_PO.clickOn_ContactUs_Button();
    })

    it("TC001 - Should be able to submit a sucessful submission via contact us form", () => {
        //cy.document().should("have.property", "charset").and("eq", "UTF-8")
        cy.document().should('have.property', 'charset', 'UTF-8')
        cy.title().should('eql', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus')
        //cy.get('#contact-us > .thumbnail').click()
        //cy.get('#contact-us').click({ log: false })
        
        // cy.get('[name="first_name"]').type(data.firstName)
        // cy.get('[name="last_name"]').type(data.lastName)
        // cy.get('[name="email"]').type('john.doe@mail.com')
        // cy.get('textarea.feedback-input').type('This is my comment inside comments area.')
        // cy.get('[type="submit"]').click()
        // cy.get('h1').should('have.text', 'Thank You for your Message!')
        // cy.webdriverUni_ContactForm_Submission(
        //     data.firstName, 
        //     data.lastName, 
        //     data.email, 
        //     'This is my comment inside comments area.', 
        //     'h1', 
        //     'Thank You for your Message!')
        
        // solution with env variables
        // cy.webdriverUni_ContactForm_Submission(
        //     Cypress.env("first_name"), 
        //     data.lastName, 
        //     data.email, 
        //     'This is my comment inside comments area.', 
        //     'h1', 
        //     'Thank You for your Message!')

        //cy.get('h1').contains('Thank You for your Message!')
        
        // Solution with page object approach
        contact_Us_PO.contactForm_Submission(Cypress.env("first_name"), data.lastName, data.email, 
        'This is my comment inside comments area.', 'h1', 'Thank You for your Message!');
    })

    it("TC002 - Should not be able to submit a sucessful submission via contact us form as all fields are required", () => {
        // cy.get('[name="first_name"]').type('John')
        // cy.get('[name="last_name"]').type('Doe')
        // cy.get('textarea.feedback-input').type('This is my comment inside comments area.')
        // cy.get('[type="submit"]').click()
        // cy.get('body').contains('all fields are required').contains('Invalid email address')
        // cy.webdriverUni_ContactForm_Submission(
        //     data.firstName, 
        //     data.lastName, 
        //     " ", 
        //     'This is my comment inside comments area.', 
        //     'body', 
        //     'Invalid email address')
                
        //cy.contains('body', 'Invalid')

        // Solution with page object approach
        contact_Us_PO.contactForm_Submission(data.firstName, data.lastName, " ", 
            'This is my comment inside comments area.', 'body', 'Invalid email address')
    })

})