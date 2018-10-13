const bob = [{ left: '250px' }, { right: '250px' }];
let index = 0;

$(document).ready(function(){
    $("#logo").click(function() {
        $("#logo").removeClass('left');
        $("#logo").removeClass('right');
        $("#logo").animate(bob[index]);
        $("#click").remove();
    });
});
