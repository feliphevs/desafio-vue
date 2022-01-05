/// <reference types="Cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
  });

describe('Escolher uma liga', () => {
  it('Sucesso', () => {
    cy.visit('http://localhost:8081/juliano');
    cy.get('.botoes > :nth-child(1)').click();
    cy.wait(3000);
    cy.get('.botoes > :nth-child(2)').click();
    cy.wait(2000);
    cy.get('.botoes > :nth-child(3)').click();
    cy.wait(2000);
    cy.get('.botoes > :nth-child(4)').click();
    cy.wait(2000);
    cy.get('.botoes > :nth-child(5)').click();
    cy.wait(2000);
    cy.get('.botoes > :nth-child(6)').click();
  })
})