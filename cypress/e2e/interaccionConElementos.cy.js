describe('Interacción con elementos', () => {

    it('Click', () => {
        cy.visit('/buttons')
        cy.get('button').eq(3).click() // Arranca en 1
        cy.get('#dynamicClickMessage').should('be.visible').and('contain', 'You have done a dynamic click')
    })
    
    it('Double Click', () => {
        cy.visit('/buttons')
        cy.get('#doubleClickBtn').dblclick()
        cy.get('#doubleClickMessage').should('be.visible').and('contain', 'You have done a double click')
    })

    it('Right Click', () => {
        cy.visit('/buttons')
        cy.get('#rightClickBtn').rightclick()
        cy.get('#rightClickMessage').should('be.visible').and('contain', 'You have done a right click')
    })

    it('Force Click', () => {
        cy.visit('/dynamic-properties')
        cy.get('#enableAfter').click({force: true})
    })

    it('Click por posición', () => {
        cy.visit(('/buttons'))
        cy.get('button').eq(3).parent().parent().click('topRight')
        cy.get('button').eq(3).parent().parent().click(50, 50)
    })

    it('Input de tipo texto', () => {
        cy.visit('/automation-practice-form')
        cy.get('#firstName').type('Gabriel')
        cy.get('#lastName').type('Azubel')

        cy.get('#firstName').type('Gabriel') // Se concatena

        cy.get('#firstName').clear() // Mejor opcion
        // cy.get('#firstName').type('{selectAll}{backspace}') Simula una interacción más cercana a la del usuario real.

        cy.get('#firstName').type('Otro nombre')
    })

    it.only('Checkboxes y radio buttons', () => {
        cy.visit('/automation-practice-form')

        // cy.get('#gender-radio-1').check() // Error al estar envuelto en un label
        // cy.get('#gender-radio-1').check({force: true}) // Comportamiento no optimo

        cy.get('label[for="gender-radio-1"]').click()

        // cy.get('#hobbies-checkbox-1').check({force: true})
        // cy.get('#hobbies-checkbox-1').uncheck({force: true})
        cy.get('label[for="hobbies-checkbox-1"]').click()
    })
})