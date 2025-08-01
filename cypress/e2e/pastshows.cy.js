describe('navigation', () => {

  beforeEach(() => {
    cy.visit('/', { timeout: 10000 });
  })

  it('displays displays all past shows', () => {
    cy.get('a[href*="/pastshows').click();
    cy.url().should('be.equal', 'http://localhost:5173/pastshows')
    cy.get('.container .past-show').should('have.length', 2)
    cy.get('.container .past-show').eq(0).within(() => {
        cy.get('h2').contains('Past show 1')
        .get('p').should('have.length', 3)
        .get('p').eq(0).contains(`Where: Fraco's`)
        .get('p').eq(1).contains(`When: June 12, 2025 at 9pm`)
        .get('p').eq(2).contains(`Cover: None`)
      })
      cy.get('.container .past-show').eq(1).within(() => {
        cy.get('h2').contains('Past 2!')
        .get('p').should('have.length', 3)
        .get('p').eq(0).contains(`Where: The Moon`)
        .get('p').eq(1).contains(`When: June 12, 2024 at 7pm`)
        .get('p').eq(2).contains(`Cover: $10`)
      })
    })
})