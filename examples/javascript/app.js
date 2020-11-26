$(document).ready(function(){
    
    $( "#hide" ).click(function() {
        $( "#funStuff" ).slideUp( "slow", function() {
          // Animation complete.
        });
      });
      $( "#show" ).click(function() {
        $( "#funStuff" ).slideDown( "slow", function() {
          // Animation complete.
        });
      });

});