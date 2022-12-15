class ProductDetailPage{
//#Page Selectors

//return the product title on the product details page
get productTitle() {
    return ('div.chakra-stack.css-84zodg > h2:nth-child(1)')
}

//return the image tage for the product image
get productImage() {
    return ('li.slide.selected > div > img')
}

//returns the price div fro the product
get priceDiv() {
    return ('div.chakra-stack.css-egoftb > div:nth-child(3)')
}

//return the add to cart button
get addToCartBtn() {
    return ('#add-to-cart')
}

//#End Page Selectors

//#Page Methods 

//#End Page methods
}
export default new ProductDetailPage()