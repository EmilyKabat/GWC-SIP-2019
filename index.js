function zoomInRenata() {
  var w = document.getElementById("renata").width;
  var h = document.getElementById("renata").height;
  w = w*2;
  h = h*2;
  w = w.toString();
  h = h.toString();
  w = w.concat("px")
  h = h.concat("px")
  document.getElementById("renata").style.width = w;
  document.getElementById("renata").style.height = h;
}

function zoomInSly() {
  var w = document.getElementById("sly").width;
  var h = document.getElementById("sly").height;
  w = w*2;
  h = h*2;
  w = w.toString();
  h = h.toString();
  w = w.concat("px")
  h = h.concat("px")
  document.getElementById("sly").style.width = w;
  document.getElementById("sly").style.height = h;
}

function smiley() {
  document.body.style.background = "url('1.jpg') no-repeat center center fixed";
  document.getElementById("sly").style.width = "0px";
  document.getElementById("sly").style.height = "0px";
  document.getElementById("renata").style.width = "0px";
  document.getElementById("renata").style.height = "0px";
}
