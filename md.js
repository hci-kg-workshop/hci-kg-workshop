$(document).ready(function() {
    $(".publications nav li, .cv nav li").on("click",
        function(e){
            $(this).removeClass("on")
            var theclass = $(this).attr("class")
            $(this).addClass("on")
            $(this).siblings().removeClass("on")
            $(this).parents("main").find(".content li").each(function(){
                if(theclass == "topic_0" || $(this).hasClass(theclass)){
                    $(this).show()
                }else{
                    $(this).hide()
                }
            })
        }
    )
    $(".cv .content li:not(.topic_1)").hide()
})
