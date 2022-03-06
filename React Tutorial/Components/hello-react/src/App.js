import './App.css';
// import React from 'react'; React fonks kullanılmayacaksa componentlerde react import etmeye gerek yoktur
import Header from './components/Header';
import User from './components/User';

const name = "Bahadır Tuna";
const surName = "Aydın";
const isLoggedIn = false;

function App() {
  // return React.createElement("div", null, "Hello");
  return (
    // JSX Fragment
    <>

      <User />
      <div>
        {/* <Header></Header> Bu şekilde de yazılabilir ancak içi dolduralamadığı için tek yazmak daha mantıklı */}
        <Header />
      </div>
      <p>Merhaba</p>

      <label htmlFor='name'>name</label>
      <input id='name'></input>

      <h1>{name} {surName}</h1>
      <h1>{`Merhaba benim Adım ${name} ve soyadım ${surName}`}</h1>

      {/* <h1>{isLoggedIn && `Merhaba benim Adım ${name} ve soyadım ${surName}`}</h1>
      {!isLoggedIn && "Giriş yapmadınız."} */}
      <h1>{isLoggedIn 
        ? `Merhaba benim Adım ${name} ve soyadım ${surName}` 
        : "Giriş yapmadınız."}</h1>
    </>
  );
}

export default App; 