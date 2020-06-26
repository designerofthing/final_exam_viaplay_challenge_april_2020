describe('User can view a list of TV shows', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('showns a header and footer', () => {
    cy.get('#header').should('exist')
    cy.get('#footer').should('exist')
  });

  it('showns an image inside the header', () => {
    cy.get('#header').within(() => {
    cy.get('#logo').find('img').should('be.visible')
    })
  });
  it('shows tv shows images', () => {
    cy.get('#main-container').within(() => {
      cy.get('.display-show').find('img').should('be.visible')
      })
  });  
})
