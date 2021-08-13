// Write your Character component here
import React from 'react';

export default function Character(props) {
    const { data } = props;

    return(
        <div>
            {data.map(dataObj => {
                return(
                    dataObj.name
                )
            })}
        </div>
    )
}