/// <reference types="Cypress" />

describe("Test Contact Us form via Automation Test Store", () => {
    
    before(() => {
        //cy.viewport(550, 770)
        cy.fixture("userDetails").as("user")
    })

    it("TC001 - Should be able to submit a successfully submission via contact us form", () => {
        Cypress.currentTest.retries(4);
        //cypress code
        cy.visit("https://automationteststore.com/")
        //cy.get('.info_links_footer > :nth-child(5) > a').click();
        //cy.xpath('//a[contains(text(),"Contact Us")]').click();
        //cy.xpath('//a[contains(text(),"ContactXUs")]').click().then((myLink) => {
        cy.get("a[href$='contact555']").click().then((myLink) => {
            cy.log("Clicked on link using text: " + myLink.text())
            //alert("The following link was pressed: " + myLink.text())
        })

        cy.get("@user").then((user) => {
            cy.get('#ContactUsFrm_first_name').type(user.firstName)
            cy.get('#ContactUsFrm_email').type(user.email)
    
        })

        cy.get('#ContactUsFrm_email')
            .should('have.attr', 'name', 'email')

        cy.get('#ContactUsFrm_enquiry').type("This is a message for testing purpose.")
        cy.xpath('//*[@title="Submit"]').click()
        cy.get('.mb40 > :nth-child(3)').contains("Your enquiry has been successfully sent to the store owner!")
        cy.get('.mb40 > :nth-child(3)').should("have.text", "Your enquiry has been successfully sent to the store owner!")
    })

})