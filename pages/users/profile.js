import React, { Component } from 'react'
import MainLayout from '../../components/layouts/mainLayout'

const Profile = (props) => {
    console.log(props);

    return (
        <MainLayout>
            <h1>Profile</h1>
        </MainLayout>
    )
};


Profile.getInitialProps = async ({ req }) => {
    return {
        values: '1, 2, 3, 4'
    }
}

export default Profile;