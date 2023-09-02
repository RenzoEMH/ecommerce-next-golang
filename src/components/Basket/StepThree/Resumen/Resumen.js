import styles from "./Resumen.module.scss";
import { useState, useEffect } from "react";
import { forEach } from "lodash";
import { useAuth, useBasket } from "@/hooks";
import { Button } from "semantic-ui-react";
import { orderCtrl } from "@/api";
import { useRouter } from "next/router";

export function Resumen(props) {
  const { products, address, nextDisabled = false } = props;
  const [total, setTotal] = useState(null);
  const [orderDetails, setOrderDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { deleteAllItems } = useBasket();

  useEffect(() => {
    let totalTemp = 0;
    let orderDetailsTemp = [];

    forEach(products, (product) => {
      totalTemp += product.prodPrice * product.quantity;
      orderDetailsTemp.push({
        odProdId: product.prodID,
        odQuantity: product.quantity,
        odPrice: product.prodPrice,
      });
    });

    setTotal(totalTemp);
    setOrderDetails(orderDetailsTemp);
  }, [products]);

  const onPay = async () => {
    try {
      setLoading(true);
      const data = {
        orderDate: new Date(),
        orderTotal: total,
        orderDetails: orderDetails,
        orderAddId: address.addId,
      };

      await orderCtrl.create(data);
      deleteAllItems();
      router.replace({ query: { ...router.query, step: 4 } });
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  if (!total) return null;

  return (
    <div className={styles.container}>
      <h2>Resumen</h2>
      <div className={styles.prices}>
        <div>
          <span>Total</span>
          <span> {total.toFixed(2)}$</span>
        </div>
      </div>

      <Button
        primary
        fluid
        disabled={nextDisabled}
        onClick={onPay}
        loading={loading}
      >
        Pagar
      </Button>
    </div>
  );
}
