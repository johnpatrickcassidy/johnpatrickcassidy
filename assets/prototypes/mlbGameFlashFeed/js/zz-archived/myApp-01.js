var cirSize=6, dist=200, i=0;

var scrollTimer, lastScrollFireTime = 0;

onscroll = function() {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var minScrollTime = 300;
  var now = new Date().getTime();
  
  function processScroll() {
      console.log(new Date().getTime().toString());
  }

  function gameForward() {
    document.getElementById("inningNum").innerHTML = i;
    document.getElementById("ballCount").style.backgroundPosition= "0px "+(-i)+"px";
    document.getElementById("runners").style.backgroundPosition= "0px "+(-i)+"px";
    document.getElementById("halfInning").style.backgroundPosition= "0px "+(-i)+"px";
    i+=6;
  }

  if (!scrollTimer) {
      if (now - lastScrollFireTime > (3 * minScrollTime)) {
          processScroll();   // fire immediately on first scroll
          gameForward();
          lastScrollFireTime = now;
      }
      scrollTimer = setTimeout(function() {
          scrollTimer = null;
          lastScrollFireTime = new Date().getTime();
          processScroll();
          gameForward();
      }, minScrollTime);
  }
};


// onscroll = function() {
  
//   // var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//   for (i; i<4; i++) {
//     document.getElementById("inningNum").innerHTML = i;
//     document.getElementById("ballCount").style.backgroundPosition= (i-1) + "px "+ (i-1) +"px";
//     document.getElementById("runners").style.backgroundPosition= (i-1) + "px "+ (i-1) +"px";
//     document.getElementById("halfInning").style.backgroundPosition= (i-1) + "px "+ (i-1) +"px";
//     console.log("i="+i);
//     // console.log("scrollTop="+scrollTop);
//     console.log("i-1*dist="+(i-1)*dist);
//     console.log("i*dist="+(i*dist));
//     // if (scrollTop > (i-1)*dist && scrollTop < i*dist) {
//     //   document.getElementById("inningNum").innerHTML = i;
//     //   document.getElementById("ballCount").style.backgroundPosition= (i-1) + "px "+ (i-1) +"px";
//     //   document.getElementById("runners").style.backgroundPosition= (i-1) + "px "+ (i-1) +"px";
//     //   document.getElementById("halfInning").style.backgroundPosition= (i-1) + "px "+ (i-1) +"px";
//     //   console.log("i="+i);
//     //   console.log("scrollTop="+scrollTop);
//     //   console.log("i-1*dist="+(i-1)*dist);
//     //   console.log("i*dist="+(i*dist));
//     // }
//     // else {
//     //   console.log('fail='+i);
//     //   console.log('i-1*dist='+(i-1)*dist);
//     //   console.log('i*dist='+(i*dist));
//     // }
//   }

    
//   // if (scrollTop > 0 && scrollTop < dist) {
//   //     document.getElementById("inningNum").innerHTML = "1";
//   //     document.getElementById("ballCount").style.backgroundPosition="0px 0px";
//   //     document.getElementById("runners").style.backgroundPosition="0px 0px";
//   //     document.getElementById("halfInning").style.backgroundPosition="0px 0px";
//   //     console.log('1');
//   //   }
//   // else if (scrollTop > dist && scrollTop < 2*dist) {
//   //     document.getElementById("ballCount").style.backgroundPosition="0px "+(-cirSize+"px");
//   //     // document.getElementById("inningNum").innerHTML = "2";
//   //     // document.getElementById("runners").style.backgroundPosition="0px -21px";
//   //     // document.getElementById("halfInning").style.backgroundPosition="0px -4px";
//   //     console.log("0px "+cirSize+"px");
//   //   }
//   // else if (scrollTop > 2*dist && scrollTop < 3*dist) {
//   //     document.getElementById("ballCount").style.backgroundPosition="0px "+(-2*cirSize+"px");
//   //     // document.getElementById("inningNum").innerHTML = "3";
//   //     // document.getElementById("halfInning").style.backgroundPosition="0px 0px";
//   //     console.log('3');
//   //   }
//   // else if (scrollTop > 3*dist && scrollTop < 4*dist) {
//   //     document.getElementById("strikeCount").style.backgroundPosition="0px "+(-cirSize+"px");
//   //   }
//   // else if (scrollTop > i*dist && scrollTop < (i+1)*dist) {
//   //     document.getElementById("strikeCount").style.backgroundPosition="0px "+(-i*cirSize+"px");
//   //   }

// };