$(document).ready(function() {
    $("header nav li a, header h1 a").each(function(e){
        var prevhref = $(this).attr("href")
        $(this).attr("href", prevhref + '?' + Math.random())
    })
})
