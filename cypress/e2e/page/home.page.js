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
    get productList() {
        return ('.chakra-stack.css-uaqjf')
    }
    //#End Page Selectors

    //#Page Methods

    //#End Page Methods

}
export default new HomePage()