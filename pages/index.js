import React, { Component } from 'react';
import axios from 'axios';

import MainLayout from '../components/layouts/mainLayout';

class Home extends Component {
    static async getInitialProps() {
        //console.log("getInitialProps")
        let userData;
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/1`)
            userData = response.data;
            // console.log(userData);
        } catch {
            console.log('server error');
        }
        return {
            user: {
                name: 'Tony',
                lastname: 'Park'
            },
            userData
        };
    }
    constructor(props) {
        super(props);
        // console.log("constructor");
        this.state = {
            user: this.props.user,
            userData: this.props.userData
        }
    }
    render() {
        console.log(this.state);
        return (
            <>
                <MainLayout>
                    <h1>Welcome to my page</h1>
                </MainLayout>

            </>
        )
    }
}

export default Home;
