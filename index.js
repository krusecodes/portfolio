
        $( document ).ready(function() {

            $( ".cross" ).hide();
            $( ".menu" ).hide();
            $( ".hamburger" ).click(function() {
            $( ".menu" ).slideToggle( "slow", function() {
            $( ".hamburger" ).hide();
            $( ".cross" ).show();
            });
            });
            
            $( ".cross" ).click(function() {
            $( ".menu" ).slideToggle( "slow", function() {
            $( ".cross" ).hide();
            $( ".hamburger" ).show();
            });
            });
        
            $( ".menuList" ).click(function() {
                $( ".menu" ).slideToggle( "slow", function() {
                $( ".cross" ).hide();
                $( ".hamburger" ).show();
                });
                });
            
            });

// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

// Get the modal 2
const modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
const btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
const span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
btn2.onclick = function() {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal2) {
    modal.style.display = "none";
  }
}

// Get the modal 3
const modal3 = document.getElementById("myModal3");

// Get the button that opens the modal
const btn3 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
const span3 = document.getElementsByClassName("close3")[0];

// When the user clicks the button, open the modal 
btn3.onclick = function() {
  modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
  modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal3) {
    modal.style.display = "none";
  }
}

// Get the modal 4
const modal4 = document.getElementById("myModal4");

// Get the button that opens the modal
const btn4 = document.getElementById("myBtn4");

// Get the <span> element that closes the modal
const span4 = document.getElementsByClassName("close4")[0];

// When the user clicks the button, open the modal 
btn4.onclick = function() {
  modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span4.onclick = function() {
  modal4.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal4) {
    modal.style.display = "none";
  }
}







