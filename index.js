function checkFormInput() {
    $("#number-chooser").submit("click", function(e) {
      e.preventDefault();
      var formInput = parseInt($("#number-choice").val());
      console.log(formInput);

      for (let i = 1; i <= formInput; i++) {

        if ( i % 15 === 0){
          $( ".js-results" ).append( "<div class='fizz-buzz-item fizzbuzz'><span>fizzbuzz</span></div>");
        } else if ( i % 5 === 0){
          $( ".js-results" ).append( "<div class='fizz-buzz-item buzz'><span>buzz</span></div>");
        } else if ( i % 3 === 0) {
          $( ".js-results" ).append( "<div class='fizz-buzz-item fizz'><span>fizz</span></div>");
        } else {
          $( ".js-results" ).append( "<div class='fizz-buzz-item'><span>" + i + "</span></div>");
        }
      }
 });
}


$(function() {
  checkFormInput();
});
