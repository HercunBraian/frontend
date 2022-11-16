import React, {useState, useEffect} from 'react';
import {Loader} from "semantic-ui-react";
import {Menu} from "../../../../api";
import {size, map} from "lodash";
import {MenuItem} from "../MenuItem"

const menuController = new Menu();

export function Listmenu(props) {
    const {active, reload, onReload} = props;

    const [menus, setMenus] = useState(null);

    //Obtenemos los menus desde menuController.getMenu que se encuentra en Api Menu.

    useEffect(() => {
     // Creamos una funcion anonima auto ejecutable
      (async () => {
        try {
            setMenus(null);
            const response = await menuController.getMenu(active);
            setMenus(response);
        } catch (error) {
            console.log(error)
        }
      })()
    }, [active, reload]);

    if(!menus) return <Loader active inline="centered" />
    if(size(menus) === 0) return "No hay ningun menu";
    
  return map(menus, (menu) => <MenuItem key={menu._id} menu={menu} onReload={onReload} /> )
}
