how to show modal in react js

 
//Home componet
const Home = () => {
  
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="home_container">
      <Header dataApi={getdataAPI} />
    <SearchAndFilter openModal={ ()=> setShowModal(true)} />  // pass the props on click it will call the call back function and setShow as true
      <div className="underLine"></div>
      <div>Hello world</div>
      <TaskHeading />
        
    </div>
  // check showModal is true than render AddTaskModal
    //here we are passing closeModal props in Addtask modal there will we one close button on hitting it it will call a closeModal function & that will set showModal false
  
      {showModal && <AddTaskModal closeModal={() => setShowModal(false)} />} 
  </div>
  );
};

export default Home;

//searchAndfilter componet
const SearchAndFilter = (props) => {
  return (
    <div className="main_container">
      <div className="filter_container">
        <p className="filter_text">Filter by:</p>
        <div className="filter_dropDown category">
          <p>Category</p>
          <img src={dropDown_down_icons}></img>
        </div>
        <div className="filter_dropDown dueDate">
          <p>Due Date</p>
          <img src={dropDown_down_icons}></img>
        </div>
      </div>
      <div className="search_container">
        <div className="search_box">
          <img src={search_icon}></img>
          <input type="text" placeholder="Search"></input>
        </div>
        <button className="addTask_btn" onClick={props.openModal}> // here we are reciving props & hiiting on that callback fun on click 
          ADD TASK
        </button>
      </div>
    </div>
  );
};

export default SearchAndFilter;

//Modal componet
import "./AddTaskModal.css";
import close from "../../assets/close_icon.png";

const AddTaskModal = (props) => {
  return (
    <div className="task_modal">
      <div className="createTaskModal_container">
        <div className="createTaskModal_heading">
          <p>Create Task</p>
          <img src={close} alt="close_icons" onClick={props.closeModal}></img> //here we are calling CB fun on click 
        </div>
       
    </div>
  );
};
export default AddTaskModal;




