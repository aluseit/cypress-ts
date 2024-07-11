Feature: Login functionality

  Scenario: Create a board
    Given I am on the home page
    When I type and submit username and password
    Then I should be redirected to the detail page
