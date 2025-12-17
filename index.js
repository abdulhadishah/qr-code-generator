import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      type: "input",
      name: "inputUrl",
      message: "Please enter the URL you want to convert into a QR code:",
    },
  ])
  .then((answers) => {
    const userUrl = answers.inputUrl;

    const qrPng = qr.image(userUrl, { type: "png" });
    qrPng.pipe(fs.createWriteStream("qr_code.png"));

    fs.writeFile("original_url.txt", userUrl, (err) => {
      if (err) throw err;
      console.log("Your QR code and URL file have been successfully saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Unable to render the prompt in this terminal.");
    } else {
      console.log("An unexpected error occurred.");
    }
  });
