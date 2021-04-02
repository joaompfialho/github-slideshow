/// <reference types="Cypress" />

describe("Test Contact Us form via Automation Test Store", () => {
    
    it("TC001 - Should be able to submit a successfully submission via contact us form", () => {
        //cypress code
        cy.visit("https://automationteststore.com/")
        //cy.get('.info_links_footer > :nth-child(5) > a').click();
        //cy.xpath('//a[contains(text(),"Contact Us")]').click();
        cy.xpath('//a[contains(text(),"Contact Us")]').click().then((myLink) => {
            cy.log("Clicked on link using text: " + myLink.text())
            //alert("The following link was pressed: " + myLink.text())
        })

        cy.get('#ContactUsFrm_first_name').type("John")
        cy.get('#ContactUsFrm_email').type("john-doe@mail.com")

        cy.get('#ContactUsFrm_email')
            .should('have.attr', 'name', 'email')

        cy.get('#ContactUsFrm_enquiry').type("This is a message for testing purpose.")
        cy.xpath('//*[@title="Submit"]').click()
        cy.get('.mb40 > :nth-child(3)').contains("Your enquiry has been successfully sent to the store owner!")
        cy.get('.mb40 > :nth-child(3)').should("have.text", "Your enquiry has been successfully sent to the store owner!")
    })

})