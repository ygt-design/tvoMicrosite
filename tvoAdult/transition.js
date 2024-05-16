window.onload = () => {
  const anchors = document.querySelectorAll("a");
  const transition_el = document.querySelector(".transition");

  setTimeout(() => {
    transition_el.classList.remove("is-active");
  }, 1000);

  for (let i = 0; i < anchors.length; i++) {
    const anchor = anchors[i];

    anchor.addEventListener("click", (e) => {
      e.preventDefault();

      let target = e.target.parentElement.href;

      //   console.log(transition_el);

      transition_el.classList.add("is-active");

      //   console.log(transition_el);

      setInterval(() => {
        window.location.href = target;
      }, 1000);
    });
  }
};
