import {ReactPolygonSopNode} from '../../../engine/nodes/sop/ReactPolygon'

export function configurePolygonjs(poly) {
  // You can configure the engine,
  // which for instance could allow you to create your own nodes.
  // See https://github.com/polygonjs/plugins_tutorials
  poly.nodesRegister.register(ReactPolygonSopNode, 'myNodes');

}
export function configureScene(scene) {
  // see scene and node API:
  // https://polygonjs.com/docs/api
}
