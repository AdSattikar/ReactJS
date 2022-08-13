import './App.css';
import Header from './MyComponents/Header';
import {Todos}  from './MyComponents/Todos';
import {Footer}  from './MyComponents/Footer';
function App() {
  const onDelete =(todo)=>{
    console.log("Deteting todo",todo)
  }
  let todos = [
    {
      sno:1,
      title:"Push on github",
      desc: "push some or the other stuff on github"
    },
    {
      sno:2,
      title:"Practice DSA",
      desc: "practice and solve any one programming/problem solving question"
    },
    {
      sno:3,
      title:"Interview Video",
      desc:"Watch random interview prep and personality development videos"
    }
  ]
  return (
    //jsx Javscript syntax extension
    <>
   <Header title={"My Todo List"} searchBar={true}/>
   <Todos todos={todos} onDelete={onDelete}/>
   <Footer />
    </>
  ); 
}

export default App;
