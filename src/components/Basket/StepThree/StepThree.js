import styles from "./StepThree.module.scss";
import { useState } from "react";
import { Container } from "semantic-ui-react";
import { Payments } from "./Payments";
import { Resumen } from "./Resumen";

export function StepThree(props) {
  const { products, address } = props;
  const [paymentSelected, setPaymentSelected] = useState(null);
  return (
    <Container className={styles.container}>
      <div className={styles.left}>
        <Payments
          paymentSelected={paymentSelected}
          setPaymentSelected={setPaymentSelected}
        />
      </div>
      <div className={styles.right}>
        <Resumen
          products={products}
          address={address}
          nextDisabled={!paymentSelected}
        />
      </div>
    </Container>
  );
}
