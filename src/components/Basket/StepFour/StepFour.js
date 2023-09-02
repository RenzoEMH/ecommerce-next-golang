import styles from "./StepFour.module.scss";
import { Container, Button, Icon } from "semantic-ui-react";
import Link from "next/link";

export function StepFour() {
  return (
    <Container className={styles.container}>
      <Icon name="check circle outline" />
      <h2>Compra exitosa!!!</h2>
      <Button as={Link} href="/account" primary>
        Ver pedido
      </Button>
    </Container>
  );
}
