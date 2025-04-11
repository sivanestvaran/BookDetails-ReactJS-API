import React from 'react'
import BookLayout from '../components/BookLayout'
import { Link, useParams } from 'react-router-dom'
import noimage from '../assets/noimage.png'
const Book = ({allBooks}) => {

    const {id} = useParams()

    const getBook = allBooks.find((data)=>{
        return data.id == id
    });

    //getBook && console.log(getBook)

   const image = getBook?.volumeInfo?.imageLinks?.smallThumbnail

    return (
        <BookLayout>
            <div className="bookShelves">
                <div className='ms-4 mt-2 ps-4'>
                    <Link className='backLink btn btn-theme btn-sm' to='/'><i className="bi bi-arrow-left-square"></i> <span>Back</span></Link>
                </div>
                <div className='d-flex flex-md-row flex-column justify-content-center mx-4'>
                    <div className='m-4'>
                        {image ? <img src={image} className='rounded-3' style={{ width: '200px' }} alt="" /> : <img src={noimage} alt='' height='200px' />}
                    </div>
                    <div className='p-2 bookContent'>
                        <h3 className='fw-bold text-start'>{getBook?.volumeInfo?.title} </h3>
                        <p className=""><b>Author :</b> {getBook?.volumeInfo?.authors}</p>
                        <p>{getBook && getBook.volumeInfo && getBook.volumeInfo.description ? getBook.volumeInfo.description : 'No Description'}</p>
                      
                        {/* <p>{getBook?.volumeInfo?.description || 'No Summary'}</p> */}
                    </div>

                </div>
            </div>

        </BookLayout>
    )
}

export default Book
