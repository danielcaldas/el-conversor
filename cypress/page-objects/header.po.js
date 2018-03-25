/*global cy*/

function HeaderPO() {
    this.getInputField = () => cy.get('.input-area__input');
    this.getSortCheck = () => cy.get(':nth-child(1) > .input-area__option__check');
    this.getDictCheck = () => cy.get(':nth-child(2) > .input-area__option__check');
    this.getConvertBtn = () => cy.get('.input-area__convert');
}

module.exports = HeaderPO;