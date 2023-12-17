import { LumaSplatsSemantics, LumaSplatsThree } from "@lumaai/luma-web";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import * as THREE from "three";

// documentation + examples
// https://github.com/lumalabs/luma-web-examples/tree/main/src

const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
renderer.antialias = false;

// container + luma source url
const container = document.getElementById('gaussian3D');
const lumasource = container.getAttribute('datasource');
const fov = container.getAttribute('camerafov') || 75;

// remove background button
const removeBackgroundButton = document.getElementById('backgroundButton');
let isBackgroundRemoved = false;

// fov, aspecrt ratio, near, far
const camera = new THREE.PerspectiveCamera(fov, container.clientWidth / container.clientHeight, 0.1, 1000);

// handle user interaction
const handleStart = () => {
	controls.autoRotate = false;
};

// orbit controls for rotation
const controls = new OrbitControls(camera, renderer.domElement);
controls.autoRotate = true;
controls.autoRotateSpeed = 0.5;
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.addEventListener('start', handleStart);

// display window
window.onload = function () {
	// load splats
    let splats = new LumaSplatsThree({source:lumasource});
    scene.add(splats);

	// filter splats to show only foreground
	removeBackgroundButton.addEventListener('click', function() {
		if (isBackgroundRemoved) {
			splats.semanticsMask = LumaSplatsSemantics.FOREGROUND | LumaSplatsSemantics.BACKGROUND;
			isBackgroundRemoved = false;
			removeBackgroundButton.textContent = 'REMOVE BACKGROUND';
		} else {
			splats.semanticsMask = LumaSplatsSemantics.FOREGROUND;
			isBackgroundRemoved = true;
			removeBackgroundButton.textContent = 'SHOW BACKGROUND';
		}
	});

	// initialise camera viewing location from splat file
    splats.onInitialCameraTransform = transform => {
        transform.decompose(camera.position, camera.quaternion, new THREE.Vector3());
    };

    // renderer to container
	renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

	// render and update window
	window.addEventListener('resize', onWindowResize(container));
    animate();
	updateScene();
};

// rendering loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
	controls.update();
}

// update window
function updateScene() {
	onWindowResize();
	requestAnimationFrame(updateScene);
}

// resize window
function onWindowResize() {
	renderer.setSize(container.clientWidth, container.clientHeight);
	camera.aspect = container.clientWidth / container.clientHeight;
	camera.updateProjectionMatrix();
}