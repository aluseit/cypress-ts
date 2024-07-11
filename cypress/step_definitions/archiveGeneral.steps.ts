import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import StoriesArchive from "../page-objects/storiesArchive";

const storiesArchive = new StoriesArchive()

Given('I am on stories archive page', () => {
  cy.visit('/en/stories/archive');
}); 

  When("page is loaded", () => {
    cy.title()
        .should('eq', 'All Features')
    cy.url()
        .should('not.include', 'cn')
    cy.get('.fcPhSP')
        .should('contain','All Features')
    cy.get('.imZsg')
        .should('contain','Search our extensive collection of engaging editorial content')
  });

  Then("page should have all components", () => {
    storiesArchive.genericTile()
        .should('have.length', 10)
    storiesArchive.filtersBtn()
        .should('be.visible')
        .click()
    storiesArchive.accordion()
        .should('be.visible')
  })