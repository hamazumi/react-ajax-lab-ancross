import {useEffect, useState} from 'react'
import './App.css';
import DisplayCards from './DisplayCards'

const App = () => {
 
  let [data, setData] = useState({hits: []})
  let [search, setSearch] = useState('')

 
  useEffect(() => {
    fetch('http://acnhapi.com/v1/villagers/')
      .then(response => response.json())
      .then((rdata) => {
        rdata = Object.values(rdata)
        setData({hits: rdata})
      })
  }, [])

  const handleChange = (e) => {
    setSearch(e.currentTarget.value)
  }

  const dynamicSearch = () => {
      return data.hits.filter(villager => villager.name['name-USen'].toLowerCase().includes(search.toLowerCase()))
  }


    return (
      <div className="App">
        <div className="searchBox">
          <input type="text" value={search} onChange={handleChange} />
        </div>
        <div>
          <DisplayCards data={dynamicSearch()}/>
        </div>
      </div>
    );
}

export default App;