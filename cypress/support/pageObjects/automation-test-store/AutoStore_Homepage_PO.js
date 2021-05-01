class AutoStore_HomePage_PO {
    accessHomepage() {
        cy.visit("https://automationteststore.com/");
    }

    clickOn_HairCare_Link() {
        cy.xpath("//*[contains(@href,'product/category&path')]").contains("Hair Care").click()
    }
}
export default AutoStore_HomePage_PO;