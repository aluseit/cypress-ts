Feature: Sign in functionality testing

Background:
Given I am on Archive page 

Scenario: should sigin with valid credentials 
When I insert valid cridentials
Then I should be signed in 

Scenario: should sigin with invalid credentials
When I insert invalid credential
Then Error message is displayed
