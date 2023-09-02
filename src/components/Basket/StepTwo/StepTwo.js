import styles from "./StepTwo.module.scss";
import { Container } from "semantic-ui-react";
import { Resumen } from "../Resumen";
import { Addresses } from "./Addresses";

export function StepTwo(props) {
  const { products, address, setAddress, nextDisabled } = props;
  return (
    <Container className={styles.container}>
      <div className={styles.left}>
        <Addresses address={address} setAddress={setAddress} />
      </div>
      <div className={styles.right}>
        <Resumen
          products={products}
          nextStep={3}
          btnText="Proceder con el pago"
          nextDisabled={nextDisabled}
        />
      </div>
    </Container>
  );
}
