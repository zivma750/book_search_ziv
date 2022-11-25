
import React,{useState,useEffect} from "react";
import DataApp from "../data/fetch";


const product= {}

const SearchBar =(props) => {
    const [searchValue,setSearchValue]= useState("")
    const [bookState, setBookState] = useState([]);

    const fetchData = async() => {
        return await fetch('https://www.googleapis.com/books/v1/volumes?q=search+terms')
              .then((response) => response.json())
              .then((data) => {
                setBookState(data.items);
                
              });
      }
    
      useEffect(() => {
        fetchData();
      },[])
    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }
    const handleClearClick =(event) =>{
        handleInputChange()
    }
    const shouldDisplayButton= searchValue.length > 0
    const fillteredProducts= bookState.filter((bookState)=>{
        return bookState.volumeInfo.title === searchValue
    })
return ( 
    <div>
     <input type="text" value={searchValue} onChange={handleInputChange} />
     {shouldDisplayButton &&<button onClick={handleClearClick}>search</button>}

    <ul>
        {bookState && bookState.length > 0 && bookState.map((book, index) => (
            <li key={book.id}>{book.volumeInfo.title}</li>
          ))}
        
    </ul>
    <ul>
    {fillteredProducts.map((bookState.volumeInfo.title)=>{
        return <li key={product}>{product}</li>
        
    })}
    </ul>
  </div>
       )
}
 export default SearchBar