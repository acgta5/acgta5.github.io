import * as THREE from './../js/three.module'
import {OrbitControls} from './../js/OrbitControls'
let scene,camera,renderer,publicLight,controls,textureLoader = new THREE.TextureLoader()
let init = () => {
    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight)
    camera.position.set(0,10,10)
    renderer = new THREE.WebGLRenderer({antialias:true})
    renderer.setClearColor(0xffffff)
    renderer.shadowMap.enabled = true
    renderer.setSize(window.innerWidth,window.innerHeight)
    controls = new OrbitControls(camera,renderer.domElement)
    document.getElementById('three').appendChild(renderer.domElement)
}
let main = () => {
    let ground = new THREE.Mesh(
        new THREE.PlaneGeometry(100,100),
        new THREE.MeshPhongMaterial()
    )
}
let animate = () => {
    requestAnimationFrame(animate)
    renderer.render(scene,camera)
}
init()
main()
animate()