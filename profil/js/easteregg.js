function easterEggMode() {
    var avatar = document.getElementById("avatar").src;

    /*
     Aktivierung des EasterEgg mode.
     Änderung des Avatar und des Banners.
     */
    if (avatar.indexOf("images/avatar.jpg") != -1) {
        $(document).scrollTop(0);

        document.getElementById("one").style.backgroundImage = "url(images/EasterEgg/bannerstart.gif)";
        document.getElementById("avatar").src = "images/EasterEgg/avatar alt.jpg";

        rotate();
        nMaus();

    } else {
        document.getElementById("avatar").src = "images/avatar.jpg";
        $(document).scrollTop(0);
        window.location.reload();
    }
}

function rotate() {
    var avatar = $('.image.avatar');
    var offset = avatar.offset();

    function mouse(evt) {
        var center_x = (offset.left) + (avatar.width() / 2);
        var center_y = (offset.top) + (avatar.height() / 2) + $(window).scrollTop();
        var mouse_x = evt.pageX;
        var mouse_y = evt.pageY;
        var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
        var degree = (radians * (180 / Math.PI) * -1) - 90;

        if (degree < -90) {
            avatar.css("transform", "rotate(" + (degree - 180) + "deg) scaleX(-1)");
        } else {
            avatar.css("transform", "rotate(" + degree + "deg) scaleX(1)");
        }
    }

    $(document).mousemove(mouse);
}

function nMaus() {
    var offX = 10;
    var offY = 10;
    var mouseimg = document.getElementById("mouseimage");
    var semaphor = 1;

    mouseimg.style.display = "block";

    $(document).mousemove(function (e) {
        var mouseimage = $("#mouseimage");
        mouseimage.css({left: e.pageX + offX, top: e.pageY + offY});

        if (e.pageX > ($(document).width() - 200)) {
            mouseimage.css({left: e.pageX - 150, top: e.pageY + offY});
        }
        if (e.pageY > ($(document).height() - 200)) {
            mouseimage.css({left: e.pageX - offX, top: e.pageY - 150});
        }
        if (e.pageY > ($(document).height() - 200) && e.pageX > ($(document).width() - 200)) {
            mouseimage.css({left: e.pageX - 150, top: e.pageY - 150});
        }
    });

    document.onkeydown = function (event) {

        if (event.keyCode == 13) {
            if (semaphor == 1) {
                semaphor = 0;

                mouseimg.src = "images/EasterEgg/nikoExplosion.gif";

                setTimeout(function () {
                    mouseimg.src = ""
                }, 2999);
                setTimeout(function () {
                    mouseimg.src = "images/EasterEgg/nikoNeu.gif"
                }, 3000);
                setTimeout(function () {
                    mouseimg.src = ""
                }, 4199);
                setTimeout(function () {
                    mouseimg.src = "images/EasterEgg/niko1.gif"
                }, 4200);
                setTimeout(function () {
                    semaphor = 1
                }, 4200);
            }
        }
    }
}