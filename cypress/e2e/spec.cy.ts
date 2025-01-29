describe('Page Interaction', () => {
  beforeEach(() => {
    // Visit the homepage or the page where the component is rendered
    cy.visit('/');
  });

  it('should expand a tree-item and show its nested-tree when clicked', () => {
    // Navigate to the unit page by clicking the first unit button
    cy.get('[data-testid^="unit-button-"]').first().click();

    // Ensure the search component is visible after navigation
    cy.get('[data-testid="search"]').should('be.visible');

    // Iterate through all tree-items to find one with an expand-item
    cy.get('[data-testid^="tree-item-"]').each(($treeItem) => {
      // Check if the current tree-item contains an expand-item
      if ($treeItem.find('[data-testid^="expand-item-"]').length > 0) {
        // Click on the tree-item to expand it
        cy.wrap($treeItem).click();

        // Derive the nested-tree's test ID from the tree-item's test ID
        const treeItemTestId = $treeItem.attr('data-testid');
        const nestedTreeTestId = treeItemTestId.replace(
          'tree-item-',
          'nested-tree-',
        );

        // Assert that the nested-tree is visible after clicking
        cy.get(`[data-testid="${nestedTreeTestId}"]`).should('be.visible');

        // Stop iterating after the first match to avoid unnecessary clicks
        return false;
      }
    });
  });
});
