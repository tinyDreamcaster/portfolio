/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("let welcomeButton = document.querySelector('.mainPanel');\r\nlet decorativeWrapper = document.querySelector('.decorativeWrapper');\r\nlet secondPanel = document.querySelectorAll('.secondPanel');\r\nlet skillsWrapper = document.querySelector('.skillsWrapper');\r\nlet pageBody = document.querySelector('.pageBody');\r\nlet pageMain = document.querySelector('.pageMain');\r\nlet titlePanel = document.querySelector('.titlePanel');\r\nlet skillsPanel = document.querySelector('.skillsPanel');\r\nlet radioForm = document.querySelector('.radioForm');\r\nlet secSkills = document.querySelector('.secSkills');\r\nlet secWorks = document.querySelector('.secWorks');\r\nlet secContacts = document.querySelector('.secContacts');\r\nlet portfolioPagesRadio = document.querySelectorAll(\".portfolioPagesRadio\");\r\n\r\nlet skillpage = document.getElementById('skillpage');\r\nlet workspage = document.getElementById('workspage');\r\nlet contactspage = document.getElementById('contactspage');\r\n\r\n\r\nwelcomeButton.addEventListener('click', function () {\r\n  decorativeWrapper.style.display= \"inherit\";\r\n  decorativeWrapper.style.position= \"absolute\";\r\n  welcomeButton.style.display= \"none\";\r\n  //secondPanel.style.display= \"block\";\r\n  pageMain.classList.toggle(\"skillsWrapper\");\r\n  //skillsWrapper.style.display= \"flex\";\r\n  //titlePanel.style.display= \"block\";\r\n  //skillsPanel.style.display= \"block\";\r\n  radioForm.style.display= \"block\";\r\n  skillpage.checked = true;\r\n  secSkills.style.display= \"block\";\r\n});\r\n\r\n\r\nfunction radiobuttons () {\r\n\t\r\n\tshortAnimation ();\r\n\tif(skillpage.checked) {\r\n    secSkills.style.display= \"block\";\r\n\t}else {\r\n\tsecSkills.style.display= \"none\";\r\n\t}\r\n\t\r\n\tif(workspage.checked) {\r\n    secWorks.style.display= \"block\";\r\n\t}else {\r\n\tsecWorks.style.display= \"none\";\r\n\t}\r\n\t\r\n\tif(contactspage.checked) {\r\n    secContacts.style.display= \"block\";\r\n\t}else {\r\n\tsecContacts.style.display= \"none\";\r\n\t}\r\n\r\n}\r\n\r\n\r\nportfolioPagesRadio.forEach((pagesButton) => {\r\n\t\r\n  pagesButton.addEventListener('click', function () {\r\n\tradiobuttons ();\r\n  \r\n});\r\n  \r\n});\r\n\r\nfunction shortAnimation () {\r\n\t\r\n\tsecondPanel.forEach((panel) => {\r\n\t\r\n\tpanel.style.animationDelay = \"0.1s\";\r\n  \r\n});\r\n\r\n}\n\n//# sourceURL=webpack://gulp2022/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;