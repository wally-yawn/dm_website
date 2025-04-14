describe('navigation', () => {

  beforeEach(() => {
    cy.visit('/', { timeout: 10000 });
  })

  it('displays the main page', () => {
    cy.get('h1').contains('The Deceitful Mind');
  })

  it('navigates to the Shows page', () => {
    cy.get('a[href*="/shows').click();
    cy.url().should('be.equal', 'http://localhost:5173/shows')
  })

  it('navigates to the Band page', () => {
    cy.get('a[href*="/theband').click();
    cy.url().should('be.equal', 'http://localhost:5173/theband')
  })

  it('navigates to the Songs page', () => {
    cy.get('a[href*="/songs').click();
    cy.url().should('be.equal', 'http://localhost:5173/songs')
  })
})