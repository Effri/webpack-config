/** @format */

class CreateTime extends HTMLElement {
  isRendered = false;
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    if (!this.isRendered) this.render(shadow);
  }
  render(shadow) {
    let date;
    if (!+this.getAttribute("date")) {
      date = new Date(this.getAttribute("date")) || Date.now();
    } else {
      date = new Date(+this.getAttribute("date")) || Date.now();
    }

    var formatter = new Intl.DateTimeFormat("ru", {
      hour12: this.getAttribute("hour12") === "true" ? true : false,
      weekday: this.getAttribute("weekday") || undefined,
      year: this.getAttribute("year") || undefined,
      month: this.getAttribute("month") || undefined,
      day: this.getAttribute("day") || undefined,
      hour: this.getAttribute("hour") || undefined,
      minute: this.getAttribute("minute") || undefined,
      second: this.getAttribute("second") || undefined,
      timeZoneName: this.getAttribute("timeZoneName") || undefined,
    }).format(date);
    if (this.getAttribute("pretty") == "true")
      formatter = formatter.replace(/,/gi, " ");
    shadow.innerHTML = formatter;
  }
  static get observedAttributes() {
    return [
      "hour12",
      "weekday",
      "year",
      "month",
      "day",
      "hour",
      "minute",
      "second",
      "timeZoneName",
    ];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (this.isRendered) this.render();
  }
}
customElements.define("create-time", CreateTime);
