const { navigateTo } = require("../support/page_objects/navigationPage");

describe("Test with Page Objects", () => {
  beforeEach("Open Home Page", () => {
    cy.openHomePage();
  });
  it("verify navigation across the pages", () => {
    navigateTo.groceryPage();
    navigateTo.homePage();
    navigateTo.clothingPage();
    navigateTo.homePage();
    navigateTo.toysPage();
  });
});
