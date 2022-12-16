import AuthenticationPage from '../page/authentication.page'
import HomePage from '../page/home.page'

describe('ASdd To Cart', () => {
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
    })

    it('Add a single item to cart', () => {
        cy.get('#product-0 > #add-to-cart').click();
        cy.get(':nth-child(1) > .snipcart-item-line__container').should('be.visible');
    })

});