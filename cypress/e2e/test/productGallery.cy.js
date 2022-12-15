import AuthenticationPage from '../page/authentication.page'
import HomePage from '../page/home.page'

describe('Product Gallery', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get(AuthenticationPage.loginSignUpBtn).click()
        cy.origin("https://dev-mlluudmotpwoldtv.us.auth0.com",{ args: {} },({}) => {
            //cy.get(AuthenticationPage.emailField).should('be.visible')
            cy.get('[type="email"]').type("test1@tester.com");
            cy.get('[type="password"]').type("Password1", { log: false });
            cy.get("[name=submit]").click();
            }
        );
    });

    //Checks if the banner containing the 'Shop Now' message and description is visible on the homepage
    it('Have welcome banner visible', () => {
        cy.get(HomePage.pageBanner).should('be.visible');
        cy.get(HomePage.pageBanner).should('have.text','Shop Now,');
    });

    //Checks if the sort drop down field is visible
    it('Have the sort dropdown visible', () => {
        cy.get(HomePage.sortField).should('be.visible');
    });

    //Checks if the search box is visible
    it('Have the search box visible', () => {
        cy.get(HomePage.searchField).should('be.visible');
    });

    //Checks if the category drop down field is visible
    it('Have the category dropdown visible', () => {
        cy.get(HomePage.categoryField).should('be.visible');
    });

});