/// <reference types="Cypress"/>

describe("Test Scenarios", () => {
  it("Increment and Decrement Tests", () => {
    cy.visit("http://localhost:3000/");

    // +1 check result
    cy.clickCheckResult(1, 11);

    // -1 check result
    cy.clickCheckResult(-1, 10);
  });
  it("Reset Test", () => {
    cy.visit("http://localhost:3000/");
    //add one reset
    cy.clickButton("1");
    cy.resetCheckResult();

    //+1 reset
    cy.clickButton("1");
    cy.resetCheckResult();

    //-1 reset
    cy.clickButton("-1");
    cy.resetCheckResult();
  });
  it("Negative Counter Value Test", () => {
    cy.visit("http://localhost:3000/");

    //check if app doesn't crash if result is negative
    for (let i = 0; i < 11; i++) {
      cy.clickButton(-1);
    }
    cy.checkResult(-1);
  });
});
