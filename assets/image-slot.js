class ImageSlot extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready === "1") return;

    const src = this.getAttribute("src");
    const fit = this.getAttribute("fit") || "cover";

    this.style.display = "block";
    this.style.width = "100%";
    this.style.height = "100%";

    if (!src) {
      this.dataset.ready = "1";
      return;
    }

    const img = document.createElement("img");
    img.src = src;
    img.alt = this.getAttribute("placeholder") || "Image";
    img.loading = "lazy";
    img.decoding = "async";

    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = fit;
    img.style.display = "block";

    this.appendChild(img);
    this.dataset.ready = "1";
  }
}

customElements.define("image-slot", ImageSlot);
