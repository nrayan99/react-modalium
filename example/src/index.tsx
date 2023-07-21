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
      <div>
        <Modal title="test" isOpen={isOpen} close={() => setIsOpen(false)}>
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
