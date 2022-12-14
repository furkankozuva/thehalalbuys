/// <reference types="cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("Our first suite", () => {
  it("first test", () => {
    cy.visit("/");
    cy.contains("Search").click();
    // by tag name
    /*cy.get("input");
    // by ID
    cy.get("#inputEmail1");
    // by class name
    cy.get(".input-full-width");
    // by attribute name
    cy.get("[placeholder]");
    // by attribute name and value
    cy.get("[placeholder='Email']");
    // by class value
    cy.get("[class='input-full-width size-medium shape-rectangle']");
    // by tag name and attribute with value
    cy.get("input[placeholder='Email']");
    // by two different attributes
    cy.get("[placeholder='Email'][type='email']");
    // by tag name, attribute with value, ID, and class name
    cy.get("input[placeholder='Email']#inputEmail1.input-full-width");
    // the most recommended way by Cypress
    cy.get("[data-cy='inputEmail1']");*/
  });

  it("second test", () => {
    cy.visit("/");
    cy.get("[data-cy='groceryImg']").click();
    cy.contains("Description");
  });

  it("then method", () => {
    cy.visit("/");
    cy.get(".filter-option").then((filterOption) => {
      const filterOptionText = filterOption.text();
      expect(filterOptionText).to.equal("All Categories");
      cy.wrap(filterOption).should("contain", "All Categories");
    });
  });
});

it("invoke command", () => {
  cy.visit("/");
  cy.contains("[class='col-lg-3 col-sm-6 col-md-3']", "Grocery").click();
  cy.get("[class='price-box-right']").find("[class='selection']").click();
  cy.contains("li", "Alaska").click();
  cy.get("[class='price-box-right']")
    .find("[class='selection']")
    .invoke("text")
    .should("contain", "Alaska");
});

it("dropdown test", () => {
  cy.visit("/");
  cy.get(".col-sm-3 button").then((dropdown) => {
    cy.get(".dropdown-menu li").each((listItem) => {
      const itemText = listItem.text();
      cy.wrap(dropdown).click();
      cy.wrap(listItem).click();
      cy.wrap(dropdown).should("contain", itemText);
    });
  });
});

it.only("api test", () => {
  cy.intercept("GET", "http://127.0.0.1:5500/images/flag.png").as("langFlag");

  cy.openHomePage();

  cy.wait("@langFlag").then((img) => {
    expect(img.response.statusCode).to.equal(200);
  });
});
