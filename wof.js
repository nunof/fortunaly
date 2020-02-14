var _target, _deg = 0;
var _index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], _repeat_random = true;
var _deg_each = 20;

function audio_play(audio_uri) { 
    var audio_obj = new Audio();
    audio_obj.addEventListener("canplay", function() { audio_obj.play(); }, false);
    audio_obj.setAttribute("src", audio_uri);
    delete audio_obj;
}

function ord_random() {
    return _deg = _deg + ((Math.floor(Math.random() * (18 - 1 + 1)) + 0) * _deg_each) + 1080;
};
jQuery(document).ready(function ($) {
    $(".skills-wheel .btn").on("click", function (e) {
        _repeat_random = _index.length == 0 ? false : true;
        while (_repeat_random) {
            ord_random();
            _target = (_deg - (360 * parseInt(_deg / 360))) / _deg_each;
            var _inArray = $.inArray(_target, _index);
            if (_inArray > -1) {
                _repeat_random = false;
                _index.splice(_inArray, 1);
					audio_play("sounds/gowheel.ogg");
                $(".fancybox").parent("li").velocity({ opacity: 1 }, { duration: 100, complete: function () {
                        $(".wheel").velocity({ rotateZ: "-" + _deg + "deg" }, { duration: 3000, complete: function (elements) {
                                $(".fancybox").parent("li").eq(_target).velocity({ opacity: 0.4 }, { duration: 100, complete: function () {
                                        $(".fancybox").eq(_target).trigger("click");
                                        $(".fancybox").eq(_target).css( "color", "red" );                                        
                                    } }); } }); } });

            };
        }; 
        return false;
    }); 

    $(".fancybox").fancybox({
        maxWidth: "85%"
    });
});

