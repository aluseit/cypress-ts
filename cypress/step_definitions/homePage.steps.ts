import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('I am on the home page', () => {
  // Implement your code to navigate to the home page
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

When('I type and submit in the board name', () => {
  // Implement your code to type and submit the board name
  cy.get('input[name="username"]').type('Admin');
  cy.get('input[name="password"]').type('admin123');
  cy.get('button[type="submit"]').click();
});

Then('I should be redirected to the board detail', () => {
  // Implement your code to verify the new board is visible
  cy.url().should('contains', 'dashboard');
});