describe('when the user navigates the site', () => {
  beforeEach(() => {
    cy.visit("/")
  });
  
  it('is expected the the user will be able to view a list of courses', () => {
    cy.get('[data-cy=header]').should("have.text", "COURSE LIST")
    cy.get("[data-cy=sub-header]").should("have.text", "Workshops Testing Vue Productivity Node React")

  });


});