describe("Guardando elementos", () => {

    it("Repeticion", () => {
        cy.visit("/automation-practice-form")

        //Obteniendo el elemento padre
        cy.get('input[placeholder="First Name"]').parent()
        
        //Obteniendo los elementos padres
        cy.get('input[placeholder="First Name"]').parents().find('label')      
    })

    it("Evitar repeticion", () => {
        //Obteniendo el elemento padre
        cy.get('input[placeholder="First Name"]').parents('form').then((element) => {
            const inputs = element.find('input')
            const divs = element.find('div')
            const labels = element.find('label')

            //asserts
            expect(inputs.length).to.eq(15)
            expect(divs.length).to.eq(70)
            expect(labels.length).to.eq(16)

            cy.wrap(inputs).should('have.length', 15)
            cy.wrap(divs).should('have.length', 70)
            cy.wrap(labels).should('have.length', 16)
        })
        //Obteniendo los elementos padres
        cy.get('input[placeholder="First Name"]').parents().find('label')      
    })
})