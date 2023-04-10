describe('ngx-components', () => {
  beforeEach(() => cy.visit('/iframe.html?id=gbbuttoncomponent--primary'));
  it('should render the component', () => {
    cy.get('angular-nx-storybook-monorepo-gb-button').should('exist');
  });
});
