$(document).ready(function(){
    $("form").on("submit", function(e){
      e.preventDefault();
      const query = $($(this).children()[0]).val();

      $(".list").children().each(function(index) {
        const save = $(this);
        // check tags
        let found = false;
        $(this).find('.tag-cont').children().each(function(index) {
          console.log($(this));
          if($(this).text() === query) {
            found = true;
          }
        });
        if(!found) {
          if($(this).find('.resource-name').text() !== query) {
            $(this).hide();
          }
        }
      });
    });
});
