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
    arr.forEach(function(v) {
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
    $(".list").append(html);
}