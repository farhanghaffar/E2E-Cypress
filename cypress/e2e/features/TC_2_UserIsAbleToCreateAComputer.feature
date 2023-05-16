Feature: Add a computer
  Scenario: As a user, user is able to create a computer by entering valid data
    Given I visit the app url
    When I see the 'Computer database' title
    And I click on 'Add a new computer' Button
    Then I see 'Add a computer' title
    Then I enter 'Test Computer' in computer name field
    Then I enter '2022-02-07' in introduced field
    Then I enter '2023-05-12' in discontinued field
    Then I click on company dropdown and select option '1'
    And I click on 'Create this computer' button
    And I see successfully created computer alert message