/// <reference types="Cypress" />

describe("Handling with Datepickers", () => {
    
    it("TC001 - Select date from datepicker", () => {
        //cypress code
        cy.visit("http://www.webdriveruniversity.com/")
        cy.get('#datepicker').invoke('removeAttr', 'target').click({force:true})

        cy.get('#datepicker').click()

        // let date = new Date();
        // date.setDate(date.getDate()); // get the current day
        // cy.log(date.getDate());

        // //let date = new Date();
        // date.setDate(date.getDate() + 5); // get the current day + 5
        // cy.log(date.getDate());

        // variável 'date' vai ser utilizada mais abaixo para localizar o dia, o mês e o ano atuais
        var date = new Date();
        date.setDate(date.getDate() + 365);
        
        // get the current year
        var futureYear = date.getFullYear();
        // correctly format the month
        var futureMonth = date.toLocaleString("default", {month: "long"});
        var futureDay = date.getDate();

        cy.log("Future year to select: " + futureYear);
        cy.log("Future month to select: " + futureMonth);
        cy.log("Future day to select: " + futureDay);

        function selectMonthAndYear() {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                if(!currentDate.text().includes(futureYear)) {
                    cy.get('.next').first().click();
                    selectMonthAndYear();
                }
            }).then(() => {
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                    if(!currentDate.text().includes(futureMonth)) {
                        cy.get('.next').first().click();
                        selectMonthAndYear();
                    }
                })
            })
        }

        function selectFutureDay() {
            cy.get('[class="day"]').contains(futureDay).click()
        }

        selectMonthAndYear();
        selectFutureDay();

    })
    
})