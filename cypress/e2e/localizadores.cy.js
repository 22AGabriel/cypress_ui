/// <reference types="cypress" />

describe('Localizadores', () => {
    it("Obtenerlo por medio de un tag", () => {
        cy.visit('/automation-practice-form')
        cy.get('input')
    })
}) 