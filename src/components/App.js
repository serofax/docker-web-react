import React from 'react';

import { Header } from './Header';
import { Footer } from './Footer';

export const App = props => {
    return (
        <div>
            <Header/>
            <p>Hello world</p>
            <Footer/>
        </div>
    );
};

