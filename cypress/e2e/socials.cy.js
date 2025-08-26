describe('social banner', () => {

  beforeEach(() => {
    cy.visit('/', { timeout: 10000 });
  })

  it('displays all the social links', () => {
    cy.get('.banner-socials a').should('have.length',6)
    .get('a').eq(0).should('have.attr', 'href', 'https://www.instagram.com/thedeceitfulmind/')
    .get('a').eq(1).should('have.attr', 'href', 'https://www.facebook.com/TheDeceitfulMind/')
    .get('a').eq(2).should('have.attr', 'href', 'https://www.youtube.com/channel/UCDJiZDVS2wHexkZvj0kirgQ')
    .get('a').eq(3).should('have.attr', 'href', 'https://open.spotify.com/artist/1NRdg3EZ3RIQkrUS52eaI6')
    .get('a').eq(4).should('have.attr', 'href', 'https://music.apple.com/us/artist/the-deceitful-mind/1149643171')
    .get('a').eq(5).should('have.attr', 'href', 'https://www.amazon.com/music/player/artists/B01LEGQGNI/the-deceitful-mind')
  })
})