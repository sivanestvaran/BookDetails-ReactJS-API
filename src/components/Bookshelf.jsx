import React from 'react'

const Bookshelf = ({ allBooks }) => {


    console.log(allBooks)

    const rows = [];

    for (let i = 0; i < allBooks.length; i += 5) {
        rows.push(allBooks.slice(i, i + 5));
    }

    // console.log(rows);

    return (
        <div className="bookShelves p-1" >
            {rows.map((row, index) => {
                return <div key={index} className='d-flex flex-md-row flex-column justify-content-center align-items-center mt-3'>
                    {row.map((data, index) => {
                        return <div key={index} className="card mt-3 mx-2 " style={{ width: '200px' }}>
                            <div className="card-body text-center p-2">
                                <a href=""><img className='rounded-3' src={data.volumeInfo.imageLinks.smallThumbnail} height='100px' alt="" /></a>
                                <p className="text-truncate mt-2" style={{ maxWidth: "200px" }}>
                                    <b>{data.volumeInfo.title}</b>
                                </p>
                                <p className="text-truncate"><b>Author :</b> {data.volumeInfo.authors}</p>
                                <p className="text-truncate"><b>Published :  </b>{data.volumeInfo.publishedDate}</p>
                            </div>
                        </div>
                    })}

                </div>
            })}

        </div>

    )
}

export default Bookshelf

//Used for test case only
// const card = {
//     bookname: 'hello',
//     author: 'siva',
//     publish: '2025'
// }

// const arr = new Array(10).fill(card)
// let rows = [];

// for (let i = 0; i < 10; i += 5) {
//     rows.push(arr.slice(i, i + 5))
// }

// console.log(rows)
