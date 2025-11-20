//# 📌 Ghi chú: File module này được tạo riêng bởi KHỔNG MẠNH YÊN. 
//# Mong bạn không chỉnh sửa hay chia sẻ lại nếu chưa có sự cho phép. Xin cảm ơn ❤️
(function () {
    function _x(str) {
        return decodeURIComponent(escape(atob(str)));
    }

    const _w = _x("S0jhu6cgbcOqdSBuaOG7myDEkOG7kWMgS8OzIE1hbmggWeG6v24=");

    // 🧩 Xin Đừng chỉnh sửa bất cứ thứ j ở đây
    (function () {
        try {
            (function loop(i) {
                if (('' + i / i).length !== 1 || i % 20 === 0) (function () { return true; }.constructor("debugger")());
                loop(++i);
            })(0);
        } catch (_e) {}
    })();

  
  const _d = {
        a: _x("JUU4JUJEJUFBJUU3JUE1JUE4JUU3JUE1JUE4"),
        b: _x("TG9ja2V0"),
        c: ["Gold"],
        d: ["vip+watch_vip"]
    };

    const _r = $request.headers["User-Agent"] || $request.headers["user-agent"];
    const _p = JSON.parse($response.body);

    _p.Attention = _x("Q2jhu6ljIG3hu41uZyBi4bqhbiBWaXLhuq1uZyBraOG7l2MgY+G6pXQgdGjhu4MgbmjhuqduIGtow7RuIG7hu5FjIQ==");

    const _A = {
        "is_sandbox": false,
        "ownership_type": "PURCHASED",
        "billing_issues_detected_at": null,
        "period_type": "normal",
        "expires_date": "2099-12-18T01:04:17Z",
        "grace_period_expires_date": null,
        "unsubscribe_detected_at": null,
        "original_purchase_date": "2009-03-15T01:04:18Z",
        "purchase_date": "2009-03-15T01:04:17Z",
        "store": "app_store"
    };

    const _B = {
        "grace_period_expires_date": null,
        "purchase_date": "2009-03-15T01:04:17Z",
        "product_identifier": "com.locket02.premium.yearly",
        "expires_date": "2099-12-18T01:04:17Z"
    };

    const MAP = {};
    MAP[_d.a] = _d.d;
    MAP[_d.b] = _d.c;

    const key = Object.keys(MAP).find(k => _r.includes(k));

    try {
        if (key) {
            const [ent, sub] = MAP[key];
            if (sub) {
                _B.product_identifier = sub;
                _p.subscriber.subscriptions[sub] = _A;
            } else {
                _p.subscriber.subscriptions["com.locket02.premium.yearly"] = _A;
            }
            _p.subscriber.entitlements[ent] = _B;
        } else {
            _p.subscriber.subscriptions["com.locket02.premium.yearly"] = _A;
            _p.subscriber.entitlements["pro"] = _B;
        }
    } catch (err) {}

    // ⛓️ By Khổng Mạnh Yên
    $done({
        body: JSON.stringify(_p)
    });
})();
