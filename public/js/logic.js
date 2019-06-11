$(document).ready(() => {
  M.AutoInit();

  let chips;

  /* Open when someone clicks on the span element */
  let openNav = () => {
    document.getElementById("myNav").style.width = "100%";
  }

  /* Close when someone clicks on the "x" symbol inside the overlay */
  let closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
  }

  $(document).on("click", "#openNav", openNav);
  $(document).on("click", "#closeNav", closeNav);
});