import './style.css'

document.getElementsByClassName('buy-now-button')[0].addEventListener('click', () => {

  let obj = {
      method: 'addNewPaymentIframe',
      data: {
          landingPage: true,
          product: {
              image: '\/\/cdn.shopify.com\/s\/files\/1\/0642\/1692\/4408\/products\/8409024166.jpg?v=1681200279',
              title: 'Electronic LED Mosquito Killer Machine trap lamp With USB',
              quantity: 1,
              price: 58900,
              variant_id: 43772270510328
          },
          original_total_price: 58900,
          total_price: 58900
      }
  }

  parent.postMessage(obj, "*");

})

window.intelliassist_static ={
  review : true,
  faq:true,
  instagram_tag:true
}


window.meta = {
  "product": {
      "id": 8578795536675,
      "gid": "gid://shopify/Product/8578795536675",
      "vendor": "HelpMeShop",
      "type": "Baby Toys",
      "variants": [
          {
              "id": 46214569984291,
              "price": 129900,
              "name": "Octopus Crawling Baby Toy",
              "public_title": null,
              "sku": ""
          }
      ]
  },
  "page": {
      "pageType": "product",
      "resourceType": "product",
      "resourceId": 8578795536675
  }
}
