import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import noimage from '../assets/noimage.png'
import { motion } from 'framer-motion';

const Bookshelf = ({ allBooks }) => {


    const rows = [];

    for (let i = 0; i < allBooks.length; i += 5) {
        rows.push(allBooks.slice(i, i + 5));
    }

    // console.log(rows);

    return (
       
        allBooks && <div className="bookShelves p-1" >
            {rows.map((row, index) => {
                return <div key={index} className='d-flex flex-md-row flex-column justify-content-center align-items-center my-2'>
                    {row.map((data, index) => {
                        const image = data.volumeInfo.imageLinks?.smallThumbnail
                        const [hover,setHover] = useState(false);

                        return <motion.div key={index} className={`card  mt-3 mx-2`} style={{ width: '200px' }}>
                            <motion.div onHoverStart={()=>setHover(true)} onHoverEnd={()=>setHover(false)} className={`card-body  text-center p-2 ${hover ? 'border-card' : ''}`} >
                              <Link to={`/book/${data.id}`} > {image ? <img className='rounded-3' src={image} height='100px' alt="" /> : <img src={noimage} alt='' height='100px' /> } </Link>
                             
                                <p className="text-truncate mt-2" style={{ maxWidth: "200px" }}>
                                    <b>{data.volumeInfo.title}</b>
                                </p>
                                <p className="text-truncate"><b>Author :</b> {data.volumeInfo.authors}</p>
                                <p className="text-truncate"><b>Published :  </b>{data.volumeInfo.publishedDate}</p>
                            </motion.div>
                        </motion.div>
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
