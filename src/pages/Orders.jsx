import React from "react";
import EmptyState from "../component/ui/EmptyState";

function Orders() {
  // later you can replace this with real order data
  const orders = [];

  if (orders.length === 0) {
    return <EmptyState type="orders" />;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 mt-32">
      <h2 className="text-3xl font-bold mb-6">My Orders</h2>

      {/* Orders list will come here */}
    </div>
  );
}

export default Orders;
