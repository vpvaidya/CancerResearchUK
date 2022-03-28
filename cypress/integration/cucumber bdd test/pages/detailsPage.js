
 const firstNameInput = '#forename';
 const lastNameInput = '#surname';
 const emailInput='#emailAddress';
 const phoneNumberInput='#phoneNumber';
 const clickAddressLink ='.AddressLookup__ManualEntryButton-sc-1eqdbzz-0';
 const address1Input ='[name="addressLine1"]';
 const cityInput ='[name="city"]';
 const postalCodeInput ='[name="postalCode"]';
 const contninueBuutonNext  ='.kffsok > .sc-gtsrHT';
 const emailOptInNo =':nth-child(1) > .OptIn__OptInFlex-sc-177kya2-3 > .sc-carFqZ > :nth-child(3) > .sc-bkbkJK > .sc-iemWCZ'
 


class detailsPage{

    static detailsFrom()
    {
        cy.contains('OK, continue to site').click()
        cy.get(firstNameInput).type(Cypress.env('firstname'))
        cy.get(lastNameInput).type(Cypress.env('lastname'))
        cy.get(emailInput).type(Cypress.env('email'))
        cy.get(phoneNumberInput).type(Cypress.env('phone'))
        cy.get(clickAddressLink).click()
        cy.get(address1Input).type(Cypress.env('address1'))
        cy.get(cityInput).type(Cypress.env('town'))
        cy.get(postalCodeInput).type(Cypress.env('postcode'))
        cy.get(emailOptInNo).click()
        
        
                  
    }

    static clickOnContinuebutton(){
        cy.get(contninueBuutonNext).click()
       
    }

}
export default detailsPage