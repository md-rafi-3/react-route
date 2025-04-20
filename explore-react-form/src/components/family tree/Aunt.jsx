import React, { use } from 'react';
import Causin from './Causin';
import { MoneyContext } from './FamilyTree';

const Aunt = ({asset}) => {
    const [money,setMoney]=use(MoneyContext)
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Causin asset={asset} name='Tom Tom'></Causin>
                <Causin name='Jojooo'></Causin>
                <button onClick={()=>setMoney(money+5000)}>Add 5000tk</button>
            </section>

        </div>
    );
};

export default Aunt;