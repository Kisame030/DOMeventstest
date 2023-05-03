var button = document.getElementById('button');
var list = document.getElementById('list');

function elemanSil(event) {
	var target = event.target;
  target.classList.toggle('done');
}
function addButton(event) {
  var target = event.target;
  target.createElement.button
}


button.addEventListener("click", function(event) {
	var target = event.target;
  // Yaziyi al
	var input = document.getElementById('input');	
  var value = input.value;
  // yeni eleman yarat
  var ul = document.createElement('list');
  var neLi = document.createElement('li');
  neLi.appendChild(document.createTextNode("Four"));
  button.innerHTML = "asd";
  neLi.appendChild(button);
  neLi.setAttribute("id", "element4");
  neLi.textContent = value;
  // yeni yaratilan elemana event ekle
  neLi.addEventListener("click", elemanSil);
  ul.appendChild(neLi);
  input.value = ""; //reset input box
}, false);