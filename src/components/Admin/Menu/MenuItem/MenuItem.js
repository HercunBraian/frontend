import React, {useState} from 'react';
import "./MenuItem.scss";
import {Icon, Button, Confirm} from "semantic-ui-react";
import {BasicModal} from "../../../Admin/Shared";
import {Menu} from "../../../../api";
import {useAuth} from "../../../../hooks";
import {MenuForm} from "../MenuForm"

const menuController = new Menu();

export function MenuItem(props) {

  const {menu, onReload} = props;
  
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");

  const {accessToken} = useAuth();
  
  //Funcion para abrir o cerrar el modal
  const onOpenCloseModal = () => setShowModal ((prevState) => !prevState);

  const onOpenUpdateMenu = () => {
    setTitleModal(`Actualizar menu: ${menu.title}`);
    onOpenCloseModal();
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

          <Button icon color={menu.active ? "orange" : "teal"}>
            <Icon name={menu.active ? "ban" : "check"} />
          </Button>

          <Button icon color="red">
            <Icon name="trash" />
          </Button>
        </div>
      </div>

      <BasicModal show={showModal} close={onOpenCloseModal} title={titleModal}>
        <MenuForm onClose={onOpenCloseModal} onReload={onReload} menu={menu}  />
      </BasicModal>
    </>
  )
}
