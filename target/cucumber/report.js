$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/login.feature");
formatter.feature({
  "name": "Search and place online order for groceries",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@FirstTest"
    }
  ]
});
formatter.background({
  "name": "open the browser",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user open the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BackgroundSteps.user_open_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "browser opens",
  "keyword": "When "
});
formatter.match({
  "location": "steps.BackgroundSteps.browser_opens()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "maximize the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BackgroundSteps.maximize_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Delete all cookies",
  "keyword": "And "
});
formatter.match({
  "location": "steps.BackgroundSteps.delete_all_cookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "search for items and validate results",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FirstTest"
    },
    {
      "name": "@SeleniumTest"
    }
  ]
});
formatter.step({
  "name": "User is on greencart landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.MyStepDefinitions.user_is_on_greencart_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search for Cucumber",
  "keyword": "When "
});
formatter.match({
  "location": "steps.MyStepDefinitions.user_search_for(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "results for \"Cucumber\" are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.MyStepDefinitions.results_for_something_are_displayed(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "search for items and validate results",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SeleniumTest"
    }
  ]
});
formatter.step({
  "name": "User is on greencart landing page",
  "keyword": "Given "
});
formatter.step({
  "name": "user search for \u003cName\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "Added items to cart",
  "keyword": "And "
});
formatter.step({
  "name": "User proceeded to checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "name": "verify selected \u003cName\u003e items are displayed in checkout page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Name"
      ]
    },
    {
      "cells": [
        "Brinjal"
      ]
    },
    {
      "cells": [
        "Beetroot"
      ]
    }
  ]
});
formatter.background({
  "name": "open the browser",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user open the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BackgroundSteps.user_open_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "browser opens",
  "keyword": "When "
});
formatter.match({
  "location": "steps.BackgroundSteps.browser_opens()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "maximize the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BackgroundSteps.maximize_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Delete all cookies",
  "keyword": "And "
});
formatter.match({
  "location": "steps.BackgroundSteps.delete_all_cookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "search for items and validate results",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FirstTest"
    },
    {
      "name": "@SeleniumTest"
    }
  ]
});
formatter.step({
  "name": "User is on greencart landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.MyStepDefinitions.user_is_on_greencart_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search for Brinjal",
  "keyword": "When "
});
formatter.match({
  "location": "steps.MyStepDefinitions.user_search_for(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Added items to cart",
  "keyword": "And "
});
formatter.match({
  "location": "steps.MyStepDefinitions.added_items_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User proceeded to checkout page for purchase",
  "keyword": "And "
});
formatter.match({
  "location": "steps.MyStepDefinitions.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify selected Brinjal items are displayed in checkout page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.MyStepDefinitions.verify_selected_items_are_displayed_in_checkout_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "open the browser",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user open the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.BackgroundSteps.user_open_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "browser opens",
  "keyword": "When "
});
formatter.match({
  "location": "steps.BackgroundSteps.browser_opens()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "maximize the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.BackgroundSteps.maximize_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Delete all cookies",
  "keyword": "And "
});
formatter.match({
  "location": "steps.BackgroundSteps.delete_all_cookies()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "search for items and validate results",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FirstTest"
    },
    {
      "name": "@SeleniumTest"
    }
  ]
});
formatter.step({
  "name": "User is on greencart landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.MyStepDefinitions.user_is_on_greencart_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search for Beetroot",
  "keyword": "When "
});
formatter.match({
  "location": "steps.MyStepDefinitions.user_search_for(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Added items to cart",
  "keyword": "And "
});
formatter.match({
  "location": "steps.MyStepDefinitions.added_items_to_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User proceeded to checkout page for purchase",
  "keyword": "And "
});
formatter.match({
  "location": "steps.MyStepDefinitions.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify selected Beetroot items are displayed in checkout page",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.MyStepDefinitions.verify_selected_items_are_displayed_in_checkout_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});