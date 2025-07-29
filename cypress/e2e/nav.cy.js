describe('navigation', () => {

  beforeEach(() => {
    cy.visit('/songs', { timeout: 10000 });
  })

  it('displays displays all songs', () => {
    cy.get('h1').contains('The Deceitful Mind');
  })
})