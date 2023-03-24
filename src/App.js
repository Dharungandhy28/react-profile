
import './App.css';
// App component = view + logic(Declaration)
function App() {
  // let name = "DharunGandhi";
  const names = ["DharunGandhi", "Ajay", "Kannan", "Varun"];

  const users = [
    {
      name: "DharunGandhi", 
      pic: "https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=" 
    },

    {
      name: "Ajay", 
      pic: "https://media.istockphoto.com/id/1300972574/photo/millennial-male-team-leader-organize-virtual-workshop-with-employees-online.jpg?b=1&s=170667a&w=0&k=20&c=96pCQon1xF3_onEkkckNg4cC9SCbshMvx0CfKl2ZiYs=" 
    },

    {
      name: "Kannan", 
      pic: "https://media.licdn.com/dms/image/C5612AQEhrTU_u2hB0A/article-cover_image-shrink_720_1280/0/1602775863246?e=2147483647&v=beta&t=Q8Ls-NcLDjUnUbLWrQ3fIEk2A-QjLvMHPO3jkoLstY0" 
    },
    {
      name: "varun",
      pic: "https://media.istockphoto.com/id/1307791650/photo/headshot-portrait-of-smiling-caucasian-businessman-pose-at-workplace.jpg?b=1&s=612x612&w=0&k=20&c=q6k0LZjjB6KMntcZdmy_O6TWoEPa2uLounM9aRWOhRo="
    },
  ];

  return (
    <div className="App">
      {/* {names.map((nm)=>(
        <Welcome name={nm} />
      ))} */}
      {/* <Welcome name={"Dharun Gandhi"} /> */}

      {users.map((usr,index)=> (
        <User name = {usr.name} pic={usr.pic} key={index}/>
      ))}
    </div>
  );
}
// user component(Declaration)
function Welcome({ name }) {
  //console.log(props, typeof props);
  //const {pic, name } = props; //object destructuring(Es6)
  return (
    <section>
      <h1 className='user-name'>
        Hello, <span className='user-first-name'>{name}</span>
      </h1>
    </section>
  );
}

//object destructuring (Es6)
function User({pic, name}) {
  //console.log(props, typeof props);
  //const {pic, name} = props; //object destructurnig(Es6)
  return (
    <section>
      <img className='user-profile-pic' src={pic} alt={name} />
      <Welcome name={name}></Welcome>
    </section>
  );
}
export default App;



