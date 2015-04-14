#pragma strict
//
var mat1 : Material;
var mat2 : Material;
var mat3 : Material;
var mat4 : Material;
var Timer : float;
var aTexture : Texture;
var D : int;

function Start () {Timer = 6;D = Screen.width/2;}
function Update () {Timer += Time.deltaTime;
if(Timer > 0){RenderSettings.skybox=mat2;}
if(Timer > 6){RenderSettings.skybox=mat1;}
if(Timer > 18){RenderSettings.skybox=mat2;}
if(Timer > 24){RenderSettings.skybox=mat3;}
if(Timer > 32){RenderSettings.skybox=mat4;}
if(Timer > 44){RenderSettings.skybox=mat3;}
if(Timer > 50){Timer = 0;}D -= Time.time;
if(D <0){D = 0;}
} 
function OnGUI() {GUI.DrawTexture(Rect((Screen.width/2-200), 0, 400 ,D), aTexture);}
