import React from "react";
import ReactDOM from "react-dom/client";
import { Modal } from "react-modalium";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const App = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>open</button>
      <div id="test">
        <Modal title="test" isOpen={isOpen} close={() => setIsOpen(false)} 
          closeOnOverlayClick={false}
          modalStyle={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          contentStyle={{ backgroundColor: "#fff" }}
          titleStyle={{ color: "red" }}
          closeStyle={{ color: "blue" }}
        >
          <p>test react-modalium</p>
        </Modal>
      </div>
    </div>
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
