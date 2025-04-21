Feature: login for mercury newtours

    Scenario Outline: login with valid username and password pass value in step
        Given providing valid url
        When providing valid username as "<username>" and password as "<password>"
        Then clicking login button

        Examples:
            | username | password             |
            | tomsmith | SuperSecretPassword! |
