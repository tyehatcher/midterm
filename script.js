var list = [
  {
    name: "Bob",
    color: "red"
  },
  {
    name: "Bobber",
    color: "orange"
  },
  {
    name: "Bobbette",
    color: "green"
  },
  {
    name: "Bobbers",
    color: "blue"
  },
  {
    name: "Boberino",
    color: "purple"
  }
];

function boxes(name, color) {
  var that = this;
  this.name = name;
  this.color = color;

  this.ele = document.createElement("div");
  this.mesEle = document.createElement("h1");

  this.ele.style.height = "100px";
  this.ele.style.width = "150px";
  this.ele.style.backgroundColor = this.color;
  this.ele.style.color = "white";
  this.ele.style.border = "5px none";
  this.ele.style.display = "flex";
  this.ele.style.justifyContent = "center";
  this.ele.style.alignItems = "center";
  this.ele.style.borderRadius = "25px";
  this.ele.style.cursor = "pointer";
  this.ele.style.margin = "10px";

  this.mesEle.style.color = "white";

  this.mesEle.innerHTML = this.name;

  this.ele.appendChild(this.mesEle);
  document.body.appendChild(this.ele);

  this.ele.addEventListener("click", function() {
    if (that.ele.style.borderStyle == "none") {
      that.ele.style.borderColor = "black";
      that.ele.style.borderStyle = "solid";
      that.ele.style.height = "90px";
      that.ele.style.width = "140px";
 } else if (that.ele.style.borderColor == "black") {
      that.ele.style.borderStyle = "none";
      that.ele.style.height = "100px";
      that.ele.style.width = "150px";
 }
  });
}
for (var i = 0; i < list.length; i++) {
  new boxes(list[i].name, list[i].color);
}