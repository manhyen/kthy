//# 📌 Ghi chú: File module này được tạo riêng bởi KHỔNG MẠNH YÊN. 
//# Mong bạn không chỉnh sửa hay chia sẻ lại nếu chưa có sự cho phép. Xin cảm ơn ❤️
(function () {
    const _0x47b6 = [
        'nG', 'pLW4E', 'pNKzs',
        'eGhHa', 'body', 'hHBpc',
        'uc3lq', '8J+RiOW', 'S0hPTk',
        '%E8%BD%A6%E7%A5%A8%E7%A5%A8',
        'parse', 'User-Agent', 'subscr',
        'iber', 'entitle', 'ments',
        'includes', 'stringify',
        '2099-12-18T01:04:17Z', '2009-03-15T01:04:17Z',
        '2009-03-15T01:04:18Z', 'is_sand',
        'box', 'normal', 'PURCHASED'
    ];

    function _0x1bb1(_0x37f1, _0x90b6) {
        return _0x37f1 - 110;
    }

    const _0x5d9f = _0x47b6;

    const _0xabc123 = {};
    _0xabc123[_0x5d9f[9]] = ['vip+watch_vip'];
    _0xabc123['Locket'] = ['Gold'];

    var _0xua = $request['headers'][_0x5d9f[11]] || $request['headers']['user-agent'];
    var _0xobj = JSON[_0x5d9f[10]]($response[_0x5d9f[4]]);

    _0xobj['Attention'] = "Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!";

    // 🧩 Xin Đừng chỉnh sửa bất cứ thứ j ở đây
    
    var _0xa1 = {
        "is_sandbox": !1,
        "ownership_type": _0x5d9f[26],
        "billing_issues_detected_at": null,
        "period_type": _0x5d9f[25],
        "expires_date": _0x5d9f[19],
        "grace_period_expires_date": null,
        "unsubscribe_detected_at": null,
        "original_purchase_date": _0x5d9f[21],
        "purchase_date": _0x5d9f[20],
        "store": "app_store"
    };

    var _0xa2 = {
        "grace_period_expires_date": null,
        "purchase_date": _0x5d9f[20],
        "product_identifier": "com.locket02.premium.yearly",
        "expires_date": _0x5d9f[19]
    };

    const _0xmatch = Object.keys(_0xabc123).find(k => _0xua[_0x5d9f[16]](k));

    if (_0xmatch) {
        let [_0xent, _0xsub] = _0xabc123[_0xmatch];
        if (_0xsub) {
            _0xa2['product_identifier'] = _0xsub;
            _0xobj['subscriber']['subscriptions'][_0xsub] = _0xa1;
        } else {
            _0xobj['subscriber']['subscriptions']["com.locket02.premium.yearly"] = _0xa1;
        }
        _0xobj['subscriber']['entitlements'][_0xent] = _0xa2;
    } else {
        _0xobj['subscriber']['subscriptions']["com.locket02.premium.yearly"] = _0xa1;
        _0xobj['subscriber']['entitlements']['pro'] = _0xa2;
    }

    $done({ body: JSON[_0x5d9f[17]](_0xobj) });
})();
// 🧩 Xin Đừng chỉnh sửa bất cứ thứ j ở đây
// ⛓️ By Khổng Mạnh Yên
