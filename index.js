const list = document.getElementById("drop-list");
const title = document.getElementById("list-title");
const icon = document.getElementById("icon");
const savebtn = document.getElementById("save-btn");
const savetext = document.getElementById("savetext");
const hello = document.getElementById("fafa");
const main = document.getElementById("content");
const toggle = document.getElementById("first");

function hideContent() {
    main.style.top = "-120%";
    setTimeout(function(){
        toggle.style.zIndex = "100"
    }, 300);
}

function showContent() {
    main.style.top = "5%";
    setTimeout(function(){
        toggle.style.zIndex = "-1"
    }, 1);
}

function saveBtn() {
  console.log("Savee");
  savetext.innerHTML = "";
  hello.style.opacity = 1;
}

function myDropdown() {
  if (list.style.opacity == 0) {
    console.log("Açıldı");
    list.style.opacity = 1;
    list.style.cssText += "pointer-events:all;";
    icon.classList.add("fa-flip-vertical");
  } else {
    console.log("Kapandı");
    list.style.opacity = 0;
    list.style.cssText += "pointer-events:none;";
    icon.classList.remove("fa-flip-vertical");
  }
}

function english() {
  title.innerHTML = "English";
  console.log("Kapandı");
  list.style.opacity = 0;
  list.style.cssText += "pointer-events:none;";
  icon.classList.remove("fa-flip-vertical");
}
function turkish() {
  title.innerHTML = "Turkish";
  console.log("Kapandı");
  list.style.opacity = 0;
  list.style.cssText += "pointer-events:none;";
  icon.classList.remove("fa-flip-vertical");
}
function french() {
  title.innerHTML = "French";
  console.log("Kapandı");
  list.style.opacity = 0;
  list.style.cssText += "pointer-events:none;";
  icon.classList.remove("fa-flip-vertical");
}
function spanish() {
  title.innerHTML = "Spanish";
  console.log("Kapandı");
  list.style.opacity = 0;
  list.style.cssText += "pointer-events:none;";
  icon.classList.remove("fa-flip-vertical");
}
function italian() {
  title.innerHTML = "Italian";
  console.log("Kapandı");
  list.style.opacity = 0;
  list.style.cssText += "pointer-events:none;";
  icon.classList.remove("fa-flip-vertical");
}
