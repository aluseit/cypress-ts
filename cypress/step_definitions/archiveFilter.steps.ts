import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import StoriesArchive from "../page-objects/storiesArchive";

const storiesArchive = new StoriesArchive()

Given('I am on Stories Archive page', () => {
    cy.visit('/en/stories/archive');
});

When('I check filter options', () => {
      storiesArchive.filtersBtn()
      .should('be.visible')
  });

Then('I see that filter option are hidden', () => {
  storiesArchive.filtersBtn()
  .should('not.have.class','.sc-kYQakU.dFGLkx');
})


When('I click on filter button', () => {
    storiesArchive.filtersBtn().click()
});
Then('Filter options are displayed', () => {
  storiesArchive.accordionBtn().each(($button, index) => {
    cy.wrap($button)
    .should('be.visible')
    .and('have.attr', 'aria-expanded', 'false')
    .and('contain', storiesArchive.filterButtonNames[index])
  })
});


When('Chosing one of the filters tag', () => {
  storiesArchive.toggleFilter('storyMedia', 'Video', true); 
})
Then('Checkbox should be checked', () => {
  cy.get('input[name="Video"]')
    .should('be.checked');
  storiesArchive.filterTag()
    .should('be.visible')
    .and('have.text', 'Video')
})


When('I unselect filter option', () => {
  storiesArchive.toggleFilter('storyMedia', 'Video', false);
});

Then('Checkbox should be unchecked', () => {
  cy.get('input[name="Video"]')
    .should('not.be.checked');
  storiesArchive.filterTag()
    .should('not.exist')
});

When('I select one of the filters', () => {
  storiesArchive.toggleFilter('departments', 'Jewellery', true)
});

Then('Number of selected filter is displayed correctly', () => {
  storiesArchive.filterBadgeBtn()
  .should('have.text', '1')
});

When('I clear selected filters', () => {
  storiesArchive.toggleFilter('storyCategories', 'Luxury', true)
  storiesArchive.toggleFilter('storyMedia', 'Video', true)
  storiesArchive.filterBadgeBtn()
      .should('have.text', '2')
  storiesArchive.clearAllBtn()
      .should('be.visible')
      .click()
});
Then('I see that selected filters were cleared', () => {
    storiesArchive.filterTag()
    .should('not.exist')
});
