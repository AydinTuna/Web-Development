import PropTypes from "prop-types";

function User({name, surname, age, isLoggedIn, friends}) {
    // console.log(props);     // Object { name: "Bahadır" }
    // console.log(props.name);    // Bahadır
    console.log({isLoggedIn}); // false
    return (
        <>
            <h1>
                {
                    isLoggedIn ? `${name} ${surname}, ${age}` : "Giriş yapmadınız!"
                }
            </h1>

            {/* {friends.map((friend,index) => (
                <div key={index}>{index} - {friend.name}</div>
            ))} */}
            {/* {friends.map((friend) => {
                 const x = friend.id + 2;
                return <div key={friend.id}>{friend.name}</div>  // return'de kullanılabilir.
            })} */}
            {friends.map((friend) => (
                <div key={friend.id}>{friend.name}</div>
            ))}
        </>   
    );
}


export default User;