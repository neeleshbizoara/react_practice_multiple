import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";
const Model = forwardRef(function Model({ children, buttonCaption }, ref) {
  const modelRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        modelRef.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={modelRef} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
});

export default Model;
