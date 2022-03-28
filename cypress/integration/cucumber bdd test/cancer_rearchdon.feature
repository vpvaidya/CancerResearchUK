Feature: Cancer Rearch UK Donation Screen details 

As a user I'm able to access the Donation screen 

    Scenario: Validate user able to access the Donation details

    Given I successfully browse to the application 
    When your-donation screen visble and able to fill all donation details
    Then I should able to continue for next page 

    
    Scenario: Validate user able to access the User details
    When your-details screen visble and able to fill all details
    Then I should able to continue for next payment page 

    Scenario: Validate user able to access the payment details
    When your-payment screen visble and able to fill all details
    Then I should able to complete my donation journey  

