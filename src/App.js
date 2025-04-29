import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Navbar title="Textutils" abouttext="About"/>  
      {/* <Navbar title="Textutils" abouttext="about textutils"/>   */}
      {/* or we can just use <Navbar></Navbar>*/} 
      <div className="container my-3"> 
      <Textform heading="Enter the text to analyze"/>
      </div>
    </>
  );
}



export default App;
