import React, { useState } from 'react';

const Paginated = ({ itemsPerPage, data, renderItem }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Obtener los elementos para la página actual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const items = data.slice(startIndex, endIndex);

  // Funciones para cambiar de página
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    const totalPages = Math.ceil(data.length / itemsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div>
       <div>
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          Prev
        </button>
        <span>{currentPage} de {totalPages}</span>
        <button onClick={goToNextPage} disabled={endIndex >= data.length}>
          Next
        </button>
      </div>
      {/* Mostrar los elementos de la página actual */}
      {items.map((item, index) => renderItem(item, index))}

      {/* Controles de paginación */}
      <div>
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          Prev
        </button>
        <span>{currentPage} de {totalPages}</span>
        <button onClick={goToNextPage} disabled={endIndex >= data.length}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Paginated;
