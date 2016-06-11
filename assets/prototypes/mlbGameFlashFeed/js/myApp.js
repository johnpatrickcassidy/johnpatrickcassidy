$(document).ready(function() {
    $(window).scroll(function() {
        var distanceFromTop = $(document).scrollTop();
        if (distanceFromTop >= $('.siNav').height())
        {
            $('#gameflashNav').addClass('fixed');
        }
        else
        {
            $('#gameflashNav').removeClass('fixed');
        }
    });
});

$(document).ready(function() {
    $(window).scroll(function() {
        var distanceFromTop = $(document).scrollTop();
        if (distanceFromTop >= $('.siNav').height())
        {
            $('#scoreboard').addClass('fixed');
        }
        else
        {
            $('#scoreboard').removeClass('fixed');
        }
    });
});


$(document).ready(function() {
    $(window).scroll(function() {
        var distanceFromTop = $(document).scrollTop();
        if (distanceFromTop >= $('.siNav').height())
        {
            $('#activityBarTop').addClass('fixed');
        }
        else
        {
            $('#activityBarTop').removeClass('fixed');
        }
    });
});

$(document).ready(function() {
    $(window).scroll(function() {
        var distanceFromTop = $(document).scrollTop();
        if (distanceFromTop >= $('.siNav').height())
        {
            $('#activityBarBot').addClass('fixed');
        }
        else
        {
            $('#activityBarBot').removeClass('fixed');
        }
    });
});

//-----------players sticky------------
$(document).ready(function() {
    $(window).scroll(function() {
        var distanceFromTop = $(document).scrollTop();
        if (distanceFromTop >= $('.siNav').height())
        {
            $('#pitcher01').addClass('fixed');
        }
        else
        {
            $('#pitcher01').removeClass('fixed');
        }
    });
});

$(document).ready(function() {
    $(window).scroll(function() {
        var distanceFromTop = $(document).scrollTop();
        if (distanceFromTop >= $('.siNav').height() && distanceFromTop < 329)
        {
            $('#batter01').addClass('fixed');
            console.log(distanceFromTop);
        }
        else if (distanceFromTop > 329) {
          $('#batter01').removeClass('fixed');
          $('#batter01').addClass('fixedAbsolute');
        }

        else
        {
            $('#batter01').removeClass('fixed');
            $('#batter01').removeClass('fixedAbsolute');
        }
    });
});

// $(document).ready(function() {
//     $(window).scroll(function() {
//         var distanceFromTop = $(document).scrollTop();
//         if (distanceFromTop >= $('.siNav').height()+406)
//         {
//             $('#batter02').addClass('fixed');
//         }
//         else
//         {
//             $('#batter02').removeClass('fixed');
//         }
//     });
// });

$(document).ready(function() {
    $(window).scroll(function() {
        var distanceFromTop = $(document).scrollTop();
        if (distanceFromTop >= $('.siNav').height()+406 && distanceFromTop < 830)
        {
            $('#batter02').addClass('fixed');
            console.log(distanceFromTop);
        }
        else if (distanceFromTop > 830) {
          $('#batter02').removeClass('fixed');
          $('#batter02').addClass('fixedAbsolute');
        }

        else
        {
            $('#batter02').removeClass('fixed');
            $('#batter02').removeClass('fixedAbsolute');
        }
    });
});

$(document).ready(function() {
    $(window).scroll(function() {
        var distanceFromTop = $(document).scrollTop();
        if (distanceFromTop >= $('.siNav').height()+912)
        {
            $('#batter03').addClass('fixed');
        }
        else
        {
            $('#batter03').removeClass('fixed');
        }
    });
});



var cirSize=6, dist=200, i=0, inningStart=1, inningSpeed=.1;

var scrollTimer, lastScrollFireTime = 0;

var runnersPos = (function() {
  var runnersCycle = ['0px 0px','0px -21px','0px -21px','0px -105px', '0px -105px', '0px -147px','0px -147px','0px -147px','0px -63px'];
  var runnersCycleRev = runnersCycle.reverse();
  var count = -1;
  return function() {
    return runnersCycleRev[++count % runnersCycleRev.length];
  }
}());

var ballCount = (function() {
  var ballCycle = ['0px -7px','0px -7px','0px -14px','0px -14px','0px -21px','0px -21px'];
  var ballCycleRev = ballCycle.reverse();
  var count = -1;
  return function() {
    return ballCycleRev[++count % ballCycleRev.length];
  }
}());

var strikeCount = (function() {
  var strikeCycle = ['0px 0px','0px -7px','0px -7px','0px -14px','0px -14px','0px -21px'];
  var strikeCycleRev = strikeCycle.reverse();
  var count = -1;
  return function() {
    return strikeCycleRev[++count % strikeCycleRev.length];
  }
}());

var outCount = (function() {
  var outCycle = ['0px 0px','0px 0px','0px 0px','0px 0px','0px 0px','0px 0px','0px -7px','0px -7px','0px -7px','0px -7px','0px -7px','0px -7px','0px -14px','0px -14px','0px -14px','0px -14px','0px -14px','0px -14px','0px -21px'];
  var outCycleRev = outCycle.reverse();
  var count = -1;
  return function() {
    return outCycleRev[++count % outCycleRev.length];
  }
}());

var inningCount = (function() {
  var inningCycle = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2];
  var inningCycleRev = inningCycle.reverse();
  var count = -1;
  return function() {
    return inningCycleRev[++count % inningCycleRev.length];
  }
}());

var homeScoreCount = (function() {
  var homeScoreCycle = [0,0,0,0,0,0,0,1,1,1,1,1,1,1,2,2,2,2,3,3,3,3,3,3,3,3,4,4,4,4,5,5,5,5,5];
  var homeScoreCycleRev = homeScoreCycle.reverse();
  var count = -1;
  return function() {
    return (homeScoreCycleRev[++count % homeScoreCycleRev.length]);
  }
}());

onscroll = function() {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var minScrollTime = 650;
  var now = new Date().getTime();
  
  function fastForward() {
    document.getElementById("inningNum").innerHTML = inningCount();
    document.getElementById("runners").style.backgroundPosition= runnersPos();
    document.getElementById("ballCount").style.backgroundPosition= ballCount();
    document.getElementById("strikeCount").style.backgroundPosition= strikeCount();
    document.getElementById("outCount").style.backgroundPosition= outCount();
    document.getElementById("homeTeamScore").innerHTML= homeScoreCount();
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