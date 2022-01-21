import React from "react";
function body() {
  return (
    <mesh>
      <boxBufferGeometry args={[1.7, 3.5, 2]} />
      <meshLambertMaterial attach="material" />
    </mesh>
  );
}
function eyes() {
  return (
    <mesh position={[0, 1.2, 0.5]}>
      <boxBufferGeometry args={[1.75, 0.2, 0.2]} />
      <meshLambertMaterial attach="material" color="black" />
    </mesh>
  );
}
function hat() {
  return (
    <mesh position={[0, 1.95, 0.15]}>
      <boxBufferGeometry args={[0.4, 0.4, 1.3]} />
      <meshLambertMaterial attach="material" color="red" />
    </mesh>
  );
}
function chin() {
  return (
    <mesh position={[0, 1, 1]}>
      <boxBufferGeometry args={[0.5, 0.5, 1.3]} />
      <meshLambertMaterial attach="material" color="#cc6600" />
    </mesh>
  );
}
function crest() {
  return (
    <mesh position={[0, 0.5, 1]}>
      <boxBufferGeometry args={[0.5, 0.5, 0.8]} />
      <meshLambertMaterial attach="material" color="red" />
    </mesh>
  );
}
function hip() {
  return (
    <mesh position={[0, -0.95, -0.65]}>
      <boxBufferGeometry args={[1.7, 2, 3.3]} />
      <meshLambertMaterial attach="material" />
    </mesh>
  );
}
function wing(iswingLeft: boolean) {
  return (
    <mesh position={[iswingLeft ? 0.9 : -0.9, -1, -0.3]}>
      <boxBufferGeometry args={[0.7, 1, 1.7]} />
      <meshLambertMaterial attach="material" />
    </mesh>
  );
}
const Chicken = () => {
  return (
    <>
      {body()}
      {eyes()}
      {chin()}
      {crest()}
      {hat()}
      {hip()}
      {wing(true)}
      {wing(false)}
    </>
  );
};

export default Chicken;
