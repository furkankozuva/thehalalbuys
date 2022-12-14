export class categories {
  homePage() {
    cy.openHomePage();
  }

  groceryPage() {
    cy.get("[class='col-lg-3 col-sm-6 col-md-3']").contains("Grocery").click();
  }
  clothingPage() {
    cy.get("[class='col-lg-3 col-sm-6 col-md-3']")
      .contains("Clothing & Shoes")
      .click();
  }
  toysPage() {
    cy.get("[class='col-lg-3 col-sm-6 col-md-3']")
      .contains("Toys & Games")
      .click();
  }
}

export const navigateTo = new categories();
