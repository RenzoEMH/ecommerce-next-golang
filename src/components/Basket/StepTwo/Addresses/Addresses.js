import styles from "./Addresses.module.scss";
import { Button } from "semantic-ui-react";
import Link from "next/link";
import { map, size } from "lodash";
import classNames from "classnames";
import { useAuth } from "@/hooks";
import { Loading, NoResult } from "@/components/Shared";
import { useState, useEffect } from "react";
import { addressCtrl } from "@/api";

export function Addresses(props) {
  const { address, setAddress } = props;
  const [addresses, setAddresses] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const response = await addressCtrl.getAll();
        setAddresses(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [user]);

  return (
    <div className={styles.addresses}>
      <h2>Direccion de envio</h2>

      {!addresses && <Loading text="Cargando direcciones" />}

      {addresses && size(addresses) === 0 && (
        <div className={styles.noAddresses}>
          <NoResult text="No tienes niguna direccion creada" />
          <Button as={Link} href="/account" primary>
            Crear direccion
          </Button>
        </div>
      )}

      {map(addresses, (item) => (
        <div
          key={item.addId}
          onClick={() => setAddress(item)}
          className={classNames(styles.address, {
            [styles.selected]: item.addId === address?.addId,
          })}
        >
          <div>
            <p className={styles.title}>{item.addTitle}</p>
            <p className={styles.addressInfo}>
              {item.addName}, {item.addAddress}, {item.addState}, {item.addCity}
              , {item.addPostalCode}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
