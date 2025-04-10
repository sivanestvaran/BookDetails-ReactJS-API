import BookLayout from "../components/BookLayout";
import Bookshelf from "../components/Bookshelf"

const Home = ({ allBooks }) => {

    return (
        <BookLayout allBooks={allBooks}>
            <Bookshelf allBooks={allBooks} />
        </BookLayout>
    )
}

export default Home;