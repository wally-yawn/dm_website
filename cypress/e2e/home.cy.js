describe('home page', () => {

  beforeEach(() => {
    cy.visit('/', { timeout: 10000 });
  })

  it('displays displays all upcoming shows', () => {
    cy.get('.container .card').should('have.length', 2)
    cy.get('.container .card').eq(0).within(() => {
        cy.get('h2').contains('Upcoming Show 2!')
        .get('p').should('have.length', 3)
        .get('p').eq(0).contains(`Where: Fraco's`)
        .get('p').eq(1).contains(`When: June 12, 2098 at 9pm`)
        .get('p').eq(2).contains(`Cover: $25`)
      })
      cy.get('.container .card').eq(1).within(() => {
        cy.get('h2').contains('Upcoming Show 1!')
        .get('p').should('have.length', 3)
        .get('p').eq(0).contains(`Where: Fraco's`)
        .get('p').eq(1).contains(`When: June 12, 2099 at 9pm`)
        .get('p').eq(2).contains(`Cover: None`)
      })
    })

    it('displays the news container', () =>{
      cy.get('.news .card')
      .get('p').contains(`We're hard at work recording new music! Release date announcements coming soon!`)
      .get('img').should('have.attr', 'src')
      .and('include', '/assets/capybara.jpg')
    })
})