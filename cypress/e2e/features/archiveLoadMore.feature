Feature: load more button test

Scenario: should check load more buttons functionality
Given I am on stories archive 
When I click on load more button
Then I see that 10 more items were loaded
