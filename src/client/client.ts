import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene()
const scene2 = new THREE.Scene()
scene.background = new THREE.Color(0x00ff00)
const camera1 = new THREE.PerspectiveCamera(
    75,
    1,
    0.1,
    1000
)
const camera2 = new THREE.OrthographicCamera(-1,1,1,-1, 0.1, 10)
const camera3 = new THREE.OrthographicCamera(-1,1,1,-1, 0.1, 10)
const camera4 = new THREE.OrthographicCamera(-1,1,1,-1, 0.1, 10)

// Look at mesh from front
camera1.position.z = 2

// Look at mesh from top
camera2.position.y = 1
camera2.lookAt(new THREE.Vector3(0,0,0))

// Look at mesh from front
camera3.position.z = 1

// Look at mesh from the left
camera4.position.x = -1
camera4.lookAt(new THREE.Vector3(0,0,0))


const canvas1 = document.getElementById("c1") as HTMLCanvasElement
const canvas2 = document.getElementById("c2") as HTMLCanvasElement
const canvas3 = document.getElementById("c3") as HTMLCanvasElement
const canvas4 = document.getElementById("c4") as HTMLCanvasElement

const renderer1 = new THREE.WebGLRenderer({canvas:canvas1})
renderer1.setSize(200, 200)
const renderer2 = new THREE.WebGLRenderer({canvas:canvas2})
renderer1.setSize(200, 200)
const renderer3 = new THREE.WebGLRenderer({canvas:canvas3})
renderer1.setSize(200, 200)
const renderer4 = new THREE.WebGLRenderer({canvas:canvas4})
renderer1.setSize(200, 200)

// document.body.appendChild(renderer.domElement)

new OrbitControls(camera1, renderer1.domElement)

const geometry = new THREE.TorusKnotGeometry()//THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({
    color: 0x1abc9c,
    wireframe: true,
})

const cube = new THREE.Mesh(geometry, material)
cube.scale.x = 0.5
cube.scale.y = 0.5
cube.scale.z = 0.5

const cube2 = new THREE.Mesh(geometry, material)
cube2.scale.x = 0.5
cube2.scale.y = 0.5
cube2.scale.z = 0.5
scene.add(cube)
scene2.add(cube2)
console.dir(scene)
// window.addEventListener('resize', onWindowResize, false)
// function onWindowResize() {
    // camera.aspect = window.innerWidth / window.innerHeight
    // camera.updateProjectionMatrix()
    // renderer.setSize(window.innerWidth, window.innerHeight)
    // render()
// }

function animate() {
    requestAnimationFrame(animate)

    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    cube2.rotation.y += 0.01
    render()
}

function render() {
    renderer1.render(scene, camera1)
    renderer2.render(scene, camera2)
    renderer3.render(scene, camera3)
    renderer4.render(scene2, camera4)
}

animate()