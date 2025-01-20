/// <reference types="cypress" />

describe('Navegación', () => {
    it('Navegación a Google', () => {
        cy.visit('https://www.google.com')
    })

    // it('Recargar la página', () => {
    //     cy.visit('https://www.google.com')
    //     cy.reload()
    // })

    // it('Recargar la página de forma forzada', () => {
    //     cy.visit('https://www.google.com')
    //     cy.reload(true)
    // })

    it.only('Navegar hacia atrás', () => {
        cy.visit('https://platzi.com')
        cy.wait(3000)
        cy.visit('https://platzi.com/cursos/')
        cy.wait(3000)
        cy.go('back') // also -1
        cy.wait(3000)
        cy.go('forward') // also 1
    })
 })