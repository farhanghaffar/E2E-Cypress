Feature: Add a computer
  Scenario: As a user, User is able to cancel the computer form while creating a new computer
    Given I visit the app url
    When I see the 'Computer database' title
    Then I click on 'Add a new computer' Button
    And I see 'Add a computer' title
    And I see 'Add a computer' form
    Then I enter 'Test Computer' in computer name field
    Then I enter '2022-02-07' in introduced field
    Then I enter '2023-05-12' in discontinued field
    Then I click on company dropdown and select option '1'
    And I mistakenly click on 'Cancel' button
    Then I see the 'Computer database' title