import { Pagination } from '@mui/material'; // Importing Pagination component from Material-UI library
import "./Pagination.css"; // Importing custom CSS for Pagination component
import React from "react"; // Importing React for component creation


// CustomPagination component definition
const CustomPagination = ({
  pokemonsPerPage,
  totalPokemons,
  paginate,
  currentPage,
}) => {

 // Calculate the total number of pages based on total pokemons and pokemons per page
  const totalPages = Math.ceil(totalPokemons / pokemonsPerPage);

    // Return JSX for Pagination component
  return (
    <div className="pagination-container">
      
      {/* Material-UI Pagination component */}
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={(event, page) => paginate(page)}
       
      />

    </div>
  );
};

export default CustomPagination;
