Feature: Checking delete function on list page after entering new item 

Scenario: Checking if item is deleted from list page
  Given I navigate to the Landing App main page
  When I enter test values to required input fields
  And I click on the submit button
  And I click on the delete button
  Then I check if item is removed