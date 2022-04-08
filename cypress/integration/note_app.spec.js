describe('Note App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('frontpage can be opened', () => {
    cy.contains('Notes')
  })

  it('login fore can be opened', () => {
    cy.contains('Show login').click()
    cy.get('input:first').type('michell29')
    cy.get('input:last').type('123456789')
    cy.contains('Log in').click()
    cy.contains('New Note').click()
  })
})