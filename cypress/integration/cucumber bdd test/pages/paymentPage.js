
  //const { describe } = require("mocha");
  const paymentRadioButton = 'div:nth-child(1) > label > div.sc-bkbkJK.crkiWt > span';
  const cardHoldnerNameInput = '#cardholderName';
  const cardNumberInput = '#card-number';
  const cardExpirationDateInput = '#braintree-hosted-field-expirationDate';
  const cvvInput = '#braintree-hosted-field-cvv';
  const completeMyDonButton = '.ekVtXN > .sc-dlnjwi > .sc-gtsrHT';
  

class paymentPage
{


    static paymentFrom()
    {
        cy.get(paymentRadioButton).click()
        cy.get(cardHoldnerNameInput).type(Cypress.env('firstname'))

        cy.get('#braintree-hosted-field-number').its('0.contentDocument.body').then(cy.wrap).find(cardNumberInput).type('4000000000001000')
        
        cy.get('#braintree-hosted-field-expirationDate').its('0.contentDocument.body').then(cy.wrap).find(cardExpirationDateInput).click().type('1225')
        cy.get('#braintree-hosted-field-cvv').its('0.contentDocument.body').then(cy.wrap).find(cvvInput).click().type('123')
                  
    }
    
static clickOnCompleteDonation(){
    
    cy.get(completeMyDonButton).click
}

}

export default paymentPage