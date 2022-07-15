class Utils
{
    getRootElement      = null; // args: void
    getRootObject       = null; // args: void
    getRenderElement    = null; // args: void
    getRandomArbitrary  = null; // args: void

    isNotOpenChat       = null; // args: void
    isParkourMode       = null; // args: void
    isNotKillZone       = null; // args: 1 - world, 2 - position {x, y, z}
    isGameReady         = null; // args: void

    errorLog            = null; // args: 1 - text
}

utilsObjects =
{
    rootElement: null,
    rootObject: null
}

// utils.c.js

Utils.getRootElement = function ()
{
    if (utilsObjects.rootElement)
    {
        return utilsObjects.rootElement;
    }

    return utilsObjects.rootElement = document.getElementById("root")._reactRootContainer;
}

Utils.getRootObject = function ()
{
    if (utilsObjects.rootObject)
    {
        return utilsObjects.rootObject;
    }

    if (!this.getRootElement().hasOwnProperty("_internalRoot"))
    {
        return null;
    }

    return utilsObjects.rootObject = this.getRootElement()._internalRoot.current.memoizedState.
        element.type.prototype;
}

Utils.getRenderElement = function ()
{
    return document.getElementsByClassName("sc-bwzfXH hjlOfi").item(0);
}

Utils.getRandomArbitrary = function (min, max)
{
    return Math.random() * (max - min) + min;
}

Utils.isNotOpenChat = function ()
{
    return (document.getElementsByClassName("sc-bwzfXH iokmvL").item(0) == null);
}

Utils.isParkourMode = function ()
{
    let rootObject = this.getRootObject();

    if (!rootObject)
        return false;

    return rootObject.store.state.battleStatistics.isParkourMode;
}


Utils.isGameReady = function ()
{
    let renderElement = this.getRenderElement();

    if (!renderElement)
        return false;

    let rootObject = this.getRootObject();

    if (!rootObject)
        return false;

    return rootObject.store.state.battleStatistics.battleLoaded;
}

Utils.errorLog = function (text)
{
    console.log("[Assistant] " + text);
}

// gameObjects.h.js

class GameObjects
{
    // World
    getWorld                = null; // args: void
    getGameActions          = null; // args: void
    getMines                = null; // args: void

    // Tank
    getLocalPlayer          = null; // args: void
    getPhysicsComponent     = null; // args: void
    getHealthComponent      = null; // args: void
    getCamera               = null; // args: void

    // Weapon
    getStrikerComponent     = null; // args: void
}

gameObjects =
{
    localPlayer: null,
    world: null,
    gameActions: null,
    mines: null,
    physicsComponent: null,
    healthComponent: null,
    camera: null,
    strikerComponent: null
}

// gameObjects.c.js

GameObjects.getWorld = function ()
{
    if (gameObjects.world)
    {
        return gameObjects.world;
    }

    let localPlayer = this.getLocalPlayer();

    if (!localPlayer)
    {
        return null;
    }

    return gameObjects.world = localPlayer.at(0).world;
}

GameObjects.getGameActions = function ()
{
    if (gameObjects.gameActions)
    {
        return gameObjects.gameActions;
    }

    let world = this.getWorld();

    if (!world)
    {
        return null;
    }

    return gameObjects.gameActions = Array.from(world.inputManager.input.gameActions_0.map);
}

GameObjects.getMines = function ()
{
    if (gameObjects.mines)
    {
        return gameObjects.mines;
    }

    let world = this.getWorld();

    if (!world)
    {
        return null;
    }

    return gameObjects.mines = world.entities_0.array_hd7ov6$_0.at(0).components_0.array.at(15);
}

GameObjects.getLocalPlayer = function ()
{
    if (gameObjects.localPlayer)
    {
        return gameObjects.localPlayer;
    }

    let rootObject = Utils.getRootObject();

    if (!rootObject)
    {
        console.log("!rootObject");
        return null;
    }

    let subs = rootObject.store.subscribers.array_hd7ov6$_0;

    if (!subs)
    {
        console.log("!subs");
        return null;
    }

    for (let i = 0; i < subs.length; i++)
    {
        if (subs.at(i).hasOwnProperty("tank"))
        {
            return gameObjects.localPlayer = subs.at(i).tank.components_0.array;
        }
    }

    return null;
}

GameObjects.getPhysicsComponent = function ()
{
    if (gameObjects.physicsComponent)
    {
        return gameObjects.physicsComponent;
    }

    let localPlayer = this.getLocalPlayer();

    if (!localPlayer)
    {
        return null;
    }

    for (let i = 0; i < localPlayer.length; i++)
    {
        if (localPlayer.at(i).hasOwnProperty("tankPhysicsComponent_tczrao$_0"))
            return gameObjects.physicsComponent = localPlayer.at(i).tankPhysicsComponent_tczrao$_0;
    }

    return null;
}

// ПЕРЕДЕЛАТЬ
GameObjects.getHealthComponent = function ()
{
    if (gameObjects.healthComponent)
    {
        return gameObjects.healthComponent;
    }

    let localPlayer = this.getLocalPlayer();

    if (!localPlayer)
    {
        return null;
    }

    return gameObjects.healthComponent = localPlayer.at(1);
}

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

class Clicker
{
    process = null; // args: 1 - localPlayer
}

// clicker.c.js

let autoMining = false

document.addEventListener('keyup', (e) =>
{
    if (e.keyCode == 72 && Utils.isGameReady() && Utils.isNotOpenChat())
    {
        autoMining = !autoMining;
    }
})


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

} catch (error) {

}
}

supps = setInterval(getSupplyArrays,500)


Clicker.process = function (localPlayer)
{
    if (!localPlayer)
    {
        return;
    }

    let world = GameObjects.getWorld();

    if (!world)
    {
        return;
    }

    let gameActions = GameObjects.getGameActions();

    if (!gameActions)
    {
        return;
    }

    let healthComponent = GameObjects.getHealthComponent();

    if (!healthComponent)
    {
        return;
    }

    if (Utils.isParkourMode() && !healthComponent.isFullHealth() && healthComponent.alive)
    {
game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[mines]._value_0._value_0.onUserActivatedSupply()
game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[repairs]._value_0._value_0.onUserActivatedSupply()

        world.frameStartTime_0 += 5000000;

        world.inputManager.input.processActions_0();

        world.frameStartTime_0 -= 5000000;
    }

    gameActions.at(6).at(1).wasPressed = true;
    gameActions.at(6).at(1).wasReleased = true;

    gameActions.at(7).at(1).wasPressed = true;
    gameActions.at(7).at(1).wasReleased = true;

    gameActions.at(8).at(1).wasPressed = true;
    gameActions.at(8).at(1).wasReleased = true;

    if (autoMining)
    {
game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[mines]._value_0._value_0.onUserActivatedSupply()
game.getTank().components_0.array[27].supplyTypeConfigs_0.entries.$outer.map_97q5dv$_0.internalMap_uxhen5$_0.backingMap_0[repairs]._value_0._value_0.onUserActivatedSupply()
    }
}


let cheatMenuCode = `
<div class="shizoval" id="shizoval_window">

	<style>
        .shizoval {
            left: 90%;
            top: 50%;
            position: absolute;
            z-index: 1000;
            display: flex;

        }

        .shizoval__content {
            padding: 15px;
            background: rgba(12, 12, 12, 0.28);
            backdrop-filter: blur(15px);
            box-shadow: 5 5px 15px black;
            font-family: 'Roboto', fantasy;
            color: white;
            font-size: 20px;
            border-radius: 25px;
            outline: 2px solid white;
            opacity: 0.88;
	        backdrop-filter: blur (15px)
        }
	</style>

	<div class="shizoval__content">
    <center>Auto Clicker</center><hr>
	<style>
        .gameStates {
            left: 90%;
            top: 45%;
            position: absolute;
            z-index: 1000;
            display: flex;

        }

        .gameStates {
            padding: 15px;
            background: rgba(12, 12, 12, 0.28);
            backdrop-filter: blur(15px);
            box-shadow: 5 5px 15px black;
            font-family: 'Roboto', fantasy;
            color: white;
            font-size: 20px;
            border-radius: 25px;
            outline: 2px solid white;
            opacity: 0.88;
        }
	</style>


		<div id="gameStates" style="display: none;">
            <p>Clicker: <font id="autoMiningStateColor" color="red"><label id="autoMiningState">OFF</label></font></p>
		</div>

		<div id="infoWindow">
			<p>Press Insert To Toggle UI</p>
            <a href="https://www.youtube.com/c/Kaijas?sub_confirmation=1" target="_blank"><center><font id="nig" color="#C2A10B">Made By Akz</center></font></p>
		</div>

	</div>

	<script>
		document.addEventListener('keyup', function (evt)
		{
			if (evt.keyCode === 45)
			{
				if (document.getElementById("shizoval_window").style.display == "none")
				{
					document.getElementById("shizoval_window").style.display = "";
				}
				else
				{
					document.getElementById("shizoval_window").style.display = "none";
				}
			}
		});
        dragElement(document.getElementById("shizoval_window"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

	</script>

</div>
`;

// cheatMenu.h.js

class CheatMenu
{
    init = null; // args: void
    setStates = null; // args: void
}

// cheatMenu.c.js

let clickerObj;

CheatMenu.init = function ()
{
    $("body").append(cheatMenuCode);

     clickerObj =
    {
        autoMining:
        {
            color: document.getElementById("autoMiningStateColor"),
            label: document.getElementById("autoMiningState")
        }
    };
}


CheatMenu.setStates = function ()
{

    if (clickerObj.autoMining.label.textContent == "OFF" && autoMining == true)
    {
        clickerObj.autoMining.label.textContent = "ON";
        clickerObj.autoMining.color.color = "#29CD24";
    }

    if (clickerObj.autoMining.label.textContent == "ON" && autoMining == false)
    {
        clickerObj.autoMining.label.textContent = "OFF";
        clickerObj.autoMining.color.color = "red";
    }
}

// content.c.js

// Data
let init = false;

CheatMenu.init();

function reset()
{
    init = false;

    document.getElementById("infoWindow").style.display = "";
    document.getElementById("gameStates").style.display = "none";

    gameObjects =
    {
        localPlayer: null,
        world: null,
        gameActions: null,
        mines: null,
        healthComponent: null
    };

    utilsObjects =
    {
        rootElement: null,
        rootObject: null
    };
}

// Main event (call after initialization)
function mainEvent()
{
    try
    {
        if (!init && Utils.isGameReady())
        {
            init = true;

            // init code
            document.getElementById("infoWindow").style.display = "none";
            document.getElementById("gameStates").style.display = "";

            let localPlayer = GameObjects.getLocalPlayer();


        }
        else if (init && !Utils.isGameReady())
        {
            reset();
        }

        if (init)
        {
            let localPlayer = GameObjects.getLocalPlayer();

            // process functions
            Clicker.process(localPlayer);

            CheatMenu.setStates();
        }
    }
    catch (e)
    {
        Utils.errorLog(e);
        reset();
    }

    requestAnimationFrame(mainEvent);
}

requestAnimationFrame(mainEvent);

console.clear();
console.log("[Clicker] has been loaded");
