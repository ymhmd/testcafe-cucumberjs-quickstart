Feature: Sample feature

  Scenario: User can search
    Given User navigates to google home page
    Then User enter "hello cucumber" as search text
    Then Click search button

  Scenario: User can search with different text
    Given User navigates to google home page
    Then User enter "hello testcafe" as search text
    Then Click search button