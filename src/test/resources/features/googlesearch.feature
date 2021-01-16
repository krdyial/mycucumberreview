@hooks
Feature: US1000 Google search test
  Scenario: TC01 verify iphone search
    Given user is on google page
    And user search for iphone
    Then verify the result has iphone

    Scenario: TC02 verify tea pot search
      Given user is on google page
      And user searchs for tea pot
      Then verify the result has tea pot

    Scenario: TC03 verfiy flower search
      Given user is on google page
      And user search for flower
      Then verify the result has flower


