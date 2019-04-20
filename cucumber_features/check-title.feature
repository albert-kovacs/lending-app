Feature: Opening Lending App and checking page title correctness 

Scenario: Checking page title
  Given I navigate to the Landing App main page
  When I maximize the window size
  Then I should get page title "Lending App"