/// <reference types="Cypress" />

describe("Test file upload via webdriveruni", () => {
    
    it("TC001 - Upload a file", () => {
        //cypress code
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true})

        cy.fixture("laptop.png", "base64").then(fileContent => {
            cy.get('#myFile').attachFile(
                {
                    fileContent,
                    fileName: "laptop.png",
                    mimeType: "image/png"
                },
                {
                    uploadType: "input"
                }
            )
        })

        cy.get('#submit-button').click();
    })
  
    it("TC002 - Upload no file", () => {
        //cypress code
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true})

        cy.get('#submit-button').click();        
    })

})