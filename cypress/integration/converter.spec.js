/*global cy*/
const SANDBOX_URL = Cypress.env('SANDBOX_URL');

const HeaderPO = require('../page-objects/header.po');
const WordsListPO = require('../page-objects/words-list.po');
const FooterInfoPO = require('../page-objects/footer-info.po');

describe('Converter e2e tests', function () {
  before(function () {
    this.footerInfoPO = new FooterInfoPO();
    this.wordsListPO = new WordsListPO();
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

        this.wordsListPO.getNWord(1)
          .should('have.text', 'aee');
        this.wordsListPO.getNWord(2)
          .should('have.text', 'bee');
        this.wordsListPO.getNWord(3)
          .should('have.text', 'cee');
      });

      it('should sort alpha', function () {
        this.headerPO.getSortCheck().click();
        this.headerPO.getConvertBtn().click();

        this.wordsListPO.getNWord(1)
          .should('have.text', 'add');
        this.wordsListPO.getNWord(2)
          .should('have.text', 'ade');
        this.wordsListPO.getNWord(3)
          .should('have.text', 'adf');
      });

      it('should only return words that match dictionary', function () {
        this.headerPO.getDictCheck().click();
        this.headerPO.getConvertBtn().click();

        this.wordsListPO.getNWord(1)
          .should('have.text', 'add');
        this.wordsListPO.getNWord(2)
          .should('have.text', 'bed');
        this.wordsListPO.getNWord(3)
          .should('have.text', 'bee');
      });
    });
  });
});
