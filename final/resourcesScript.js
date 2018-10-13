$(document).ready(function(){
    $("form").on("submit", function(e){
      e.preventDefault();
      const query = $($(this).children()[0]).val().toLowerCase();

      $(".list").children().each(function(index) {
        const save = $(this);
        // check tags
        let found = false;
        $(this).find('.tag-cont').children().each(function(index) {
          console.log($(this));
          if($(this).text().toLowerCase() === query) {
            found = true;
          }
        });
        if(!found) {
          if($(this).find('.resource-name').text().toLowerCase() !== query) {
            $(this).hide();
          }
        }
      });
    });
});
