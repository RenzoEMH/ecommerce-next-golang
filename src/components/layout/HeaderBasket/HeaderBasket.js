import styles from "./HeaderBasket.module.scss";
import { useRouter } from "next/router";
import { Icon } from "semantic-ui-react";
import { map } from "lodash";
import classNames from "classnames";
import { Logo } from "../Logo";

export function HeaderBasket() {
  const {
    query: { step = 1 },
  } = useRouter();
  const currentStep = Number(step);

  const steps = [
    { number: 1, title: "Cesta" },
    { number: 2, title: "Direccion de envio" },
    { number: 3, title: "Metodo de pago" },
    { number: 4, title: "Confirmacion" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Logo />
      </div>

      <div className={styles.center}>
        {map(steps, (item) => (
          <div
            key={item.number}
            className={classNames({
              [styles.active]: item.number === currentStep,
              [styles.success]: item.number < currentStep,
            })}
          >
            <span className={styles.number}>
              <Icon name="check" />
              {item.number}
            </span>
            <span>{item.title}</span>
            <span className={styles.space} />
          </div>
        ))}
      </div>
      <div className={styles.right} />
    </div>
  );
}
