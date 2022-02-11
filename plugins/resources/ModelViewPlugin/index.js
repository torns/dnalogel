"use strict";
exports.__esModule = true;
exports.ModelViewPlugin = void 0;
var THREE = require("three");
/**
 * Five 模型插件
 * @template ExportType 导出方法
 */
var ModelViewPlugin = function (five) {
    var needsRender = true;
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
    var model = new THREE.Object3D();
    {
        var light = new THREE.DirectionalLight(0xffffff, 0.5);
        light.position.copy(new THREE.Vector3(1, 1, 1));
        scene.add(light);
    }
    {
        var light = new THREE.DirectionalLight(0xffffff, 0.3);
        scene.add(light);
    }
    {
        var light = new THREE.AmbientLight(0xffffff, 0.3);
        scene.add(light);
    }
    scene.add(model);
    var renderer = null;
    var initRendererIfNeeds = function () {
        if (!five.renderer)
            return;
        if (!renderer) {
            renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
            renderer.setPixelRatio(five.renderer.getPixelRatio());
            renderer.outputEncoding = THREE.sRGBEncoding;
            renderer.setClearColor(0x181a1c, 0);
            renderer.autoClear = true;
        }
        return renderer;
    };
    var modelWillLoad = function () {
        model.traverse(function (object) {
            if (object instanceof THREE.Mesh) {
                var materials = [].concat(object.material);
                materials.forEach(function (material) { return material.dispose(); });
            }
        });
        scene.remove(model);
        model = new THREE.Object3D();
        scene.add(model);
        update();
    };
    var modelLoaded = function () {
        function cloneMaterial(material) {
            material = material.clone();
            material.uniforms.modelAlpha.value = 1;
            if (material.uniforms.map.value) {
                material.uniforms.map.value.needsUpdate = true;
            }
            return material;
        }
        function cloneModel(model) {
            if (model instanceof THREE.Mesh) {
                var geometry = model.geometry;
                var material = Array.isArray(model.material)
                    ? model.material.map(cloneMaterial)
                    : cloneMaterial(model.material);
                return new THREE.Mesh(geometry, material);
            }
            else if (model instanceof THREE.Group) {
                var group_1 = new THREE.Group();
                model.children.forEach(function (object) { return group_1.add(cloneModel(object)); });
                return group_1;
            }
            else {
                var object3D_1 = new THREE.Object3D();
                model.children.forEach(function (object) { return object3D_1.add(cloneModel(object)); });
                return object3D_1;
            }
        }
        scene.remove(model);
        model = cloneModel(five.model);
        scene.add(model);
        update();
    };
    var appendTo = function (element, size) {
        if (size === void 0) { size = {}; }
        var renderer = initRendererIfNeeds();
        if (!renderer)
            return;
        element.appendChild(renderer.domElement);
        refresh(size);
        var positionType = window.getComputedStyle(element).position;
        if (positionType !== 'relative' &&
            positionType !== 'absolute' &&
            positionType !== 'fixed' &&
            positionType !== 'sticky')
            element.style.position = 'relative';
    };
    var refresh = function (size) {
        if (size === void 0) { size = {}; }
        if (!renderer)
            return;
        var element = renderer.domElement;
        var container = element.parentNode;
        if (container && container.nodeName) {
            var _a = size.width, width = _a === void 0 ? container.offsetWidth : _a, _b = size.height, height = _b === void 0 ? container.offsetHeight : _b;
            renderer.setSize(width, height);
            // 修改摄像机 aspect 比值
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        }
        needsRender = true;
    };
    var cameraDistance = function () {
        var bounding = five.model.bounding;
        var fov = camera.fov, aspect = camera.aspect;
        var radius = Math.sqrt(Math.pow(bounding.max.x - bounding.min.x + 2, 2) +
            Math.pow(bounding.max.y - bounding.min.y + 2, 2) +
            Math.pow(bounding.max.z - bounding.min.z + 2, 2));
        // fit screen
        var distance = radius / 2 / Math.tan((Math.PI * fov) / 360);
        if (aspect < 1)
            distance = distance / aspect;
        return isNaN(distance) ? radius : distance;
    };
    var update = function () {
        var _a = five.getPose(), longitude = _a.longitude, latitude = _a.latitude;
        var distance = cameraDistance();
        var lookAt = five.model.bounding.getCenter(new THREE.Vector3());
        var longitudeDistance = distance * Math.cos(latitude);
        var cameraPosition = new THREE.Vector3();
        cameraPosition.x = Math.sin(longitude) * longitudeDistance + lookAt.x;
        cameraPosition.z = Math.cos(longitude) * longitudeDistance + lookAt.z;
        cameraPosition.y = Math.sin(latitude) * distance + lookAt.y;
        camera.position.copy(cameraPosition);
        camera.lookAt(lookAt);
        needsRender = true;
    };
    var render = function () {
        if (needsRender !== true)
            return;
        if (!renderer)
            return;
        if (!renderer.domElement.parentNode)
            return;
        var parentNode = renderer.domElement.parentNode;
        if (parentNode.offsetWidth === 0)
            return;
        renderer.render(scene, camera);
        needsRender = false;
    };
    var dispose = function () {
        if (renderer)
            renderer.dispose();
        renderer = null;
    };
    five.on('modelLoaded', modelLoaded);
    five.on('modelWillLoad', modelWillLoad);
    five.on('cameraDirectionUpdate', update);
    five.on('dispose', dispose);
    five.on('renderFrame', render);
    return { appendTo: appendTo, refresh: refresh };
};
exports.ModelViewPlugin = ModelViewPlugin;
exports["default"] = exports.ModelViewPlugin;
