Feature: Add a computer
  Scenario: As a user, user is able to see validation messages on required field when user try to create computer without entering data
    Given I visit the app url
    When I see the 'Computer database' title
    And I click on 'Add a new computer' Button
    Then I see 'Add a computer' title
    And I see 'Add a computer' form
    Then I click on 'Create this computer' button
    And I see error message