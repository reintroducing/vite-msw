import App from './App';

describe('App', () => {
  it('should render data correctly', () => {
    cy.mount(<App />)
      .get('#tour-amateur')
      .click()
      .get('#data')
      .contains('Tour Leaderboard - Amateur');
  });
});
