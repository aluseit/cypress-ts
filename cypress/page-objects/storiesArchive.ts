import Base from './base'

export default class StoriesArchive extends Base{
  // Locators
  filterButtonNames = (['Medium', 'Category', 'Department', 'Series'])
  
  filtersBtn () {
    return cy.get('[data-qa="filter-bar"] > button')
  }
  
  accordion () {
    return cy.get('[data-qa="accordion"]')
  } 

  accordionBtn () {
    return cy.get('[data-qa="accordion"] button')
  }

  genericTile () {
    return cy.get('[data-qa="generic-tile"]')
  }

  genericTileTitle (){
    return cy.get('[data-qa="generic-tile-title"]')
  }

  storyMediaBtn () {
    return cy.get('button[aria-controls="accordion-panel-storyMedia"')
  } 
  
  clearAllBtn () {
    return cy.get('[data-qa="archive-clear-all-button"]')
  } 
  
  filterTag () {
    return cy.get('[data-qa="archive-filter-tag"]')
  } 
  
  filterBadgeBtn () {
    return cy.get('[data-qa="archive-button-badge"]')
  }

  loadMoreBtn () {
    return cy.get('[data-qa="load-more-button"]')
  }
}