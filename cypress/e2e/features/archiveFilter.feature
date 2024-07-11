Feature: Filter Button Functionality

Background:
Given I am on Stories Archive page

Scenario: Check that filter options are hidden when page is loaded
When I check filter options
Then I see that filter option are hidden

Scenario: Display filter list when clicked
When I click on filter button
Then Filter options are displayed

Scenario: should check checkbox for selected filter tag when filter is chosen
When Chosing one of the filters tag
Then Checkbox should be checked

Scenario: should uncheck checkbox for selected filter tag when filter is unselected
When I unselect filter option
Then Checkbox should be unchecked

Scenario: should check that number of selected filter is displayed correctly
When I select one of the filters
Then Number of selected filter is displayed correctly

Scenario: should clear all selected filters
When I clear selected filters
Then I see that selected filters were cleared

