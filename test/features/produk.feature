Feature: Add Product

    @produk @all
    Scenario: Successfully add new product
        Given I access the product feature
        When I make a new product
        Then I should get new product