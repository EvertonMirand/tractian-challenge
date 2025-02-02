import { assetsMock, companiesMock, locationsMock } from 'mocks/companies';

const companyId = companiesMock[0].id;
const unitId = '656a07bbf2d4a1001e2144c2';
const locationId = '656a07c3f2d4a1001e2144c5';
const assetId = '656a07cdc50ec9001e84167b';
const assetName = 'MOTOR RT COAL AF01';

describe('Company Asset Tree Interaction', () => {
  beforeEach(() => {
    cy.visit('/');

    cy.intercept('GET', 'https://fake-api.tractian.com/companies', {
      statusCode: 200,
      body: companiesMock,
    });
    cy.intercept(
      'GET',
      `https://fake-api.tractian.com/companies/${companyId}/locations`,
      {
        statusCode: 200,
        body: assetsMock,
      },
    );
    cy.intercept(
      'GET',
      `https://fake-api.tractian.com/companies/${companyId}/assets`,
      {
        statusCode: 200,
        body: locationsMock,
      },
    );
  });

  it('expands the asset tree and displays asset details upon selection', () => {
    cy.get(`[data-testid="unit-button-${companyId}"]`)
      .should('be.visible')
      .click();

    cy.get('[data-testid="search"]').should('be.visible');

    cy.get(`[data-testid="tree-item-${unitId}"]`).should('be.visible').click();

    cy.get(`[data-testid="tree-item-${locationId}"]`)
      .should('be.visible')
      .click();

    cy.get(`[data-testid="tree-item-${assetId}"]`).should('be.visible').click();

    cy.get(`[data-testid="asset-card-header-${assetId}"]`)
      .should('contain.text', assetName)
      .and('be.visible');
  });
});
