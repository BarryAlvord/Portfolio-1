import { useRef } from "react";
import useDetectClickOut from "../../hooks/useDetectClickOut";
import "./modal.css";
import ChristmasModal from "./christmasModal/christmasModal";
import { AiOutlineClose } from "react-icons/ai";

export default function Modal({ setModal }) {
  const ref = useRef(null);
  useDetectClickOut(ref, () => setModal(false));

  return (
    <div className="container">
      <div className="modal-container">
        <div className="modal" ref={ref}>
          <button onClick={() => setModal(false)}>
            <AiOutlineClose />
          </button>
          <div className="modal-content">
            <ChristmasModal />
          </div>
        </div>
      </div>
    </div>
  );
}
