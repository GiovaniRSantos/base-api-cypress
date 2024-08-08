/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     *   
     */
    getAllJson()
    validateAllJsonReturned()
  }
}

Cypress.Commands.add("getAllJson", () => {
  return cy.getResource("todos")
})

Cypress.Commands.add("validateAllJsonReturned", () => {
  cy.getAllJson().then((res) => {
    expect(res.status).eq(200)
  })
})


