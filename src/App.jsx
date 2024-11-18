import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import "./index.css"

function App() {
  const [list, setList] = useState([]);
  function addList(title, content, event) {
    setList((preValue) => {
      return [
        ...preValue,
        {
          title: title,
          content: content,
        },
      ];
    });
    event.preventDefault();
  }
  function deleteList(id) {
    setList((preValue) => {
      return preValue.filter((val, idx) => {
        return idx !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addition={addList} />
      {list.map((item, idx) => {
        return (
          <Note
            key={idx}
            title={item.title}
            content={item.content}
            id={idx}
            deletion={deleteList}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
