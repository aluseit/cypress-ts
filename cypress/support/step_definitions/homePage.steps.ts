import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('I am on the home page', () => {
  // Implement your code to navigate to the home page
  cy.visit('http://example.com/home');
});

When('I type and submit in the board name', () => {
  // Implement your code to type and submit the board name
  cy.get('input[name="boardName"]').type('New Board');
  cy.get('button[type="submit"]').click();
});

Then('I should see the new board', () => {
  // Implement your code to verify the new board is visible
  cy.contains('New Board').should('be.visible');
});
