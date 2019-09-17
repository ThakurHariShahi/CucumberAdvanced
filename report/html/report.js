$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/gmail.feature");
formatter.feature({
  "line": 2,
  "name": "Verifying the functionality of the web sites",
  "description": "",
  "id": "verifying-the-functionality-of-the-web-sites",
  "keyword": "Feature"
});
formatter.background({
  "line": 4,
  "name": "Setting up the driver",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I set up the driver and open chrome",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.i_set_up_the_driver_and_open_chrome()"
});
formatter.result({
  "duration": 7477433461,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verifying the Hris",
  "description": "",
  "id": "verifying-the-functionality-of-the-web-sites;verifying-the-hris",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@Hris"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I launch the hris",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I  enter credentials to login",
  "rows": [
    {
      "cells": [
        "harishahi",
        "Hari@101$#"
      ],
      "line": 26
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.i_launch_the_hris()"
});
formatter.result({
  "duration": 2241606700,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_enter_credentials_to_login(DataTable)"
});
formatter.result({
  "duration": 4431191609,
  "status": "passed"
});
});