import BookLayout from "../components/BookLayout";
import Bookshelf from "../components/Bookshelf"

const Home = ({ allBooks,apiData }) => {

    return (
        <BookLayout allBooks={allBooks} apiData={apiData}>
            {allBooks && <Bookshelf allBooks={allBooks} />}
        </BookLayout>
    )
}

export default Home;