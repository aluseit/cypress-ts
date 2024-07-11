Feature: Generic Tile testing

Background:
Given I am on Stories Archive page

Scenario: should display tiles with image, title, and links
Then I see that generic tiles have image, title and link 

Scenario: should navigate to details page when tile is clicked
When I click on one of the tiles
Then I should be redirected to selected story detail page
