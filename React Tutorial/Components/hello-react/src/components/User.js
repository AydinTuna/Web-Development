function User({name, surname, age, isLoggedIn}) {
    // console.log(props);     // Object { name: "Bahadır" }
    // console.log(props.name);    // Bahadır
    console.log({isLoggedIn}); // false
    return (
        <h1>
            {
                isLoggedIn ? `${name} ${surname}, ${age}` : "Giriş yapmadınız!"
            }
        </h1>
    )
}

export default User;