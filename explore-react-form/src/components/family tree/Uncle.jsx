import React from 'react';
import Causin from './Causin';

const Uncle = () => {
    return (
        <div>
            <h3>Uncle</h3>
            <section className='flex'>
                <Causin name='Rafsan'></Causin>
                <Causin name='Japsha'></Causin>
            </section>
        </div>
    );
};

export default Uncle;