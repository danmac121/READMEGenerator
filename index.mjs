import inquirer from 'inquirer';
import fs from "fs/promises";

let {title, description, installation, usage, license, contributing, tests, github, email} = await inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "Write a description of your project."
        },
        {
            type: "input",
            name: "installation",
            message: "What is the installation process for your project?"
        },
        {
            type: "input",
            name: "usage",
            message: "What is the usage of your project?"
        },
        {
            type: "list",
            name: "license",
            message: "Please choose the license your project uses.",
            choices: ["MIT license", "Mozilla Public License", "Open Data Commons", "Perl"]
        },
        {
            type: "input",
            name: "contributing",
            message: "Please list any contributors to the project."
        },
        {
            type: "input",
            name: "tests",
            message: "Please describe the tests done on your project. "
        },
        {
            type: "input",
            name: "github",
            message: "Please provide your github username."
        },
        {
            type: "input",
            name: "email",
            message: "Please provide your email address."
        }


    ])

    let readmeText = `
# ${title}            ${generateLicenseBadge(license)}
## Description
${description}
## Table of Contents
[Installation](#installation)

[Usage](#usage)

[License](#license)

[Contributors](#contributors)

[Tests](#tests)

[Questions](#questions)

## Installation
${installation}
## Usage
${usage}
## License
${generateLicense(license)}
## Contributors
${contributing}
## tests
${tests}
## Questions

Check my github or email me if you have any questions!

[Here is my github.](https://github.com/${github})

And my email address is ${email}.
  `

    fs.writeFile("README.md", readmeText)

    function generateLicenseBadge(){
        switch (license) {
            case "MIT license":
                return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
                break;
            case "Mozilla Public License":
                return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
                break;
                case "Open Data Commons": 
                return `[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)`;
                case "Perl":
                return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`;
           
        }
    }

    function generateLicense(){
        switch (license) {
            case "MIT license":
                return `This project is using the MIT license. You can learn more about it [here.](https://opensource.org/license/mit/)`;
                break;
            case "Mozilla Public License":
                return `This project is using the Mozilla Public license. You can learn more about it [here.](https://opensource.org/license/mpl-2-0/)`;
                break;
                case "Open Data Commons": 
                return `This project is using the Open Data Commons license. You can learn more about it [here.](https://opendatacommons.org/licenses/by/)`;
                case "Perl":
                return `This project is using the Perl license. You can learn more about it [here.](https://opensource.org/license/artistic-2-0/)`;
           
        }
    }