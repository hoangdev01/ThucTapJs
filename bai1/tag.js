class tag {
  constructor(properties) {
    this.properties = Object.assign(
      {
        // tagSelector: "",
        action: "click",
        classTag: ".tag-n",
        classContent: ".content",
        classActive: "active",
      },
      properties
    );
    this.check;
    this.tagActive = this.properties.classActive;
    this.switch();
  }

  addActive(dom, active) {
    dom.classList.add(active);
  }
  removeActive(domList, active) {
    domList.forEach((dom) => dom.classList.remove(active));
  }

  switch() {
    let tagWrapper = document.querySelector(this.properties.tagSelector);
    let tag = tagWrapper.querySelectorAll(this.properties.classTag);
    let content = tagWrapper.querySelectorAll(this.properties.classContent);
    tag.forEach((tg, index) => {
      tg.addEventListener(this.properties.action, () => {
        // console.log(tag[index]);
        this.removeActive(tag, this.tagActive);
        this.removeActive(content, this.tagActive);
        this.addActive(tag[index], this.tagActive);
        this.addActive(content[index], this.tagActive);
      });
      tg.addEventListener("mouseover", (event) => {
        this.removeActive(tag, "hover");
        this.addActive(tag[index], "hover");
      });
      tg.addEventListener("mouseout", (event) => {
        this.removeActive(tag, "hover");
      });
    });
  }
}
var b = new tag({ tagSelector: ".container" });
