import TaskShow from "./TaskShow";

function TaskList({tasks}) {
    return ( <div className="task-list">
        {tasks.map((task, index) =>{
            return(
                <TaskShow key={index /*task.id*/} task={task}/>
            )
        })}
    </div> );
}

export default TaskList;