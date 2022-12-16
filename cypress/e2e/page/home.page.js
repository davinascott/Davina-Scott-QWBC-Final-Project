class HomePage{
    //#Page Selectors

    //returns the The Automation Camp Store container on the header
    get pageHeader() {
        return ('.chakra-heading.css-kmq9po')
    }
    //returns the description banner on the home page
    get pageBanner() {
        return ('.chakra-text.css-122rm4p')
    }
    //returns the sort drop down 
    get sortField() {
        return ('#sort')
    }
    //returns the search box
    get searchField() {
        return ('#search')
    }
    //returns the category drop down 
    get categoryField() {
        return ('#category')
    }
    //returns the list of products on the home page
    // get productList() {
    //     return ('.chakra-stack.css-uaqjf')
    // }
    get firstProduct() {
        return ('#product-0 > div.css-5ge9zd > .chakra-aspect-ratio.css-791950')
    }

    get fistAddToCartBtn() {
        return ('[data-item-id="quality-hat-model"]')
    }

    get incrementBtn() {
        return ('#product-0-increase')
    }
    //#End Page Selectors

    //#Page Methods
    openProductDetail(){
        cy.get(this.firstProduct).click();
    }

    get cartContentsContainer() {
        return ('ul.snipcart-item-list.snipcart-scrollbar.snipcart-item-list--no-shadow')
    }

    //#End Page Methods

}
export default new HomePage()