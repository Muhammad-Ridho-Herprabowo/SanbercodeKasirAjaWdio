Feature: KasirAja Login Test

    @login @all
    Scenario: Login successfully with valid credentials
        Given I open the KasirAja website
        When I login with valid credentials
        Then I should see the dashboard