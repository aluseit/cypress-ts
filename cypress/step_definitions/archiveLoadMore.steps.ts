import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import StoriesArchive from "../page-objects/storiesArchive";

const storiesArchive = new StoriesArchive()

Given('I am on stories archive', () => {
  cy.visit('/en/stories/archive');
}); 

When('I click on load more button', () => {
      storiesArchive.loadMoreBtn()
          .should('be.visible')
          .should('contain', 'Showing 10 of 100')
      storiesArchive.loadMoreBtn()
          .click()
});

Then('I see that 10 more items were loaded', () => {
  storiesArchive.loadMoreBtn().should('contain', 'Showing 20 of 100')
  storiesArchive.genericTile().should('have.length', 20)

});