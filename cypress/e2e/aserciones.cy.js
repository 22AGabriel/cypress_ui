describe('Aserciones', () => {

    // before(() => {
    //     cy.visit('/automation-practice-form')
    // })

    beforeEach(() => {
        cy.visit('/automation-practice-form')
    })

    // after(() => {
    //     cy.visit('https://www.google.com')
    // })

    afterEach(() => {
        cy.visit('https://www.google.com')
        cy.wait(2000)
    })

    it('Aserción', () => {
        cy.url().should('include', 'demoqa.com')
        cy.get('#firstName').should('be.visible').and('have.attr', 'placeholder', 'First Name')
    })

    it('Aserción 2', () => {
        cy.get('#firstName').then((element) => {
            expect(element).to.be.visible
            expect(element).to.have.attr('placeholder', 'First Name')
        })
    })

    it('Aserción 3', () => {
        cy.get('#firstName').then((element) => {
            assert.equal(element.attr('placeholder'), 'First Name')
        })
    })
})