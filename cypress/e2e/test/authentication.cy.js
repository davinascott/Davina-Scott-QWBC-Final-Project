import AuthenticationPage from '../page/authentication.page'

describe('Authentication', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get(AuthenticationPage.loginSignUpBtn).click()
    })

    it('Only login with a valid user', () => {
        cy.origin("https://dev-mlluudmotpwoldtv.us.auth0.com",{ args: {} },({}) => {
            //cy.get(AuthenticationPage.emailField).should('be.visible')
            cy.get('[type="email"]').type("test1@tester.com");
            cy.get('[type="password"]').type("Password1", { log: false });
            cy.get("[name=submit]").click();
            }
        );
    })

    it.only('Only sign up with valid credentials', () => {
        cy.origin("https://dev-mlluudmotpwoldtv.us.auth0.com",{ args: {} },({}) => {
            cy.get('.auth0-lock-tabs > :last-child').should('be.visible');
            cy.get('.auth0-lock-tabs > :last-child').click();
            cy.get('[type="email"]').type("test1@testerle.com");
            cy.get('[type="password"]').type("Password1", { log: false });
            cy.get("[name=submit]").click();
            }
        );
    })
});