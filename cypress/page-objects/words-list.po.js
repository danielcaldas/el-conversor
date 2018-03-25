/*global cy*/

function WordsListPO() {
    this.getWords = () => cy.get('.words-list');
    this.getNWord = (n) => cy.get(`.words-list > :nth-child(${n})`);
}

module.exports = WordsListPO;