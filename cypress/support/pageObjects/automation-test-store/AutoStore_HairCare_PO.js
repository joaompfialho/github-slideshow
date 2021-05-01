class AutoStore_HairCare_PO {
    addHairCareProductsToBasket() {
        globalThis.data.productName.forEach((productText) => {
            cy.addProductToBasket(productText)
        })

        cy.get('.dropdown-toggle > .fa').click().debug();
    }
        
}
export default AutoStore_HairCare_PO;