// Create a "close" button and append it to each list item
let doneLen=3;
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
//Create a "done" button and append it to each list items
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u2713");
  span.className = "done";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
} 

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//click on a done button
var done = document.getElementsByClassName("done");
var i;
for (i = 0; i < done.length ; i++) {
  let x2=i;
  done[i].onclick = function() {
    
    
    function moveElement() {
      console.log(done.length)
      done.pop
      s=String("a"+x2)
      var li = document.createElement("li");
      console.log(document.getElementById(s).textContent);
      var inputValue = document.getElementById(s).textContent;
      var t = document.createTextNode(inputValue);
      li.appendChild(t);
      
      document.getElementById("doneList").appendChild(li);
      
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);
    
     
      for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }
      }
      
    }
    

    moveElement()
    var div = this.parentElement;
    div.style.display = "none";
  }
}
// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
let x=4;
function newElement() {
  
  var li = document.createElement("li");
  li.id = "a"+x;
  x++;
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  var span2 = document.createElement("SPAN");
  var txt2 = document.createTextNode("\u2713");
  span2.className = "done";
  span2.appendChild(txt2);
  li.appendChild(span2);
  doneLen++;
  //console.log(doneLen)

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  for (i = 0; i < done.length; i++) {
    done[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
