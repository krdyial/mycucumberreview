$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/googlesearch.feature");
formatter.feature({
  "name": "US1000 Google search test",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@hooks"
    }
  ]
});
formatter.scenario({
  "name": "TC01 verify iphone search",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@hooks"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on google page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.GoogleSearchStepDefinitions.user_is_on_google_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search for iphone",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GoogleSearchStepDefinitions.user_search_for_iphone()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the result has iphone",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.GoogleSearchStepDefinitions.verify_the_result_has_iphone()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.fail(Assert.java:96)\r\n\tat stepdefinitions.GoogleSearchStepDefinitions.verify_the_result_has_iphone(GoogleSearchStepDefinitions.java:27)\r\n\tat ✽.verify the result has iphone(file:///C:/Users/UXU/IdeaProjects/mycucumberreview/src/test/resources/features/googlesearch.feature:6)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshots");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "TC02 verify tea pot search",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@hooks"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on google page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.GoogleSearchStepDefinitions.user_is_on_google_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searchs for tea pot",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GoogleSearchStepDefinitions.user_searchs_for_tea_pot()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the result has tea pot",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.GoogleSearchStepDefinitions.verify_the_result_has_tea_pot()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "TC03 verfiy flower search",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@hooks"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on google page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.GoogleSearchStepDefinitions.user_is_on_google_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search for flower",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.GoogleSearchStepDefinitions.user_search_for_flower()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the result has flower",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.GoogleSearchStepDefinitions.verify_the_result_has_flower()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat stepdefinitions.GoogleSearchStepDefinitions.verify_the_result_has_flower(GoogleSearchStepDefinitions.java:45)\r\n\tat ✽.verify the result has flower(file:///C:/Users/UXU/IdeaProjects/mycucumberreview/src/test/resources/features/googlesearch.feature:16)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", "screenshots");
formatter.after({
  "status": "passed"
});
});