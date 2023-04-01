export default function outSideClick(element, events, callbackRemove) {
  const html = document.documentElement;

  if (!element.hasAttribute("data-outside")) {
    events.forEach(userEvent => {
       setTimeout(() => html.addEventListener(userEvent, handleOutSideClick));
    });
    element.setAttribute("data-outside", "");
  }
 
  function handleOutSideClick(event) {
    if (!element.contains(event.target)) {
      events.forEach(userEvent => {
        html.removeEventListener(userEvent, handleOutSideClick);
      });
      element.removeAttribute("data-outside");
      callbackRemove();
    }
  }
}
