const readline = require("readline");

const { exec } = require("child_process");

const { stdin: input, stdout: output, stdin } = require("process");

const readuser = readline.createInterface({ input, output });

const openBrowser = async (query) => {
  try {
    const queryWithoutSpaces = query.replace(/\s+/g, "");
    const url = `https://www.google.com/search?q=${queryWithoutSpaces}`;

    const command =
      process.platform == "win32"
        ? "start"
        : process.platform == "darwin"
        ? "open"
        : null;

    console.log(command);

    exec(`${command} ${url}`, (err, stdout, stderr) => {
      if (err) {
        console.log("error", err);
      } else if (stderr) {
        console.log("error", stdin);
      } else if (stdout) {
        console.log("error", stdout);
      } else {
        console.log("Opend");
      }
    });
  } catch (error) {
    console.log(error);
  }
};

readuser.question("Search : ", (userres) => {
  openBrowser(userres);
});
