import React from 'react'
import "./info.scss";
import {Button} from "semantic-ui-react";
import {map} from "lodash";
import {Icon} from "../../../../assets";
import {socialData} from "../../../../utils";

export function Info() {
  return (
    <div className='footer-info'>
        <Icon.Logowhite className="logo" />
        <p>
          Entra en el mundo del desarrollo web, disfruta creando proyectos de todo
          tipo, deja que tu imaginacion fluya y crea verdaderas maravillas!!
        </p>

        {map(socialData, (social) => (
          <Button 
          key={social.type}
          as="a"
          target="_blank"
          color={social.type}
          icon={social.type}
          />
        ))}
    </div>
  )
}
