myLayers = Framer.Importer.load("imported/gameflash-08d");
// ###
//   SHORTHAND FOR ACCESSING LAYERS
//   Convert each layer coming from the exporter into a Javascript object for shorthand access.
//   This has to be called manually in Framer3 after you've ran the importer.
//   myLayers = Framer.Importer.load("...")
// ###
Framer.Shortcuts.initialize(myLayers);

Framer.Defaults.Animation = {
     // curve: "spring(400,40,0)"
     curve: "bezier-curve",
     time: 0.3,
}

Framer.Defaults.FadeAnimation = {
	curve: "bezier-curve",
	time: 0.2,
}

live.clip=true;

var shadowY_down=0; shadowY_up=16; shadowBlur_down=0; shadowBlur_up=32;

var atBatX=4; atBatY=14; pitchingX=331; pitchingY=atBatY; first=169; second=256; third=343; scoredY_01=489; scoredY_02=575; scoredY_03=660; scoredY_04=745; scoredX=170; outX=331; atBatStat=55;

var playTextW=606; playTextH=66; playTextX_C=15; playTextX_R=655; playTextX_L=-625; playTextY=47; playerW=302; playerH=82;

var plays_top4 = ['play01','play02','play03','play04','play05','play06','play07','play08','play09'];

function reverseArr(input) {
    var ret = new Array;
    for(var i = input.length-1; i >= 0; i--) {
        ret.push(input[i]);
    }
    return ret;
}

var plays_top4_reverse = reverseArr(plays_top4);


inning07_expanded.opacity=1;
inning07_expanded.placeBehind(inning04_expanded);


playCommentary2.superLayer = null;
playCommentary2.y = 0;
playCommentary2.style["position"] = "fixed";
playCommentary2.style["z-index"] = "100";
playCommentary2.style["left"] = "0px";
playCommentary2.style["bottom"] = "0px";
playCommentary.opacity=1;

playCommentary.superLayer = null;
// playCommentary.y = 862;
playCommentary.y = 0;
playCommentary.style["position"] = "fixed";
playCommentary.style["z-index"] = "100";
playCommentary.opacity=0;
playCommentary.style["left"] = "0px";
playCommentary.style["bottom"] = "0px";
playText.visible=false;

playCommentary.style["background"]="transparent";



battersRetired.y=battersRetired.y-1;

btn_lastPlay.opacity=.2;


// Loops through all sublayers of parent and changes opacity to 0
for (var el in plays_active.subLayers) {
	plays_active.subLayers[el].opacity=0;
}


for (var el in samplePlayers.subLayers) {
	samplePlayers.subLayers[el].width=302
	samplePlayers.subLayers[el].height=82
	samplePlayers.subLayers[el].x+=93
	samplePlayers.subLayers[el].y+=94

}


// -------Sticky SI Main Nav---------
siNav_main.superLayer=null;
siNav_main.style["position"]="fixed";
siNav_main.style["z-index"] = "900";



// -----------Player Cards-------------
var playerCard_jones = new Layer ({
	x:0,
	y:275,
	width:627,
	height:585,
	image:"images/playerCard_jones.png",
	opacity:1,
})

var playerCard_pressly = new Layer ({
	x:0,
	y:275,
	width:627,
	height:585,
	image:"images/playerCard_pressly.png",
	opacity:1,
})


var btn_close_pc = new Layer ({
	x:532,
	y:310,
	width:57,
	height:57,
	image:"images/btn_close_pc.png",
})

var playerCard_overlay = new Layer ({
	x:0,
	y:0,
	width:640,
	height:1136,
	backgroundColor:"rgba(0,0,0,.7)",
})

var playerCard = new Layer ({
	x:0,
	y:0,
	width:640,
	height:1136,
	backgroundColor:"transparent",
	opacity:0
})

playerCard_overlay.superLayer=playerCard;
playerCard_jones.superLayer=playerCard;
playerCard_pressly.superLayer=playerCard;
btn_close_pc.superLayer=playerCard;

playerCard.style["z-index"]="1000";
playerCard.style["position"]="fixed";



top_active2.opacity=0;
bottom_inactive2.opacity=0;






// --------TWINS BEGIN TOP 4----------


var player_willingham = new Layer ({
	x:atBatX,
	y:atBatY,
	width:playerW,
	height:playerH,
	image:"images/player_willingham.png",
	shadowY:shadowY_down,
	shadowBlur:shadowBlur_down,
	shadowColor:"rgba(0,0,0,.2)",
	borderRadius:"5px",
})

var player_morneau = new Layer ({
	x:atBatX,
	y:atBatY,
	width:playerW,
	height:playerH,
	image:"images/player_morneau.png",
	shadowY:shadowY_down,
	shadowBlur:shadowBlur_down,
	shadowColor:"rgba(0,0,0,.2)",
	borderRadius:"5px",
	opacity:1,
})

var player_doumit = new Layer ({
	x:atBatX,
	y:atBatY,
	width:playerW,
	height:playerH,
	image:"images/player_doumit.png",
	shadowY:shadowY_down,
	shadowBlur:shadowBlur_down,
	shadowColor:"rgba(0,0,0,.2)",
	borderRadius:"5px",
	opacity:0
})

var player_plouffe = new Layer ({
	x:atBatX,
	y:atBatY,
	width:playerW,
	height:playerH,
	image:"images/player_plouffe.png",
	shadowY:shadowY_down,
	shadowBlur:shadowBlur_down,
	shadowColor:"rgba(0,0,0,.2)",
	borderRadius:"5px",
	opacity:0
})

var player_parmelee = new Layer ({
	x:atBatX,
	y:atBatY,
	width:playerW,
	height:playerH,
	image:"images/player_parmelee.png",
	shadowY:shadowY_down,
	shadowBlur:shadowBlur_down,
	shadowColor:"rgba(0,0,0,.2)",
	borderRadius:"5px",
	opacity:0
})

var player_dozier = new Layer ({
	x:atBatX,
	y:atBatY,
	width:playerW,
	height:playerH,
	image:"images/player_dozier.png",
	shadowY:shadowY_down,
	shadowBlur:shadowBlur_down,
	shadowColor:"rgba(0,0,0,.2)",
	borderRadius:"5px",
	opacity:0
})

var player_escobar = new Layer ({
	x:atBatX,
	y:atBatY,
	width:playerW,
	height:playerH,
	image:"images/player_escobar.png",
	shadowY:shadowY_down,
	shadowBlur:shadowBlur_down,
	shadowColor:"rgba(0,0,0,.2)",
	borderRadius:"5px",
	opacity:0
})

var player_hicks = new Layer ({
	x:atBatX,
	y:atBatY,
	width:playerW,
	height:playerH,
	image:"images/player_hicks.png",
	shadowY:shadowY_down,
	shadowBlur:shadowBlur_down,
	shadowColor:"rgba(0,0,0,.2)",
	borderRadius:"5px",
	opacity:0
})


// --------TWINS END TOP 4----------

var player_arrieta = new Layer ({
	x:pitchingX,
	y:pitchingY,
	width:playerW,
	height:playerH,
	image:"images/player_arrieta.png",
	shadowY:shadowY_down,
	shadowBlur:shadowBlur_down,
	shadowColor:"rgba(0,0,0,.2)",
	borderRadius:"5px",
})

var plays_top4_container = new Layer({
	name:"top4",
	x:0,
	y:1649,
	width:640,
	height:841,
	backgroundColor:"transparent",
	opacity:0,
})

plays_top4_container.superLayer =null;

player_willingham.superLayer = plays_top4_container;
player_morneau.superLayer = plays_top4_container;
player_doumit.superLayer = plays_top4_container;
player_plouffe.superLayer = plays_top4_container;
player_parmelee.superLayer = plays_top4_container;
player_dozier.superLayer = plays_top4_container;
player_escobar.superLayer = plays_top4_container;
player_hicks.superLayer = plays_top4_container;
player_arrieta.superLayer = plays_top4_container;
player_morneau.placeBehind(player_willingham);
player_doumit.placeBehind(player_morneau);
player_plouffe.placeBehind(player_doumit);
player_parmelee.placeBehind(player_plouffe);
player_dozier.placeBehind(player_parmelee);
player_escobar.placeBehind(player_dozier);
player_hicks.placeBehind(player_escobar);


// ------------PLAY TEXT BEGIN------------

var playText_top4_01 = new Layer ({
	x:playTextX_R,
	y:playTextY,
	width:playTextW,
	height:playTextH,
	image:"images/playText_top4_01.png",
	opacity:1
})

var playText_top4_02 = new Layer ({
	x:playTextX_R,
	y:playTextY,
	width:playTextW,
	height:playTextH,
	image:"images/playText_top4_02.png",
	opacity:1
})

var playText_top4_03 = new Layer ({
	x:playTextX_R,
	y:playTextY,
	width:playTextW,
	height:playTextH,
	image:"images/playText_top4_03.png",
	opacity:1
})

var playText_top4_04 = new Layer ({
	x:playTextX_R,
	y:playTextY,
	width:playTextW,
	height:playTextH,
	image:"images/playText_top4_04.png",
	opacity:1
})

var playText_top4_05 = new Layer ({
	x:playTextX_R,
	y:playTextY,
	width:playTextW,
	height:playTextH,
	image:"images/playText_top4_05.png",
	opacity:1
})

var playText_top4_06 = new Layer ({
	x:playTextX_R,
	y:playTextY,
	width:playTextW,
	height:playTextH,
	image:"images/playText_top4_06.png",
	opacity:1
})

var playText_top4_07 = new Layer ({
	x:playTextX_R,
	y:playTextY,
	width:playTextW,
	height:playTextH,
	image:"images/playText_top4_07.png",
	opacity:1
})

var playText_top4_08 = new Layer ({
	x:playTextX_R,
	y:playTextY,
	width:playTextW,
	height:playTextH,
	image:"images/playText_top4_08.png",
	opacity:1
})

playText_top4_01.superLayer = playByPlay;
playText_top4_02.superLayer = playByPlay;
playText_top4_03.superLayer = playByPlay;
playText_top4_04.superLayer = playByPlay;
playText_top4_05.superLayer = playByPlay;
playText_top4_06.superLayer = playByPlay;
playText_top4_07.superLayer = playByPlay;
playText_top4_08.superLayer = playByPlay;

// ------------PLAY TEXT END------------



var inning04_base = new Layer ({
	name:"inning04_base",
	x:0,
	y:0,
	width:640,
	height:980,
	backgroundColor:"#F0F2F7",
	// index:0,
})

inning04_base.style["border"] = "1px solid #B6BDC9";
inning04_base.superLayer = inning04_expanded;
// inning04_base.placeBehind(playCommentary);
inning04_base.sendToBack();



live.scrollHorizontal = false;
live.scrollVertical = true;

// innings.scrollVertical=true;
// innings.width=640;
// innings.height=2400;

live.height=3200;
// console.log(live.height);
live.width=640;

inning04_expanded.opacity=0;
// inning04_expanded_base.opacity=0;
// currentBatter.opacity=0;
// currentPitcher.opacity=0;
// playText.opacity=0;

line_inning04_active.opacity=0;
gripper.opacity=0;
line_inning07_active.opacity=0;


//Lines to Triangle Icon
var icnContainer_lineToTri = new Layer ({
	name:"icnContainer_lineToTri",
	x:576,
	y:0,
	width:62,
	height:42,
	backgroundColor:"rgba(0,0,0,0)",
	clip:false,
})

var line01 = new Layer ({
	x:10,
	y:7,
	width:44,
	height:4,
	backgroundColor:"#969CA8",
	borderRadius:"5px"
})

var line02 = new Layer ({
	x:10,
	y:17,
	width:44,
	height:4,
	backgroundColor:"#969CA8",
	borderRadius:"5px"
})

var line03 = new Layer ({
	x:10,
	y:27,
	width:44,
	height:4,
	backgroundColor:"#969CA8",
	borderRadius:"5px"
})

line01.superLayer = icnContainer_lineToTri;
line02.superLayer = icnContainer_lineToTri;
line03.superLayer = icnContainer_lineToTri;

// icnContainer_lineToTri.style["z-index"]="100";
icnContainer_lineToTri.superLayer = playByPlay;



var inning07_expanded_top = new Layer ({
	name:"inning07_expanded_top",
	x:0,
	y:681,
	width:640,
	height:470,
	image:"images/inning07_expanded_top.png",
	opacity:0,
})

var playCommentary_top7 = new Layer ({
	name:"playCommentary_top7",
	x:0,
	y:0,
	width:640,
	height:222,
	image:"images/playCommentary_top7.png",
	opacity:0,
})

playCommentary_top7.superLayer = null;
// playCommentary_top7.y = 0;
playCommentary_top7.style["position"] = "fixed";
playCommentary_top7.style["z-index"] = "100";
playCommentary_top7.style["left"] = "0px";
playCommentary_top7.style["bottom"] = "0px";


//Basepath

// basepath.superLayer=null;

// basepath.properties = ({
// 	y:,

// })





// ----------STATES------------

// -----------SWITCH INNING-------------

inning04_expanded.states.add({
    inning07: {opacity:0},
    inning04: {opacity:1},
})

// inning04_expanded_base.states.add({
// 	inning07:{opacity:0},
// 	inning04:{opacity:1}
// })

plays_top4_container.states.add({
	inning07: {opacity:0},
	inning04: {opacity:1}
})

playCommentary.states.add({
	inning07: {opacity:0},
	inning04: {opacity:1}
})

playCommentary2.states.add({
	inning04: {opacity:0},
	inning07: {opacity:1},
	inning07top: {opacity:0},
})

gripper.states.add({
	inning07:{x:gripper.x},
	inning04:{x:gripper.x-137}
})

line_inning07_active.states.add({
	inning07:{opacity:1},
	inning04:{opacity:0}
})

line_inning04_active.states.add({
	inning07:{opacity:0},
	inning04:{opacity:1}
})

inning03.states.add({
	open: {y:inning03.originalFrame.y+982}
})

inning02.states.add({
	open: {y:inning02.originalFrame.y+982}
})

inning01.states.add({
	open: {y:inning01.originalFrame.y+982}
})


// --------TWINS BEGIN TOP 4----------


player_willingham.states.add({
	play01: {x:atBatX,y:atBatY},
	play02: {x:atBatX,y:second},
	play03: {x:atBatX,y:second},
	play04: {x:atBatX,y:second},
	play05: {x:atBatX,y:second},
	play06: {x:scoredX,y:scoredY_01},
	play07: {x:scoredX,y:scoredY_03},
	play08: {x:scoredX,y:scoredY_04},
	play09: {x:scoredX,y:scoredY_04},
})

player_morneau.states.add({
	play01: {x:atBatX,y:atBatY,opacity:1},
	play02: {x:atBatX,y:atBatY,opacity:1},
	play03: {x:atBatX,y:first,opacity:1},
	play04: {x:atBatX,y:first,opacity:1},
	play05: {x:atBatX,y:first,opacity:1},
	play06: {x:atBatX,y:third,opacity:1},
	play07: {x:scoredX,y:scoredY_02,opacity:1},
	play08: {x:scoredX,y:scoredY_03,opacity:1},
	play09: {x:scoredX,y:scoredY_03,opacity:1},
})

player_doumit.states.add({
	play01: {x:atBatX,y:atBatY,opacity:0},
	play02: {x:atBatX,y:atBatY,opacity:1},
	play03: {x:atBatX,y:atBatY,opacity:1},
	play04: {x:outX,y:first,opacity:1},
	play05: {x:outX,y:first,opacity:1},
	play06: {x:outX,y:first,opacity:1},
	play07: {x:outX,y:first,opacity:1},
	play08: {x:outX,y:first,opacity:1},
	play09: {x:outX,y:first,opacity:1},
})

player_plouffe.states.add({
	play01: {x:atBatX,y:atBatY,opacity:0},
	play02: {x:atBatX,y:atBatY,opacity:0},
	play03: {x:atBatX,y:atBatY,opacity:1},
	play04: {x:atBatX,y:atBatY,opacity:1},
	play05: {x:outX,y:second,opacity:1},
	play06: {x:outX,y:second,opacity:1},
	play07: {x:outX,y:second,opacity:1},
	play08: {x:outX,y:second,opacity:1},
	play09: {x:outX,y:second,opacity:1},
})

player_parmelee.states.add({
	play01: {x:atBatX,y:atBatY,opacity:0},
	play02: {x:atBatX,y:atBatY,opacity:0},
	play03: {x:atBatX,y:atBatY,opacity:0},
	play04: {x:atBatX,y:atBatY,opacity:1},
	play05: {x:atBatX,y:atBatY,opacity:1},
	play06: {x:atBatX,y:first,opacity:1},
	play07: {x:scoredX,y:scoredY_01,opacity:1},
	play08: {x:scoredX,y:scoredY_02,opacity:1},
	play09: {x:scoredX,y:scoredY_02,opacity:1},
})

player_dozier.states.add({
	play01: {x:atBatX,y:atBatY,opacity:0},
	play02: {x:atBatX,y:atBatY,opacity:0},
	play03: {x:atBatX,y:atBatY,opacity:0},
	play04: {x:atBatX,y:atBatY,opacity:0},
	play05: {x:atBatX,y:atBatY,opacity:1},
	play06: {x:atBatX,y:atBatY,opacity:1},
	play07: {x:atBatX,y:third,opacity:1},
	play08: {x:scoredX,y:scoredY_01,opacity:1},
	play09: {x:scoredX,y:scoredY_01,opacity:1},
})

player_escobar.states.add({
	play01: {x:atBatX,y:atBatY,opacity:0},
	play02: {x:atBatX,y:atBatY,opacity:0},
	play03: {x:atBatX,y:atBatY,opacity:0},
	play04: {x:atBatX,y:atBatY,opacity:0},
	play05: {x:atBatX,y:atBatY,opacity:0},
	play06: {x:atBatX,y:atBatY,opacity:1},
	play07: {x:atBatX,y:atBatY,opacity:1},
	play08: {x:atBatX,y:first,opacity:1},
	play09: {x:atBatX,y:first,opacity:1},
})

player_hicks.states.add({
	play01: {x:atBatX,y:atBatY,opacity:0},
	play02: {x:atBatX,y:atBatY,opacity:0},
	play03: {x:atBatX,y:atBatY,opacity:0},
	play04: {x:atBatX,y:atBatY,opacity:0},
	play05: {x:atBatX,y:atBatY,opacity:0},
	play06: {x:atBatX,y:atBatY,opacity:0},
	play07: {x:atBatX,y:atBatY,opacity:1},
	play08: {x:atBatX,y:atBatY,opacity:1},
	play09: {x:outX,y:third,opacity:1},
})

// --------TWINS END TOP 4----------


// ------------PLAY INDICATORS------------

play01_active.states.add ({
	play01: {opacity:0},
	play02: {opacity:1},
	play03: {opacity:1},
	play04: {opacity:1},
	play05: {opacity:1},
	play06: {opacity:1},
	play07: {opacity:1},
	play08: {opacity:1},
	play09: {opacity:1},
})

play02_active.states.add ({
	play01: {opacity:0},
	play02: {opacity:0},
	play03: {opacity:1},
	play04: {opacity:1},
	play05: {opacity:1},
	play06: {opacity:1},
	play07: {opacity:1},
	play08: {opacity:1},
	play09: {opacity:1},
})

play03_active.states.add ({
	play01: {opacity:0},
	play02: {opacity:0},
	play03: {opacity:0},
	play04: {opacity:1},
	play05: {opacity:1},
	play06: {opacity:1},
	play07: {opacity:1},
	play08: {opacity:1},
	play09: {opacity:1},
})

play04_active.states.add ({
	play01: {opacity:0},
	play02: {opacity:0},
	play03: {opacity:0},
	play04: {opacity:0},
	play05: {opacity:1},
	play06: {opacity:1},
	play07: {opacity:1},
	play08: {opacity:1},
	play09: {opacity:1},
})

play05_active.states.add ({
	play01: {opacity:0},
	play02: {opacity:0},
	play03: {opacity:0},
	play04: {opacity:0},
	play05: {opacity:0},
	play06: {opacity:1},
	play07: {opacity:1},
	play08: {opacity:1},
	play09: {opacity:1},
})

play06_active.states.add ({
	play01: {opacity:0},
	play02: {opacity:0},
	play03: {opacity:0},
	play04: {opacity:0},
	play05: {opacity:0},
	play06: {opacity:0},
	play07: {opacity:1},
	play08: {opacity:1},
	play09: {opacity:1},
})

play07_active.states.add ({
	play01: {opacity:0},
	play02: {opacity:0},
	play03: {opacity:0},
	play04: {opacity:0},
	play05: {opacity:0},
	play06: {opacity:0},
	play07: {opacity:0},
	play08: {opacity:1},
	play09: {opacity:1},
})

play08_active.states.add ({
	play01: {opacity:0},
	play02: {opacity:0},
	play03: {opacity:0},
	play04: {opacity:0},
	play05: {opacity:0},
	play06: {opacity:0},
	play07: {opacity:0},
	play08: {opacity:0},
	play09: {opacity:1},
})



// ------------BASE EXPAND/MOVE--------------

// inning04_base.states.add({
// 	play01: {height:inning04_base.height},
// 	play02: {height:inning04_base.height},
// 	play03: {height:inning04_base.height},
// 	play04: {height:inning04_base.height},
// 	play05: {height:inning04_base.height},
// 	play06: {height:inning04_base.height+67},
// 	play07: {height:inning04_base.height+(67*3)},
// 	play08: {height:inning04_base.height+(67*4)},
// 	play09: {height:inning04_base.height+(67*4)},
// })

// playCommentary.states.add({
// 	play01: {y:playCommentary.y},
// 	play02: {y:playCommentary.y},
// 	play03: {y:playCommentary.y},
// 	play04: {y:playCommentary.y},
// 	play05: {y:playCommentary.y},
// 	play06: {y:playCommentary.y+67},
// 	play07: {y:playCommentary.y+(67*3)},
// 	play08: {y:playCommentary.y+(67*4)},
// 	play09: {y:playCommentary.y+(67*4)},
// })

// -----------PLAY TEXT---------------

playText_top4_01.states.add({
	play01: {x:playTextX_R,opacity:0},
	play02: {x:playTextX_C,opacity:1},
	play03: {x:playTextX_L,opacity:0},
	play04: {x:playTextX_L,opacity:0},
	play05: {x:playTextX_L,opacity:0},
	play06: {x:playTextX_L,opacity:0},
	play07: {x:playTextX_L,opacity:0},
	play08: {x:playTextX_L,opacity:0},
	play09: {x:playTextX_L,opacity:0},
})

playText_top4_02.states.add({
	play01: {x:playTextX_R,opacity:0},
	play02: {x:playTextX_R,opacity:0},
	play03: {x:playTextX_C,opacity:1},
	play04: {x:playTextX_L,opacity:0},
	play05: {x:playTextX_L,opacity:0},
	play06: {x:playTextX_L,opacity:0},
	play07: {x:playTextX_L,opacity:0},
	play08: {x:playTextX_L,opacity:0},
	play09: {x:playTextX_L,opacity:0},
})

playText_top4_03.states.add({
	play01: {x:playTextX_R,opacity:0},
	play02: {x:playTextX_R,opacity:0},
	play03: {x:playTextX_R,opacity:0},
	play04: {x:playTextX_C,opacity:1},
	play05: {x:playTextX_L,opacity:0},
	play06: {x:playTextX_L,opacity:0},
	play07: {x:playTextX_L,opacity:0},
	play08: {x:playTextX_L,opacity:0},
	play09: {x:playTextX_L,opacity:0},
})

playText_top4_04.states.add({
	play01: {x:playTextX_R,opacity:0},
	play02: {x:playTextX_R,opacity:0},
	play03: {x:playTextX_R,opacity:0},
	play04: {x:playTextX_R,opacity:0},
	play05: {x:playTextX_C,opacity:1},
	play06: {x:playTextX_L,opacity:0},
	play07: {x:playTextX_L,opacity:0},
	play08: {x:playTextX_L,opacity:0},
	play09: {x:playTextX_L,opacity:0},
})

playText_top4_05.states.add({
	play01: {x:playTextX_R,opacity:0},
	play02: {x:playTextX_R,opacity:0},
	play03: {x:playTextX_R,opacity:0},
	play04: {x:playTextX_R,opacity:0},
	play05: {x:playTextX_R,opacity:0},
	play06: {x:playTextX_C,opacity:1},
	play07: {x:playTextX_L,opacity:0},
	play08: {x:playTextX_L,opacity:0},
	play09: {x:playTextX_L,opacity:0},
})

playText_top4_06.states.add({
	play01: {x:playTextX_R,opacity:0},
	play02: {x:playTextX_R,opacity:0},
	play03: {x:playTextX_R,opacity:0},
	play04: {x:playTextX_R,opacity:0},
	play05: {x:playTextX_R,opacity:0},
	play06: {x:playTextX_R,opacity:0},
	play07: {x:playTextX_C,opacity:1},
	play08: {x:playTextX_L,opacity:0},
	play09: {x:playTextX_L,opacity:0},
})

playText_top4_07.states.add({
	play01: {x:playTextX_R,opacity:0},
	play02: {x:playTextX_R,opacity:0},
	play03: {x:playTextX_R,opacity:0},
	play04: {x:playTextX_R,opacity:0},
	play05: {x:playTextX_R,opacity:0},
	play06: {x:playTextX_R,opacity:0},
	play07: {x:playTextX_R,opacity:0},
	play08: {x:playTextX_C,opacity:1},
	play09: {x:playTextX_L,opacity:0},
})

playText_top4_08.states.add({
	play01: {x:playTextX_R,opacity:0},
	play02: {x:playTextX_R,opacity:0},
	play03: {x:playTextX_R,opacity:0},
	play04: {x:playTextX_R,opacity:0},
	play05: {x:playTextX_R,opacity:0},
	play06: {x:playTextX_R,opacity:0},
	play07: {x:playTextX_R,opacity:0},
	play08: {x:playTextX_R,opacity:0},
	play09: {x:playTextX_C,opacity:1},
})

// --------Buttons----------
btn_nextPlay.states.add({
	play01: {opacity:1},
	play02: {opacity:1},
	play03: {opacity:1},
	play04: {opacity:1},
	play05: {opacity:1},
	play06: {opacity:1},
	play07: {opacity:1},
	play08: {opacity:1},
	play09: {opacity:0.2},
})

btn_lastPlay.states.add({
	play01: {opacity:0.2},
	play02: {opacity:1},
	play03: {opacity:1},
	play04: {opacity:1},
	play05: {opacity:1},
	play06: {opacity:1},
	play07: {opacity:1},
	play08: {opacity:1},
	play09: {opacity:1},
})


// ---------Player Cards------------
playerCard.states.add({
	on:{opacity:1},
	off:{opacity:0}
})

playerCard_jones.states.add({
	on:{opacity:1},
	off:{opacity:0}
})

playerCard_pressly.states.add({
	on:{opacity:1},
	off:{opacity:0}
})


//Lines to Triangle
line02.states.add ({
	triangle: {x:5,y:18,width:32,rotationZ:45},
})

line03.states.add ({
	triangle: {x:26,y:18,width:32,rotationZ:-45},
})


//Minimize Play By Play bar
playByPlay.states.add({
	minimize: {y:67}
})


//Top-Bot Toggle 7th Inning
top_inactive2.states.add({
	top: {opacity:0},
	bottom: {opacity:1}
})

top_active2.states.add({
	top: {opacity:1},
	bottom: {opacity:0}
})

bottom_inactive2.states.add({
	top: {opacity:1},
	bottom: {opacity:0}
})

bottom_active2.states.add({
	top: {opacity:0},
	bottom: {opacity:1}
})

inning07_expanded_top.states.add({
	top: {opacity:1},
	bottom: {opacity:0}
})

playCommentary_top7.states.add({
	top: {opacity:1},
	bottom: {opacity:0}
})



// --------------Switch Innings-----------------


// ----------Events--------------


// ----------Go To 4th Inning------------

// //Line Score Navigation
// line_inning04.on(Events.TouchStart, function() {
//   inning04_expanded.states.switch("inning04")
//   plays_top4_container.states.switch("inning04")
//   playCommentary.states.switch("inning04")
//   playCommentary2.states.switch("inning04")
//   gripper.states.switch("inning04")
//   line_inning07_active.states.switch("inning04")
//   line_inning04_active.states.switch("inning04")
//   player_willingham.states.switchInstant("play09")
//   player_morneau.states.switchInstant("play09")
//   player_doumit.states.switchInstant("play09")
//   player_plouffe.states.switchInstant("play09")
//   player_parmelee.states.switchInstant("play09")
//   player_dozier.states.switchInstant("play09")
//   player_escobar.states.switchInstant("play09")
//   player_hicks.states.switchInstant("play09")
//   play01_active.states.switchInstant("play09")
//   play02_active.states.switchInstant("play09")
//   play03_active.states.switchInstant("play09")
//   play04_active.states.switchInstant("play09")
//   play05_active.states.switchInstant("play09")
//   play06_active.states.switchInstant("play09")
//   play07_active.states.switchInstant("play09")
//   play08_active.states.switchInstant("play09")
//   playText_top4_01.states.switchInstant("play09")
//   playText_top4_02.states.switchInstant("play09")
//   playText_top4_03.states.switchInstant("play09")
//   playText_top4_04.states.switchInstant("play09")
//   playText_top4_05.states.switchInstant("play09")
//   playText_top4_06.states.switchInstant("play09")
//   playText_top4_07.states.switchInstant("play09")
//   playText_top4_08.states.switchInstant("play09")
//   btn_nextPlay.states.switchInstant("play09")
//   btn_nextPlay.ignoreEvents=true
//   btn_lastPlay.states.switchInstant("play09")
// });

//Vertical Inning Expand Navigation
inning04.on(Events.TouchStart, function() {
  inning04_expanded.states.next(["inning04","inning07"])
  plays_top4_container.states.next(["inning04","inning07"])
  playCommentary.states.next(["inning04","inning07"])
  playCommentary2.states.switchInstant("inning04")
  playCommentary_top7.states.switchInstant("bottom")
  player_willingham.states.switchInstant("play09")
  player_morneau.states.switchInstant("play09")
  player_doumit.states.switchInstant("play09")
  player_plouffe.states.switchInstant("play09")
  player_parmelee.states.switchInstant("play09")
  player_dozier.states.switchInstant("play09")
  player_escobar.states.switchInstant("play09")
  player_hicks.states.switchInstant("play09")
  play01_active.states.switchInstant("play09")
  play02_active.states.switchInstant("play09")
  play03_active.states.switchInstant("play09")
  play04_active.states.switchInstant("play09")
  play05_active.states.switchInstant("play09")
  play06_active.states.switchInstant("play09")
  play07_active.states.switchInstant("play09")
  play08_active.states.switchInstant("play09")
  playText_top4_01.states.switchInstant("play09")
  playText_top4_02.states.switchInstant("play09")
  playText_top4_03.states.switchInstant("play09")
  playText_top4_04.states.switchInstant("play09")
  playText_top4_05.states.switchInstant("play09")
  playText_top4_06.states.switchInstant("play09")
  playText_top4_07.states.switchInstant("play09")
  playText_top4_08.states.switchInstant("play09")
  btn_nextPlay.states.switchInstant("play09")
  btn_nextPlay.ignoreEvents=true
  btn_lastPlay.states.switchInstant("play09")
  inning01.states.next(["open","default"])
  inning02.states.next(["open","default"])
  inning03.states.next(["open","default"])
  line02.states.switchInstant("triangle")
  line03.states.switchInstant("triangle")
});


// ----------Go To 7th Inning------------

// //Line Score Navigation
// line_inning07.on(Events.TouchStart, function() {
//   inning04_expanded.states.switch("inning07")
//   // inning04_expanded_base.states.switch("inning07")
//   plays_top4_container.states.switch("inning07")
//   playCommentary.states.switch("inning07")
//   playCommentary2.states.switch("inning07")
//   gripper.states.switch("inning07")
//   line_inning07_active.states.switch("inning07")
//   line_inning04_active.states.switch("inning07")
//   btn_nextPlay.ignoreEvents=false
// });



// ----------BUTTONS------------

btn_nextPlay.on(Events.Click, function() {
  player_willingham.states.next(plays_top4)
  player_morneau.states.next(plays_top4)
  player_doumit.states.next(plays_top4)
  player_plouffe.states.next(plays_top4)
  player_parmelee.states.next(plays_top4)
  player_dozier.states.next(plays_top4)
  player_escobar.states.next(plays_top4)
  player_hicks.states.next(plays_top4)
  play01_active.states.next(plays_top4)
  play02_active.states.next(plays_top4)
  play03_active.states.next(plays_top4)
  play04_active.states.next(plays_top4)
  play05_active.states.next(plays_top4)
  play06_active.states.next(plays_top4)
  play07_active.states.next(plays_top4)
  play08_active.states.next(plays_top4)
  playText_top4_01.states.next(plays_top4)
  playText_top4_02.states.next(plays_top4)
  playText_top4_03.states.next(plays_top4)
  playText_top4_04.states.next(plays_top4)
  playText_top4_05.states.next(plays_top4)
  playText_top4_06.states.next(plays_top4)
  playText_top4_07.states.next(plays_top4)
  playText_top4_08.states.next(plays_top4)
  btn_nextPlay.ignoreEvents=false
  btn_nextPlay.states.next(plays_top4)
  btn_lastPlay.states.next(plays_top4)
});

btn_lastPlay.on(Events.Click, function() {
  player_willingham.states.next(plays_top4_reverse)
  player_morneau.states.next(plays_top4_reverse)
  player_doumit.states.next(plays_top4_reverse)
  player_plouffe.states.next(plays_top4_reverse)
  player_parmelee.states.next(plays_top4_reverse)
  player_dozier.states.next(plays_top4_reverse)
  player_escobar.states.next(plays_top4_reverse)
  player_hicks.states.next(plays_top4_reverse)
  play01_active.states.next(plays_top4_reverse)
  play02_active.states.next(plays_top4_reverse)
  play03_active.states.next(plays_top4_reverse)
  play04_active.states.next(plays_top4_reverse)
  play05_active.states.next(plays_top4_reverse)
  play06_active.states.next(plays_top4_reverse)
  play07_active.states.next(plays_top4_reverse)
  play08_active.states.next(plays_top4_reverse)
  playText_top4_01.states.next(plays_top4_reverse)
  playText_top4_02.states.next(plays_top4_reverse)
  playText_top4_03.states.next(plays_top4_reverse)
  playText_top4_04.states.next(plays_top4_reverse)
  playText_top4_05.states.next(plays_top4_reverse)
  playText_top4_06.states.next(plays_top4_reverse)
  playText_top4_07.states.next(plays_top4_reverse)
  playText_top4_08.states.next(plays_top4_reverse)
  btn_nextPlay.ignoreEvents=false
  btn_nextPlay.states.next(plays_top4_reverse)
  btn_lastPlay.states.next(plays_top4_reverse)
});

btn_beginInning.on(Events.TouchStart, function(){
	player_willingham.states.switch("play01")
	player_morneau.states.switch("play01")
	player_doumit.states.switch("play01")
	player_plouffe.states.switch("play01")
	player_parmelee.states.switch("play01")
	player_dozier.states.switch("play01")
	player_escobar.states.switch("play01")
	player_hicks.states.switch("play01")
	play01_active.states.switch("play01")
	play02_active.states.switch("play01")
	play03_active.states.switch("play01")
	play04_active.states.switch("play01")
	play05_active.states.switch("play01")
	play06_active.states.switch("play01")
	play07_active.states.switch("play01")
	play08_active.states.switch("play01")
	playText_top4_01.states.switch("play01")
	playText_top4_02.states.switch("play01")
	playText_top4_03.states.switch("play01")
	playText_top4_04.states.switch("play01")
	playText_top4_05.states.switch("play01")
	playText_top4_06.states.switch("play01")
	playText_top4_07.states.switch("play01")
	playText_top4_08.states.switch("play01")
	btn_nextPlay.states.switch("play01")
	btn_lastPlay.states.switch("play01")
	btn_nextPlay.ignoreEvents=false
});


// -----------Player Cards-----------

samplePlayer02.on(Events.TouchStart, function(){
	playerCard.states.switch("on")
	playerCard_jones.states.switchInstant("on")
	playerCard_pressly.states.switchInstant("off")
});

samplePlayer01.on(Events.TouchStart, function(){
	playerCard.states.switch("on")
	playerCard_jones.states.switchInstant("off")
	playerCard_pressly.states.switchInstant("on")
});

btn_close_pc.on(Events.TouchStart, function(){
	playerCard.states.switch("off")
});




//Line to Triangle
icnContainer_lineToTri.on(Events.TouchStart, function() {
	line02.states.next(["triangle","default"])
	line03.states.next(["triangle","default"])
	playByPlay.states.next(["minimize","default"])
})


//Top-Bot Bottom 7 toggle
toggle_top2.on(Events.TouchStart, function(){
	top_inactive2.states.switch("top")
	top_active2.states.switch("top")
	bottom_inactive2.states.switch("top")
	bottom_active2.states.switch("top")
	inning07_expanded_top.states.switch("top")
	playCommentary2.states.switchInstant("inning07top")
	playCommentary_top7.states.switchInstant("top")
	samplePlayer01.ignoreEvents=true
	samplePlayer02.ignoreEvents=true
});

toggle_bot2.on(Events.TouchStart, function(){
	top_inactive2.states.switch("bottom")
	top_active2.states.switch("bottom")
	bottom_inactive2.states.switch("bottom")
	bottom_active2.states.switch("bottom")
	inning07_expanded_top.states.switch("bottom")
	playCommentary2.states.switchInstant("inning07")
	playCommentary_top7.states.switchInstant("bottom")
	samplePlayer01.ignoreEvents=false
	samplePlayer02.ignoreEvents=false
});


