import { v4 as uuidv4 } from 'uuid'
const AUTHORIZATION = btoa(`${process.env.SHOP_ID}:${process.env.KASSA_KEY}`);
const KASSA_URL = 'https://api.yookassa.ru/v3/payments';
import { SITE_URL } from './siteUrl'




const headers = {
  "Authorization": `Basic ${AUTHORIZATION}`,
  "Idempotence-Key": uuidv4().toString(),
  "Content-Type": 'application/json',
};

export async function createPayment(price: string) {
  const params = {
    "amount": {
      "value": price,
      "currency": "RUB"
    },
    "payment_method_data": {
      "type": "bank_card"
    },
    "confirmation": {
      "type": "redirect",
      "return_url": SITE_URL
    },
    "capture":true,
    "description": "Списываем оплату за заказ",
    "save_payment_method": "false"
  };
  const response = await fetch(KASSA_URL, {
    headers: headers,
    method: 'POST',
    body: JSON.stringify(params)
  })
  if (response.status!=200) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return await response.json();

}

export async function getPayment(paymentId: string) {
  const url = `https://api.yookassa.ru/v3/payments/${paymentId}/capture`
  const response = await fetch(url, {
    headers: headers,
    method: 'POST',
  })
 console.log(response)

}