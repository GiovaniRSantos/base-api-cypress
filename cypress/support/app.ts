

/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
* * @example cy.getResource()
*   Gets a resource
*   @param {string} resource
*   @param {string} queryParam
*/
    getResource(resource, queryParam?: string, headers?: Object): Chainable;
    postResource(resource: string, body, token?)
  }
}


function getEndpoint(resource) {
  const baseEndpoint = Cypress.env('endpoint')

  let options = {
    todos: "/todos"
  }
  return baseEndpoint + options[resource]
}

Cypress.Commands.add("getResource", (resource, queryParam?: string, headers?: Object) => {
  const endpoint = getEndpoint(resource)
  let url: string
  url = endpoint
  if (queryParam) {
    url = endpoint + '/?' + queryParam
  }

  let requestInfo = {
    method: 'GET',
    url: url,
    failOnStatusCode: false,
    headers
  }
  return cy.request(requestInfo)
})

Cypress.Commands.add("postResource", (resource: string, body, headers?) => {
  const endpoint = getEndpoint(resource)

  let requestInfo = {
    method: 'POST',
    url: endpoint,
    body: body,
    failOnStatusCode: false
  }

  if (headers) {
    requestInfo['headers'] = headers
  }

  console.log(requestInfo)
  return cy.request(requestInfo)
})
