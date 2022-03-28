
const donationAmounInput = 'input[name="donationAmount.otherAmount"]';
const donationTypeRB = '#typeRadioGroup > .hHgOSe > .sc-dIvrsQ > .sc-bkbkJK > .sc-iemWCZ';
const motivationDropDown='[name="motivation"]';
const donationGoesRB='#destinationRadioGroup > .lilusD > .sc-dIvrsQ > .sc-dlMDgC';
const cancerTypeDropDown ='[name="restriction"]';
const continueButton ='.sc-gtsrHT'


class donationPage{

       
       static navigateToCancerResearchApp(){
    
        cy.visit(Cypress.env('url'))
    }

    static verifyTitleInBrowserLink(){

        cy.url().should('include', 'your-donation')
        cy.contains('OK, continue to site').click()
    }

    static donationFrom()
    {

        cy.get(donationAmounInput).type(Cypress.env('amount'))
        cy.get(donationTypeRB).click()
        cy.get(motivationDropDown).select(Cypress.env('motivation')).should('have.value','In memory of someone')
        cy.get(donationGoesRB).click()
        cy.get(cancerTypeDropDown).select(Cypress.env('cancerType')).should('have.value','RES005')
            
    }

    static clickOnContinuebutton(){
        cy.get(continueButton).click()
    }

}

    
export default donationPage
