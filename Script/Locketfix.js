/*
  Locket Gold Premium — By Khổng Mạnh Yên (Kthy)
*/
let body = JSON.parse($response.body);

const fakePurchaseDate = "2009-03-15T00:00:00Z";
const fakePurchaseMs = "1237075200000"; // 15-03-2009
const fakeExpireDate = "2099-12-18T00:00:00Z";
const fakeExpireMs = "4102358400000";

body.subscriber = {
  entitlements: {
    premium: {
      product_identifier: "locket_premium",
      purchase_date: fakePurchaseDate,
      expires_date: fakeExpireDate
    }
  },
  original_purchase_date: fakePurchaseDate,
  original_purchase_date_ms: fakePurchaseMs,
  first_seen: fakePurchaseDate,
  last_seen: fakePurchaseDate,

  // Dữ liệu gói Premium từ RevenueCat
  subscriptions: {
    "locket_premium": {
      billing_issues_detected_at: null,
      is_sandbox: false,
      ownership_type: "PURCHASED",
      period_type: "normal",
      original_purchase_date: fakePurchaseDate,
      purchase_date: fakePurchaseDate,
      expires_date: fakeExpireDate,
      original_purchase_date_ms: fakePurchaseMs,
      purchase_date_ms: fakePurchaseMs,
      expires_date_ms: fakeExpireMs
    }
  }
};

$done({ body: JSON.stringify(body) });
