/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     *   
     */
    getAllJson()
    validateAllJsonReturned()
    createPost(itle: string, body: string, user_id: number)
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

Cypress.Commands.add("createPost", (title: string, body: string, user_id: number) => {
  cy.postResource("posts", {
    title: title,
    body: body,
    userId: user_id,
  }).then((res) => {
    
    expect(res.status).eq(201)
    const { id, body, title, userId } = res.body;
    const expectedBody = {
      body,
      id,
      title,
      userId
    };

    expect(res.body).to.deep.equal(expectedBody);
  })
})


