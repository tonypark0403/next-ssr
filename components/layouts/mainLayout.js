import React from 'react';
import Header from '../includes/header';
import Head from 'next/head';

const MainLayout = (props) => (
    <>
        <Head>
            <title>My Awesome NextApp</title>
            <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
            <link href="/static/css/styles.css" rel="stylesheet" />
        </Head>
        <div className="mainLayout container">
            <Header />
            {props.children}
        </div>
    </>
)

export default MainLayout;