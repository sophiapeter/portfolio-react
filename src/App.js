import './scss/App.scss';
import person from './userData/userInfo.json'



function App() {
  const {firstName, lastName, age, languages, skills, address, job} = person
  console.log(languages)

 return (
    <div className="app">
     <div className='sidebar left'>
     
      <div>
         <h1>first Name : {firstName} </h1>
         <h2>last Name : {lastName} </h2>
         <h2>age : {age} </h2>
         <h3> address : {address} </h3>
         <h3> job : {job} Developer </h3>
         {languages.map((lang, index ) => {
            return (
               <div key={index}> 
                  {lang.language + " level " + lang.level + "%"}
               </div>
            )
         })}
            <h5>Skills</h5>
         {skills.map((skill, index) => {
            return (
               <div key={index}>
                  {skill.language + " level " + skill.level }
               </div>
            )
         })}
        
      </div>
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
