Feature: Add categories 

    @kategori @all
    Scenario: Successfully add new categories
        Given I access the category feature
        When I make a new category
        Then I should get new categories