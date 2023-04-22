const cron = require("node-cron");
const shell = require("shelljs");
// Schedule task to be run on server every minute
cron.schedule("* * * * *", () => {
  console.log("this is task scheduled by cron...");
});
