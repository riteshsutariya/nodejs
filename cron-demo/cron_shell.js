const cron = require("node-cron");
const shell = require("shelljs");

//make directory using shell at 12:30 PM
cron.schedule("30 12 * * *", () => {
  if (shell.exec("mkdir test").code !== 0) {
    shell.exit();
  } else {
    console.log("directory created successfully.");
  }
});
