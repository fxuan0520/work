$.ajax({
    url: "./data/data.json",
    success: function(res) {
        rander(res.data);
    }
});

function rander(data) {
    var obj = {};
    var arr = [];
    data.forEach(function(item) {
        var str = item.Spelling.substr(0, 1);
        if (!obj[str]) {
            obj[str] = {
                title: str,
                list: []
            }
        }
        obj[str].list.push(item.Name);

    });
    for (var i in obj) {
        arr.push(obj[i]);
    };
    var html = "";
    var list = "";
    arr.forEach(function(v) {
        list += `<li>${v.title}</li>`
        html += `<li>
                    <h3>${v.title}</h3>
                    <ol>`
        v.list.forEach(function(k) {
            html += `<li>${k}</li>`
        })

        html += `
                    </ol>
                </li>`
    });
    $(".side").html(list);
    $(".list").append(html);
}
var bscroll = new BScroll(".wrap", {
    click: true,
    probeType: 2
});
$(".side").on("click", "li", function() {
    var index = $(this).index();
    bscroll.scrollToElement($(".list>li").eq(index)[0], 1000);
    $(".box").html($(this).html());
    $(".box").show();
    setTimeout(function() {
        $(".box").hide();
    }, 600);
})