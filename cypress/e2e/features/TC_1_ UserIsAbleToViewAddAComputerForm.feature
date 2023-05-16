Feature: Add a computer
  Scenario: As a user, user is able to view "Add a computer" form
    Given I visit the app url
    When I see the 'Computer database' title
    Then I click on 'Add a new computer' Button
    Then I see 'Add a computer' title
    And I see 'Add a computer' form