import { ToDoList } from "../Components/ToDoList";

const ToDoListContainer = () => {
    const mapStateToProps = (state) => {
        return { tasks: state.list.tasks };
    };
    return <ToDoList {...mapStateToProps}  />
}

export default ToDoListContainer;