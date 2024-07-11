import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import StoriesArchive from "../page-objects/storiesArchive";

const storiesArchive = new StoriesArchive()

Given('I am on Archive page', () => {
    cy.visit('/en/stories/archive');
});

When('I insert valid cridentials', () => {
  storiesArchive.signIn('alya_98@mail.ru', 'Halamadrid4')
});

Then('I should be signed in', () => {
  cy.get(storiesArchive.logOutBtn).should('have.text', 'Log out')
});

When('I insert invalid credential', () => {
  storiesArchive.signIn('test@mail.com', 'password')
});

Then('Error message is displayed', () => {
  storiesArchive.errorMessageSubmit()
});