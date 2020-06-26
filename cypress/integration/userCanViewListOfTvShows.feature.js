describe("User can view a list of TV shows", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "https://content.viaplay.se/pc-se/serier/samtliga",
      response: "fixture:response.json",
    });
    cy.visit("/");
  });
  it("showns a header and footer", () => {
    cy.get("#header").should("exist");
    cy.get("#footer").should("exist");
  });

  it("showns an image inside the header", () => {
    cy.get("#header").find("img#logo").should("be.visible");
  });
  it("shows tv shows images", () => {
    cy.get("#main-container").within(() => {
      cy.get(".display-show").find("img").should("be.visible");
    });
  });
});
