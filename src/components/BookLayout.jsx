import React from 'react'
import Main from './Main'
import Content from './Content'
import Header from './Header'
import Footer from './Footer'

const BookLayout = ({ children,apiData }) => {
    return (
        <Main>
            <Content>
                <Header apiData={apiData} />
                {children}
                <Footer />
            </Content>
        </Main>
    )
}

export default BookLayout
