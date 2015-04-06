#pragma strict
var ReloadTime: float;
var Boom: GameObject;
var lifetime = 1.0;
var isDead = 0;
var own : GameObject;
function Start () {
ReloadTime = 0;
}
function Update () {
if(ReloadTime > 0){
ReloadTime -= Time.deltaTime;
}
if(own.transform.position.y > 0) {
isDead = 0;
}
if(own.transform.position.y <= 0) {
isDead = 1;
}
if(Input.GetKey(KeyCode.S) && isDead != 1){
if(ReloadTime <= 0){
Destroy(Instantiate(Boom, transform.position, transform.rotation),lifetime);
ReloadTime = 0.5;
}
}
}
