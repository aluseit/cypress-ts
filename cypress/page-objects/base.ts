export default class Base{
  // Locators
 signInBtn = ('button[class="chr-button chr-button--primary chr-button--sm chr-button--light"] span[class="chr-button__text"]')
 emailField = ('#username')
 passwordField = ('#password')
 submitBtn = ('button[type="submit"]')
 revealPasswordBtn = ('button[aria-label="Reveal password"]')
 createAccountBtn = ('.chr-button.chr-button--secondary.chr-button--lg.chr-button--light.chr-button--full-width')
 forgotPassword = ('.chr-button__text.chr-body.chr-link--underline')
 errorMessageOnSumbit = ('.align-items-center.d-inline-flex.mb-5 > .chr-color-red-alert.chr-label.content-zone')
 errorMessageEmail = ('#username_ErrorText')
 errorMessagePassword = ('#password_ErrorText')
 searchBar = ('#site-search')
 searchBtn = ('.chr-autocomplete-input__wrapper > chr-button.hydrated > .chr-button > .hydrated > .chr-icon__wrapper > .chr-icon')
 searchHedaer = ('[data-qa="search-header"]')
 menuBtn = ('.chr-button chr-button--icon chr-button--lg chr-button--light chr-button--icon-right')
 menuDropdown = ('."chr-header__drawer"')
 logOutBtn = ('button[type="button"] span[class="chr-button__text chr-action"]')

  // Methods

signIn (userName : string, password : string) {
  cy.get(this.signInBtn).click()
  cy.get(this.emailField).type(userName, {force:false, delay:0}) 
  cy.get(this.passwordField).type(password, {force:false, delay:0})
  cy.get(this.submitBtn).click()
}

/*invalidSignIn(userName, password) {
 cy.get(this.signInBtn).click()
 cy.get(this.emailField).type(userName, {force:false})
 cy.get(this.passwordField).type(password, {force:false})
 cy.get(this.submitBtn).click()
}*/

errorMessageEmailField () {
  cy.get(this.signInBtn).click()
  cy.get(this.emailField).click()
  cy.get(this.errorMessageEmail)
  .should('have.text', 'Please fill out email field.' )
}

errorMessagePasswordField() {
  cy.get(this.signInBtn).click()
  cy.get(this.passwordField).click()
  cy.get(this.errorMessagePassword)
  .should('have.text', 'Please fill out password field.')
}

errorMessageSubmit () {
  cy.get(this.errorMessageOnSumbit)
  .should('have.text', 'The email address and password that you entered did not match our records. Please double-check and try again, or contact Client Services for further assistance.')
}

viewPassword () {
  cy.get(this.signInBtn).click()
  cy.get(this.emailField).type('username', {force:false, delay:0}) 
  cy.get(this.passwordField).type('password', {force:false, delay:0})
  cy.get(this.revealPasswordBtn).click()
  .should('have.attr', 'aria-label', 'Hide password')
}

forgotPasswordOption () {
 cy.get(this.signInBtn).click()
 cy.get(this.forgotPassword).click();
 // cy.url().should('eq', 'mychristies/passwordretrieval.aspx');
}

searchForKeyword (entry : string) {
  cy.get(this.searchBar).type(entry)
  cy.get(this.searchBtn).click()
  cy.get(this.searchHedaer).should('contain', entry)
}

menuDropdownOpen () {
  cy.get(this.menuBtn).click()
  cy.get(this.menuDropdown).should('be.visible')
}
}