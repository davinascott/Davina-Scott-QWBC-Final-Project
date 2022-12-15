import AuthenticationPage from '../page/authentication.page'
import HomePage from '../page/home.page'
import ProductDetail from '../page/productDetail.page'

describe('Product Detail', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.clearCookies()
        cy.get(AuthenticationPage.loginSignUpBtn).click()
        cy.origin("https://dev-mlluudmotpwoldtv.us.auth0.com",{ args: {} },({}) => {
            //cy.get(AuthenticationPage.emailField).should('be.visible')
            cy.get('[type="email"]').type("test1@tester.com");
            cy.get('[type="password"]').type("Password1", { log: false });
            cy.get("[name=submit]").click();
            }
        );
        cy.visit('https://ui-automation-camp.vercel.app/products/quality-hat-model')
        

    });

    //Checks if the product title is present and visible on the product detail page
    it('Have the product title visible', () => {
        //cy.visit('https://ui-automation-camp.vercel.app/products/quality-hat-model')
        //cy.get(HomePage.firstProduct).click();
        //cy.clearCookies()
        // HomePage.openProductDetail();
        // // cy.origin("https://ui-automation-camp.vercel.app/products/quality-hat-model",{ args: {} },({}) => {
        // //     cy.url().should('contain', 'quality')
        // //     }
        // // )
        // cy.url().should('contain', 'quality')
        cy.get(ProductDetail.productTitle).should('be.visible', { timeout: 10000});
        cy.get(ProductDetail.productTitle).should('have.text','Quality Fitted Hat ');
    });

    //Checks if the product price tag is present and visible on the product detail page
    it('Have the product price visible', () => {
        //cy.visit('https://ui-automation-camp.vercel.app/products/quality-hat-model')
        //HomePage.openProductDetail();
        cy.get(ProductDetail.priceDiv).should('be.visible');
    });

    //Checks if a product is present and visible on the product detail page
    it('Have a product image visible', () => {
        //cy.visit('https://ui-automation-camp.vercel.app/products/quality-hat-model')
        cy.get(ProductDetail.productImage).should('be.visible');
    });

    //Checks if the add to cart button is present and visible on the product detail page
    it('Have the add to cart button visible', () => {
        //cy.visit('https://ui-automation-camp.vercel.app/products/quality-hat-model')
        cy.get(ProductDetail.addToCartBtn).should('be.visible');
    });

});