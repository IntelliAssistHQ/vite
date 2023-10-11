import './style.css'

document.getElementsByClassName('buy-now-button')[0].addEventListener('click', () => {

    let obj = {
        method: 'addNewPaymentIframe_send_to_shopify',
        data: {
            landingPage: true,
            requiredJSON: {
                "items": [
                    {
                        image: 'https://cdn.shopify.com/s/files/1/0735/0298/2435/files/71zlbYH749L._SL1500.jpg?v=1694430917',
                        title: 'Octopus Crawling Baby Toy',
                        quantity: 1,
                        price: 129900,
                        variant_id: 46214569984291
                    }
                ],
                original_total_price: 129900,
                total_price: 129900
            }


        }
    }

    parent.postMessage(obj, "*");

})

window.intelliassist_static = {
    review: true,
    faq: true,
    instagram_tag: true
}


window.staticVariables.client.cart_url =`https://${staticVariables.client.shopName}/cart/46214569984291:1`


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



