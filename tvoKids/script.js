$(document).ready(function () {
  console.log("it works");

  // Desktop menu animation
  const menu = document.querySelector("#menu");
  let prevScrollpos = window.pageYOffset;
  menu.style.top = "0px"; // Set initial value for top property
  window.addEventListener("scroll", () => {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      menu.style.top = "0";
    } else {
      menu.style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
  });

  let $btn = $(".btn");
  let $illu = $(".illu2");
  let $win = $(window);

  $win.on("scroll", function () {
    let top = $win.scrollTop();
    $btn.css("transform", "rotate(" + top / 3 + "deg)");
    $(".button").css("transform", "rotate(" + top / 2 + "deg)");
  });

  $win.on("scroll", function () {
    let top = $win.scrollTop();
    $illu.css("transform", "rotate(" + top / 25 + "deg)");
    $(".illu2").css("transform", "rotate(" + top / 25 + "deg)");
  });

  $("#hamburger").click(function () {
    $(".hambMenu").animate({ right: "0px" }, 300);
  });

  $("#cross").click(function () {
    $(".hambMenu").animate({ right: "-55vw" }, 300);
  });
});
