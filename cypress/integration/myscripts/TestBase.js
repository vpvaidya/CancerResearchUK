//const { describe } = require("mocha");

describe ('Launch my application',()=>{

    it('app testing flow',()=>{
        cy.visit('https://app.pws.int.cruk.org/support-us/your-donation')
        cy.url().should('include', 'your-donation')
        cy.contains('OK, continue to site')
        cy.contains('OK, continue to site').click()
       // cy.get('#onetrust-accept-btn-handler').click()
        cy.get('input[name="donationAmount.otherAmount"]').type('10')
       // cy.get('typeRadioGroup0').check()
       //.get('[value="yes"]').check()
       cy.get('#typeRadioGroup > .hHgOSe > .sc-dIvrsQ > .sc-bkbkJK > .sc-iemWCZ').click()
      // cy.get('.sc-fKgJPI').select('In memory of someone')
      cy.get('[name="motivation"]').select('In memory of someone')
      cy.get('#destinationRadioGroup > .lilusD > .sc-dIvrsQ > .sc-dlMDgC').click()
       cy.get('[name="restriction"]').select('Bowel cancer').should('have.value','Bowel cancer')
       //cy.get('.fqnWGW > .sc-fKgJPI').select('Bowel cancer')
       cy.get('.sc-gtsrHT').click()
      // cy.get('sc-fKgJPI sQIXt').select('mr')
      cy.get('#forename').type('Tester')
      cy.get('#surname').type('O Doh-erty')
      cy.get('#emailAddress').type('auto-pws@cancer.org.uk')
      cy.get('#phoneNumber').type('07999999999')
      cy.get('.AddressLookup__ManualEntryButton-sc-1eqdbzz-0').click()
      cy.get('[name="addressLine1"]').type('37 The Rowans')
      cy.get('[name="city"]').type('Woking')
      cy.get('[name="postalCode"]').type('GU22 7SS')
    
     /* cy.get(':nth-child(4) > .sc-fFSPTT > .sc-jSFjdj > .sc-kEqXSa > .sc-iqAclL').type('37 The Rowans')
      cy.get(':nth-child(7) > .sc-fFSPTT > .sc-jSFjdj > .sc-kEqXSa > .sc-iqAclL').type('Woking')
      cy.get(':nth-child(8) > .sc-fFSPTT > .sc-jSFjdj > .sc-kEqXSa > .sc-iqAclL').type('GU22 7SS')*/
      cy.get('.kffsok').click()
     // cy.get('[type="radio"].sc-kfYoZR iIRWRo').check("1")
     // cy.get('[name="paymentRadioGroup"]').first().check()
      //cy.get('[type="radio"]').check('bt')

     // cy.get('input[name="donationAmount.otherAmount"]').type('10')
      cy.get(':nth-child(1) > .sc-dIvrsQ > .sc-bkbkJK > .sc-iemWCZ').first().check()
    // cy.get(':nth-child(1) > .sc-dIvrsQ > .sc-dlMDgC').check('1')
    // cy.get('PaymentToggle__FieldWrapper-sc-1lx54at-1 iPgRyN').check()
   //  cy.get('[type="radio"]').first().click()
  // cy.get('input[type="radio"]').check('bt',{force:true})
   // cy.get('bt0').first().click()
  // cy.get(':nth-child(1) > .sc-dIvrsQ > .sc-dlMDgC').select('1')
      //cy.get('[value="bt"]').check()
     // cy.get(':nth-child(1) > .sc-dIvrsQ > .sc-dlMDgC').check({force:true})
     //cy.get('div.DonationFormWrapper__SiteContainer-sc-1l2p12z-0.iRcDXf div.FormGroup__FormGroupStyled-sc-tf6z59-0.diNMRz:nth-child(1) div.FormFields__FormFieldsStyled-sc-1bav6xx-0.sfNTl fieldset:nth-child(1) div.PaymentToggle__RadioButtonGroup-sc-1lx54at-0.hWQFAh:nth-child(2) div.PaymentToggle__FieldWrapper-sc-1lx54at-1.iPgRyN:nth-child(1) label.sc-dIvrsQ.gzcaJz > span.sc-hHEiqL.jwIrSl').click()

     //cy.get('#braintree-hosted-field-number').then(
    /*  cy.get('#card-number').then(function($ele){
        var ifele = $ele.contents().find('#credit-card-number')
        cy.wrap(ifele).clear().click().type('4000000000001000')
    })*/

    cy.get('#braintree-hosted-field-number').then(function(iframe){
      iframe.cotents.fi
    })
      cy.get('#cardholderName').type('Tester')
      cy.get('#credit-card-number').type('4000000000001000')
      cy.get('#expiration').type('1225')
      cy.get('#cvv').type('123')
    })
})