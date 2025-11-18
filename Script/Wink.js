(function(){
  try{
    const _0xexp = "32472144000000";
    let _0xobj = JSON.parse($response.body);

    _0xobj["data"] = {
      "active_sub_type": 2,
      "account_type": 1,
      "sub_type_name": "续期",
      "active_sub_order_id": "7069961436604422668",
      "trial_period_invalid_time": _0xexp,
      "current_order_invalid_time": _0xexp,
      "invalid_time": _0xexp,
      "active_order_id": "706996143663401123",
      "limit_type": 0,
      "use_vip": true,
      "have_valid_contract": true,
      "derive_type_name": "普通会员",
      "derive_type": 1,
      "in_trial_period": false,
      "is_vip": true,
      "membership": {
        "id": "4",
        "display_name": "Wink会员",
        "level": 1,
        "level_name": "普通会员"
      },
      "active_promotion_status_list": [2],
      "sub_type": 2,
      "account_id": "1230010086",
      "valid_time": "1569664800000",
      "active_product_id": "0",
      "active_promotion_status": 2,
      "show_renew_flag": true
    };

    $done({body: JSON.stringify(_0xobj)});
  } catch(e){
    $done({});
  }
})();
