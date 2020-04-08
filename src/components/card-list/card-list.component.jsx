import React from 'react';
import { Card } from '../card/card.component.jsx'
import './card-list.styles.css'

export const CardList = props => {
    const  monsters = () => {
        return props.monsters.map(({ id, name, email}) => {
            return (
                <Card key={id} name={name} id={id} email={email}/>
            )
        })
    };
   return  <div className='card-list'>{monsters()}</div>
};
