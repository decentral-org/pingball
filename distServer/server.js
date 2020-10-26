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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./sources/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./sources/game/assets/datasets/index.js":
/*!***********************************************!*\
  !*** ./sources/game/assets/datasets/index.js ***!
  \***********************************************/
/*! exports provided: datasets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "datasets", function() { return datasets; });
const datasets = [];


/***/ }),

/***/ "./sources/game/assets/images/common/ball.png":
/*!****************************************************!*\
  !*** ./sources/game/assets/images/common/ball.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+nhxg7wAAAMRJREFUWIXtl7EVwyAMRA8/D0PGSJ3RPItnyihORR4mkoAgAQXX+dm6+xwUxgGA9x4KcsnzVTK0A8Dznc6KyhlXme1Kody3WZhNObx6VmqgJZjyIdvgGtAKz3pSABbhrHfJGTBVCmC5ejJj4170gphuC4YB9Kw/6IoBhmkBLIAFEACqfqOU5GKAYZoKoOc2fLPSBnpA3DKm2oIgyxZ+vLkGLCBIT+leEAZa/xXExZScgZY2srOld8PYaMjl9O8ASa/zeHwAksMXkqW9xfwAAAAASUVORK5CYII="

/***/ }),

/***/ "./sources/game/assets/images/common/player.png":
/*!******************************************************!*\
  !*** ./sources/game/assets/images/common/player.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAABgCAYAAAB8InCYAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+nhxg7wAAAFRJREFUaIHtzjEBADAIxMCnS7VUGv4FFBksFwO56vt+FjubcwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAJBluAwJY4NotAAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./sources/game/assets/images/index.js":
/*!*********************************************!*\
  !*** ./sources/game/assets/images/index.js ***!
  \*********************************************/
/*! exports provided: images */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "images", function() { return images; });
const images = [{
  'name': 'player',
  'scope': 'common',
  'type': 'image',
  'source': __webpack_require__(/*! ./common/player.png */ "./sources/game/assets/images/common/player.png")
}, {
  'name': 'ball',
  'scope': 'common',
  'type': 'image',
  'source': __webpack_require__(/*! ./common/ball.png */ "./sources/game/assets/images/common/ball.png")
}];


/***/ }),

/***/ "./sources/game/assets/index.js":
/*!**************************************!*\
  !*** ./sources/game/assets/index.js ***!
  \**************************************/
/*! exports provided: assets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assets", function() { return assets; });
/* harmony import */ var _datasets_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datasets/index.js */ "./sources/game/assets/datasets/index.js");
/* harmony import */ var _images_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/index.js */ "./sources/game/assets/images/index.js");
/* harmony import */ var _sounds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sounds/index.js */ "./sources/game/assets/sounds/index.js");



const assets = [..._datasets_index_js__WEBPACK_IMPORTED_MODULE_0__["datasets"], ..._images_index_js__WEBPACK_IMPORTED_MODULE_1__["images"], ..._sounds_index_js__WEBPACK_IMPORTED_MODULE_2__["sounds"]];


/***/ }),

/***/ "./sources/game/assets/sounds/index.js":
/*!*********************************************!*\
  !*** ./sources/game/assets/sounds/index.js ***!
  \*********************************************/
/*! exports provided: sounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sounds", function() { return sounds; });
const sounds = [];


/***/ }),

/***/ "./sources/game/components/common/camera.js":
/*!**************************************************!*\
  !*** ./sources/game/components/common/camera.js ***!
  \**************************************************/
/*! exports provided: Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
function Camera(camera, opacity = 1) {
  this.name = 'camera';
  this.camera = camera;
  this.opacity = opacity;
}



/***/ }),

/***/ "./sources/game/components/common/forces.js":
/*!**************************************************!*\
  !*** ./sources/game/components/common/forces.js ***!
  \**************************************************/
/*! exports provided: Forces */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Forces", function() { return Forces; });
/* harmony import */ var modules_ease_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules/ease.js */ "./sources/theatre/modules/ease.js");


function Forces(parts) {
  this.name = 'forces';

  function add(force) {
    const {
      easing,
      elapsed,
      ending,
      handling,
      duration,
      x,
      y
    } = force;
    force.x = x;
    force.y = y;
    force.duration = duration;
    force.easing = easing || modules_ease_js__WEBPACK_IMPORTED_MODULE_0__["linear"](1);
    force.elapsed = elapsed || 0;
    force.ending = ending || false;
    force.handling = handling || false;
    force.moved = {
      'x': 0,
      'y': 0
    };
    this.parts.push(force);
  }

  this.parts = [];
  this.add = add;
  parts.forEach(force => {
    this.add(force);
  });
}



/***/ }),

/***/ "./sources/game/components/common/hitbox.js":
/*!**************************************************!*\
  !*** ./sources/game/components/common/hitbox.js ***!
  \**************************************************/
/*! exports provided: Hitbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hitbox", function() { return Hitbox; });
function Hitbox(width, height) {
  this.name = 'hitbox';
  this.width = width;
  this.height = height;
}



/***/ }),

/***/ "./sources/game/components/common/images.js":
/*!**************************************************!*\
  !*** ./sources/game/components/common/images.js ***!
  \**************************************************/
/*! exports provided: Images */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Images", function() { return Images; });
function Images(parts) {
  this.name = 'images';
  this.parts = parts;
  this.parts.forEach(image => {
    const {
      destination,
      frame,
      framerate,
      frames,
      opacity,
      source
    } = image;
    image.source = source;
    image.frames = frames || [[0, 0, 32, 32]];
    image.frame = frame || 0;
    image.framerate = framerate || 8;
    image.destination = destination || [0, 0, 0, 32, 32];
    image.opacity = opacity || 1;
    image.elapsed = 0;
  });
}



/***/ }),

/***/ "./sources/game/components/common/position.js":
/*!****************************************************!*\
  !*** ./sources/game/components/common/position.js ***!
  \****************************************************/
/*! exports provided: Position */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
function Position(x, y, z = 0) {
  this.name = 'position';
  this.x = x;
  this.y = y;
  this.z = z;
}



/***/ }),

/***/ "./sources/game/components/common/zone.js":
/*!************************************************!*\
  !*** ./sources/game/components/common/zone.js ***!
  \************************************************/
/*! exports provided: Zone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Zone", function() { return Zone; });
function Zone(zone) {
  this.name = 'zone';
  this.frame = zone;
}



/***/ }),

/***/ "./sources/game/components/specific/border.js":
/*!****************************************************!*\
  !*** ./sources/game/components/specific/border.js ***!
  \****************************************************/
/*! exports provided: Border */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Border", function() { return Border; });
function Border(width, height, radius, color) {
  this.name = 'border';
  this.radius = radius;
  this.color = color;
  this.padding = {
    width: width,
    height: height
  };
}



/***/ }),

/***/ "./sources/game/components/specific/input.js":
/*!***************************************************!*\
  !*** ./sources/game/components/specific/input.js ***!
  \***************************************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
function Input(inputs) {
  this.name = 'input';
  this.inputs = inputs;
}



/***/ }),

/***/ "./sources/game/components/specific/ping.js":
/*!**************************************************!*\
  !*** ./sources/game/components/specific/ping.js ***!
  \**************************************************/
/*! exports provided: Ping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ping", function() { return Ping; });
function Ping() {
  this.name = 'ping';
}



/***/ }),

/***/ "./sources/game/components/specific/selected.js":
/*!******************************************************!*\
  !*** ./sources/game/components/specific/selected.js ***!
  \******************************************************/
/*! exports provided: Selected */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Selected", function() { return Selected; });
function Selected() {
  this.name = 'selected';
}



/***/ }),

/***/ "./sources/game/components/specific/sphere.js":
/*!****************************************************!*\
  !*** ./sources/game/components/specific/sphere.js ***!
  \****************************************************/
/*! exports provided: Sphere */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sphere", function() { return Sphere; });
function Sphere() {
  this.name = 'sphere';
}



/***/ }),

/***/ "./sources/game/components/specific/text.js":
/*!**************************************************!*\
  !*** ./sources/game/components/specific/text.js ***!
  \**************************************************/
/*! exports provided: Text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
function Text(text) {
  this.name = 'text';
  this.text = text;
}



/***/ }),

/***/ "./sources/game/entities/ball.js":
/*!***************************************!*\
  !*** ./sources/game/entities/ball.js ***!
  \***************************************/
/*! exports provided: Ball */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ball", function() { return Ball; });
/* harmony import */ var modules_world_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules/world.js */ "./sources/theatre/modules/world.js");
/* harmony import */ var components_common_camera_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/common/camera.js */ "./sources/game/components/common/camera.js");
/* harmony import */ var components_common_position_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/common/position.js */ "./sources/game/components/common/position.js");
/* harmony import */ var components_common_images_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/common/images.js */ "./sources/game/components/common/images.js");
/* harmony import */ var components_common_hitbox_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/common/hitbox.js */ "./sources/game/components/common/hitbox.js");
/* harmony import */ var components_common_zone_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/common/zone.js */ "./sources/game/components/common/zone.js");
/* harmony import */ var components_common_forces_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/common/forces.js */ "./sources/game/components/common/forces.js");
/* harmony import */ var components_specific_sphere_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/specific/sphere.js */ "./sources/game/components/specific/sphere.js");









function Ball(x, y) {
  const entity = new modules_world_js__WEBPACK_IMPORTED_MODULE_0__["Entity"]('ball', [new components_common_camera_js__WEBPACK_IMPORTED_MODULE_1__["Camera"](this.camera), new components_common_zone_js__WEBPACK_IMPORTED_MODULE_5__["Zone"](this.zones.gameLayout), new components_common_position_js__WEBPACK_IMPORTED_MODULE_2__["Position"](x, y, 1), new components_common_forces_js__WEBPACK_IMPORTED_MODULE_6__["Forces"]([{
    x: -5,
    y: 0,
    duration: 30
  }]), new components_common_hitbox_js__WEBPACK_IMPORTED_MODULE_4__["Hitbox"](32, 32), new components_specific_sphere_js__WEBPACK_IMPORTED_MODULE_7__["Sphere"](), new components_common_images_js__WEBPACK_IMPORTED_MODULE_3__["Images"]([{
    'source': this.assets.images.common.ball(),
    'frames': [[0, 0, 32, 32]],
    'frame': 0,
    'destination': [0, 0, 0, 32, 32]
  }])]);
  return entity;
}



/***/ }),

/***/ "./sources/game/entities/button.js":
/*!*****************************************!*\
  !*** ./sources/game/entities/button.js ***!
  \*****************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var modules_world_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules/world.js */ "./sources/theatre/modules/world.js");
/* harmony import */ var components_common_camera_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/common/camera.js */ "./sources/game/components/common/camera.js");
/* harmony import */ var components_common_position_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/common/position.js */ "./sources/game/components/common/position.js");
/* harmony import */ var components_common_zone_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/common/zone.js */ "./sources/game/components/common/zone.js");
/* harmony import */ var components_specific_text_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/specific/text.js */ "./sources/game/components/specific/text.js");
/* harmony import */ var components_specific_border_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/specific/border.js */ "./sources/game/components/specific/border.js");
/* harmony import */ var components_specific_selected_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/specific/selected.js */ "./sources/game/components/specific/selected.js");
/* harmony import */ var components_specific_input_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/specific/input.js */ "./sources/game/components/specific/input.js");









function Button(x, y, width, height, text) {
  const entity = new modules_world_js__WEBPACK_IMPORTED_MODULE_0__["Entity"]('button' + text, [new components_common_camera_js__WEBPACK_IMPORTED_MODULE_1__["Camera"](this.camera), new components_common_zone_js__WEBPACK_IMPORTED_MODULE_3__["Zone"](this.zones.gameLayout), new components_common_position_js__WEBPACK_IMPORTED_MODULE_2__["Position"](x, y, 1), new components_specific_border_js__WEBPACK_IMPORTED_MODULE_5__["Border"](width, height), new components_specific_text_js__WEBPACK_IMPORTED_MODULE_4__["Text"](text), new components_specific_input_js__WEBPACK_IMPORTED_MODULE_7__["Input"](['KEY_UP', 'KEY_DOWN'])]);
  return entity;
}



/***/ }),

/***/ "./sources/game/entities/player.js":
/*!*****************************************!*\
  !*** ./sources/game/entities/player.js ***!
  \*****************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var modules_world_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules/world.js */ "./sources/theatre/modules/world.js");
/* harmony import */ var components_common_camera_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/common/camera.js */ "./sources/game/components/common/camera.js");
/* harmony import */ var components_common_position_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/common/position.js */ "./sources/game/components/common/position.js");
/* harmony import */ var components_common_images_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/common/images.js */ "./sources/game/components/common/images.js");
/* harmony import */ var components_common_hitbox_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/common/hitbox.js */ "./sources/game/components/common/hitbox.js");
/* harmony import */ var components_common_zone_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/common/zone.js */ "./sources/game/components/common/zone.js");
/* harmony import */ var components_specific_input_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/specific/input.js */ "./sources/game/components/specific/input.js");
/* harmony import */ var components_specific_ping_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/specific/ping.js */ "./sources/game/components/specific/ping.js");









function Player(number, command, x, y) {
  const entity = new modules_world_js__WEBPACK_IMPORTED_MODULE_0__["Entity"]('player' + number, [new components_common_camera_js__WEBPACK_IMPORTED_MODULE_1__["Camera"](this.camera), new components_common_zone_js__WEBPACK_IMPORTED_MODULE_5__["Zone"](this.zones.gameLayout), new components_common_position_js__WEBPACK_IMPORTED_MODULE_2__["Position"](x, y, 1), new components_specific_ping_js__WEBPACK_IMPORTED_MODULE_7__["Ping"](), new components_common_hitbox_js__WEBPACK_IMPORTED_MODULE_4__["Hitbox"](32, 96), new components_common_images_js__WEBPACK_IMPORTED_MODULE_3__["Images"]([{
    'source': this.assets.images.common.player(),
    'frames': [[0, 0, 32, 96]],
    'frame': 0,
    'destination': [0, 0, 0, 32, 96]
  }])]);

  if (command && command.length > 0) {
    entity.add(new components_specific_input_js__WEBPACK_IMPORTED_MODULE_6__["Input"](command));
  }

  return entity;
}



/***/ }),

/***/ "./sources/game/entities/title.js":
/*!****************************************!*\
  !*** ./sources/game/entities/title.js ***!
  \****************************************/
/*! exports provided: Title */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony import */ var modules_world_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules/world.js */ "./sources/theatre/modules/world.js");
/* harmony import */ var components_common_camera_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/common/camera.js */ "./sources/game/components/common/camera.js");
/* harmony import */ var components_common_position_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/common/position.js */ "./sources/game/components/common/position.js");
/* harmony import */ var components_common_zone_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/common/zone.js */ "./sources/game/components/common/zone.js");
/* harmony import */ var components_common_hitbox_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/common/hitbox.js */ "./sources/game/components/common/hitbox.js");
/* harmony import */ var components_specific_text_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/specific/text.js */ "./sources/game/components/specific/text.js");
/* harmony import */ var components_specific_border_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/specific/border.js */ "./sources/game/components/specific/border.js");








function Title(x, y, text) {
  const entity = new modules_world_js__WEBPACK_IMPORTED_MODULE_0__["Entity"]('title' + text, [new components_common_camera_js__WEBPACK_IMPORTED_MODULE_1__["Camera"](this.camera), new components_common_zone_js__WEBPACK_IMPORTED_MODULE_3__["Zone"](this.zones.gameLayout), new components_common_position_js__WEBPACK_IMPORTED_MODULE_2__["Position"](x, y, 1), new components_specific_text_js__WEBPACK_IMPORTED_MODULE_5__["Text"](text)]);
  return entity;
}



/***/ }),

/***/ "./sources/game/scenes/demo/server/destroy.js":
/*!****************************************************!*\
  !*** ./sources/game/scenes/demo/server/destroy.js ***!
  \****************************************************/
/*! exports provided: destroy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return destroy; });
function destroy() {
  console.log('destroy demo scene');
  console.log('-------');
  this.room.io.to(this.room.room).emit('endGameSesion', this.state.winner);
}



/***/ }),

/***/ "./sources/game/scenes/demo/server/index.js":
/*!**************************************************!*\
  !*** ./sources/game/scenes/demo/server/index.js ***!
  \**************************************************/
/*! exports provided: destroy, setup, start, update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _destroy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./destroy.js */ "./sources/game/scenes/demo/server/destroy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return _destroy_js__WEBPACK_IMPORTED_MODULE_0__["destroy"]; });

/* harmony import */ var _start_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../start.js */ "./sources/game/scenes/demo/start.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "start", function() { return _start_js__WEBPACK_IMPORTED_MODULE_1__["start"]; });

/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setup.js */ "./sources/game/scenes/demo/server/setup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return _setup_js__WEBPACK_IMPORTED_MODULE_2__["setup"]; });

/* harmony import */ var _update_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update.js */ "./sources/game/scenes/demo/server/update.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "update", function() { return _update_js__WEBPACK_IMPORTED_MODULE_3__["update"]; });






if (typeof module.hot !== 'undefined') {
  module.hot.accept(['./destroy.js', './../start.js', './setup.js', './update.js']);
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./sources/game/scenes/demo/server/setup.js":
/*!**************************************************!*\
  !*** ./sources/game/scenes/demo/server/setup.js ***!
  \**************************************************/
/*! exports provided: setup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return setup; });
function setup() {
  console.log("setup demo scene");
  this.zones = {
    gameLayout: {}
  };
  this.zones.gameLayout.refSize = 1024;
  this.player1 = {
    inputs: []
  };
  this.player2 = {
    inputs: []
  };
  this.startDate = new Date();
  this.room.sockets.forEach((socket, i) => {
    socket.on('inputs', inputs => {
      if (i == 0) {
        this.player1.inputs.push(...inputs);
      } else if (i == 1) {
        this.player2.inputs.push(...inputs);
      }
    });
  });
}



/***/ }),

/***/ "./sources/game/scenes/demo/server/update.js":
/*!***************************************************!*\
  !*** ./sources/game/scenes/demo/server/update.js ***!
  \***************************************************/
/*! exports provided: update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony import */ var systems_common_forces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! systems/common/forces.js */ "./sources/game/systems/common/forces.js");
/* harmony import */ var systems_specific_inputsPingServer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! systems/specific/inputsPingServer.js */ "./sources/game/systems/specific/inputsPingServer.js");
/* harmony import */ var systems_specific_collides_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! systems/specific/collides.js */ "./sources/game/systems/specific/collides.js");
/* harmony import */ var systems_specific_collidesBall_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! systems/specific/collidesBall.js */ "./sources/game/systems/specific/collidesBall.js");
/* harmony import */ var systems_specific_collidesPing_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! systems/specific/collidesPing.js */ "./sources/game/systems/specific/collidesPing.js");






function update() {
  this.world.system(['forces', 'position'], systems_common_forces_js__WEBPACK_IMPORTED_MODULE_0__["forces"]);
  this.world.system(['input'], systems_specific_inputsPingServer_js__WEBPACK_IMPORTED_MODULE_1__["inputsPingServer"]);
  this.world.system(['hitbox', 'position'], systems_specific_collides_js__WEBPACK_IMPORTED_MODULE_2__["collides"]);
  this.world.system(['hitbox', 'position', 'sphere'], systems_specific_collidesBall_js__WEBPACK_IMPORTED_MODULE_3__["collidesBall"]);
  this.world.system(['hitbox', 'position', 'ping'], systems_specific_collidesPing_js__WEBPACK_IMPORTED_MODULE_4__["collidesPing"]);
  let entitiesModif = [];
  Object.entries(this.world.entities).forEach(([name, entity]) => {
    let positionComponent = entity.get('position');
    let forcesComponent = entity.get('forces');
    entitiesModif.push({
      'name': name,
      'components': [positionComponent, forcesComponent]
    });
  });

  if (entitiesModif.length != 0) {
    setTimeout(() => {
      this.room.io.to(this.room.room).emit('updateEntities', {
        'entities': entitiesModif,
        'currentUpdate': this.currentUpdate
      });
    }, Math.floor(Math.random() * Math.floor(1000)));
  } //emit


  this.player1.inputs = [];
  this.player2.inputs = [];
}



/***/ }),

/***/ "./sources/game/scenes/demo/start.js":
/*!*******************************************!*\
  !*** ./sources/game/scenes/demo/start.js ***!
  \*******************************************/
/*! exports provided: start */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony import */ var modules_world_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules/world.js */ "./sources/theatre/modules/world.js");
/* harmony import */ var entities_player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! entities/player.js */ "./sources/game/entities/player.js");
/* harmony import */ var entities_ball_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! entities/ball.js */ "./sources/game/entities/ball.js");




function start() {
  console.log('start demo scene');
  this.world = new modules_world_js__WEBPACK_IMPORTED_MODULE_0__["World"](this);
  var command1,
      command2 = [];
  var gameLayoutFrame = this.zones.gameLayout;

  if (this.player == 1 || typeof this.player != "number") {
    var command1 = ['KEY_UP', 'KEY_DOWN'];
  }

  if (this.player == 2 || typeof this.player != "number") {
    var command2 = ['KEY_UP', 'KEY_DOWN'];
  }

  var player1 = entities_player_js__WEBPACK_IMPORTED_MODULE_1__["Player"].call(this, 1, command1, 16, gameLayoutFrame.refSize / 2 - 48);
  var player2 = entities_player_js__WEBPACK_IMPORTED_MODULE_1__["Player"].call(this, 2, command2, gameLayoutFrame.refSize - 48, gameLayoutFrame.refSize / 2 - 48);
  var ball = entities_ball_js__WEBPACK_IMPORTED_MODULE_2__["Ball"].call(this, gameLayoutFrame.refSize / 2, gameLayoutFrame.refSize / 2 - 16);
  this.world.add(ball);
  this.world.add(player1);
  this.world.add(player2);
}



/***/ }),

/***/ "./sources/game/scenes/ending/server/destroy.js":
/*!******************************************************!*\
  !*** ./sources/game/scenes/ending/server/destroy.js ***!
  \******************************************************/
/*! exports provided: destroy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return destroy; });
function destroy() {
  console.log('destroy ending scene');
  console.log('-------');
}



/***/ }),

/***/ "./sources/game/scenes/ending/server/index.js":
/*!****************************************************!*\
  !*** ./sources/game/scenes/ending/server/index.js ***!
  \****************************************************/
/*! exports provided: destroy, setup, start, update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _destroy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./destroy.js */ "./sources/game/scenes/ending/server/destroy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return _destroy_js__WEBPACK_IMPORTED_MODULE_0__["destroy"]; });

/* harmony import */ var _start_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../start.js */ "./sources/game/scenes/ending/start.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "start", function() { return _start_js__WEBPACK_IMPORTED_MODULE_1__["start"]; });

/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setup.js */ "./sources/game/scenes/ending/server/setup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return _setup_js__WEBPACK_IMPORTED_MODULE_2__["setup"]; });

/* harmony import */ var _update_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update.js */ "./sources/game/scenes/ending/server/update.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "update", function() { return _update_js__WEBPACK_IMPORTED_MODULE_3__["update"]; });






if (typeof module.hot !== 'undefined') {
  module.hot.accept(['./destroy.js', './../start.js', './setup.js', './update.js']);
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./sources/game/scenes/ending/server/setup.js":
/*!****************************************************!*\
  !*** ./sources/game/scenes/ending/server/setup.js ***!
  \****************************************************/
/*! exports provided: setup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return setup; });
function setup() {
  console.log("setup ending scene");
}



/***/ }),

/***/ "./sources/game/scenes/ending/server/update.js":
/*!*****************************************************!*\
  !*** ./sources/game/scenes/ending/server/update.js ***!
  \*****************************************************/
/*! exports provided: update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
function update() {}



/***/ }),

/***/ "./sources/game/scenes/ending/start.js":
/*!*********************************************!*\
  !*** ./sources/game/scenes/ending/start.js ***!
  \*********************************************/
/*! exports provided: start */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony import */ var modules_world_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules/world.js */ "./sources/theatre/modules/world.js");
/* harmony import */ var entities_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! entities/button.js */ "./sources/game/entities/button.js");
/* harmony import */ var entities_title_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! entities/title.js */ "./sources/game/entities/title.js");




function start() {
  console.log('start ending scene');
  this.world = new modules_world_js__WEBPACK_IMPORTED_MODULE_0__["World"](this);
  var gameLayoutFrame = this.zones.gameLayout;
  var winner = this.state.winner;
  var title = entities_title_js__WEBPACK_IMPORTED_MODULE_2__["Title"].call(this, gameLayoutFrame.refSize / 2, 100, "Ping Pong");
  var hintText = entities_title_js__WEBPACK_IMPORTED_MODULE_2__["Title"].call(this, gameLayoutFrame.refSize / 2, gameLayoutFrame.refSize / 2 - 100, "Press Enter to restart");
  var winnerText = entities_title_js__WEBPACK_IMPORTED_MODULE_2__["Title"].call(this, gameLayoutFrame.refSize / 2, gameLayoutFrame.refSize / 2 - 200, "Player " + winner + " won");
  this.world.add([title, winnerText, hintText]);
}



/***/ }),

/***/ "./sources/game/scenes/loading/destroy.js":
/*!************************************************!*\
  !*** ./sources/game/scenes/loading/destroy.js ***!
  \************************************************/
/*! exports provided: destroy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return destroy; });
function destroy() {
  console.log('destroy loading scene');
  console.log('-------');
  delete this.state.redirect;
}



/***/ }),

/***/ "./sources/game/scenes/loading/server/index.js":
/*!*****************************************************!*\
  !*** ./sources/game/scenes/loading/server/index.js ***!
  \*****************************************************/
/*! exports provided: destroy, setup, start, update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _destroy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../destroy.js */ "./sources/game/scenes/loading/destroy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return _destroy_js__WEBPACK_IMPORTED_MODULE_0__["destroy"]; });

/* harmony import */ var _setup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../setup.js */ "./sources/game/scenes/loading/setup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return _setup_js__WEBPACK_IMPORTED_MODULE_1__["setup"]; });

/* harmony import */ var _start_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../start.js */ "./sources/game/scenes/loading/start.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "start", function() { return _start_js__WEBPACK_IMPORTED_MODULE_2__["start"]; });

/* harmony import */ var _update_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update.js */ "./sources/game/scenes/loading/server/update.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "update", function() { return _update_js__WEBPACK_IMPORTED_MODULE_3__["update"]; });






if (typeof module.hot !== 'undefined') {
  module.hot.accept(['./../destroy.js', './../setup.js', './../start.js', './update.js']);
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./sources/game/scenes/loading/server/update.js":
/*!******************************************************!*\
  !*** ./sources/game/scenes/loading/server/update.js ***!
  \******************************************************/
/*! exports provided: update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
function update() {
  if (this.preloading === false && this.state.redirect === false) {
    setTimeout(() => {
      this.load('demo');
    }, 3000);
    this.state.redirect = true;
  }
}



/***/ }),

/***/ "./sources/game/scenes/loading/setup.js":
/*!**********************************************!*\
  !*** ./sources/game/scenes/loading/setup.js ***!
  \**********************************************/
/*! exports provided: setup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return setup; });
/* harmony import */ var modules_camera_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modules/camera.js */ "./sources/theatre/modules/camera.js");


function setup() {
  console.log('setup loading scene');
  this.camera = new modules_camera_js__WEBPACK_IMPORTED_MODULE_0__["Camera"](this.context, this.size.width, this.size.height);
}



/***/ }),

/***/ "./sources/game/scenes/loading/start.js":
/*!**********************************************!*\
  !*** ./sources/game/scenes/loading/start.js ***!
  \**********************************************/
/*! exports provided: start */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
function start() {
  console.log('start loading scene');
  this.state.redirect = false;
}



/***/ }),

/***/ "./sources/game/server/scenes/index.js":
/*!*********************************************!*\
  !*** ./sources/game/server/scenes/index.js ***!
  \*********************************************/
/*! exports provided: demo, loading, ending */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var scenes_demo_server_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scenes/demo/server/index.js */ "./sources/game/scenes/demo/server/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "demo", function() { return scenes_demo_server_index_js__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var scenes_loading_server_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! scenes/loading/server/index.js */ "./sources/game/scenes/loading/server/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "loading", function() { return scenes_loading_server_index_js__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var scenes_ending_server_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! scenes/ending/server/index.js */ "./sources/game/scenes/ending/server/index.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "ending", function() { return scenes_ending_server_index_js__WEBPACK_IMPORTED_MODULE_2__; });





/***/ }),

/***/ "./sources/game/systems/common/forces.js":
/*!***********************************************!*\
  !*** ./sources/game/systems/common/forces.js ***!
  \***********************************************/
/*! exports provided: forces */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forces", function() { return forces; });
function forces(entities) {
  Object.entries(entities).forEach(([name, entity]) => {
    const forcesComponent = entity.get('forces');
    const positionComponent = entity.get('position');
    const trashes = [];
    forcesComponent.parts.forEach(force => {
      const unlimited = force.ending === false;
      const remaining = force.duration - force.elapsed;
      const delta = unlimited === false && this.delta.update > remaining ? remaining : this.delta.update;
      const progress = (force.elapsed + delta) / force.duration;
      const moved = {
        'x': force.x * force.easing(progress),
        'y': force.y * force.easing(progress)
      };
      positionComponent.x += moved.x - force.moved.x;
      positionComponent.y += moved.y - force.moved.y;
      force.moved = moved;
      force.elapsed += this.delta.update;

      if (typeof force.handling === 'function') {
        const remove = () => {
          trashes.push(force);
        };

        force.handling(entity, force.moved.x, force.moved.y, force.elapsed, remove);
      }

      if (force.elapsed >= force.duration && typeof force.ending === 'function' && trashes.indexOf(force) === -1) {
        force.ending(entity, force.moved.x, force.moved.y, force.elapsed);
        trashes.push(force);
      }
    });
    forcesComponent.parts = forcesComponent.parts.filter(force => {
      return trashes.indexOf(force) === -1;
    });
  });
}



/***/ }),

/***/ "./sources/game/systems/specific/collides.js":
/*!***************************************************!*\
  !*** ./sources/game/systems/specific/collides.js ***!
  \***************************************************/
/*! exports provided: collides */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collides", function() { return collides; });
/* harmony import */ var components_common_forces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/common/forces.js */ "./sources/game/components/common/forces.js");
/* harmony import */ var systems_utils_collideDistance_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! systems/utils/collideDistance.js */ "./sources/game/systems/utils/collideDistance.js");
/* harmony import */ var modules_collide_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! modules/collide.js */ "./sources/theatre/modules/collide.js");
/* harmony import */ var modules_shape_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! modules/shape.js */ "./sources/theatre/modules/shape.js");





function collides(entities) {
  Object.entries(entities).forEach(([name, entity]) => {
    if (name === 'ball') {
      var positionComponent = entity.get('position');
      var hitboxComponent = entity.get('hitbox');
      var forcesComponent = entity.get('forces');
      var rectangle = new modules_shape_js__WEBPACK_IMPORTED_MODULE_3__["Rectangle"](positionComponent.x, positionComponent.y, hitboxComponent.width, hitboxComponent.height);
      Object.entries(entities).forEach(([otherEntityName, otherEntity]) => {
        if (otherEntity.name != name) {
          var otherRectangle = new modules_shape_js__WEBPACK_IMPORTED_MODULE_3__["Rectangle"](otherEntity.get('position').x, otherEntity.get('position').y, otherEntity.get('hitbox').width, otherEntity.get('hitbox').height);

          if (Object(modules_collide_js__WEBPACK_IMPORTED_MODULE_2__["collide"])(rectangle, otherRectangle)) {
            var collideDist = Object(systems_utils_collideDistance_js__WEBPACK_IMPORTED_MODULE_1__["collideDistance"])(rectangle, otherRectangle);
            var xForces = collideDist.x > 0 ? forcesComponent.parts[0].x + 5 : -forcesComponent.parts[0].x - 5;
            if (Math.abs(xForces > 30)) xForces < 0 ? -30 : 30;
            var otherEntityForces = otherEntity.get('forces');
            var yForces = 0; //yForces+=collideDist.y+forcesComponent.parts[0].y;

            yForces -= (otherRectangle.y + otherRectangle.height / 2 - (rectangle.y + rectangle.height / 2)) / 10;

            if (otherEntityForces && otherEntityForces.parts.length > 0) {
              yForces += otherEntityForces.parts[0].y;
            }

            entity.add([new components_common_forces_js__WEBPACK_IMPORTED_MODULE_0__["Forces"]([{
              x: xForces,
              y: yForces,
              duration: 30
            }])]);
          }
        }
      });
    }
  });
}



/***/ }),

/***/ "./sources/game/systems/specific/collidesBall.js":
/*!*******************************************************!*\
  !*** ./sources/game/systems/specific/collidesBall.js ***!
  \*******************************************************/
/*! exports provided: collidesBall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collidesBall", function() { return collidesBall; });
/* harmony import */ var components_common_forces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/common/forces.js */ "./sources/game/components/common/forces.js");


function collidesBall(entities) {
  Object.entries(entities).forEach(([name, entity]) => {
    var positionComponent = entity.get('position');
    var hitboxComponent = entity.get('hitbox');
    var forcesComponent = entity.get('forces');
    var zoneComponent = entity.get('zone');
    /*
        if(positionComponent.x<0){
          this.state.winner="P2";
          this.load('ending');
        }else if(positionComponent.x+hitboxComponent.width>zoneComponent.frame.refSize){
          this.state.winner="P1";
          this.load('ending');
        }
    */

    if (positionComponent.y < 0 || positionComponent.y + hitboxComponent.height > zoneComponent.frame.refSize) {
      entity.add([new components_common_forces_js__WEBPACK_IMPORTED_MODULE_0__["Forces"]([{
        x: forcesComponent.parts[0].x,
        y: -forcesComponent.parts[0].y,
        duration: forcesComponent.parts[0].duration
      }])]);
    }
  });
}



/***/ }),

/***/ "./sources/game/systems/specific/collidesPing.js":
/*!*******************************************************!*\
  !*** ./sources/game/systems/specific/collidesPing.js ***!
  \*******************************************************/
/*! exports provided: collidesPing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collidesPing", function() { return collidesPing; });
/* harmony import */ var components_common_forces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/common/forces.js */ "./sources/game/components/common/forces.js");


function collidesPing(entities) {
  Object.entries(entities).forEach(([name, entity]) => {
    var positionComponent = entity.get('position');
    var hitboxComponent = entity.get('hitbox');
    var forcesComponent = entity.get('forces');
    var zoneComponent = entity.get('zone');

    if (positionComponent.y < 0) {
      positionComponent.y = 0;
      entity.remove('forces');
    } else if (positionComponent.y + hitboxComponent.height > zoneComponent.frame.refSize) {
      positionComponent.y = zoneComponent.frame.refSize - hitboxComponent.height;
      entity.remove('forces');
    }
  });
}



/***/ }),

/***/ "./sources/game/systems/specific/inputsPingServer.js":
/*!***********************************************************!*\
  !*** ./sources/game/systems/specific/inputsPingServer.js ***!
  \***********************************************************/
/*! exports provided: inputsPingServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputsPingServer", function() { return inputsPingServer; });
/* harmony import */ var components_common_forces_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/common/forces.js */ "./sources/game/components/common/forces.js");


function inputsPingServer(entities) {
  Object.entries(entities).forEach(([name, entity]) => {
    var inputsPlayer = [];

    if (name == "player1") {
      inputsPlayer = this.player1.inputs;
    }

    if (name == "player2") {
      inputsPlayer = this.player2.inputs;
    }

    inputsPlayer.forEach(input => {
      const inputComponent = entity.get('input');
      var index = inputComponent.inputs.indexOf(input.action);

      if (index !== -1 && input.state === 'DOWN') {
        switch (index) {
          case 0:
            entity.add([new components_common_forces_js__WEBPACK_IMPORTED_MODULE_0__["Forces"]([{
              x: 0,
              y: -10,
              duration: 15
            }])]);
            break;

          case 1:
            entity.add([new components_common_forces_js__WEBPACK_IMPORTED_MODULE_0__["Forces"]([{
              x: 0,
              y: 10,
              duration: 15
            }])]);
            break;
        }
      } else if (index !== -1 && input.state === 'UP') {
        switch (index) {
          case 0:
            entity.remove('forces');
            break;

          case 1:
            entity.remove('forces');
            break;
        }
      }
    });
  });
}



/***/ }),

/***/ "./sources/game/systems/utils/collideDistance.js":
/*!*******************************************************!*\
  !*** ./sources/game/systems/utils/collideDistance.js ***!
  \*******************************************************/
/*! exports provided: collideDistance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collideDistance", function() { return collideDistance; });
function collideDistance(rectangle, otherRectangle) {
  var collision = {
    x: 0,
    y: 0
  };
  var deltaX = rectangle.x + rectangle.width / 2 - (otherRectangle.x + otherRectangle.width / 2);
  var deltaY = rectangle.y + rectangle.height / 2 - (otherRectangle.y + otherRectangle.height / 2);
  var middleCenterDistanceX = rectangle.width / 2 + otherRectangle.width / 2;
  var middleCenterDistanceY = rectangle.height / 2 + otherRectangle.height / 2;
  var colDir = null;

  if (Math.abs(deltaX) < middleCenterDistanceX && Math.abs(deltaY) < middleCenterDistanceY) {
    if (collision.active === false) collision.active = true;
    var oX = middleCenterDistanceX - Math.abs(deltaX),
        oY = middleCenterDistanceY - Math.abs(deltaY);

    if (oX >= oY) {
      if (deltaY > 0) {
        collision.y = oY;
      } else {
        collision.y = -oY;
      }
    } else {
      if (deltaX > 0) {
        collision.x = oX;
      } else {
        collision.x = -oX;
      }
    }
  }

  return collision;
}

;


/***/ }),

/***/ "./sources/server.js":
/*!***************************!*\
  !*** ./sources/server.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var module_alias_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! module-alias/register */ "module-alias/register");
/* harmony import */ var module_alias_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(module_alias_register__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var assets_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/index.js */ "./sources/game/assets/index.js");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var worker_threads__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! worker_threads */ "worker_threads");
/* harmony import */ var worker_threads__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(worker_threads__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_server_theatreServer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core/server/theatreServer.js */ "./sources/theatre/core/server/theatreServer.js");
/* harmony import */ var core_server_polyfill_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core/server/polyfill.js */ "./sources/theatre/core/server/polyfill.js");
/* harmony import */ var server_scenes_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! server/scenes/index.js */ "./sources/game/server/scenes/index.js");
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! socket.io */ "socket.io");
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_8__);









Object(core_server_polyfill_js__WEBPACK_IMPORTED_MODULE_6__["polyfillWebToServer"])();
const app = express__WEBPACK_IMPORTED_MODULE_1___default()();
const httpServer = http__WEBPACK_IMPORTED_MODULE_3___default.a.createServer(app);
const io = socket_io__WEBPACK_IMPORTED_MODULE_8___default.a.listen(httpServer);
let nbRoom = 0;
const availableRoom = [];
const allRooms = {};
/*app.get('/', function(req, res){
  res.sendFile(__dirname + '/dist/index.html');
});*/

const createRoom = function () {
  nbRoom++;
  var room = nbRoom.toString();
  availableRoom.push(nbRoom);
  allRooms[nbRoom] = {
    io: io,
    room: nbRoom,
    sockets: []
  };
  return nbRoom;
};

io.sockets.on('connection', function (socket) {
  console.log("new connection", socket.id);
  var room = '';

  if (availableRoom.length > 0) {
    room = availableRoom.pop(); // console.log("joinRoom:"+room);
  } else {
    room = createRoom(); // console.log("createRoom:"+room);
  }

  socket.join(room, () => {
    // let rooms = Object.keys(socket.rooms);
    // console.log(rooms); // [ <socket.id>, 'room 237' ]
    console.log(room); // [ <socket.id>, 'room 237' ]

    socket.emit("playerSelected", allRooms[room].sockets.length + 1);
    allRooms[room].sockets.push(socket);
    io.to(room).emit('new user in room', socket.id); // broadcast to everyone in the room

    io.to(room).emit('gameReady'); // broadcast to everyone in the room

    socket.on('disconnect', reason => {
      allRooms[room].sockets.filter(userSocket => {
        return userSocket.id != socket.id;
      });

      if (allRooms[room].sockets.length == 0) {
        delete allRooms[room];
      }
    });

    if (allRooms[room].sockets.length == 2) {
      new core_server_theatreServer_js__WEBPACK_IMPORTED_MODULE_5__["TheatreServer"]({
        'assets': assets_index_js__WEBPACK_IMPORTED_MODULE_2__["assets"],
        'container': {
          offsetHeight: 0,
          offsetWidth: 0
        },
        'expose': false,
        'scenes': server_scenes_index_js__WEBPACK_IMPORTED_MODULE_7__,
        'sharp': false,
        'room': allRooms[room]
      });
      io.to(room).emit("startGameSession");
    }
  });
});

exports.start = function startServer(port) {
  httpServer.listen(port, function () {
    console.log('listening on *:' + port);
  });
};

/***/ }),

/***/ "./sources/theatre/core/canvas.js":
/*!****************************************!*\
  !*** ./sources/theatre/core/canvas.js ***!
  \****************************************/
/*! exports provided: Canvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return Canvas; });
function Canvas(type, identifier, width, height) {
  const element = document.createElement('canvas');
  const context = element.getContext(type);
  const ratio = window.devicePixelRatio || 1;

  function resize(width, height) {
    element.setAttribute('height', ratio * height);
    element.setAttribute('width', ratio * width);
    element.style.height = height + 'px';
    element.style.width = width + 'px';
    context.scale(ratio, ratio);
  }

  function sharp() {
    element.style.imageRendering = '-moz-crisp-edges';
    element.style.imageRendering = '-webkit-crisp-edges';
    element.style.imageRendering = 'crisp-edges';
    element.style.imageRendering = 'pixelated';
    context.imageSmoothingEnabled = false;
  }

  element.setAttribute('id', identifier);
  resize(width, height);
  this.context = context;
  this.element = element;
  this.resize = resize;
  this.sharp = sharp;
} // exports current module as an object




/***/ }),

/***/ "./sources/theatre/core/loop.js":
/*!**************************************!*\
  !*** ./sources/theatre/core/loop.js ***!
  \**************************************/
/*! exports provided: Loop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loop", function() { return Loop; });
function Loop(framerate = 60, speed = 1) {
  let elapsedTime = 0;
  let lastRender = null;
  let lastUpdate = null;

  function render(handler) {
    const currentRender = Date.now();

    if (lastRender !== null) {
      handler(currentRender - lastRender);
    } // call user's render handler on each available frame


    requestAnimationFrame(this.render.bind(this, handler));
    lastRender = currentRender;
  }

  function update(handler) {
    const currentUpdate = Date.now();
    this.currentUpdate = currentUpdate;

    if (lastUpdate !== null) {
      // define elapsed time since last update
      elapsedTime += currentUpdate - lastUpdate;
    } // call user's update handler matching timeframe, speed and fixing browser time handling


    while (elapsedTime >= 1000 / this.framerate / this.speed) {
      // define elapsed time since last user's update handler matching timeframe and speed
      elapsedTime -= 1000 / this.framerate / this.speed;
      handler(1000 / this.framerate);
    }

    lastUpdate = currentUpdate; // call update loop at least 60 times per second to quickly catch framerate or speed changes

    setTimeout(this.update.bind(this, handler), 1000 / Math.max(this.framerate, 60));
  }

  this.framerate = framerate;
  this.speed = speed;
  this.render = render;
  this.update = update;
  this.currentUpdate = 0;
} // exports current module as an object




/***/ }),

/***/ "./sources/theatre/core/server/fakePreload.js":
/*!****************************************************!*\
  !*** ./sources/theatre/core/server/fakePreload.js ***!
  \****************************************************/
/*! exports provided: fakePreload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakePreload", function() { return fakePreload; });
function fakePreload(assets, handler) {
  let promises = []; // preloads each asset

  assets.forEach(function (asset) {
    // creates a promise for current asset preloading
    const promise = new Promise(function (resolve, reject) {
      // if current asset is a dataset then preload it
      if (asset.type === 'dataset') {
        asset.getter = () => asset.source;

        resolve(asset);
      } // if current asset is an image then preload it


      if (asset.type === 'image') {
        const image = {};
        image.src = asset.source; // when current image is loaded then resolve current promise

        asset.getter = () => image;

        resolve(asset);
      } // if current asset is a sound then preload it
      else if (asset.type === 'sound') {
          const sound = {};

          asset.getter = () => sound;

          resolve(asset);
        }
    });
    promises.push(promise);
  }); // call user's success handler when all assets are preloaded

  Promise.all(promises).then(handler);
} // exports current module as a function




/***/ }),

/***/ "./sources/theatre/core/server/polyfill.js":
/*!*************************************************!*\
  !*** ./sources/theatre/core/server/polyfill.js ***!
  \*************************************************/
/*! exports provided: polyfillWebToServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfillWebToServer", function() { return polyfillWebToServer; });
function polyfillWebToServer() {
  if (typeof window === 'undefined') {
    global.window = {};

    global.window.requestAnimationFrame = function () {
      setImmediate(() => f(Date.now()));
    };
  }
}



/***/ }),

/***/ "./sources/theatre/core/server/theatreServer.js":
/*!******************************************************!*\
  !*** ./sources/theatre/core/server/theatreServer.js ***!
  \******************************************************/
/*! exports provided: TheatreServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TheatreServer", function() { return TheatreServer; });
/* harmony import */ var core_canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/canvas.js */ "./sources/theatre/core/canvas.js");
/* harmony import */ var core_loop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/loop.js */ "./sources/theatre/core/loop.js");
/* harmony import */ var core_server_fakePreload_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core/server/fakePreload.js */ "./sources/theatre/core/server/fakePreload.js");




function TheatreServer(config) {
  const {
    assets,
    container,
    scenes,
    room
  } = config;
  const expose = config.expose || false;
  const framerate = config.framerate || 60;
  const sharp = config.sharp || false;
  const speed = config.speed || 1;
  const size = {
    'height': container.offsetHeight,
    'width': container.offsetWidth
  };
  let loading = null;
  let restarting = false;

  function initialize() {
    this.assets = {};
    this.delta = {};
    this.delta.render = 0;
    this.delta.update = 0;
    this.scene = this.scenes.loading;
    this.scene.setup.call(this);
    this.scene.start.call(this);
    const loop = new core_loop_js__WEBPACK_IMPORTED_MODULE_1__["Loop"](framerate, speed);
    loop.update(timeframe => {
      this.delta.update = timeframe;
      this.scene.update.call(this);

      if (restarting === true) {
        this.scene.start.call(this);
        restarting = false;
        return;
      }

      if (loading !== null) {
        this.scene.destroy.call(this);
        this.scene = this.scenes[loading];
        this.scene.setup.call(this);
        this.scene.start.call(this);
        loading = null;
        return;
      }
    });
    Object(core_server_fakePreload_js__WEBPACK_IMPORTED_MODULE_2__["fakePreload"])(assets, assets => {
      assets.forEach(asset => {
        if (typeof this.assets[asset.type + 's'] === 'undefined') {
          this.assets[asset.type + 's'] = {};
        }

        if (typeof this.assets[asset.type + 's'][asset.scope] === 'undefined') {
          this.assets[asset.type + 's'][asset.scope] = {};
        }

        this.assets[asset.type + 's'][asset.scope][asset.name] = asset.getter;
      });
      this.preloading = false;
    });
    this.loop = loop;
    this.preloading = true;
  }

  function load(scene) {
    loading = scene;
  }

  function restart() {
    restarting = true;
  }

  this.preloading = false;
  this.scenes = scenes;
  this.size = size;
  this.room = room;
  this.state = {};
  this.version = '0.33.0';
  this.load = load;
  this.restart = restart;
  initialize.call(this, config);

  if (expose === true) {
    window.theatre = this;
  }
} // exports current module as an object




/***/ }),

/***/ "./sources/theatre/modules/camera.js":
/*!*******************************************!*\
  !*** ./sources/theatre/modules/camera.js ***!
  \*******************************************/
/*! exports provided: Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony import */ var _ease_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ease.js */ "./sources/theatre/modules/ease.js");


function Camera(context, width, height) {
  let images = [];
  let shaking = {
    'current': false,
    'duration': 0,
    'easing': null,
    'elapsed': 0,
    'force': {
      'x': 0,
      'y': 0
    },
    'shift': {
      'x': 0,
      'y': 0
    }
  };

  function add(image) {
    let target = 0;

    for (let iterator = images.length - 1; iterator >= 0; iterator -= 1) {
      const current = images[iterator];

      if (image.destination.z >= current.destination.z) {
        target = iterator + 1;
        break;
      }
    }

    images.splice(target, 0, image);
  }

  function idle() {
    shaking = {
      'current': false,
      'duration': 0,
      'easing': null,
      'elapsed': 0,
      'force': {
        'x': 0,
        'y': 0
      },
      'shift': {
        'x': 0,
        'y': 0
      }
    };
  }

  function render() {
    images.forEach(image => {
      const {
        destination,
        frame,
        opacity,
        source
      } = image;

      if (opacity > 0 && this.visible(destination.x, destination.y, destination.width, destination.height) === true) {
        const alpha = context.globalAlpha;
        context.globalAlpha = opacity;
        context.drawImage(source, frame.x, frame.y, frame.width, frame.height, destination.x - (this.position.x + shaking.shift.x), destination.y - (this.position.y + shaking.shift.y), destination.width, destination.height);
        context.globalAlpha = alpha;
      }
    });
    images = [];
  }

  function set(x, y) {
    this.position.x = x;
    this.position.y = y;
  }

  function shake(x, y, duration, easing = _ease_js__WEBPACK_IMPORTED_MODULE_0__["reverse"](_ease_js__WEBPACK_IMPORTED_MODULE_0__["easeOut"](2))) {
    this.idle();
    shaking.force = {
      'x': x,
      'y': y
    };
    shaking.current = true;
    shaking.duration = duration;
    shaking.easing = easing;
  }

  function update(delta) {
    if (shaking.current === false) {
      return;
    }

    if (shaking.elapsed + delta >= shaking.duration) {
      this.idle();
      return;
    }

    shaking.elapsed += delta;
    const amplitude = shaking.easing(shaking.elapsed / shaking.duration);
    const angle = Math.random() * 2 * Math.PI;
    shaking.shift.x = Math.round(Math.cos(angle) * shaking.force.x * amplitude);
    shaking.shift.y = Math.round(Math.sin(angle) * shaking.force.y * amplitude);
  }

  function visible(x, y, width, height) {
    const camera = {
      'x': this.position.x + shaking.shift.x,
      'y': this.position.y + shaking.shift.y,
      'width': this.size.width,
      'height': this.size.height
    };

    if (x + width <= camera.x || x >= camera.x + camera.width || y + height <= camera.y || y >= camera.y + camera.height) {
      return false;
    }

    return true;
  }

  this.position = {
    'x': 0,
    'y': 0
  };
  this.size = {
    'width': width,
    'height': height
  };
  this.add = add;
  this.idle = idle;
  this.render = render;
  this.set = set;
  this.shake = shake;
  this.update = update;
  this.visible = visible;
} // exports current module as an object




/***/ }),

/***/ "./sources/theatre/modules/collide.js":
/*!********************************************!*\
  !*** ./sources/theatre/modules/collide.js ***!
  \********************************************/
/*! exports provided: collide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collide", function() { return collide; });
/* harmony import */ var _shape_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape.js */ "./sources/theatre/modules/shape.js");

const caller = {
  'collidePointPoint': collidePointPoint,
  'collidePointRectangle': collidePointRectangle,
  'collideRectangleRectangle': collideRectangleRectangle
};

function collide(A, B) {
  const parameters = [];
  let name = 'collide';

  if (A instanceof _shape_js__WEBPACK_IMPORTED_MODULE_0__["Point"] === true) {
    parameters.push(A);
    name += 'Point';
  }

  if (B instanceof _shape_js__WEBPACK_IMPORTED_MODULE_0__["Point"] === true) {
    parameters.push(B);
    name += 'Point';
  }

  if (parameters.indexOf(A) === -1 && A instanceof _shape_js__WEBPACK_IMPORTED_MODULE_0__["Rectangle"] === true) {
    parameters.push(A);
    name += 'Rectangle';
  }

  if (parameters.indexOf(B) === -1 && B instanceof _shape_js__WEBPACK_IMPORTED_MODULE_0__["Rectangle"] === true) {
    parameters.push(B);
    name += 'Rectangle';
  }

  return caller[name].apply(null, parameters);
}

function collidePointPoint(A, B) {
  if (A.x !== B.x || A.y !== B.y) {
    return false;
  }

  return true;
}

function collidePointRectangle(A, BCDE) {
  if (A.x < BCDE.x || A.x > BCDE.x + BCDE.width || A.y < BCDE.y || A.y > BCDE.y + BCDE.height) {
    return false;
  }

  return true;
}

function collideRectangleRectangle(ABCD, EFGH) {
  if (ABCD.x + ABCD.width < EFGH.x || ABCD.x > EFGH.x + EFGH.width || ABCD.y + ABCD.height < EFGH.y || ABCD.y > EFGH.y + EFGH.height) {
    return false;
  }

  return true;
} // exports current module as a function




/***/ }),

/***/ "./sources/theatre/modules/ease.js":
/*!*****************************************!*\
  !*** ./sources/theatre/modules/ease.js ***!
  \*****************************************/
/*! exports provided: easeIn, easeInOut, easeOut, linear, easeInCubic, easeInQuad, easeInQuart, easeInOutCubic, easeInOutQuad, easeInOutQuart, easeOutCubic, easeOutQuad, easeOutQuart, reverse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeIn", function() { return easeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOut", function() { return easeInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOut", function() { return easeOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linear", function() { return linear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInCubic", function() { return easeInCubic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInQuad", function() { return easeInQuad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInQuart", function() { return easeInQuart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutCubic", function() { return easeInOutCubic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutQuad", function() { return easeInOutQuad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutQuart", function() { return easeInOutQuart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutCubic", function() { return easeOutCubic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutQuad", function() { return easeOutQuad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutQuart", function() { return easeOutQuart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverse", function() { return reverse; });
function easeIn(power) {
  // accelerating from zero velocity
  return x => x ** power;
}

function easeInOut(power) {
  // acceleration until halfway, then deceleration (with x in [0, 1] range)
  return x => {
    if (x < 0.5) {
      return easeIn(power)(2 * x) / 2;
    }

    return 1 - easeInOut(power)(1 - x);
  };
}

function easeOut(power) {
  // decelerating to zero velocity (with x in [0, 1] range)
  return x => 1 - easeIn(power)(1 - x);
}

function linear(factor) {
  // linear progression
  return x => x * factor;
}

function easeInQuad(x) {
  // accelerating from zero velocity
  return easeIn(2)(x);
}

function easeInCubic(x) {
  // accelerating from zero velocity
  return easeIn(3)(x);
}

function easeInQuart(x) {
  // accelerating from zero velocity
  return easeIn(4)(x);
}

function easeInOutQuad(x) {
  // acceleration until halfway, then deceleration (with x in [0, 1] range)
  return easeInOut(2)(x);
}

function easeInOutCubic(x) {
  // acceleration until halfway, then deceleration (with x in [0, 1] range)
  return easeInOut(3)(x);
}

function easeInOutQuart(x) {
  // acceleration until halfway, then deceleration (with x in [0, 1] range)
  return easeInOut(4)(x);
}

function easeOutQuad(x) {
  // decelerating to zero velocity (with x in [0, 1] range)
  return easeOut(2)(x);
}

function easeOutCubic(x) {
  // decelerating to zero velocity (with x in [0, 1] range)
  return easeOut(3)(x);
}

function easeOutQuart(x) {
  // decelerating to zero velocity (with x in [0, 1] range)
  return easeOut(4)(x);
}

function reverse(handler) {
  // reversing easing function
  return x => handler(1 - x);
} // exports current module as functions




/***/ }),

/***/ "./sources/theatre/modules/shape.js":
/*!******************************************!*\
  !*** ./sources/theatre/modules/shape.js ***!
  \******************************************/
/*! exports provided: Circle, Point, Rectangle, Segment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return Circle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return Rectangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Segment", function() { return Segment; });
function Circle(x, y, radius) {
  this.radius = radius;
  this.x = x;
  this.y = y;
}

function Point(x, y) {
  this.x = x;
  this.y = y;
}

function Rectangle(x, y, width, height) {
  this.height = height;
  this.width = width;
  this.x = x;
  this.y = y;
}

function Segment(xa, ya, xb, yb) {
  this.xa = xa;
  this.xb = xb;
  this.ya = ya;
  this.yb = yb;
} // exports current module as objects




/***/ }),

/***/ "./sources/theatre/modules/world.js":
/*!******************************************!*\
  !*** ./sources/theatre/modules/world.js ***!
  \******************************************/
/*! exports provided: World, Entity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "World", function() { return World; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entity", function() { return Entity; });
function Entity(name, components) {
  function add(components) {
    if (Array.isArray(components) === false) {
      components = [components];
    }

    components.forEach(component => {
      this.components[component.name] = component;
    });
  }

  function get(component) {
    return this.components[component];
  }

  function has(components) {
    if (Array.isArray(components) === false) {
      components = [components];
    }

    for (let iterator = 0, length = components.length; iterator < length; iterator += 1) {
      const search = components[iterator];
      const component = search.replace('not:', '');
      const exclude = search !== component;

      if (this.components.hasOwnProperty(component) === exclude) {
        return false;
      }
    }

    return true;
  }

  function remove(components) {
    if (Array.isArray(components) === false) {
      components = [components];
    }

    for (let iterator = 0, length = components.length; iterator < length; iterator += 1) {
      const component = components[iterator];

      if (this.components.hasOwnProperty(component) === true) {
        delete this.components[component];
      }
    }
  }

  this.components = {};
  this.name = name;
  this.add = add;
  this.get = get;
  this.has = has;
  this.remove = remove;
  this.add(components);
}

function World(context) {
  function add(entities) {
    if (Array.isArray(entities) === false) {
      entities = [entities];
    }

    entities.forEach(entity => {
      this.entities[entity.name] = entity;
    });
  }

  function get(entity) {
    return this.entities[entity];
  }

  function remove(entities) {
    if (Array.isArray(entities) === false) {
      entities = [entities];
    }

    for (let iterator = 0, length = entities.length; iterator < length; iterator += 1) {
      const entity = entities[iterator];
      const key = entity.name || entity;

      if (this.entities.hasOwnProperty(key) === true) {
        delete this.entities[key];
      }
    }
  }

  function system(components, handler, entities = this.entities) {
    const chosen = {};
    Object.entries(entities).forEach(([name, entity]) => {
      if (entity.has(components) === true) {
        chosen[name] = entity;
      }
    });
    handler.call(context, chosen);
  }

  this.entities = {};
  this.add = add;
  this.get = get;
  this.remove = remove;
  this.system = system;
}



/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "module-alias/register":
/*!****************************************!*\
  !*** external "module-alias/register" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("module-alias/register");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),

/***/ "worker_threads":
/*!*********************************!*\
  !*** external "worker_threads" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("worker_threads");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map