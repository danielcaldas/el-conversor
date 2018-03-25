/*global cy*/
const SANDBOX_URL = Cypress.env('SANDBOX_URL');

const FooterInfoPO = require('../page-objects/footer-info.po');

describe('Converter e2e tests', function () {
  before(function () {
    cy.visit(SANDBOX_URL);
  });

  describe('Footer', function () {
    it ('should be properly displayed', function () {
      const footerInfoPO = new FooterInfoPO();
  
      footerInfoPO.getTitle()
        .should('be.visible')
        .and('have.text', 'El Conversor');
      footerInfoPO.getGithubLink()
        .should('be.visible')
        .and('have.attr', 'href', 'https://github.com/danielcaldas/el-conversor');
    });
  });
});
