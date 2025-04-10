import { useEffect, useState } from 'react'
import Home from './pages/Home';

function App() {

    const [allBooks, setAllBooks] = useState([])

    const apiData = async () => {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=discipline&maxResults=10&orderBy=newest&key=${import.meta.env.VITE_API_KEY}`);

        const data = await response.json();
        //console.log(data);
        setAllBooks(data.items)

    }

    useEffect(() => {
        apiData()
    }, [])

    // useEffect(() => {
    //     console.log(allBooks.items)
    // }, [allBooks])

    return (
        <>
            {/* {allBooks && <h2>data</h2>} */}
            <Home allBooks={allBooks} />
        </>
    )
}

export default App;
