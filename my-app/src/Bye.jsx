import React from "react";


function Bye() {
    const users =[
        { id: 1, name: "Kunal Sah" , age: 25 },
        { id: 2, name: "John Doe" , age: 30 },
        { id: 3, name: "Jane Smith" , age: 28 }   
    ]



    return (
        <>
            <h1>User List</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - Age: {user.age}
                    </li>
                ))}
            </ul>
            <p>This is a simple React component displaying a list of users.</p>
            
        </>
    )

}


export default Bye;