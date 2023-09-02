import styles from "./StepOne.module.scss";
import { Container } from "semantic-ui-react";
import { Resumen } from "../Resumen";
import { ListProducts } from "./ListProducts";

export function StepOne(props) {
  const { products } = props;
  return (
    <Container className={styles.container}>
      <div className={styles.left}>
        <ListProducts products={products} />
      </div>
      <div className={styles.right}>
        <Resumen
          products={products}
          nextStep={2}
          btnText="Proceder con la direccion"
        />
      </div>
    </Container>
  );
}
