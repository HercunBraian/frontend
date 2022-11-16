import React, {useState} from 'react';
import {Tab, Button} from "semantic-ui-react";
import {BasicModal} from "../../../components/Admin/Shared"
import {Listmenu, MenuForm} from "../../../components/Admin/Menu"
import "./Menu.scss";

export function Menu() {

  const [showModal, setShowModal] = useState(false);
  // Reload es para recargar la lista cuando creamos un nuevo menu.
  const [reload, setReload] = useState(false);

  //Funciones que van actualizar el setShowModal y el reload, pasando a true o false
  const onOpenCloseModal = () => setShowModal((prevState) => !prevState);
  const OnReload = () => setReload ((prevState) => !prevState);

  const panes = [
    {
      menuItem: "Menu activos",
      render: () => (
        <Tab.Pane attached={false}>
          <Listmenu active={true} reload={reload} onReload={OnReload} />
        </Tab.Pane>
      )
    },
    {
      menuItem: "Menu Inactivos",
      render: () => (
        <Tab.Pane attached={false}>
          <Listmenu active={false} reload={reload} onReload={OnReload} />
        </Tab.Pane>
      )
    }
  ]
  return (
    <>
       <div className='menu-page'>
         <Button className='menu-page__add' primary onClick={onOpenCloseModal}>
          Nuevo Menu
         </Button>
          <Tab menu={{secondary:true}} panes={panes} />
       </div>

       <BasicModal show={showModal} close={onOpenCloseModal} title="Crear Menu">
        <MenuForm onClose={onOpenCloseModal} onReload={OnReload} />
       </BasicModal>
    </>
  )
}


