$(function () {
    var state = 0;
    $(".setting").on('click', function () {
        state++;
        if (state % 2 == 0) {
            $(".background").css("background", "rgba(10,50,100,0)")
        } else {
            $(".background").css("background", "rgba(10,50,100,0.9)")
        }
    });
    var scrollTopMao = $(document).scrollTop();
    
    if (scrollTopMao >= 100) {
        $(".background").css("background", "rgba(0,26,85,0.9)")
    }
    if (scrollTopMao < 100) {
        $(".background").css("background", "rgba(10,50,100,0)")
    }
    $(document).scroll(function () {

        var scrollTop = $(document).scrollTop();
        // console.log(scrollTop)
        if (scrollTop >= 100) {
            $(".background").css("background", "rgba(0,26,85,0.9)")
        }
        if (scrollTop < 100) {
            
            $(".background").css("background", "rgba(10,50,100,0)")
        }
    });
    // 修改默认bootstrapt样式
    $(".navbar-default .navbar-toggle").css("border-color", "rgba(255,255,255,0)")
    $(".navbar-toggle").on('click', function () {
        $(".navbar-default .navbar-toggle:focus, .navbar-default .navbar-toggle:hover").css("background-color", "rgba(10,50,100,0)")
        $(".navbar-default .navbar-collapse").css("border", "none")
    })


});
