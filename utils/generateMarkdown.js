const placeholderLicenseTemplateLiteral = `if this appears in readme, that means generateMarkdown.js is exporting it`

// TODO: Create a function that returns a license badge based on which license is passed in <- this comment came with the starter code
// If there is no license, return an empty string <------------------------------------------- this comment came with the starter code
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link <- this comment came with the starter code
// If there is no license, return an empty string <-------- this comment came with the starter code
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README <- this comment came with the starter code
// If there is no license, return an empty string <--------------------- this comment came with the starter code
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README <- this comment came with the starter code
function generateMarkdown(data) {
  return `
  ## License Information<hr>
  
  ${data}
  
  `;
}

module.exports = generateMarkdown(placeholderLicenseTemplateLiteral);

/*
the liscences on github's dropdown menu when you make a new repo are:

None
Apache Liscence 2.0
GNU General Public License v3.0
MIT LicenseBSD 2-Clause "Simplified" License
MIT LicenseBSD 3-Clause "New" or "Revised" License
Boost Software License 1.0
Creative Commons Zero v1.0 Universal
Eclipse Public License 2.0
GNU Affero General Public License v3.0
GNU General Public License v2.0
GNU Lesser General Public License v2.1
Mozilla Public License 2.0
The Unlicense

useful (useful looking) code copied from "Markdown License Badges for your project" https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) <- Apache
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) <---- GNU GPL v3.0
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) <-------- MIT
^idk if this is "Simplified", "New", or "Revised" (use this same badge for all 3?)
[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt) <-- Boost
[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/) <--------------- Creative Commons Zero
[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0) <----------------------------- Eclipse (but 1.0, not 2.0 ..?)
[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0 <---------------------- GNU Affero v3.0 (I think..?)
[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html) <--- GNU GPL v2.0
[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2.1-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html) <- GNU GPL 2.1
^altered version of the line above it; might not work
[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0) <------------ Mozilla Public v2.0
[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/) <--------------------------------- The Unlicense
*/