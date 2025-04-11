import React, { useRef } from 'react'
import manReading from '../assets/man-reading.png'
import searchIcon from '../assets/search.png'

const Header = ({apiData}) => {

    // console.log('dataf:'+dataf)

    const inputRef = useRef();

    function clickHandler(){
        apiData(inputRef.current.value)
        inputRef.current.value="";
    }

    return (
        <div className='header-section'>
            <div className='header-container d-flex flex-column flex-md-row'>
                <img src={manReading} alt="" />
                <div className='w-100 text-center header-right p-2'>
                    <div className='header-title p-2'>
                        <h2>Welcome to my book search app</h2>
                    </div>
                    <div className='header-body p-4 text-start w-100'>
                        <div className='header-body-centent d-flex justify-content-center'>
                            <p className='text-center'>If you're a book lover and want to discover something new, you're in the right place.
                                You can search for books here by typing in your favorite title, author, or genre. We'll bring
                                up all the info you need right from the API, so let's find your next great read
                                ! Happy browsing!</p>
                        </div>

                    </div>
                    <div className="header-search">
                        <div className="d-flex justify-content-center">
                            <div className="col-10 col-md-5 ">
                                <input type="text" ref={inputRef} className="form-control rounded-0 rounded-start-2 border-0" placeholder='Search for books...' />
                            </div>
                            <button onClick={clickHandler} className=" input-btn btn border-0 rounded-0 rounded-end-2 bg-white"><img src={searchIcon} className='p-0' height='20px' alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
