#pragma strict
var mySkin: GUISkin;

function Start () {
}

function Update () {	
}

function OnGUI (){
	GUI.skin=mySkin;
//Start Game
	if(GUI.Button(Rect(Screen.width/8,Screen.height/6+30,Screen.width/3,Screen.height/7),"Start")){
		Application.LoadLevel(1);
	}
//Option - Sound/Turn..
	if(GUI.Button(Rect(Screen.width/8,Screen.height/3+50,Screen.width/3,Screen.height/7),"Option")){
		Application.LoadLevel(0);
	}
//Quit App
    if(GUI.Button(Rect(Screen.width/8,Screen.height/2+70,Screen.width/3,Screen.height/7),"Quit")){
		Application.Quit();
	}	
}
