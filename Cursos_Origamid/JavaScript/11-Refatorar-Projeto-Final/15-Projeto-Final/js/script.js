document.documentElement.className += ' js';
import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/init-acoordion.js';
import TabNav from './modules/init-tab-nav.js';
import Modal from './modules/modal.js';
import ToolTip from './modules/tooltip.js';
import fetchAnimais from './modules/animais_fetch.js';
import fetchBiticoin from './modules/bitcoin-fetch.js';
import ScrollAnima from './modules/scroll-animacao.js';
import DropDownMenu from './modules/dropdown-menu.js';
import MenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';

const scrollSuave = new ScrollSuave("[data-scroll='suave'] a[href^='#']");
scrollSuave.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

const tabNav = new TabNav("[data-tab='menu'] li","[data-tab='content'] section");
tabNav.init();

const modal = new Modal("[data-modal='abrir']", "[data-modal='fechar']","[data-modal='container']");
modal.init();

const tooltip = new ToolTip("[data-tooltip]");
tooltip.init();

fetchAnimais("./animaisApi.json", ".numeros-grid");

fetchBiticoin("https://blockchain.info/ticker",".btc-preco");

const scrollAnima = new ScrollAnima("[data-anime='scroll']");
scrollAnima.init();

const dropDownMenu = new DropDownMenu("[data-dropdown]");
dropDownMenu.init();

const menuMobile = new MenuMobile("[data-menu='button']", "[data-menu='list']");
menuMobile.init();

initFuncionamento();
