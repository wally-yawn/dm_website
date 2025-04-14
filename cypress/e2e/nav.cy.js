describe('navigation', () => {
  it('displays the main page', () => {
    cy.visit('/', { timeout: 10000 });
    cy.get('h1').contains('The Deceitful Mind');
  })
})