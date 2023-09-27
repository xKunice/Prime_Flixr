import React from "react";

function CategoriaTable({ categorias }) {
  return (
    <div>
      <h2>Categorías</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((categoria, index) => (
            <tr key={index}>
              <td>{categoria.Nombre}</td>
              <td>{categoria.descripcion}</td>
              <td>
                <button>Editar</button>
                <button>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CategoriaTable;
