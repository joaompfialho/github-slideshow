/// <reference types="Cypress" />

import AutoStore_HomePage_PO from '../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO'
import AutoStore_HairCare_PO from '../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO'

describe("Add multiple items to basket", () => {
    const autoStore_Homepage_PO = new AutoStore_HomePage_PO();
    const autoStore_HairCare_PO = new AutoStore_HairCare_PO();

    before(() => {
        cy.fixture("products").then((data) => {
            globalThis.data = data;
        })
    })

    beforeEach(() => {
        autoStore_Homepage_PO.accessHomepage();
        autoStore_Homepage_PO.clickOn_HairCare_Link();
    })

    it("TC001 - Add specific items to basket", () => {
        autoStore_HairCare_PO.addHairCareProductsToBasket();
    })

})