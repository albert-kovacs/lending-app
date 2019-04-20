Feature: Checking required input alert message 

Scenario: Checking alert message
  Given I navigate to the Landing App main page
  When I maximize the window size
  And I click on the submit button
  Then I should get error message "This field is required."