function TaskCreate() {
    return ( <div className="task-create">
        <h3>Lütfen Görev Ekleyiniz!</h3>
        <form className="task-form">
            <label className="task-label">Başlık</label>
            <input className="task-input"/>
            <label className="task-label">Görev Giriniz</label>
            <textarea className="task-input" rows={5}></textarea>
            <button className="task-button">Oluştur</button>
        </form>
    </div> );
}

export default TaskCreate;