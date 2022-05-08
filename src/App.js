import './App.css';
import AboutMe from './components/about';
import ReachMe from './components/contact';
import Timeline from './components/timeline';
import user from './config/user.json'

function App() {

  return (
    <main className="App">
      <AboutMe name={user.name} skills={user.skills}/>
      <Timeline events={user.events}/>
      <ReachMe links={user.contactLinks}/>
    </main>
  );
}

export default App;
