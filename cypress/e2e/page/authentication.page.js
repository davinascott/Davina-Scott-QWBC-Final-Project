class AuthenticationPage{
    
    //#region Selectors
    get loginSignUpBtn() {
        return ('#signInOrRegister')
    }
    get loginTab() {
        return ('.auth0-lock-tabs > :first-child')
    }
    get signUpTab() {
        return ('.auth0-lock-tabs > :last-child')
    }
    get errorMsgContainer(){
        return ('div.auth0-lock-content-body-wrapper > div:nth-child(1) > div > div')
    }
    get errorMsgText() {
        return ('div.auth0-lock-content-body-wrapper > div:nth-child(1) > div > div > span > span')
    }

    //#endregion

    //#region Methods
    authenticate(email, password){
        cy.get(this.emailField).type(email)
        cy.get(this.passwordField).type(password)
        cy.get(this.submitBtn).click()
    }

    clearLoginFields(){
        cy.get(this.emailField).clear()
        cy.get(this.passwordField).clear()
    }
    //#endregion
}
export default new AuthenticationPage()