describe('songs', () => {

  beforeEach(() => {
    cy.visit('/', { timeout: 10000 });
  })

  it('displays displays all songs', () => {
    cy.get('a[href*="/songs').click();
    cy.url().should('be.equal', 'http://localhost:5173/songs')
    cy.get('.container .card').should('have.length', 5)
    cy.get('.container > :nth-child(1) > h2')
    cy.contains('Catch on Fire')
    cy.get('.container > :nth-child(1) > ul > li').should('have.length', 2)
    cy.get('.container > :nth-child(1) > ul > :nth-child(1) a').should('have.attr', 'href', 'https://open.spotify.com/track/0pPuFEhR6k9Fpu1zGCjpVz?si=e31ef71857154177')
    cy.get('.container > :nth-child(1) > ul > :nth-child(2) a').should('have.attr', 'href', 'https://music.apple.com/us/song/catch-on-fire/1149643178')
  })
})