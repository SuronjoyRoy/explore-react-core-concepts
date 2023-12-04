import { useState } from "react"

export default function Team(){

    const [team, setTeam] = useState(11);

    const addHandle = () => {
        const add = team + 1;
        setTeam(add)
    }
    const removeTeam = () => {
        const remove = team - 1;
        setTeam(remove)
    }
    const teamStyle ={
        border: '2px solid green',
        margin:'10px',
        padding:'15px',
        borderRadius:'5px'
    }

    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={addHandle}>Add</button>
            <button onClick={removeTeam}>Remove</button>
        </div>
    )
}