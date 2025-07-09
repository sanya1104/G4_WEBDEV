let cart = {
    "shoes": 300,
    "earrings": 400,
    "dress": 500
};

// Arrow function to calculate total amount and product count
const orderCart = (cart) => {
    const totalProducts = Object.keys(cart).length;
    const totalAmount = Object.values(cart).reduce((sum, price) => sum + price, 0);

    return {
        totalProducts,
        totalAmount
    };
};

// Arrow function to generate order summary
const orderSummary = ({ totalProducts, totalAmount }) => {
    return {
        totalProducts,
        totalAmount,
        orderId: Math.floor(Math.random() * 1000000)
    };
};

// Arrow function to simulate payment gateway
const paymentGateway = (summary) => {
    return {
        ...summary,
        paymentStatus: "Payment successful"
    };
};

// Arrow function to confirm successful order
const successfulOrder = () => {
    const cartDetails = orderCart(cart);
    const summary = orderSummary(cartDetails);
    const paymentInfo = paymentGateway(summary);
    return paymentInfo;
};

// Call and print the final result
console.log(successfulOrder());
