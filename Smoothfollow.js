#pragma strict

var target1 : Transform;
var target2 : Transform;
var smoothTime = 0.3;
var PositionX : float;
var PositionY : float;
var PositionZ : float;
var PositionC1 : float;
var PositionC2 : float;
private var thisTransform : Transform;
private var velocity : Vector2;
private var yVelocity = 0.0;

 
function Start(){
	thisTransform = transform;
}

function Update(){
	PositionX = (target1.position.x + target2.position.x)/2.0;
	PositionY = (target1.position.y + target2.position.y)/2.0;
	PositionC1 = (Mathf.Abs(target1.position.x - target2.position.x));
	PositionC2 = (Mathf.Abs(target1.position.y - target2.position.y));
	if(PositionY < 0.4){
		PositionY = 0.4;
	}	
	if (PositionC1 > PositionC2){
		PositionZ = (- 5.0 - PositionC1);
	}
	if (PositionC1 < PositionC2){
		PositionZ = (- 5.0 - PositionC2);
	}
	if (PositionZ > (-7.0)){
		PositionZ = (-7.0);
	}
//x           
	thisTransform.position.x = Mathf.SmoothDamp( thisTransform.position.x, PositionX, velocity.x, smoothTime);
//y		
	thisTransform.position.y = Mathf.SmoothDamp( thisTransform.position.y, PositionY, velocity.y, smoothTime);
//z
	thisTransform.position.z = Mathf.SmoothDamp( thisTransform.position.z, PositionZ, yVelocity, smoothTime);		
}
//if(target1.position.y > 0.4 && target2.position.y > 0.4){}
//if(target1.position.y <= 0.4 || target2.position.y <= 0.4){}
