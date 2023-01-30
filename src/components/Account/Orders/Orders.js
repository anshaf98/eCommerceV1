import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div className="orders">
      <h4 className="ordersId">
        Order ID: 1
        <Link to="">
          <FaEye />
        </Link>
      </h4>
    </div>
  );
};

export default Orders;
