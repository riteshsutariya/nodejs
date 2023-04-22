const cron = require("node-cron");
const shell = require("shelljs");
const fs = require("fs");

//this job will be executed at every saturday 12:30 PM
cron.schedule("30 12 * * 6", () => {
  console.log("-------------------");
  console.log("Running cron job");
  fs.unlink("error.log", (err) => {
    if (err) {
      throw err;
    }
    console.log("error file removed successfully.");
  });
});
