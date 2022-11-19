import React, {useState} from 'react';
import "./MenuItem.scss";
import {Icon, Button, Confirm} from "semantic-ui-react";
import {BasicModal} from "../../../Admin/Shared";
import {Menu} from "../../../../api";
import {useAuth} from "../../../../hooks";
import {MenuForm} from "../MenuForm";

const menuController = new Menu();

export function MenuItem(props) {

  const {menu, onReload} = props;
  
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");

  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmMessage, setConfirmMessage] = useState("");
  const [isDelete, setisDelete] = useState(false)

  const {accessToken} = useAuth();

  //Funcion para abrir o cerrar el modal
  const onOpenCloseModal = () => setShowModal ((prevState) => !prevState);

  //Funcion para la confirmacion
  const onOpenCloseConfirm = () => setShowConfirm ((prevState) => !prevState);

  const onOpenUpdateMenu = () => {
    setTitleModal(`Actualizar menu: ${menu.title}`);
    onOpenCloseModal();
  }

  const openDesactivateActiveConfirm = () =>{
    setisDelete(false);
    setConfirmMessage(
      menu.active ? `Desactivar el menu ${menu.title}` : `Activar el menu ${menu.title}`
    );

    onOpenCloseConfirm();
  }

  const onActivateDesactivate = async () => {
    try {
      await menuController.updateMenu(accessToken, menu._id, {
        active: !menu.active,
      } )

      onReload();
      onOpenCloseConfirm();
    } catch (error) {
      console.log(error)
    }
  }

  const openDeleteConfirm = () => {
    setisDelete(true);
    setConfirmMessage(`Eliminar el menu ${menu.title}`);
    onOpenCloseConfirm();
  }

  const onDelete = async () => {
    try {
      await menuController.deleteMenu(accessToken, menu._id);
      onReload();
      onOpenCloseConfirm();
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div className='menu-item'>
        <div className='menu-item__info'>
          <span className='menu-item__info-title'> {menu.title} </span>
          <span className='menu-item__info-path'> {menu.path} </span>
        </div>

        <div>
          <Button icon primary>
            <Icon name="pencil" onClick={onOpenUpdateMenu} />
          </Button>

          <Button icon color={menu.active ? "orange" : "teal"} onClick={openDesactivateActiveConfirm}>
            <Icon name={menu.active ? "ban" : "check"} />
          </Button>

          <Button icon color="red" onClick={openDeleteConfirm}>
            <Icon name="trash" />
          </Button>
        </div>
      </div>

      <BasicModal show={showModal} close={onOpenCloseModal} title={titleModal}>
        <MenuForm onClose={onOpenCloseModal} onReload={onReload} menu={menu}  />
      </BasicModal>

      <Confirm 
      open={showConfirm}
      onCancel={onOpenCloseConfirm}
      onConfirm={isDelete ? onDelete : onActivateDesactivate}
      content={confirmMessage}
      size="mini"

      />
    </>
  )
}
