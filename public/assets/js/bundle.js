/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var welcome = function welcome(name) {
  alert('Welcome, $s', name);
};

welcome('John');

/***/ }),
/* 2 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: error: 193\\\\?\\C:\\Users\\novahaus\\Documents\\Estudo\\hapi-webpack-boilerplate\\node_modules\\node-sass\\vendor\\win32-x64-48\\binding.node\n    at Error (native)\n    at Object.Module._extensions..node (module.js:597:18)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)\n    at Function.Module._load (module.js:438:3)\n    at Module.require (module.js:497:17)\n    at require (internal/module.js:20:19)\n    at module.exports (C:\\Users\\novahaus\\Documents\\Estudo\\hapi-webpack-boilerplate\\node_modules\\node-sass\\lib\\binding.js:19:10)\n    at Object.<anonymous> (C:\\Users\\novahaus\\Documents\\Estudo\\hapi-webpack-boilerplate\\node_modules\\node-sass\\lib\\index.js:14:35)\n    at Module._compile (module.js:570:32)\n    at Object.Module._extensions..js (module.js:579:10)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)\n    at Function.Module._load (module.js:438:3)\n    at Module.require (module.js:497:17)\n    at require (internal/module.js:20:19)\n    at Object.<anonymous> (C:\\Users\\novahaus\\Documents\\Estudo\\hapi-webpack-boilerplate\\node_modules\\sass-loader\\lib\\loader.js:3:14)\n    at Module._compile (module.js:570:32)\n    at Object.Module._extensions..js (module.js:579:10)\n    at Module.load (module.js:487:32)\n    at tryModuleLoad (module.js:446:12)\n    at Function.Module._load (module.js:438:3)\n    at Module.require (module.js:497:17)\n    at require (internal/module.js:20:19)\n    at loadLoader (C:\\Users\\novahaus\\Documents\\Estudo\\hapi-webpack-boilerplate\\node_modules\\loader-runner\\lib\\loadLoader.js:13:17)\n    at iteratePitchingLoaders (C:\\Users\\novahaus\\Documents\\Estudo\\hapi-webpack-boilerplate\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (C:\\Users\\novahaus\\Documents\\Estudo\\hapi-webpack-boilerplate\\node_modules\\loader-runner\\lib\\LoaderRunner.js:165:10)\n    at C:\\Users\\novahaus\\Documents\\Estudo\\hapi-webpack-boilerplate\\node_modules\\loader-runner\\lib\\LoaderRunner.js:173:18\n    at loadLoader (C:\\Users\\novahaus\\Documents\\Estudo\\hapi-webpack-boilerplate\\node_modules\\loader-runner\\lib\\loadLoader.js:36:3)\n    at iteratePitchingLoaders (C:\\Users\\novahaus\\Documents\\Estudo\\hapi-webpack-boilerplate\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at runLoaders (C:\\Users\\novahaus\\Documents\\Estudo\\hapi-webpack-boilerplate\\node_modules\\webpack\\lib\\NormalModule.js:194:19)\n    at C:\\Users\\novahaus\\Documents\\Estudo\\hapi-webpack-boilerplate\\node_modules\\loader-runner\\lib\\LoaderRunner.js:364:11\n    at C:\\Users\\novahaus\\Documents\\Estudo\\hapi-webpack-boilerplate\\node_modules\\loader-runner\\lib\\LoaderRunner.js:170:18\n    at loadLoader (C:\\Users\\novahaus\\Documents\\Estudo\\hapi-webpack-boilerplate\\node_modules\\loader-runner\\lib\\loadLoader.js:27:11)\n    at iteratePitchingLoaders (C:\\Users\\novahaus\\Documents\\Estudo\\hapi-webpack-boilerplate\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (C:\\Users\\novahaus\\Documents\\Estudo\\hapi-webpack-boilerplate\\node_modules\\loader-runner\\lib\\LoaderRunner.js:165:10)\n    at C:\\Users\\novahaus\\Documents\\Estudo\\hapi-webpack-boilerplate\\node_modules\\loader-runner\\lib\\LoaderRunner.js:173:18\n    at loadLoader (C:\\Users\\novahaus\\Documents\\Estudo\\hapi-webpack-boilerplate\\node_modules\\loader-runner\\lib\\loadLoader.js:36:3)\n    at iteratePitchingLoaders (C:\\Users\\novahaus\\Documents\\Estudo\\hapi-webpack-boilerplate\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at runLoaders (C:\\Users\\novahaus\\Documents\\Estudo\\hapi-webpack-boilerplate\\node_modules\\loader-runner\\lib\\LoaderRunner.js:362:2)\n    at NormalModule.doBuild (C:\\Users\\novahaus\\Documents\\Estudo\\hapi-webpack-boilerplate\\node_modules\\webpack\\lib\\NormalModule.js:181:3)\n    at NormalModule.build (C:\\Users\\novahaus\\Documents\\Estudo\\hapi-webpack-boilerplate\\node_modules\\webpack\\lib\\NormalModule.js:274:15)\n    at Compilation.buildModule (C:\\Users\\novahaus\\Documents\\Estudo\\hapi-webpack-boilerplate\\node_modules\\webpack\\lib\\Compilation.js:146:10)\n    at moduleFactory.create (C:\\Users\\novahaus\\Documents\\Estudo\\hapi-webpack-boilerplate\\node_modules\\webpack\\lib\\Compilation.js:433:9)\n    at factory (C:\\Users\\novahaus\\Documents\\Estudo\\hapi-webpack-boilerplate\\node_modules\\webpack\\lib\\NormalModuleFactory.js:241:5)\n    at applyPluginsAsyncWaterfall (C:\\Users\\novahaus\\Documents\\Estudo\\hapi-webpack-boilerplate\\node_modules\\webpack\\lib\\NormalModuleFactory.js:94:13)\n    at C:\\Users\\novahaus\\Documents\\Estudo\\hapi-webpack-boilerplate\\node_modules\\tapable\\lib\\Tapable.js:268:11\n    at NormalModuleFactory.params.normalModuleFactory.plugin (C:\\Users\\novahaus\\Documents\\Estudo\\hapi-webpack-boilerplate\\node_modules\\webpack\\lib\\CompatibilityPlugin.js:52:5)\n    at NormalModuleFactory.applyPluginsAsyncWaterfall (C:\\Users\\novahaus\\Documents\\Estudo\\hapi-webpack-boilerplate\\node_modules\\tapable\\lib\\Tapable.js:272:13)\n    at resolver (C:\\Users\\novahaus\\Documents\\Estudo\\hapi-webpack-boilerplate\\node_modules\\webpack\\lib\\NormalModuleFactory.js:69:10)\n    at process.nextTick (C:\\Users\\novahaus\\Documents\\Estudo\\hapi-webpack-boilerplate\\node_modules\\webpack\\lib\\NormalModuleFactory.js:194:7)\n    at _combinedTickCallback (internal/process/next_tick.js:67:7)\n    at process._tickCallback (internal/process/next_tick.js:98:9)");

/***/ })
/******/ ]);