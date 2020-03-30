import React from 'react'
import Header from '../includes/header'

const MainLayout = ({ children }) => (
    <>
        <Header />
        {children}
    </>
)

export default MainLayout;