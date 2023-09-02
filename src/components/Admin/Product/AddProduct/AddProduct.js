import { Button } from "semantic-ui-react";
import { Modal } from "@/components/Shared";
import { useState } from "react";
import { ProductForm } from "../ProductForm";

export function AddProduct(props) {
  const { onReload } = props;
  const [openModal, setOpenModal] = useState(false);
  const openCloseModal = () => setOpenModal((prevState) => !prevState);
  return (
    <>
      <Button primary onClick={openCloseModal}>
        Nuevo Producto
      </Button>
      <Modal.Basic
        show={openModal}
        onClose={openCloseModal}
        title="Nuevo producto"
      >
        <ProductForm onClose={openCloseModal} onReload={onReload} />
      </Modal.Basic>
    </>
  );
}
