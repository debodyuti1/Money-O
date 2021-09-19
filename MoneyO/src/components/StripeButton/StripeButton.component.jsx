import StripeCheckout from 'react-stripe-checkout';



const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price *100;
    const publishableKey = 'pk_test_51JbLXySHhQ2AccyE0UccpPRnddoRzbRD9eeDEC0nldUQozfxvXqLXjSomDkxcxH2NKOkLAdUqc3Lw7AXOz47VUAM00JhspdqP9';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout 
         currency="inr"
         label="Pay Now"
         billingAddress
         shippingAddress
         name="MoneyO"
         description ={`Your total is ₹${price}`}
         amount={priceForStripe}
         panelLabel="Pay Now"
         token={onToken}
         stripeKey={publishableKey}
        />)
};


export default StripeCheckoutButton;