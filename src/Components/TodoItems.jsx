import "./CSS/TodoItems.css";

import check from "./assets/check.png";
import cross from "./assets/cross.png";
import circle from "./assets/circle.png";

export const TodoItems = ({ no, display, text, setTodos }) => {

    const deleteTodo = (no) => {
        let data = JSON.parse(localStorage.getItem('todos'));
        data = data.filter((todo) => todo.no !== no);
        setTodos(data);
    }

    const toggle = (no) => {
        let data = JSON.parse(localStorage.getItem('todos'));

        for (let index = 0; index < data.length; index++) {
            if (data[index].no === no) {
                if (data[index].display === "") {
                    data[index].display = "line-through";
                }
                else {
                    data[index].display = "";
                }
                break;
            }
            
        }

        setTodos(data);
    }

    return (
        <div className="todoitems">
            <div className={`todoitems-container ${display}`} onClick={() => {toggle(no)}}>
                {display === "" ? <img src={circle} alt="" /> : <img src={check} alt="" />}
                <div className="todoitems-text">{text}</div>
            </div>
            <img src={cross} alt="" onClick={() => {deleteTodo(no)}}/>
        </div>
    )
}
