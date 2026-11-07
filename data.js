/* Medea Vodka demo data, 2026-11-07.
 REAL: products, names, images, copy and prices from https://medea-vodka-flaviar-checkout.myshopify.com (Shopify /products.json; the store runs on Flaviar Checkout).
 Network retailers: active, in-stock (0 < stock < 9000) LiquidCommerce retailer variants matched on product name, 2026-11-07.
 Gopuff ZIPs: delivery ZIPs of Gopuff locations carrying the product in the gopuff_feed availability snapshot, 2026-11-07.
 NOT REAL: no order is placed; shipping ($14.99), Gopuff fee ($4.99) and 8% tax are illustrative. */
window.DEMO = {
 "key": "medeavodka",
 "brand": "Medea Vodka",
 "storeName": "Medea Vodka",
 "orderPrefix": "MED",
 "catalog": {
  "medea-vodka": {
   "name": "MEDEA VODKA",
   "short": "MEDEA VODKA",
   "size": "750ML",
   "tag": "Vodka",
   "price": 2999,
   "image": "assets/p-medea-vodka.png",
   "gallery": [
    "assets/p-medea-vodka.png"
   ],
   "lead": "",
   "specs": "VODKA",
   "desc": [
    "MEDEA Vodka ® is an ultra-premium, award-winning vodka made in the Netherlands at the House of Herman Janssen, which has been producing exceptional spirits since 1777. It is made from the finest European wheat and pure artesian water, coal-filtered and blended to perfection. With its proprietary LED technology and the world’s only personally programmable bottle, MEDEA vodka ® is indeed the ultimate fusion of great ta",
    "21 and older, ID required at delivery."
   ],
   "soldOut": false
  }
 },
 "order": [
  "medea-vodka"
 ],
 "defaultHandle": "medea-vodka",
 "retailers": [],
 "realHandles": [],
 "gopuff": null,
 "noShip": [
  "AK",
  "HI"
 ],
 "rates": {
  "shipping": 1499,
  "freeOver": 0,
  "gopuff": 499
 },
 "taxRate": 0.08,
 "expressAddress": [
  "233 S Wacker Dr",
  "Chicago",
  "60606"
 ],
 "fulfilIcon": "assets/logo.png",
 "rbNote": "",
 "text": {
  "fulfilReal": "In stock at licensed retailers in our network today. Enter your ZIP at checkout for delivery or shipping.",
  "fulfilLaunch": "Ships from a licensed retailer in your state. Rates show at checkout once you enter your address.",
  "cardReal": "In stock at network retailers",
  "cardLaunch": "Ships from licensed retailers",
  "soldOut": "Sold out.",
  "noShip": "We are not shipping to {state} yet.",
  "launchNote": "In the demo, no network retailer stocks this bottle yet. Licensed retailers are connected during onboarding, which takes about one week."
 }
};
