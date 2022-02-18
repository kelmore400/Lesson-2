import { Example } from '../Example';
import ClassComponent from '../ClassComponent/index';
import './App.css';
// import FirstComponent from '../FirstComponent/FirstComponent';
// import FunctionComponent from '../FunctionComponent';

// const user = {
//   name: "Ivan",
//   age: "25"
// };

//Деструктуризация, если какая-то константа совпадает с названием свойства объекта, то в эту константу сохраняется значение со свойста объекта например объекта user
// const {name, age} = user;
// console.log(name);
// console.log(age);

function App() {
  return (
    <div className="App">
      <Example/>
      <Example name="Alex"/>
      <ClassComponent address="Kyiv, Ivana Franka, 6"/>
      {/* <FirstComponent name="Alex"/>
      <FirstComponent>
        <h1>Welcome</h1>
      </FirstComponent>
      <FirstComponent>
        <h1>{user.name}</h1>
      </FirstComponent>
      <FunctionComponent name={user.name} age={user.age}/> */}
    </div>
  );
}

export default App;
