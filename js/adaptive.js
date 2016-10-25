(function() {
    function changeRem() {
        var html = document.getElementsByTagName('html')[0];
        var sWith = document.documentElement.clientWidth;
        if(sWith >= 640){
            sWith = 640;
        }

        html.style.fontSize = sWith / 20 / 16 * 62.5 + '%';
    };
    changeRem();
    var t;
    window.addEventListener('resize', function() {
        clearTimeout(t);
        t = setTimeout(changeRem, 300);
        
    }, false);
    window.addEventListener('pageshow', function(e) {
        if (e.persisted) {
        clearTimeout(t);
        t = setTimeout(changeRem, 300);
        }
    }, false);
}());