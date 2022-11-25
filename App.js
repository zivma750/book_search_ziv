import React from 'react'
import DataApp from './data/fetch.js'

import SearchBar from './searchBar/searchbar.js'

const App=() => {
    
    return(
      <div>

         <SearchBar />
        <DataApp></DataApp>

      </div>
        
    )
  }

  export default App