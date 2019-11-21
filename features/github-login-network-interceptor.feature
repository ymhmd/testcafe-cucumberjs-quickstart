Feature: Intercept network when login to github

  Scenario Outline: User login
    Given User navigates to github login page
    Then User enters <username> as username and <password> as password
    Then Click login button
    Then Validate <username> and <password> are exist in the request body

    Examples:
      | username            | password            |
      | helloboys@gmail.com | helloboys@gmail.com |
      | holaboys@gmail.com  | holaboys@gmail.com  |
