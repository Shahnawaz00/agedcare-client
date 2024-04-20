import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
return (
    <div>
        <Link to="/login/admin">
            <button>Admin</button>
        </Link>
        <Link to="/staff">
            <button>Staff</button>
        </Link>
    </div>
)
}

export default Home
