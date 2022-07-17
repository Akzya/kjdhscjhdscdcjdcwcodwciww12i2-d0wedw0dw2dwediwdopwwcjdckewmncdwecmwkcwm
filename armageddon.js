class commons{
getRoot = null
getReactRoot = null
getChatState = null
searchObject = null
}


class game{
getTankPhysics = null
getTank = null
getWorld = null
getMines = null
getFlags = null
getPlayers = null
getMapBoundary = null
getBattleState = null
getSupplies = null
getHealth = null
getStriker = null
getCamera = null
}


class hacks{
airWalk = null
odhack = null
supplies = null
laser = null
rapidUpdate = null
flagTP = null
spawnRockets = null
oneHitKill = null
noLaser = null
autoHeal = null
simpleTP = null
playerTP = null


}


class vars{
repair = null
DD = null


}



commons.searchObject = function(object,item){
try {
for(let i=0; i<object.length;i++){
if(object[i].hasOwnProperty(item))
return object[i]

}
} catch (error) {

}
}
commons.getRoot = function(){
root = document.querySelector("#root")
return root
}

commons.getReactRoot = function(){
return root._reactRootContainer._internalRoot.current.memoizedState.element.type.prototype.store.subscribers.array_hd7ov6$_0

}


game.getTank = function(){
return commons.searchObject(commons.getReactRoot(),"tank").tank




}

game.getWorld = function(){
return game.getTank().world

}

game.getMines = function(){
return game.getWorld().entities_0.array_hd7ov6$_0.at(0).components_0.array.at(15);



}

game.getMapBoundary = function(){
return game.getWorld().entities_0.array_hd7ov6$_0.at(0).components_0.array.at(0).bounds
}


game.getPlayers = function(){
return game.getWorld().physicsScene_0.bodies_0.array_hd7ov6$_0



}
game.getBattleState = function(){

return commons.getReactRoot().at(1).state.inBattle
}

game.isNotOpenChat = function ()
{
    return (document.getElementsByClassName("sc-bwzfXH iokmvL").item(0) == null);
}

game.getStriker = function(){
for(let i=0; i>game.getTank().components_0.array.length;i++){
if(game.getTank().components_0.array[i].hasOwnProperty("strikerWeapon_jjsiik$_0")){
return game.getTank().components_0.array[i]


}
}
}


game.getHealth = function(){
return game.getTank().components_0.array[1].isFullHealth()


}

game.getTankPhysics = function(){
return game.getTank().components_0.array[5].tankPhysicsComponent_tczrao$_0



}

game.getCamera = function(){
for (let i = 0; i < game.getTank().components_0.array.length; i++)
  {
    if(game.getTank().components_0.array[i].hasOwnProperty("followCamera_w8ai3w$_0"))
    return game.getTank().components_0.array[i].followCamera_0.currState_0

  }
}


game.getSupplies = function(supply){
try {
for(key in game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0){
if(game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[key].key_5xhq3d$_0.name$ == supply){
return key
}


}
} catch (error) {

}


}


function getSupplyArrays(){
try {
window.mines = game.getSupplies("MINE")
window.repairs = game.getSupplies("FIRST_AID")
window.DA = game.getSupplies("DOUBLE_ARMOR")
window.DD = game.getSupplies("DOUBLE_DAMAGE")
window.NITRO = game.getSupplies("NITRO")

} catch (error) {

}
}

supps = setInterval(getSupplyArrays,500)


window.mineDecluster = function(){
for(let i=0;i<game.getWorld().triggers_0.triggers_0.array.length;i++){

try {
parentMine = game.getWorld().triggers_0.triggers_0.array[i]

childMine = game.getWorld().triggers_0.triggers_0.array[i+1]

if(childMine.position.x == parentMine.position.x ||childMine.position.y == parentMine.position.y){

childMine.removeMine_0()


}


} catch (error) {

}



}

}





hacks.rapidUpdate = function(){

try {
   game.getTank().components_0.array[37].needImmediateUpdate_0 = true
} catch (error) {

 }}




hacks.supplies = function(){
try {

game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[DD]._value_0._value_0.onUserActivatedSupply()
game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[DA]._value_0._value_0.onUserActivatedSupply()
game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[NITRO]._value_0._value_0.onUserActivatedSupply()

} catch (error) {

}


}




hacks.odhack = function(){
try {

game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[repairs]._value_0._value_0.onUserActivatedSupply()
game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[mines]._value_0._value_0.onUserActivatedSupply()

} catch (error) {

}


}


hacks.autoHeal = function(){
try {
if(game.getHealth()==false){
game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[mines]._value_0._value_0.onUserActivatedSupply()
game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[repairs]._value_0._value_0.onUserActivatedSupply()


}

} catch (error) {

}


}






/*hacks.clicker = function(){ try {
game.getSupplies("MINE")._value_0._value_0.onUserActivatedSupply()
game.getSupplies("FIRST_AID")._value_0._value_0.onUserActivatedSupply()
game.getSupplies("DOUBLE_ARMOR")._value_0._value_0.onUserActivatedSupply()
game.getSupplies("DOUBLE_DAMAGE")
  ._value_0._value_0.onUserActivatedSupply()
game.getSupplies("NITRO")._value_0._value_0.onUserActivatedSupply()
} catch (error) {

}

}*/








/*function aoo(supply){
for(key in globalArray[corrArray].tank.components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0){
if(globalArray[corrArray].tank.components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[key].key_5xhq3d$_0.name$ == supply){
return globalArray[corrArray].tank.components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[key]
}


}
}*/


root = document.querySelector("#root")
stateWindow = document.createElement("div")
stateWindow_style={
    display: "flex",
    backgroundColor: "rgb(12 12 12 / 28%)",
    height:"18%",
    width:"12%",
    position:"absolute",
    right:"20%",
    transform:"translate(-50%,-50%)",
    borderRadius:"20px",
    borderBottom:"1px solid black",
    borderLeft:"1px solid black",
    borderTop:"1px solid black",
    borderRight:"1px solid black",
    borderWidth:"3px",
    top: "35%",
    backdropFilter: "5px blur"

}
stateWindow.style.outline = "2px solid red"
//Object.assign():
Object.assign(stateWindow.style,stateWindow_style);
root.appendChild(stateWindow)

function draggable(el) {
  el.addEventListener('mousedown', function(e) {
    var offsetX = e.clientX - parseInt(window.getComputedStyle(this).left);
    var offsetY = e.clientY - parseInt(window.getComputedStyle(this).top);

    function mouseMoveHandler(e) {
      el.style.top = (e.clientY - offsetY) + 'px';
      el.style.left = (e.clientX - offsetX) + 'px';
    }

    function reset() {
      window.removeEventListener('mousemove', mouseMoveHandler);
      window.removeEventListener('mouseup', reset);
    }

    window.addEventListener('mousemove', mouseMoveHandler);
    window.addEventListener('mouseup', reset);
  });
}

draggable(stateWindow)


title = document.createElement("span")
title.innerText = "Armageddon v1"
stateWindow.appendChild(title)

title_style = {

color:"white",
textAlign:"center",
fontSize : "25px",
padding: "20px 20%",
fontWeight: "1000"





}



Object.assign(title.style,title_style)



Slaser = document.createElement("span")
Sfps = document.createElement("span")
Sodhack = document.createElement("span")
Ssups = document.createElement("span")
Sauto = document.createElement("span")



label_style = {
position:"absolute",
fontSize:"18px",
padding:"20px 10%",
color:"white",
fontWeight: "1000"
}

Object.assign(Slaser.style,label_style)
Object.assign(Sfps.style,label_style)
Object.assign(Sodhack.style,label_style)
Object.assign(Ssups.style,label_style)
Object.assign(Sauto.style,label_style)


Slaser.innerText = "Rapid Update [Y]:"
Sfps.innerText = "Mine Decluster [M]:"
Sodhack.innerText = "OD Hack [H]:"
Ssups.innerText = "Supplies [I]:"
Sauto.innerText = "Auto Heal [L]:"


Slaser.style.bottom = "57%"
Sfps.style.bottom = "44%"
Sodhack.style.bottom = "31%"
Ssups.style.bottom = "18%"
Sauto.style.bottom = "5%"


stateWindow.appendChild(Slaser)
stateWindow.appendChild(Sfps)
stateWindow.appendChild(Sodhack)
stateWindow.appendChild(Ssups)
stateWindow.appendChild(Sauto)


onOff_style = {
position:"absolute",
fontSize:"18px",
padding:"20px 10%",
color:"red",
right:"0%",
fontWeight: "1000"

}


State1 = document.createElement("span")
State2 = document.createElement("span")
State3 = document.createElement("span")
State4 = document.createElement("span")
State5 = document.createElement("span")



Object.assign(State1.style,onOff_style)
Object.assign(State2.style,onOff_style)
Object.assign(State3.style,onOff_style)
Object.assign(State4.style,onOff_style)
Object.assign(State5.style,onOff_style)



State1.innerText = "OFF"
State2.innerText = "OFF"
State3.innerText = "OFF"
State4.innerText = "OFF"
State5.innerText = "OFF"


stateWindow.appendChild(State1)
stateWindow.appendChild(State2)
stateWindow.appendChild(State3)
stateWindow.appendChild(State4)
stateWindow.appendChild(State5)



State1.style.bottom = "57%"
State2.style.bottom = "44%"
State3.style.bottom = "31%"
State4.style.bottom = "18%"
State5.style.bottom = "5%"





document.addEventListener('keydown', (e) => { if (e.keyCode === 77 && game.isNotOpenChat()){

State2.innerText = "ON"
State2.style.color = "#00D000"
mineDecluster()

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
delay(700).then(() =>
State2.innerText = "OFF");

}
function delay1(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
delay1(700).then(() =>
State2.style.color = "#FF0000");

}








)


s1p = 0
s2p = 0
s3p = 0
s4p = 0




document.addEventListener('keydown', (e) => { if (e.keyCode === 76 && game.isNotOpenChat()){
s1p+=1
if(s1p%2==1){
State1.innerText = "ON"
State1.style.color = "#00D000"
window.ru = setInterval(hacks.rapidUpdate,1)


}

if(s1p%2==0){

clearInterval(window.ru)
State1.innerText = "OFF"
State1.style.color = "#FF0000"
}







}})


document.addEventListener('keydown', (e) => { if (e.keyCode === 72 && game.isNotOpenChat()){
s2p+=1
if(s2p%2==1){
State3.innerText = "ON"
State3.style.color = "#00D000"
window.od = setInterval(hacks.odhack,1)


}

if(s2p%2==0){

clearInterval(window.od)
State3.innerText = "OFF"
State3.style.color = "#FF0000"
}







}})


document.addEventListener('keydown', (e) => { if (e.keyCode === 73 && game.isNotOpenChat()){
s3p+=1
if(s3p%2==1){
State4.innerText = "ON"
State4.style.color = "#00D000"
window.s = setInterval(hacks.supplies,1)


}

if(s3p%2==0){

clearInterval(window.s)
State4.innerText = "OFF"
State4.style.color = "#FF0000"
}







}})

document.addEventListener('keydown', (e) => { if (e.keyCode === 89 && game.isNotOpenChat()){
s4p+=1
if(s4p%2==1){
State5.innerText = "ON"
State5.style.color = "#00D000"
window.ah = setInterval(hacks.autoHeal,1)


}

if(s4p%2==0){

clearInterval(window.ah)
State5.innerText = "OFF"
State5.style.color = "#FF0000"
}







}})


WpressCount = 0
document.addEventListener('keydown', (e) => { if (e.keyCode === 120 && game.isNotOpenChat()){
WpressCount ++
if(WpressCount%2==1){
root.appendChild(stateWindow)


}

if(WpressCount%2==0){

root.removeChild(stateWindow)

}


}})

console.clear();
console.log('[Armageddon] Has Been Loaded')
