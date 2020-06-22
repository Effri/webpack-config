/** @format */

export function popup() {
  const list = document.querySelectorAll("*[data-popup]");
  const popup = document.querySelector("#popup");
  for (let el of list) {
    el.addEventListener("mouseenter", (e) => {
      const content = el.getAttribute("data-popup");
      popup.textContent = content;
      console.log(popup);
    });
    el.addEventListener("mouseleave", (e) => {
      const content = el.getAttribute("data-popup");
      popup.textContent = "";
    });
  }
}
