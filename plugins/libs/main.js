/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ var __webpack_modules__ = ({

/***/ "../node_modules/three/build/three.module.js":
/*!***************************************************!*\
  !*** ../node_modules/three/build/three.module.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nexports.__esModule = true;\nexports.A = exports.ModelViewPlugin = void 0;\nvar ModelViewPlugin_1 = __webpack_require__(/*! ./resources/ModelViewPlugin */ \"./resources/ModelViewPlugin/index.tsx\");\nexports.ModelViewPlugin = ModelViewPlugin_1[\"default\"];\nfunction A() {\n    console.log(1111);\n    return 23;\n}\nexports.A = A;\n\n\n//# sourceURL=webpack://@realsee/dnalogel/./index.ts?");

/***/ }),

/***/ "./resources/ModelViewPlugin/index.tsx":
/*!*********************************************!*\
  !*** ./resources/ModelViewPlugin/index.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nexports.__esModule = true;\nexports.ModelViewPlugin = void 0;\nvar THREE = __webpack_require__(/*! three */ \"../node_modules/three/build/three.module.js\");\n/**\n * Five 模型插件\n * @template ExportType 导出方法\n */\nvar ModelViewPlugin = function (five) {\n    var needsRender = true;\n    var scene = new THREE.Scene();\n    var camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);\n    var model = new THREE.Object3D();\n    {\n        var light = new THREE.DirectionalLight(0xffffff, 0.5);\n        light.position.copy(new THREE.Vector3(1, 1, 1));\n        scene.add(light);\n    }\n    {\n        var light = new THREE.DirectionalLight(0xffffff, 0.3);\n        scene.add(light);\n    }\n    {\n        var light = new THREE.AmbientLight(0xffffff, 0.3);\n        scene.add(light);\n    }\n    scene.add(model);\n    var renderer = null;\n    var initRendererIfNeeds = function () {\n        if (!five.renderer)\n            return;\n        if (!renderer) {\n            renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });\n            renderer.setPixelRatio(five.renderer.getPixelRatio());\n            renderer.outputEncoding = THREE.sRGBEncoding;\n            renderer.setClearColor(0x181a1c, 0);\n            renderer.autoClear = true;\n        }\n        return renderer;\n    };\n    var modelWillLoad = function () {\n        model.traverse(function (object) {\n            if (object instanceof THREE.Mesh) {\n                var materials = [].concat(object.material);\n                materials.forEach(function (material) { return material.dispose(); });\n            }\n        });\n        scene.remove(model);\n        model = new THREE.Object3D();\n        scene.add(model);\n        update();\n    };\n    var modelLoaded = function () {\n        function cloneMaterial(material) {\n            material = material.clone();\n            material.uniforms.modelAlpha.value = 1;\n            if (material.uniforms.map.value) {\n                material.uniforms.map.value.needsUpdate = true;\n            }\n            return material;\n        }\n        function cloneModel(model) {\n            if (model instanceof THREE.Mesh) {\n                var geometry = model.geometry;\n                var material = Array.isArray(model.material)\n                    ? model.material.map(cloneMaterial)\n                    : cloneMaterial(model.material);\n                return new THREE.Mesh(geometry, material);\n            }\n            else if (model instanceof THREE.Group) {\n                var group_1 = new THREE.Group();\n                model.children.forEach(function (object) { return group_1.add(cloneModel(object)); });\n                return group_1;\n            }\n            else {\n                var object3D_1 = new THREE.Object3D();\n                model.children.forEach(function (object) { return object3D_1.add(cloneModel(object)); });\n                return object3D_1;\n            }\n        }\n        scene.remove(model);\n        model = cloneModel(five.model);\n        scene.add(model);\n        update();\n    };\n    var appendTo = function (element, size) {\n        if (size === void 0) { size = {}; }\n        var renderer = initRendererIfNeeds();\n        if (!renderer)\n            return;\n        element.appendChild(renderer.domElement);\n        refresh(size);\n        var positionType = window.getComputedStyle(element).position;\n        if (positionType !== 'relative' &&\n            positionType !== 'absolute' &&\n            positionType !== 'fixed' &&\n            positionType !== 'sticky')\n            element.style.position = 'relative';\n    };\n    var refresh = function (size) {\n        if (size === void 0) { size = {}; }\n        if (!renderer)\n            return;\n        var element = renderer.domElement;\n        var container = element.parentNode;\n        if (container && container.nodeName) {\n            var _a = size.width, width = _a === void 0 ? container.offsetWidth : _a, _b = size.height, height = _b === void 0 ? container.offsetHeight : _b;\n            renderer.setSize(width, height);\n            // 修改摄像机 aspect 比值\n            camera.aspect = width / height;\n            camera.updateProjectionMatrix();\n        }\n        needsRender = true;\n    };\n    var cameraDistance = function () {\n        var bounding = five.model.bounding;\n        var fov = camera.fov, aspect = camera.aspect;\n        var radius = Math.sqrt(Math.pow(bounding.max.x - bounding.min.x + 2, 2) +\n            Math.pow(bounding.max.y - bounding.min.y + 2, 2) +\n            Math.pow(bounding.max.z - bounding.min.z + 2, 2));\n        // fit screen\n        var distance = radius / 2 / Math.tan((Math.PI * fov) / 360);\n        if (aspect < 1)\n            distance = distance / aspect;\n        return isNaN(distance) ? radius : distance;\n    };\n    var update = function () {\n        var _a = five.getPose(), longitude = _a.longitude, latitude = _a.latitude;\n        var distance = cameraDistance();\n        var lookAt = five.model.bounding.getCenter(new THREE.Vector3());\n        var longitudeDistance = distance * Math.cos(latitude);\n        var cameraPosition = new THREE.Vector3();\n        cameraPosition.x = Math.sin(longitude) * longitudeDistance + lookAt.x;\n        cameraPosition.z = Math.cos(longitude) * longitudeDistance + lookAt.z;\n        cameraPosition.y = Math.sin(latitude) * distance + lookAt.y;\n        camera.position.copy(cameraPosition);\n        camera.lookAt(lookAt);\n        needsRender = true;\n    };\n    var render = function () {\n        if (needsRender !== true)\n            return;\n        if (!renderer)\n            return;\n        if (!renderer.domElement.parentNode)\n            return;\n        var parentNode = renderer.domElement.parentNode;\n        if (parentNode.offsetWidth === 0)\n            return;\n        renderer.render(scene, camera);\n        needsRender = false;\n    };\n    var dispose = function () {\n        if (renderer)\n            renderer.dispose();\n        renderer = null;\n    };\n    five.on('modelLoaded', modelLoaded);\n    five.on('modelWillLoad', modelWillLoad);\n    five.on('cameraDirectionUpdate', update);\n    five.on('dispose', dispose);\n    five.on('renderFrame', render);\n    return { appendTo: appendTo, refresh: refresh };\n};\nexports.ModelViewPlugin = ModelViewPlugin;\nexports[\"default\"] = exports.ModelViewPlugin;\n\n\n//# sourceURL=webpack://@realsee/dnalogel/./resources/ModelViewPlugin/index.tsx?");

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module can't be inlined because the eval devtool is used.
/******/ var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ var __webpack_exports__A = __webpack_exports__.A;
/******/ var __webpack_exports__ModelViewPlugin = __webpack_exports__.ModelViewPlugin;
/******/ var __webpack_exports___esModule = __webpack_exports__.__esModule;
/******/ export { __webpack_exports__A as A, __webpack_exports__ModelViewPlugin as ModelViewPlugin, __webpack_exports___esModule as __esModule };
/******/ 