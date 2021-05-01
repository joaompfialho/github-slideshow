/// <reference types="Cypress" />

describe("Verifying variables, Cypress commands and JQuery commands", () => {
    
    it("TC001 - Navigate to specific product pages", () => {
        //cypress code
        cy.visit("https://automationteststore.com/");
 
        cy.xpath("//*[contains(@href,'product/category&path')]")
            .contains("Makeup")
            .click()
        
        // Following code will fail
        //const header = cy.get("h1 .maintext");
        //cy.log(header.text);

        // Following code will pass
        cy.get("h1 .maintext").then(($headerText) => {
            const headerText = $headerText.text();
            cy.log("Found header text: " + headerText);
            expect(headerText).is.eq('Makeup');
        })
    })

    it("TC002 - Navigate to specific product pages - version 2", () => {
        //cypress code
        cy.visit("https://automationteststore.com/");
         cy.xpath("//*[contains(@href,'product/category&path')]")
            .contains("Makeup")
            .click()
        
        // The following code will fail
        // const header = cy.get("h1 .maintext")
        // cy.log(header.text())

        cy.get("h1 .maintext").then(($headerText) => {
            const headerText = $headerText.text()
            cy.log("Found header text: " + headerText)

            // assertion to validae header text
            expect(headerText).is.eq('Makeup')
        })
    })

    it("TC003 - Validate properties of the Contact Us Page", () => {
        //cypress code
        cy.visit("https://automationteststore.com/index.php?rt=content/contact")

        // Uses Cypress commands and chaining
        // The web element with ContactUsFrm id, contains the text "Contact Us Form"
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')

        // JQuery approach
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firstNameText = text.find('#field_11').text()
            cy.log("Assertion: This is the text inside the web element id \'field_11\' » " + firstNameText)
            expect(firstNameText).to.contain('First name')

            // Embedded commands (Closure)
            cy.get('#field_11').then(fnText => {
                cy.log(fnText.text())
                cy.log(fnText)
            })

        })
    })

})