/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimaNumeros)\n/* harmony export */ });\nclass AnimaNumeros {\n  constructor(numeros, observerTarget, observerClass) {\n    this.observerTarget = document.querySelector(observerTarget);\n    this.numeros = document.querySelectorAll(numeros);\n    this.observerClass = observerClass;\n    this.handleMutation = this.handleMutation.bind(this);\n  }\n  static incrementarNumero(numero) {\n    const total = +numero.innerText;\n    const incremento = Number.parseInt(total / 100, 10);\n    let start = 0;\n    const timer = setInterval(() => {\n      start += incremento;\n      numero.innerText = start;\n      if (start > total) {\n        numero.innerText = total;\n        clearInterval(timer);\n      }\n    }, 30 * Math.random());\n  }\n  animaNumeros() {\n    this.numeros.forEach(elNumero => {\n      this.constructor.incrementarNumero(elNumero);\n    });\n  }\n  handleMutation(mutation) {\n    if (mutation[0].target.classList.contains(this.observerClass)) {\n      this.observer.disconnect();\n      this.animaNumeros();\n    }\n  }\n  addMutationObserver() {\n    this.observer = new MutationObserver(this.handleMutation);\n    this.observer.observe(this.observerTarget, {\n      attributes: true\n    });\n  }\n  init() {\n    if (this.numeros.length && this.observerClass && this.observerClass) {\n      this.addMutationObserver();\n    }\n    return this;\n  }\n}\n\n//# sourceURL=webpack://Animais-Fantastico/./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/animais_fetch.js":
/*!*************************************!*\
  !*** ./js/modules/animais_fetch.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\nfunction fetchAnimais(url, target) {\n  function createAnimal(_ref) {\n    let {\n      especie,\n      total\n    } = _ref;\n    const div = document.createElement(\"div\");\n    div.classList.add(\"numero-animal\");\n    div.innerHTML = `<h3>${especie}</h3><span data-numero>${total}</span>`;\n    return div;\n  }\n  const numerosGrid = document.querySelector(target);\n  function preencherAnimais(animal) {\n    const divAnimal = createAnimal(animal);\n    numerosGrid.append(divAnimal);\n  }\n  function animaAnimaisNumeros() {\n    const animaNumeros = new _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"[data-numero]\", \".numeros\", \"ativo\");\n    animaNumeros.init();\n  }\n  async function criarAnimais() {\n    try {\n      const animaisResponse = await fetch(url);\n      const animaisJson = await animaisResponse.json();\n      animaisJson.forEach(animal => preencherAnimais(animal));\n      animaAnimaisNumeros();\n    } catch (erro) {\n      console.log(erro, \"Erro na requisição\");\n    }\n  }\n  return criarAnimais();\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchAnimais);\n\n//# sourceURL=webpack://Animais-Fantastico/./js/modules/animais_fetch.js?");

/***/ }),

/***/ "./js/modules/bitcoin-fetch.js":
/*!*************************************!*\
  !*** ./js/modules/bitcoin-fetch.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchBiticoin)\n/* harmony export */ });\nfunction fetchBiticoin(url, target) {\n  fetch(url).then(response => response.json()).then(bitcoin => {\n    const btcPreco = document.querySelector(target);\n    const calculo = (1000 / bitcoin.BRL.sell).toFixed(4);\n    btcPreco.innerText = calculo;\n  }).catch(erro => console.log(Error(erro)));\n}\n\n//# sourceURL=webpack://Animais-Fantastico/./js/modules/bitcoin-fetch.js?");

/***/ }),

/***/ "./js/modules/date_object.js":
/*!***********************************!*\
  !*** ./js/modules/date_object.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dateObject)\n/* harmony export */ });\nfunction dateObject() {\n  const funcionamento = document.querySelector(\"[data-semana]\");\n  const diasSemanaHtml = funcionamento.dataset.semana.split(\",\").map(Number);\n  const horarioSemanaHtml = funcionamento.dataset.horario.split(\",\").map(Number);\n  const dataAgora = new Date();\n  const diaHoje = dataAgora.getDay();\n  const horarioAgora = dataAgora.getHours();\n  const semanaAberto = diasSemanaHtml.indexOf(diaHoje) !== -1;\n  const horarioAberto = horarioAgora >= horarioSemanaHtml[0] && horarioAgora < horarioSemanaHtml[1];\n  if (semanaAberto && horarioAberto) {\n    funcionamento.classList.add(\"ativo\");\n  }\n}\n\n//# sourceURL=webpack://Animais-Fantastico/./js/modules/date_object.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropDownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\nfunction initDropDownMenu() {\n  const dropDownMenus = document.querySelectorAll(\"[data-dropdown\");\n  function handleClick(event) {\n    event.preventDefault();\n    this.classList.add(\"ativo\");\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, [\"click\"], () => {\n      this.classList.remove(\"ativo\");\n    });\n  }\n  dropDownMenus.forEach(menu => {\n    [\"click\"].forEach(userEvent => {\n      menu.addEventListener(userEvent, handleClick);\n    });\n  });\n}\n\n//# sourceURL=webpack://Animais-Fantastico/./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/init-acoordion.js":
/*!**************************************!*\
  !*** ./js/modules/init-acoordion.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\nclass Accordion {\n  constructor(list) {\n    this.accordionList = Array.from(document.querySelectorAll(list));\n    this.classActive = 'ativo';\n  }\n  toggleAccordion(item) {\n    item.classList.toggle(this.classActive);\n    item.nextElementSibling.classList.toggle(this.classActive);\n  }\n  addAccordionEvent() {\n    this.accordionList.forEach(item => {\n      item.addEventListener('click', () => this.toggleAccordion(item));\n    });\n  }\n  init() {\n    const item = this.accordionList[0];\n    const existAcoordion = this.accordionList.length;\n    if (existAcoordion) {\n      this.toggleAccordion(item);\n      this.addAccordionEvent();\n    }\n    return this;\n  }\n}\n\n//# sourceURL=webpack://Animais-Fantastico/./js/modules/init-acoordion.js?");

/***/ }),

/***/ "./js/modules/init-tab-nav.js":
/*!************************************!*\
  !*** ./js/modules/init-tab-nav.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\nclass TabNav {\n  constructor(menu, content) {\n    this.tabMenu = document.querySelectorAll(menu);\n    this.tabContent = document.querySelectorAll(content);\n    this.ativoClass = \"ativo\";\n  }\n  activeTab(index) {\n    this.tabContent.forEach(section => {\n      section.classList.remove(this.ativoClass);\n    });\n    const direcao = this.tabContent[index].dataset.anime;\n    this.tabContent[index].classList.add(this.ativoClass, direcao);\n  }\n  addTabNavEvent() {\n    this.tabMenu.forEach((img, index) => {\n      img.addEventListener(\"click\", () => this.activeTab(index));\n    });\n  }\n  init() {\n    if (this.tabMenu.length && this.tabContent.length) {\n      this.activeTab(0);\n      this.addTabNavEvent();\n    }\n  }\n}\n\n//# sourceURL=webpack://Animais-Fantastico/./js/modules/init-tab-nav.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\nfunction initMenuMobile() {\n  const menuButtom = document.querySelector(\"[data-menu='button']\");\n  const menuList = document.querySelector(\"[data-menu='list']\");\n  const eventos = [\"click\"];\n  if (menuButtom) {\n    function openMenu() {\n      menuList.classList.add(\"ativo\");\n      menuButtom.classList.add(\"ativo\");\n      (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, eventos, () => {\n        menuList.classList.remove(\"ativo\");\n        menuButtom.classList.remove(\"ativo\");\n      });\n    }\n    eventos.forEach(evento => menuButtom.addEventListener(evento, openMenu));\n  }\n}\n\n//# sourceURL=webpack://Animais-Fantastico/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\n  constructor(botaoAbrir, botaoFechar, containerModal) {\n    this.botaoAbrir = document.querySelector(botaoAbrir);\n    this.botaoFechar = document.querySelector(botaoFechar);\n    this.containerModal = document.querySelector(containerModal);\n    this.activeClass = \"ativo\";\n    this.eventToggleModal = this.eventToggleModal.bind(this);\n    this.cliqueForaModal = this.cliqueForaModal.bind(this);\n  }\n  toggleModal() {\n    this.containerModal.classList.toggle(this.activeClass);\n  }\n  eventToggleModal(event) {\n    event.preventDefault();\n    this.toggleModal();\n  }\n  cliqueForaModal(event) {\n    if (event.target === this.containerModal) {\n      this.eventToggleModal(event);\n    }\n  }\n  addModalEvent() {\n    this.botaoAbrir.addEventListener(\"click\", this.eventToggleModal);\n    this.botaoFechar.addEventListener(\"click\", this.eventToggleModal);\n    this.containerModal.addEventListener(\"click\", this.cliqueForaModal);\n  }\n  init() {\n    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {\n      this.addModalEvent();\n    }\n    return this;\n  }\n}\n\n//# sourceURL=webpack://Animais-Fantastico/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outsideclick.js":
/*!************************************!*\
  !*** ./js/modules/outsideclick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outSideClick)\n/* harmony export */ });\nfunction outSideClick(element, events, callbackRemove) {\n  const html = document.documentElement;\n  function handleOutSideClick(event) {\n    if (!element.contains(event.target)) {\n      events.forEach(userEvent => {\n        html.removeEventListener(userEvent, handleOutSideClick);\n      });\n      element.removeAttribute(\"data-outside\");\n      callbackRemove();\n    }\n  }\n  if (!element.hasAttribute(\"data-outside\")) {\n    events.forEach(userEvent => {\n      setTimeout(() => html.addEventListener(userEvent, handleOutSideClick));\n    });\n    element.setAttribute(\"data-outside\", \"\");\n  }\n}\n\n//# sourceURL=webpack://Animais-Fantastico/./js/modules/outsideclick.js?");

/***/ }),

/***/ "./js/modules/scroll-animacao.js":
/*!***************************************!*\
  !*** ./js/modules/scroll-animacao.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimaScroll)\n/* harmony export */ });\nclass AnimaScroll {\n  constructor(target) {\n    this.sections = document.querySelectorAll(target);\n    this.windowMetade = window.innerHeight * 0.6;\n    this.animaScroll = this.animaScroll.bind(this);\n  }\n  verifyDisplay(section, metadeTela) {\n    if (metadeTela) {\n      section.classList.add(\"ativo\");\n    } else if (section.classList.contains(\"ativo\")) {\n      section.classList.remove(\"ativo\");\n    }\n  }\n  animaScroll() {\n    this.sections.forEach(section => {\n      const sectionTop = section.getBoundingClientRect().top;\n      const metadeTela = sectionTop - this.windowMetade < 0;\n      this.verifyDisplay(section, metadeTela);\n    });\n  }\n  init() {\n    if (this.sections) {\n      this.animaScroll();\n      window.addEventListener(\"scroll\", this.animaScroll);\n    }\n    const data = new Date('2023-12-17T03:24:00');\n    ;\n    return this;\n  }\n}\n\n//# sourceURL=webpack://Animais-Fantastico/./js/modules/scroll-animacao.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\nclass ScrollSuave {\n  constructor(links, options) {\n    this.linksInternos = document.querySelectorAll(links);\n    if (options === undefined) {\n      this.options = {\n        behavior: 'smooth',\n        block: 'start'\n      };\n    } else {\n      this.options = options;\n    }\n    this.activeScrollSuave = this.activeScrollSuave.bind(this);\n  }\n  activeScrollSuave(event) {\n    event.preventDefault();\n    const href = event.currentTarget.getAttribute('href');\n    const section = document.querySelector(href);\n    section.scrollIntoView(this.options);\n  }\n  addEvent() {\n    this.linksInternos.forEach(link => {\n      link.addEventListener('click', this.activeScrollSuave);\n    });\n  }\n  init() {\n    if (this.linksInternos.length) {\n      this.addEvent();\n    }\n    return this;\n  }\n}\n\n//# sourceURL=webpack://Animais-Fantastico/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToolTip)\n/* harmony export */ });\nclass ToolTip {\n  constructor(tooltips) {\n    this.tooltips = document.querySelectorAll(tooltips);\n    this.onMouseOver = this.onMouseOver.bind(this);\n    this.onMouseLeave = this.onMouseLeave.bind(this);\n    this.onMouseMove = this.onMouseMove.bind(this);\n  }\n  onMouseMove(event) {\n    this.tooltipBox.style.top = `${event.pageY + 10}px`;\n    if (event.pageX + 240 > window.innerWidth) {\n      this.tooltipBox.style.left = `${event.pageX - 180}px`;\n    } else {\n      this.tooltipBox.style.left = `${event.pageX + 10}px`;\n    }\n  }\n  onMouseLeave() {\n    this.tooltipBox.remove();\n    this.element.removeEventListener(\"mouseleave\", this.onMouseLeave);\n    this.element.removeEventListener(\"mousemove\", this.onMouseMove);\n  }\n  criarTooltipBox(element) {\n    const text = element.getAttribute(\"aria-label\");\n    const tooltipBox = document.createElement(\"div\");\n    tooltipBox.classList.add(\"tooltip\");\n    tooltipBox.innerText = text;\n    document.body.appendChild(tooltipBox);\n    this.tooltipBox = tooltipBox;\n  }\n  onMouseOver(event) {\n    const el = event.currentTarget;\n    this.criarTooltipBox(el);\n    el.addEventListener(\"mousemove\", this.onMouseMove);\n    el.addEventListener(\"mouseleave\", this.onMouseLeave);\n    this.element = el;\n  }\n  addTooltipsEvent() {\n    this.tooltips.forEach(item => {\n      item.addEventListener(\"mouseover\", this.onMouseOver);\n    });\n  }\n  init() {\n    if (this.tooltips.length) {\n      this.addTooltipsEvent();\n    }\n    return this;\n  }\n}\n\n//# sourceURL=webpack://Animais-Fantastico/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_init_acoordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/init-acoordion.js */ \"./js/modules/init-acoordion.js\");\n/* harmony import */ var _modules_init_tab_nav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/init-tab-nav.js */ \"./js/modules/init-tab-nav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_animais_fetch_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/animais_fetch.js */ \"./js/modules/animais_fetch.js\");\n/* harmony import */ var _modules_bitcoin_fetch_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/bitcoin-fetch.js */ \"./js/modules/bitcoin-fetch.js\");\n/* harmony import */ var _modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/scroll-animacao.js */ \"./js/modules/scroll-animacao.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_date_object_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/date_object.js */ \"./js/modules/date_object.js\");\ndocument.documentElement.className += ' js';\n\n\n\n\n\n\n\n\n\n\n\nconst scrollSuave = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"[data-scroll='suave'] a[href^='#']\");\nscrollSuave.init();\nconst accordion = new _modules_init_acoordion_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"[data-anime='accordion'] dt\");\naccordion.init();\nconst tabNav = new _modules_init_tab_nav_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"[data-tab='menu'] li\", \"[data-tab='content'] section\");\ntabNav.init();\nconst modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"[data-modal='abrir']\", \"[data-modal='fechar']\", \"[data-modal='container']\");\nmodal.init();\nconst tooltip = new _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](\"[data-tooltip]\");\ntooltip.init();\n(0,_modules_animais_fetch_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"/animaisApi.json\", \".numeros-grid\");\n(0,_modules_bitcoin_fetch_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"https://blockchain.info/ticker\", \".btc-preco\");\nconst scrollAnima = new _modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"](\"[data-anime='scroll']\");\nscrollAnima.init();\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n(0,_modules_date_object_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n\n//# sourceURL=webpack://Animais-Fantastico/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;