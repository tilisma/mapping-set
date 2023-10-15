import './App.css';
import Card from './components/Card';
import emojipedia from './data/emojiBank';

function singledata (myemoji){  
return(  
  <Card 
  id={myemoji.id} 
  emoji={myemoji.emoji} 
  name={myemoji.name} 
  meaning={myemoji.meaning} 
  /> 

)

} 

function App() {
  return (
    <div>  
      
    <h1> 
      <span>emojipedia</span>
      </h1> 
      <d1 className="dictionary">
      {emojipedia.map(singledata)} 

      </d1>
    
  </div>
  );
}

export default App;
