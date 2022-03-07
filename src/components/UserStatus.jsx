import { useState } from "react";

function UserStatus() {
    const [ isLoggedIn ] = useState(true);
    const [ userName ] = useState('Mike96');

    // if / else

    if (isLoggedIn) {
        return (
            <div>
                Welcome User 🤓 {userName}
            </div>
        );
    } else {
        return (
            <div>
                Login
            </div>
        );

        }
    

    // if ternario

    return (
        isLoggedIn ?
            <div>
                Welcome User 🤓 {userName}
            </div>
        :
            <div>
                Login
            </div>
    )

    // variable

    let status;

    if (isLoggedIn) {
        status = <div>Welcome User 🤓 {userName} </div>
    } else {
        status = <div>Login</div>
    }
    return status;

    //logic operator

    return (isLoggedIn && (
        <div>
            Welcome {userName}
        </div>
    )) || (
        <div>
                Login
        </div>
    );

    //in line
    
    return (
        <div>
        { isLoggedIn ? (
            <span>Welcome User 🤓 {userName}</span>
        ) : (
            <span>Login</span>
        )}
        </div>
    );
}

export default UserStatus;