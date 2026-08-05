import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [taskText, setTaskText] = useState("");
    const [priority, setPriority] = useState("Baixa");
    const [taskList, setTaskList] = useState([]);
    const [filter, setFilter] = useState("Todas");

    const [search, setSearch] = useState("");

    const [editingId, setEditingId] = useState(null);
    const [editingText, setEditingText] = useState("");

    const priorityOrder = {
        "Alta": 1,
        "Média": 2,
        "Baixa": 3
    };

    useEffect(() => {
        const saved = localStorage.getItem("@taskflow_data");
        if (saved) setTaskList(JSON.parse(saved));
    }, []);

    useEffect(() => {
        localStorage.setItem("@taskflow_data", JSON.stringify(taskList));
    }, [taskList]);

    const addTask = (e) => {
        e.preventDefault();
        if (!taskText.trim()) return;

        const newTask = {
            id: crypto.randomUUID(),
            text: taskText,
            priority: priority,
            completed: false,
            createdAt: new Date().toLocaleDateString()
        };

        setTaskList([newTask, ...taskList]);
        setTaskText("");
    };

    const toggleTask = (id) => {
        setTaskList(taskList.map(t =>
            t.id === id ? { ...t, completed: !t.completed } : t
        ));
    };

    const deleteTask = (id) => {
        const confirmDelete = window.confirm("Tem certeza que deseja excluir essa tarefa?");
        if (confirmDelete) {
            setTaskList(taskList.filter(t => t.id !== id));
        }
    };

    const startEdit = (task) => {
        setEditingId(task.id);
        setEditingText(task.text);
    };

    const saveEdit = (id) => {
        setTaskList(taskList.map(t =>
            t.id === id ? { ...t, text: editingText } : t
        ));
        setEditingId(null);
        setEditingText("");
    };

    const filteredTasks = taskList
        .filter(t => {
            if (filter === "Pendentes") return !t.completed;
            if (filter === "Concluídas") return t.completed;
            return true;
        })
        .filter(t => t.text.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

    return (
        <div className="app-container">
            <header>
                <h1>TaskFlow</h1>
                <p>Gestão de Produtividade</p>
            </header>

            <section className="form-section">
                <form onSubmit={addTask}>
                    <input
                        value={taskText}
                        onChange={(e) => setTaskText(e.target.value)}
                        placeholder="Descrição da tarefa..."
                    />
                    <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                        <option value="Baixa">Baixa</option>
                        <option value="Média">Média</option>
                        <option value="Alta">Alta</option>
                    </select>
                    <button type="submit">Criar</button>
                </form>
            </section>

            {/* 🔍 Busca */}
            <section className="search-section">
                <input
                    type="text"
                    placeholder="Buscar tarefas..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </section>

            <section className="filter-section">
                {["Todas", "Pendentes", "Concluídas"].map(f => (
                    <button
                        key={f}
                        className={filter === f ? "active" : ""}
                        onClick={() => setFilter(f)}
                    >
                        {f}
                    </button>
                ))}
            </section>

            <main className="task-grid">
                {filteredTasks.map(item => (
                    <div key={item.id} className={`task-card ${item.priority.toLowerCase()} ${item.completed ? 'done' : ''}`}>
                        <div className="task-content">
                            {editingId === item.id ? (
                                <input
                                    value={editingText}
                                    onChange={(e) => setEditingText(e.target.value)}
                                />
                            ) : (
                                <h3>{item.text}</h3>
                            )}
                            <span>Prioridade: {item.priority}</span>
                            <small>Criada em: {item.createdAt}</small>
                        </div>

                        <div className="task-actions">
                            <button onClick={() => toggleTask(item.id)}>
                                {item.completed ? "Reabrir" : "Concluir"}
                            </button>

                            {editingId === item.id ? (
                                <button onClick={() => saveEdit(item.id)}>Salvar</button>
                            ) : (
                                <button onClick={() => startEdit(item)}>Editar</button>
                            )}

                            <button onClick={() => deleteTask(item.id)} className="delete">
                                Remover
                            </button>
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
}

export default App;