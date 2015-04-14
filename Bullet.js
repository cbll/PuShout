#pragma strict
var Speed : float;
  
function Start () {
	Speed = 13;
}

function Update (){
	this.transform.Translate(1*Speed*Time.deltaTime,0.0,0.0,Space.Self);
}
