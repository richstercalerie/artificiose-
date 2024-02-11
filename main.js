import * as THREE from './js/three.module.js';

// Set up the scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('scene-container').appendChild(renderer.domElement);

// Create a simple character (a cube in this case)
const characterGeometry = new THREE.BoxGeometry();
const characterMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const character = new THREE.Mesh(characterGeometry, characterMaterial);
scene.add(character);

// Position the character
character.position.x = -2;

// Create a plane for the ground
const groundGeometry = new THREE.PlaneGeometry(10, 10);
const groundMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa, side: THREE.DoubleSide });
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
ground.rotation.x = Math.PI / 2;
ground.position.y = -1;
scene.add(ground);

// Position the camera
camera.position.z = 5;

// Add lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
scene.add(directionalLight);

// Animation loop
const animate = () => {
  requestAnimationFrame(animate);

  // Rotate the character
  character.rotation.x += 0.01;
  character.rotation.y += 0.01;

  // Render the scene
  renderer.render(scene, camera);
};

// Handle window resizing
window.addEventListener('resize', () => {
  const newWidth = window.innerWidth;
  const newHeight = window.innerHeight;

  camera.aspect = newWidth / newHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(newWidth, newHeight);
});

// Start the animation loop
animate();
