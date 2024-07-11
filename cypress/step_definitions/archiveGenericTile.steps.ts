import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import StoriesArchive from "../page-objects/storiesArchive";

const storiesArchive = new StoriesArchive()

Given('I am on stories archive page', () => {
  cy.visit('/en/stories/archive');
}); 


Then('I see that generic tiles have image, title and link', () => {
    storiesArchive.genericTile().each(($tile) => {
    cy.wrap($tile).should('be.visible')
    cy.wrap($tile).find('img').should('be.visible');
    cy.wrap($tile).find('[data-qa="generic-tile-title"]').should('be.visible');
    cy.wrap($tile).find('a').should('have.attr', 'href').and('include', '/stories');
    });
  })

  When('I click on one of the tiles', () => {
    storiesArchive.genericTileTitle().first().click();
  });

  Then('I should be redirected to selected story detail page', () => {
    cy.url().should('include', '/stories');
  })
  



