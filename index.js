// function myFunction(x) {
//     if (x.matches) { 
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

// var x = window.matchMedia("(max-width: 800px)")
// myFunction(x) 
// x.addListener(myFunction) 
