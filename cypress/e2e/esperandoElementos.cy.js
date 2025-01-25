describe('Esperando elementos', () => {
    beforeEach(() => {
        cy.visit('https://www.platzi.com')
    })

    it('Esperar por un tiempo definido', () => {
        cy.wait(5000)
    })

    it('Esperar por un elemento', () => {
        cy.get('.PublicHeader_publicHeader_ctaLogin__pO__W')
    })

    it('Esperar por un elemento y hacer una aserción', () => {
        cy.get('.PublicHeader_publicHeader_ctaLogin__pO__W', { timeout: 5000 })
            .should('be.visible')
    })
})

describe('Guardando elementos 2', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it.only('Deshabilitar el retry', () => {
        // cy.get('.home-banner', {timeout: 5000})
        cy.get('.home-banner', {timeout: 0})
    })
})