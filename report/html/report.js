$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/gmail.feature");
formatter.feature({
  "line": 1,
  "name": "Verifying the functionality of the web sites",
  "description": "",
  "id": "verifying-the-functionality-of-the-web-sites",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "Setting up the driver",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I set up the driver and open chrome",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.i_set_up_the_driver_and_open_chrome()"
});
formatter.result({
  "duration": 5560058720,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verifying the Hris",
  "description": "",
  "id": "verifying-the-functionality-of-the-web-sites;verifying-the-hris",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@Hris"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I launch the hris",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I  enter credentials to login",
  "rows": [
    {
      "cells": [
        "harishahi",
        "Hari@101$#"
      ],
      "line": 25
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.i_launch_the_hris()"
});
formatter.result({
  "duration": 2423347197,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_enter_credentials_to_login(DataTable)"
});
formatter.result({
  "duration": 4637989063,
  "status": "passed"
});
});