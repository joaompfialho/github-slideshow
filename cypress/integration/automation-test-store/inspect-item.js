/// <reference types="Cypress" />

describe("Inspect Automation Test Store items using chain of commands", () => {
    
    it("TC001 - Click on the first item header", () => {
        //cypress code
        cy.visit("https://automationteststore.com/");
        //cy.xpath('//a[contains(text(),"Contact Us")]').click()
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click();

    })

    it.only("TC002 - Click on the first item text", () => {
        //cypress code
        cy.visit("https://automationteststore.com/");
        //cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click();
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then((itemHeaderText) => {
            console.log("Select the following item: " + itemHeaderText.text());
        })
        console.log("Test Case successfully executed!");
        //cy.contains('SKINSHEEN BRONZER STICK').click();
    })

    it("TC003 - Click on the first item with XPATH", () => {
        //cypress code
        cy.visit("https://automationteststore.com/");
        cy.xpath('//a[contains(text(),"Skinsheen Bronzer Stick")]').click();
    })

    it("TC004 - Click on the first item using index", () => {
        //cypress code
        cy.visit("https://automationteststore.com/");
        //cy.get('.fixed_wrapper').find('.prdocutname').contains('Skinsheen Bronzer Stick').click();
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click();

        let myF = function () {
            setTimeout(() => {
                
            }, timeout);
        }
    })

})