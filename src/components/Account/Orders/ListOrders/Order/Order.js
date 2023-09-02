import styles from "./Order.module.scss";
import { useState } from "react";
import { Modal } from "@/components/Shared";
import { ProductDetails } from "../ProductDetails";
import { AddressDetails } from "../AddressDetails";
import { Button, Icon } from "semantic-ui-react";

export function Order(props) {
  const { order } = props;
  const [showModal, setShowModal] = useState(false);

  const onOpenCloseModal = () => setShowModal((prevState) => !prevState);

  return (
    <>
      <div className={styles.container}>
        <div>
          <p>Numero de pedido: {order?.orderId}</p>
          <span>{order?.orderDate}</span>
        </div>

        <Button icon onClick={onOpenCloseModal}>
          <Icon name="eye" />
        </Button>
      </div>

      <Modal.Basic
        show={showModal}
        onClose={onOpenCloseModal}
        title="Detalles del pedido"
      >
        <ProductDetails productsOrder={order?.OrderDetails} />
        <AddressDetails addressId={order?.orderAddId} />

        <p className={styles.totalOrder}>{order?.orderTotal}$</p>
      </Modal.Basic>
    </>
  );
}
