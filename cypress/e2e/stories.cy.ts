// const { describe } = require("mocha");
import StoriesArchive from "../page-objects/storiesArchive";

const storiesArchive = new StoriesArchive()

function toggleFilter (filterName : string, checkboxName : string, select : boolean){
    const filterSelector = (`[aria-controls="accordion-panel-${filterName}"]`)
    const checkboxSelector = (`input[name=${checkboxName}]`)
    
    storiesArchive.filtersBtn().click()
    cy.get(filterSelector).click({force: true});
    
    if(select){
        cy.get(checkboxSelector).check({force: true})
    }
    else {
        cy.get(checkboxSelector).uncheck({force: true});
    }
}

beforeEach(() => {
    cy.visit('/en/stories/archive');
});

describe("Stories Archive page quick general testing", () => {
    it("should stories archive general test", () => {
        cy.title()
            .should('eq', 'All Features')
        cy.url()
            .should('not.include', 'cn')
        cy.get('.fcPhSP')
            .should('contain','All Features')
        cy.get('.imZsg')
            .should('contain','Search our extensive collection of engaging editorial content')
        storiesArchive.genericTile()
            .should('have.length', 10)
        storiesArchive.filtersBtn()
            .should('be.visible')
            .click()
        storiesArchive.accordion()
            .should('be.visible')
    });
})
    
describe('Filter Button Functionality', () => {
    it('should check that filter options are hidden when page is loaded', () => {
        storiesArchive.filtersBtn()
        .should('be.visible')
        .and('not.have.class','.sc-kYQakU.dFGLkx');
    });

    it('should display filter list when clicked', () => {
        storiesArchive.filtersBtn().click()

        storiesArchive.accordionBtn().each(($button, index) => {
            cy.wrap($button)
            .should('be.visible')
            .and('have.attr', 'aria-expanded', 'false')
            .and('contain', storiesArchive.filterButtonNames[index])
        })
    });
    
    it('should check checkbox for selected filter tag when filter is chosen', () => {
        toggleFilter('storyMedia', 'Video', true); 

        cy.get('input[name="Video"]')
            .should('be.checked');
        storiesArchive.filterTag()
            .should('be.visible')
            .and('have.text', 'Video')
    });

    it('should uncheck checkbox for selected filter tag when filter is unselected', () => {
        toggleFilter('storyMedia', 'Video', false);

        cy.get('input[name="Video"]')
            .should('not.be.checked');
        storiesArchive.filterTag()
            .should('not.exist')
    });

    it('should check that number of selected filter is displayed correctly', () => {
        toggleFilter('departments', 'Jewellery', true)

        storiesArchive.filterBadgeBtn()
            .should('have.text', '1')
    });

    it('should clear all selected filters', () => {
        toggleFilter('storyCategories', 'Luxury', true)
        toggleFilter('departments', 'Jewellery', true)
        
        storiesArchive.filterBadgeBtn()
            .should('have.text', '2')
        storiesArchive.clearAllBtn()
            .should('be.visible')
            .click()
        storiesArchive.filterTag()
            .should('not.exist')
    });
});
  
describe('generic tiles testing', () => {
    it('should display tiles with image, title, and link', () => {
        storiesArchive.genericTile().each(($tile) => {
            cy.wrap($tile).should('be.visible')
            cy.wrap($tile).find('img').should('be.visible');
            cy.wrap($tile).find('[data-qa="generic-tile-title"]').should('be.visible');
            cy.wrap($tile).find('a').should('have.attr', 'href').and('include', '/stories');
        });
    });

    it('should navigate to details page when tile is clicked', () => {
        storiesArchive.genericTileTitle().first().click();
        cy.url().should('include', '/stories');
    });
});

describe('load more button test', () => {
    it('should check load more button', () => {
        storiesArchive.loadMoreBtn()
            .should('be.visible')
            .should('contain', 'Showing 10 of 100')
        storiesArchive.loadMoreBtn()
            .click()
            .should('contain', 'Showing 20 of 100')
    
        storiesArchive.genericTile().should('have.length', 20)
    });
});

describe('sigin functionality testing', () => {
    it('should sigin with valid credentials', () => {
        storiesArchive.signIn('alya_98@mail.ru', 'Halamadrid4')
        cy.get(storiesArchive.logOutBtn).should('have.text', 'Log out')
    });

    it('should reveal password', () => {
        storiesArchive.viewPassword()
    })

    it('should sigin with invalid credentials', () => {
        storiesArchive.signIn('test@mail.com', 'password')
        storiesArchive.errorMessageSubmit()
    });

    it('should display error on empty email field', () => {
        storiesArchive.errorMessageEmailField()
    });

    it('should display error on empty password field', () => {
        storiesArchive.errorMessagePasswordField()
    });

    /* it.only('should open page for forgotten password', () => {
        storiesArchive.forgotPasswordOption()
    })
    */
});

describe('search from header', () => {
    it('should search for a keyword', () => {
        storiesArchive.searchForKeyword('andy')
    })
});

