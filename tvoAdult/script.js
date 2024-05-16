$(document).ready(function () {
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
  let $win = $(window);

  $win.on("scroll", function () {
    let top = $win.scrollTop();
    $btn.css("transform", "rotate(" + top / 3 + "deg)");
    $(".button").css("transform", "rotate(" + top / 2 + "deg)");
  });

  $("#hamburger").click(function () {
    $(".hambMenu").animate({ right: "0px" }, 300);
  });

  $("#cross").click(function () {
    $(".hambMenu").animate({ right: "-55vw" }, 300);
  });
});
