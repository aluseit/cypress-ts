Feature: Stories Archive quick general test
Scenario: Check page renderings
  Given I am on stories archive page 
  When page is loaded
  Then page should have all components 
