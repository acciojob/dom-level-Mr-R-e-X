//your JS code here. If required.
let depth = 0;
let list = document.querySelector("ul");
// console.log(list.children);
for (let i = 0; i < list.children.length; i++) {
  if (list.children[i].getAttribute("id") === "level") {
    depth = i;
    break;
  }
  depth = i;
}
window.alert(depth);