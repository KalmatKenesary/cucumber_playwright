Feature: login for mercury newtours
    @skip
    Scenario: login with valid username and password
        Given providing valid url
        When providing valid username and password
        Then clicking login button

    @skip
    Scenario Outline: login with valid username and password pass value in step
        Given providing valid url
        When providing valid username as "<username>" and password as "<password>"
        Then clicking login button

        Examples:
            | username | password             |
            | tomsmith | SuperSecretPassword! |
            | tomsmith | tomsmith             |
