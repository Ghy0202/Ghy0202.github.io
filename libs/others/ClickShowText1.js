//鼠标点击出现社会主义核心价值观文字特效
/*使用了jQuery语法，若页面未引入JQ应引入JQ或者
将本代码中JQ选择器替换为JS原生选择器*/
var a_idx = 0;
    $("body").click(function(e) {
        var a = new Array(
            "coding", "早睡早起", "发量惊人", "yyds",
            "热爱", "IT", "AI", "盐系",
            "摸鱼", "可耐", "happy", "blog"
            );
        const col = [
        "#FF0000","#FF7F00","#FFFF00","#00FF00","#00FFFF","#0000FF","#8B00FF"
        ];
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 144469,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": col[Math.floor((Math.random()*col.length))]
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
        1500,
        function() {
            $i.remove()
        })
    });