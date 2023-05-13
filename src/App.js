import './scss/App.scss';
import person from './userData/userInfo.json'



function App() {
  const {firstName, lastName, age, languages, skills, address} = person

 return (
    <div className="app">
     <div className='sidebar left'>
        person info
     </div>
     <div className='middle'>
        wall
     </div>
     <div className='sidebar right'>
        navigation
     </div>
    </div>
  );
}


export default App;
