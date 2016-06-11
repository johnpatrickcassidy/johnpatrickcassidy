var cirSize=6, dist=200, i=0, inningStart=1, inningSpeed=.1;

var scrollTimer, lastScrollFireTime = 0;

var runnersPos = (function() {
  var runnersCycle = ['0px 0px','0px -21px','0px -21px','0px -105px', '0px -105px', '0px -147px','0px -147px','0px -147px','0px -63px'];
  var count = -1;
  return function() {
    return runnersCycle[++count % runnersCycle.length];
  }
}());

var ballCount = (function() {
  var ballCycle = ['0px -6px','0px -6px','0px -12px','0px -12px','0px -18px','0px -18px'];
  var count = -1;
  return function() {
    return ballCycle[++count % ballCycle.length];
  }
}());

var strikeCount = (function() {
  var strikeCycle = ['0px 0px','0px -6px','0px -6px','0px -12px','0px -12px','0px -18px'];
  var count = -1;
  return function() {
    return strikeCycle[++count % strikeCycle.length];
  }
}());

var outCount = (function() {
  var outCycle = ['0px 0px','0px 0px','0px 0px','0px 0px','0px 0px','0px 0px','0px -6px','0px -6px','0px -6px','0px -6px','0px -6px','0px -6px','0px -12px','0px -12px','0px -12px','0px -12px','0px -12px','0px -12px','0px -18px'];
  var count = -1;
  return function() {
    return outCycle[++count % outCycle.length];
  }
}());

var inningCount = (function() {
  var inningCycle = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2];
  var count = -1;
  return function() {
    return inningCycle[++count % inningCycle.length];
  }
}());

var homeScoreCount = (function() {
  var homeScoreCycle = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,3,3,3,3,3,3,3,3,4,4,4,4,5,5,5,5,5];
  var count = -1;
  return function() {
    return homeScoreCycle[++count % homeScoreCycle.length];
  }
}());

onscroll = function() {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var minScrollTime = 300;
  var now = new Date().getTime();
  
  function fastForward() {
  //   function balls() {
  //     var ballCount = i;
  //     if (ballCount >= 4) {
  //       console.log("ballCount="+(-ballCount));
  //       return -ballCount;
  //     }
  //     else {
  //       console.log("ballCount=0");
  //       return 0;
  //     }
  //   }    function inningNum() {
  //     var roundedInning=Math.round(inningSpeed*i+inningStart);
  //     if (roundedInning < 1) {
  //       // console.log(1);
  //       return 1;
  //     }
  //     else {
  //       // console.log(roundedInning);
  //       return roundedInning;
  //     }
  //   }

    document.getElementById("inningNum").innerHTML = inningCount();
    document.getElementById("runners").style.backgroundPosition= runnersPos();
    document.getElementById("ballCount").style.backgroundPosition= ballCount();
    document.getElementById("strikeCount").style.backgroundPosition= strikeCount();
    document.getElementById("outCount").style.backgroundPosition= outCount();
    document.getElementById("homeTeamScore").innerHTML= homeScoreCount();
    // document.getElementById("runners").style.backgroundPosition= 
    // document.getElementById("halfInning").style.backgroundPosition=
    i++;
  }


  function processScroll() {
      // console.log("inningNum()="+inningNum());
      // console.log("roundedInning="+roundedInning);
  }

  
  if (!scrollTimer) {
      if (now - lastScrollFireTime > (3 * minScrollTime)) {
          fastForward();
          processScroll();   // fire immediately on first scroll
          lastScrollFireTime = now;
      }
      scrollTimer = setTimeout(function() {
          scrollTimer = null;
          lastScrollFireTime = new Date().getTime();
          fastForward();
          processScroll();
      }, minScrollTime);
  }
};