Feature: Testing the login in kasirAja

    Background:
        Given I am on the login page

     Scenario : As a user, I cannot login with invalid data
        When I login with email <email> and password <password>
        And I click button login
        Then I must see error message saying "<errorMessage>"

        Examples:
            | email                  | password  | message                            |
            | tokoscincare@gmail.com | devy      | Kredensial yang Anda berikan salah |


    Scenario: As a user, I can login with valid data
        When I input email "<email>" and password "<password>"
        And I click on button login
        Then I must navigated to dashboard page

        Examples:
            | email                  | password |
            | tokoscincare@gmail.com | devy123  |