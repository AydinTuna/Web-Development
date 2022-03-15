import PropTypes from "prop-types";

function User({name, surname, age, isLoggedIn, friends, address}) {
    // console.log(props);     // Object { name: "Bahadır" }
    // console.log(props.name);    // Bahadır
    // console.log({isLoggedIn}); // false

    if(!isLoggedIn) {
        return <div>Giriş Yapmadınız!</div>
    }
    return (
        <>
            <h1>
                {
                    `${name} ${surname}, ${age}`
                }
            </h1>

            {/* {friends.map((friend,index) => (
                <div key={index}>{index} - {friend.name}</div>
            ))} */}
            {/* {friends.map((friend) => {
                 const x = friend.id + 2;
                return <div key={friend.id}>{friend.name}</div>  // return'de kullanılabilir.
            })} */}
            
            {address.street} {address.zip}
            <br />
            <br />
            {friends.map((friend) => (
                <div key={friend.id}>{friend.name}</div>
            ))}
        </>   
    );
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    age: PropTypes.oneOfType([PropTypes.number,PropTypes.string]).isRequired,
    isLoggedIn: PropTypes.bool,
    friends: PropTypes.array,
    address: PropTypes.shape({
        street: PropTypes.string,
        zip: PropTypes.number
    })
}

User.defaultProps = {
    name: "İsimsiz",
    isLoggedIn: false,
}

export default User;