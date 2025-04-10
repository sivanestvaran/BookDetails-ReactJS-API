import React from 'react'
import Main from './Main'
import Content from './Content'
import Header from './Header'
import Footer from './Footer'

const BookLayout = ({ children }) => {
    return (
        <Main>
            <Content>
                <Header />
                {children}
                <Footer />
            </Content>
        </Main>
    )
}

export default BookLayout
