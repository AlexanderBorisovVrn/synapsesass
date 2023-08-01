import { createPayment, getPayment } from '@/utils/yookassa';
import { redirect } from 'next/navigation';

type Props = {
  params: {
    checkoutPlan: string
  }
}


const CheckoutPlan = async ({ params: { checkoutPlan } }: Props) => {
  const price = checkoutPlan==='month'?'800':'8000';
  const payment = await createPayment(price)
  const { confirmation_url } = payment?.confirmation;
  const paymentId = payment.payment_method.id;
  console.log(paymentId)
  redirect(confirmation_url)
}

export default CheckoutPlan