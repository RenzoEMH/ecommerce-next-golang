import styles from "./GridProducts.module.scss";
import { Loading } from "../Loading";
import { Separator } from "../Separator";
import classNames from "classnames";
import { size, map } from "lodash";
import { NoResult } from "../NoResult";
import { Product } from "./Product";

export function GridProduct(props) {
  const { products, columns = 4, classProduct } = props;

  if (!products) {
    return (
      <>
        <Separator height={650} />
        <Loading text="Cargando productos" />
        <Separator height={650} />
      </>
    );
  }

  if (size(products) === 0) {
    return <NoResult text="No se han encontrado resultados" />;
  }

  return (
    <div className={styles.container}>
      {map(products, (product) => (
        <div
          key={product.prodID}
          className={classNames(styles.product, {
            [styles.oneColumn]: columns === 1,
            [styles.twoColumn]: columns === 2,
            [styles.threeColumn]: columns === 3,
            [styles.fourColumn]: columns === 4,
            [styles.fiveColumn]: columns === 5,
            [styles.sixColumn]: columns === 6,
          })}
        >
          <Product product={product} classProduct={classProduct} />
        </div>
      ))}
    </div>
  );
}
