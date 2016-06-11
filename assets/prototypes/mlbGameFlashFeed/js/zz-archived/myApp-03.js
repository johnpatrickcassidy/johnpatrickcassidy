var cirSize=6, dist=200, i=0, inningStart=1, inningSpeed=.1;

var scrollTimer, lastScrollFireTime = 0;

onscroll = function() {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var minScrollTime = 300;
  var now = new Date().getTime();
  
  function gameForward() {

    function inningNum() {
      var roundedInning=Math.round(inningSpeed*i+inningStart);
      if (roundedInning < 1) {
        // console.log(1);
        return 1;
      }
      else {
        // console.log(roundedInning);
        return roundedInning;
      }
    }

    function balls() {
      var ballCount = i;
      if (ballCount >= 4) {
        console.log("ballCount="+(-ballCount));
        return -ballCount;
      }
      else {
        console.log("ballCount=0");
        return 0;
      }
    }

    document.getElementById("inningNum").innerHTML = inningNum();
    document.getElementById("ballCount").style.backgroundPosition= "0px "+balls()+"px";
    document.getElementById("runners").style.backgroundPosition= "0px "+(-i)+"px";
    document.getElementById("halfInning").style.backgroundPosition= "0px "+Math.round(.3*(-i))+"px";
    i++;
  }


  function processScroll() {
      // console.log("inningNum()="+inningNum());
      // console.log("roundedInning="+roundedInning);
  }

  
  if (!scrollTimer) {
      if (now - lastScrollFireTime > (3 * minScrollTime)) {
          gameForward();
          processScroll();   // fire immediately on first scroll
          lastScrollFireTime = now;
      }
      scrollTimer = setTimeout(function() {
          scrollTimer = null;
          lastScrollFireTime = new Date().getTime();
          gameForward();
          processScroll();
      }, minScrollTime);
  }
};