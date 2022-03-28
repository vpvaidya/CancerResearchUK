///<refernces types='Cypress'/>
import{Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import donationPage from '../pages/donationPage'
import detailsPage from '../pages/detailsPage'
import paymentPage from '../pages/paymentPage'


Given('I successfully browse to the application',function(){
       donationPage.navigateToCancerResearchApp()
       donationPage.verifyTitleInBrowserLink()
    
})
When('your-donation screen visble and able to fill all donation details', ()=>{

     donationPage.donationFrom()
})

Then('I should able to continue for next page', () =>{

    donationPage.clickOnContinuebutton()
    
})

When('your-details screen visble and able to fill all details', ()=>{

     detailsPage.detailsFrom()
})

Then('I should able to continue for next payment page', () =>{

    detailsPage.clickOnContinuebutton()
    
})


When('your-payment screen visble and able to fill all details', ()=>{

    paymentPage.paymentFrom()
})

Then('I should able to complete my donation journey', () =>{

    paymentPage.clickOnCompleteDonation()
    
})



 