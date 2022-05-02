import './App.css';
import AboutMe from './components/about';
import ReachMe from './components/contact';

function App() {
  const name = 'Joaquin Barcena'

  const skills = [
    { backgroundColor: "#006E7F", title : "Kotlin" },
    { backgroundColor: "#F8CB2E", title : "Java" },
    { backgroundColor: "#EE5007", title : "Swift" },
    { backgroundColor: "#B22727", title : "Python" },
    { backgroundColor: "#96CEB4", title : "Go" },
    { backgroundColor: "#FFEEAD", title : "JS" },
    { backgroundColor: "#D9534F", title : "C" },
    { backgroundColor: "#FFAD60", title : "Android JetPack" },
    { backgroundColor: "#FF6B6B", title : "Docker" },
    { backgroundColor: "#FFD93D", title : "Git" },
    { backgroundColor: "#6BCB77", title : "Spring" },
    { backgroundColor: "#4D96FF", title : "Spark" },
    { backgroundColor: "#46244C", title : "RabbitMQ" },
    { backgroundColor: "#712B75", title : "MySQL" },
    { backgroundColor: "#C74B50", title : "DynamoDB" },
    { backgroundColor: "#D49B54", title : "AWS EC2" },
    { backgroundColor: "#78938A", title : "Apache Pulsar" },
  ]

  const contactLinks = {
    gh: 'joaqbarcena',
    In: 'joaqbarcena',
    mail: 'joaqbarcena@gmail.com',
  }

  return (
    <main className="App">
      <AboutMe name={name} skills={skills}/>
      <ReachMe links={contactLinks}/>
    </main>
  );
}

export default App;
