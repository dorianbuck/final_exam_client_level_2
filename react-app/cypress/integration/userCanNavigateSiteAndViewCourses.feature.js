describe("when the user navigates the site", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("when information is daisplayed on screen", () => {
    it("is expected the the user will be able to view a list of courses", () => {
      cy.get("[data-cy=header]").should("have.text", "COURSE LIST");
      cy.get("[data-cy=sub-header]").should("be.visible");
    });

    it("is expected to have these attributes visibale", () => {
      cy.get("[data-cy=course-header]").should("be.visible");
      cy.get("[data-cy=course-description]").should("be.visible");
      cy.get("[data-cy=course-category]").should("be.visible");
      cy.get("[data-cy=course-constructors]").should("be.visible");
      cy.get("[data-cy=course-info]").should("be.visible");
      cy.get("[data-cy=course-price]").should("be.visible");
    });
  });
});
