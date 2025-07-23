import React from 'react';

const ShippingPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Shipping Policy</h1>

      <p className="mb-4">
        At Magnetismo, we are committed to delivering your order in a timely, safe, and efficient manner. Please read
        our shipping policy carefully to understand how we handle and dispatch your purchases.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Processing Time</h2>
      <p className="mb-4">
        Orders are typically processed within 1–3 business days. During peak seasons or promotional events, processing
        times may be extended by an additional 1–2 days. Orders placed on weekends or holidays will be processed the
        next business day.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Shipping Methods & Delivery</h2>
      <p className="mb-2">We offer standard and express shipping options:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Standard Shipping:</strong> 5–7 business days</li>
        <li><strong>Express Shipping:</strong> 2–3 business days</li>
        <li><strong>International Shipping:</strong> 7–21 business days (depending on destination)</li>
      </ul>

      <p className="mt-4">
        All orders are shipped with tracking information, which will be provided via email once your order is dispatched.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Shipping Charges</h2>
      <p className="mb-4">
        Shipping charges are calculated at checkout based on your location, selected shipping method, and the total
        weight of your order. Free shipping may be available for orders over a certain amount — check our latest offers
        for details.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Delays & Exceptions</h2>
      <p className="mb-4">
        While we strive to meet our delivery timelines, unforeseen delays due to weather, customs clearance, or
        courier disruptions may occur. Magnetismo is not responsible for delays caused by external carriers or force
        majeure events.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Order Tracking</h2>
      <p className="mb-4">
        Once your order has shipped, you will receive a confirmation email with a tracking number and link. You can use
        this to monitor your shipment’s status in real-time.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Undeliverable Packages</h2>
      <p className="mb-4">
        If an order is returned to us due to an incorrect address or failed delivery attempt, we will contact you to
        arrange re-shipment. Additional shipping fees may apply in such cases.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Damaged or Lost Items</h2>
      <p className="mb-4">
        If your order arrives damaged or is lost in transit, please contact us immediately at
        <a href="mailto:info@themagnetismo.com" className="text-blue-600 underline"> info@themagnetismo.com</a>. We will
        work with the carrier to resolve the issue or offer a replacement or refund where applicable.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Contact Us</h2>
      <p className="mb-4">
        For any shipping-related inquiries, feel free to reach out:
      </p>
      <ul className="pl-6 mt-2">
        <li><strong>Email:</strong> info@themagnetismo.com</li>
        <li><strong>Address:</strong> 18211 Redriver Sky, San Antonio, Texas 78259</li>
      </ul>
    </div>
  );
};

export default ShippingPolicy;
