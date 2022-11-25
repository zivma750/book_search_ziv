import React, { useEffect, useState } from "react";

function DataApp() { 
  const [bookState, setBookState] = useState([]);



  return (
    <main>
      
      <ul>
        {bookState && bookState.length > 0 && bookState.map((book, index) => (
            <li key={book.id}>{book.title}</li>
          ))}
      </ul>
    </main>
  );
}

export default DataApp;