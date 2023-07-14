import { createPortal } from "react-dom";
import "./Modal.css";

const Modal = ({
  children,
  isOpen,
  modalStyle,
  contentStyle,
  close,
  title,
}) => {
  const defaultModalStyle = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const defaultModalContentStyle = {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "0.5rem",
  };

  const mergedModalStyle = { ...defaultModalStyle, ...modalStyle };
  const mergedModalContentStyle = {
    ...defaultModalContentStyle,
    ...contentStyle,
  };
  return createPortal(
    isOpen ? (
      <div className="modal" style={mergedModalStyle} onClick={close}>
        <div
          className="modal-content"
          style={mergedModalContentStyle}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="modal-content-title">
              <h2>{title}</h2>
              <button onClick={close}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            {children}
          </div>
        </div>
      </div>
    ) : null,
    document.querySelector("body")
  );
};

export default Modal;
