import React, { useEffect, useState } from 'react'

const Items = ({ counterGenerate }) => {
    const [item, setItem] =useState([])

    useEffect(() => {
        const newItem = counterGenerate();
        setItem(newItem)
        console.log("Render");
    },[counterGenerate])

    return (
    <div>
        <ul>
            {item.map(item =>
                <li key={item}>
                    {item}
                </li>
            )}
        </ul>
    </div>
    )
}

export default Items