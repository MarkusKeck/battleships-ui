context('Actions', () => {

  it('go to page', () => {
    cy.visit('http://localhost:4200')
  })

  it('check default difficulty', () => {

    // check default select value
    cy.get('select')
      .should('have.value', 'MEDIUM')

  })

  it('select every difficulty option', () => {

    // Change difficulty to VERY_EASY
    cy.get('select')
      .select('VERY_EASY')
      .should('have.value', 'VERY_EASY')

    // Change difficulty to EASY
    cy.get('select')
      .select('EASY')
      .should('have.value', 'EASY')

    // Change difficulty to MEDIUM
    cy.get('select')
      .select('MEDIUM')
      .should('have.value', 'MEDIUM')

    // Change difficulty to HARD
    cy.get('select')
      .select('HARD')
      .should('have.value', 'HARD')

    // Change difficulty to VERY_HARD
    cy.get('select')
		  .select('VERY_HARD')
		  .should('have.value', 'VERY_HARD')

    // Change difficulty to VERY_HARD
    cy.get('select')
      .select('UNBEATABLE')
      .should('have.value', 'UNBEATABLE')

  })

  it('check button', () => {
    cy.get('button').click()

  })



  it('place SUBMARINE', () => {
    cy.get('app-field app-coordinate-field:nth-child(12)').click()
    cy.get('app-field app-coordinate-field:nth-child(4)').click()
    cy.get('app-field app-coordinate-field:nth-child(16)').click()
    cy.get('app-field app-coordinate-field:nth-child(20)').click()
  })

  it('select DESTROYER', () => {
    cy.get('.ship-placement button:nth-child(2)').click()
    cy.get('.ship-placement-type:nth-child(3)').click()
  })

  it('place DESTROYER', () => {
    cy.get('app-field app-coordinate-field:nth-child(36)').click()
    cy.get('app-field app-coordinate-field:nth-child(38)').click()
    cy.get('app-field app-coordinate-field:nth-child(41)').click()
  })

})
