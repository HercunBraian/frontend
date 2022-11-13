import React from 'react'

export function ClientLayout(props) {
  const {children} = props;
  return (
    <div>
        <h1>Estamos cargando el ClientLayout</h1>

        {children}
    </div>
  )
}
