import React, { useState, useEffect } from "react";

export function GithubUsers() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
            })
    }, [])

    return (
        <div className="section">
            {users.map(user => (
                <div key={user.id} className="card">
                    <h5>{user.login}</h5>
                </div>
            ))}
        </div>
    )
}