import "./App.css";
import "antd/dist/antd.css";

import React from "react";
import { Input, Divider } from "antd";
import TodoItem from "../src/components/Todo-item/Todo-item";
import ArchiveItem from "../src/components/Archive-item/Archive-item";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function App() {
  const [todos, setTodos] = React.useState([
    "Keep Calm",
    "and speak your mind",
  ]);
  const [newTodo, setNewTodo] = React.useState("");
  const [archives, setArchives] = React.useState([]);
  const [state, setState] = React.useState({ mode: 1 });

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const keyPress = (e) => {
    if (e.keyCode === 13) {
      setNewTodo("");
      setTodos(todos.concat(e.target.value));
    }
  };

  const handleRemove = (index) => {
    let newItems = todos;
    let archiveItem = todos[index];
    newItems.splice(index, 1);
    setArchives(archives.concat(archiveItem));
    setTodos(newItems);
  };

  return (
    <div className="App">
      <div
        style={{
          width: "250px",
          height: "250px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Input
          style={{ display: state.mode === 1 ? "block" : "none" }}
          type="text"
          id="new-todo-input"
          value={newTodo}
          onKeyDown={keyPress}
          onChange={handleChange}
          placeholder="What will I do?"
        />
        <span
          className="title"
          style={{
            display: state.mode === 2 ? "block" : "none",
          }}
        >
          History
        </span>
        <Divider />
        <div style={{ overflowY: "auto", overflowX: "hidden", flexGrow: "1" }}>
          {state.mode === 1 ? (
            <TransitionGroup style={{ padding: "0" }}>
              {todos.map((todo, i) => {
                return (
                  <CSSTransition key={todo} timeout={1000} classNames="item">
                    <TodoItem
                      key={i}
                      index={i}
                      value={todo}
                      onRemove={(index) => handleRemove(index)}
                    ></TodoItem>
                  </CSSTransition>
                );
              })}
            </TransitionGroup>
          ) : (
            archives.map((todo, i) => {
              return <ArchiveItem key={i} index={i} value={todo}></ArchiveItem>;
            })
          )}
        </div>
        <div
          style={{
            marginTop: "10px",
            color: "rgb(158 158 158)",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <span
            className="btn"
            style={{
              display: state.mode === 1 ? "block" : "none",
            }}
            onClick={() => {
              setState({ ...state, mode: 2 });
            }}
          >
            what's done
          </span>
          <span
            className="btn"
            style={{
              display: state.mode === 2 ? "block" : "none",
            }}
            onClick={() => {
              setState({ ...state, mode: 1 });
            }}
          >
            what should do
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
