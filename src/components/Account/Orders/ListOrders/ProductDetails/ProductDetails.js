import styles from "./ProductDetails.module.scss";
import { productCtrl } from "@/api";
import { Loading } from "@/components/Shared";
import { map } from "lodash";
import { Image } from "semantic-ui-react";
import { fn } from "../../../../../../utils";
import { useState, useEffect } from "react";

export function ProductDetails(props) {
  const { productsOrder } = props;
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(products);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const productsTemp = [];
        for await (const item of productsOrder) {
          const response = await productCtrl.getById(item.odProdId);
          productsTemp.push({ ...response, quantity: item.odQuantity });
        }
        setProducts(productsTemp);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    })();
  }, [productsOrder]);

  if (loading) return <Loading text="Cargando productos" />;

  return (
    <div>
      {map(products, (product) => (
        <div key={product.prodID} className={styles.product}>
          <div>
            <Image
              src={fn.getUrlImage(product.prodID)}
              alt={product.prodTitle}
            />
            <div>
              <h4>{product.prodTitle}</h4>
            </div>
          </div>

          <p className={styles.price}>
            {product.quantity} x {product.prodPrice} $
          </p>
        </div>
      ))}
    </div>
  );
}
