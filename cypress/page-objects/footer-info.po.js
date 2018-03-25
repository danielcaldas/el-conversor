/*global cy*/

function FooterInfoPO() {
    this.getTitle = () => cy.get('.footer-info__title');
    this.getGithubLink = () => cy.get('.footer-info__github');
}

module.exports = FooterInfoPO;