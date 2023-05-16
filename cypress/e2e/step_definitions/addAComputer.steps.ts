import { When, Then,Given } from '@badeball/cypress-cucumber-preprocessor'

Given('I visit the app url', () => {
  cy.visit(Cypress.env('appUrl'))
})

When("I see the 'Computer database' title", () => {
  cy.contains('Computer database').should('be.visible')
})

Then("I click on 'Add a new computer' Button", () => {
  cy.get('#add').should('be.visible').click()
})

Then("I see 'Add a computer' title", () => {
  cy.contains('Add a computer').should('be.visible').click()
})

Then("I click on 'Create this computer' button", () => {
  cy.contains('Create this computer').should('exist').click()
})

Then("I see 'Add a computer' form", () => {
  cy.get('#name').should('be.visible')
  cy.get('#introduced').should('be.visible')
  cy.get('#discontinued').should('be.visible')
  cy.get('#company').should('be.visible')
  cy.contains('Create this computer').should('be.visible')
  cy.contains('Cancel').should('be.visible')
})

Then('I see error message', () => {
  cy.get('.error').should('be.visible')
})

Then('I enter {string} in computer name field', (item) => {
  const computerName = item as string
  if (item) {
    cy.get('#name').should('be.visible').type(computerName)
  }
})

Then('I enter {string} in introduced field', (item) => {
  const introducedDate = item as string
  if (item) {
    cy.get('#introduced').should('be.visible').type(introducedDate)
  }
})

Then('I enter {string} in discontinued field', (item) => {
  const discontinuedDate = item as string
  if (item) {
    cy.get('#discontinued').should('be.visible').type(discontinuedDate)
  }
})

Then('I click on company dropdown and select option {string}', (item) => {
  const option = item as string
  cy.get('#company').should('be.visible').select(option)
})

Then("I mistakenly click on 'Cancel' button", () => {
  cy.contains('Cancel').should('be.visible').click()
})

Then('I see successfully created computer alert message', () => {
  cy.get('.alert-message')
    .should('be.visible')
    .invoke('text')
    .then((text) => {
      expect(text).equal('Done !  Computer Test Computer has been created')
    })
})
