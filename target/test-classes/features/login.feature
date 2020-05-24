#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template

   

@FirstTest
Feature: Search and place online order for groceries

Background: open the browser
Given user open the browser
When browser opens
Then maximize the browser
And Delete all cookies 

@SeleniumTest
  Scenario: search for items and validate results
    Given User is on greencart landing page
    When user search for Cucumber
    Then results for "Cucumber" are displayed
    
   @SeleniumTest
     Scenario Outline: search for items and validate results
    Given User is on greencart landing page
    When user search for <Name>
    And Added items to cart
    And User proceeded to checkout page for purchase
    Then verify selected <Name> items are displayed in checkout page
    
    Examples:
    |Name|
    |Brinjal|
    |Beetroot|

