/*global cy*/
const SANDBOX_URL = Cypress.env('SANDBOX_URL');

const HeaderPO = require('../page-objects/header.po');
const FooterInfoPO = require('../page-objects/footer-info.po');

describe('Converter e2e tests', function () {
  before(function () {
    this.footerInfoPO = new FooterInfoPO();
    this.headerPO = new HeaderPO();

    cy.visit(SANDBOX_URL);
  });

  describe('Smoke', function () {
    describe('Header', function () {
      it('should display header', function () {
        this.headerPO.getConvertBtn()
          .should('be.visible')
          .and('have.text', 'Convert!');
      });
    });

    describe('Footer', function () {
      it ('should be properly displayed', function () {
        this.footerInfoPO.getTitle()
          .should('be.visible')
          .and('have.text', 'El Conversor');
        this.footerInfoPO.getGithubLink()
          .should('be.visible')
          .and('have.attr', 'href', 'https://github.com/danielcaldas/el-conversor');
      });
    });
  });

  describe('Functional', function () {
    describe('given that the user wants to convert a number', function () {
      it('should convert 233', function () {
        // input 233 and press "ENTER"
        this.headerPO.getInputField()
          .clear()
          .type('233{enter}');

        // @TODO: Check results area
      });

      it('should sort alpha', function () {
        this.headerPO.getSortCheck().click();
        this.headerPO.getConvertBtn().click();

        // @TODO: Check results area
      });

      it('should only return words that match dictionary', function () {
        this.headerPO.getDictCheck().click();
        this.headerPO.getConvertBtn().click();

        // @TODO: Check results area
      });
    });
  });
});
