import { use, useEffect, useState } from 'react'
import Home from './pages/Home';
import Book from './pages/Book';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

    const [allBooks, setAllBooks] = useState([])
   
    const apiData = async (searchKeys) => {
        const searchInputs = searchKeys ? searchKeys : 'Lifestyle';
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchInputs}&maxResults=10&orderBy=newest&key=${import.meta.env.VITE_API_KEY}`);

        const data = await response.json();
        //console.log(data);
        setAllBooks(data.items)

    }



    // const getSearchBooks = async(seacrhInput)=>{
    //    //console.log('your data is :'+seacrhInput)

    //    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${seacrhInput}&maxResults=10&orderBy=newest&key=${import.meta.env.VITE_API_KEY}`);

    //    const data = await response.json();
    //    //console.log(data);
    //    setSearchBooks(data.items)

    // }

    useEffect(() => {
        apiData()
    }, [])

    // useEffect(() => {
    //     console.log(allBooks.items)
    // }, [allBooks])

    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home allBooks={allBooks} apiData={apiData}/>}/>
            <Route path='/book/:id' element={<Book allBooks={allBooks}/>}/>
            {/* <Route path='/book/:id' element={<Book/>}/> */}
        </Routes>
        </BrowserRouter>
            {/* {allBooks && <h2>data</h2>} */}
            {/* <Home allBooks={allBooks} /> */}
            {/* <Book/> */}
        </>
    )
}

export default App;
