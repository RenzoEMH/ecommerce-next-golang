import styles from "./Basket.module.scss";
import { Icon, Label } from "semantic-ui-react";
import { useBasket } from "@/hooks";
import Link from "next/link";

export function Basket() {
  const { total } = useBasket();

  return (
    <Link href="/basket" className={styles.basket}>
      <Icon name="cart" />
      {total > 0 && (
        <Label circular color="teal">
          {total}
        </Label>
      )}
      Mi cesta
    </Link>
  );
}
