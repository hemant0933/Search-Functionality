import './App.css';
import React,{useState} from 'react';
import JSONDATA from '../src/MOCK_DATA.json';

function App() {

  const [search,setSearch] = useState("");

  return (
    <div className='App'>
     <input type='text' value={search} placeholder='Search....' onChange={(e) => setSearch(e.target.value)} />
     <div className='cardContainer'>
      {
        JSONDATA.filter((item) => {
          return search.toLowerCase() === '' ? item
          : item.first_name.toLowerCase().includes(search.toLowerCase());
        }).map((item,index) => (
          <div key={index} className='cards'>
            <div className='ImgBg' style={{background:'black',width:'90px',height:'70px',borderRadius:'100px'}}><img src={item.Avatar} alt="avatar"/></div><br/>
            <p>Name : {item.first_name} {item.last_name}</p>
            <p>Email : {item.email}</p>
            <p>Gender : {item.gender}</p>
          </div>
        ))
      }
     </div>

    </div>
  );
}

export default App;
