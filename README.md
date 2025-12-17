# 🔳 QR Code Generator

A simple Node.js command-line application that generates a QR code from a user-provided URL and saves both the image and the original input locally.

## ✨ Technologies

- `Node.js`
- `JavaScript`
- `NPM`
- `Inquirer`
- `qr-image`
- `File System (fs)`

## 🚀 Features

- Command-line user input
- Generates a QR code image from a URL
- Saves the QR code as a PNG file
- Stores the original URL in a text file
- Uses Node.js built-in file system module

## 📍 The Process

This project was built by applying concepts learned in **Section 22 and Section 23 of The Complete Full-Stack Web Development Bootcamp**.

Section 22 introduced backend fundamentals such as servers, web applications, and how data is handled outside the browser. In Section 23, Node.js was introduced as a JavaScript runtime that allows JavaScript to run independently of the browser.

Using this knowledge, the project uses the `inquirer` package to collect user input from the terminal, the `qr-image` package to generate a QR code, and Node’s native `fs` module to save both the generated image and the original URL locally. The project also reinforced working with NPM, ECMAScript modules, and the `type: module` configuration.

## 🚦 Running the Project

1. Clone the repository  
2. Install dependencies: `npm install`
3. Run the program: `node index.js`
4. Enter a URL when prompted
5. Find the generated QR code image and URL file in the project folder

## 🎞️ Preview

<img width="740" height="60" alt="qr-code-generator" src="https://github.com/user-attachments/assets/88f2d688-4717-4ed4-ba36-f9f73d6b5c08" /> 
</br > </br >
<img width="150" height="150" alt="qr_code" src="https://github.com/user-attachments/assets/b2c35c0b-f410-4e16-ab8c-8708d39ecaa4" />
