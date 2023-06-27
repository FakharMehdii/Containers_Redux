import { InputField } from "../Components/InputField";
import { addTodo } from "../store/actions";

const InputFieldContainer = () => {
    const mapDispatchToProps = (dispatch) => {
        return {
            addTodo: (value) => dispatch(addTodo(value))
        };    }
    return <InputField {...mapDispatchToProps }/>
}

export default InputFieldContainer;