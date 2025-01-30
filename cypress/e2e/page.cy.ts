describe('Page Interaction', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should expand a tree-item and show its nested-tree when clicked', () => {
    cy.get('[data-testid^="unit-button-"]').first().click();

    cy.get('[data-testid="search"]').should('be.visible');

    cy.get('[data-testid^="tree-item-"]').each(($treeItem) => {
      if ($treeItem.find('[data-testid^="expand-item-"]').length > 0) {
        cy.wrap($treeItem).click();

        const treeItemTestId = $treeItem.attr('data-testid');
        const nestedTreeTestId = treeItemTestId?.replace(
          'tree-item-',
          'nested-tree-',
        );

        cy.get(`[data-testid="${nestedTreeTestId}"]`).should('be.visible');

        return false;
      }
    });
  });
});
