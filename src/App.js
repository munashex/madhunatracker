import './App.css';
import React, { useState, useEffect } from 'react';



function App() {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

useEffect(() => {
fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
.then(res => res.json())
.then(res => {
  console.log(res)
  setCoins(res)
})
}, [])





  return (
    <div className="app">
    <h2 className='heading'>Crypto Price Tracker</h2>
    
<input
 placeholder='        search....'
 onChange={(e) => setSearch(e.target.value)}
/>

<h6 className='coi'>coin</h6>
<h6 className='pri'>Prize</h6>
<h6 className='vol'>24h volume</h6>
<h6 className='hour'>24h</h6>
<div  className='crypto'>
{coins && coins.filter((item) => {
  if(search === "") {
    return item 
  }else if(item.symbol.toLowerCase().includes(search.toLowerCase())){
    return item
  }
}).map((item, index) => {
  return (
    <div key={index} className='returned'>
      <h4 className='rank'>{item.market_cap_rank}</h4>
      <img src={item.image}/>
     <h5 className='symbol'>{item.symbol}</h5>
     <h6 className="prize">${item.current_price}</h6>
     <h6 className="volume">${item.total_volume}</h6>
     <h6 className='high'>{item.high_24h}</h6>
     <hr className='divider_two'/>
    </div>
  )
})}
</div>
    </div>
  );
}

export default App;
