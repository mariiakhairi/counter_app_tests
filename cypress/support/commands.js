// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("checkResult", (expectedResult) => {
  cy.get("h2").then((header) => {
    expect(header.text()).contains(expectedResult);
  });
});
Cypress.Commands.add("clickCheckResult", (buttonValue, expectedResult) => {
  cy.get("button").contains(buttonValue).click({ force: true });
  cy.checkResult(expectedResult);
});

Cypress.Commands.add("clickButton", (buttonValue) => {
  cy.get("button").contains(buttonValue).click({ force: true });
});

Cypress.Commands.add("resetCheckResult", () => {
  cy.get("button").contains("Reset").click({ force: true });
  cy.wait(500);
  cy.checkResult(10);
});
