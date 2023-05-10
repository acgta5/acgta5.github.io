import * as THREE from './three.module.js'
function initMesh(type,mesh) {
    switch (type) {
        case 'basic':
            material = new THREE.MeshBasicMaterial(mesh)
            break;
        case 'phong':
            material = new THREE.MeshPhongMaterial(mesh)
            break
        default:
            material = new THREE.MeshNormalMaterial(mesh)
            break;
    }
    return material
}
function createBall(data,plugins) {
    let {radius,ballDetail_width,ballDetail_height,meshType} = data
    let {mesh} = plugins
    let material = initMesh(meshType,mesh)
    return new THREE.Mesh(
        new THREE.SphereGeometry(radius,ballDetail_width || 32,ballDetail_height || 16),
        material
    )
}
function createBox(data,plugins){
    let {x,y,z,meshType} = data
    let {mesh} = plugins
    let material = initMesh(meshType,mesh)
    return new THREE.Mesh(
        new THREE.BoxGeometry(x,y,z),
        material
    )
}
export {createBall,createBox} 