import { useCallback, useContext, useEffect, useRef } from "react";
import { ModalContext } from "./ModalContext";

export type ModalContentPropsType = {
  /** Содержимое модального окна */
  children: React.ReactNode;
};

export const ModalContent = ({ children }: ModalContentPropsType) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const { isOpened, setIsOpened } = useContext(ModalContext);

  const handleDocumentKeydown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpened(false);
      }
    },
    [setIsOpened]
  );

  useEffect(() => {
    if (!dialogRef || !dialogRef.current) {
      return;
    }

    const dialog = dialogRef.current;

    if (isOpened) {
      try {
        dialog.showModal();
        document.addEventListener("keydown", handleDocumentKeydown);
        document.body.style.overflow = "hidden";
      } catch (e) {
        // На данный момент ошибка игнорируется
      }
    } else {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleDocumentKeydown);
      dialog.close();
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleDocumentKeydown);

      if (!dialog) {
        return;
      }

      dialog.close();
    };
  }, [dialogRef, isOpened, handleDocumentKeydown]);

  if (!isOpened) {
    return null;
  }

  return (
    <dialog
      className="rounded-xl p-0 w-full h-full bg-transparent grid items-center"
      ref={dialogRef}
    >
      <div className="bg-white rounded-xl min-w-[calc(100%-40px)] max-h-full overflow-hidden flex flex-col">
        <div className="p-5 overflow-y-auto relative grow shrink basis-auto">
          {children}
        </div>
        <button
          className="p-5 bg-[#EDEFF6] w-full text-[#1D2E5B] font-bold uppercase text-[16px] leading-[24px] shrink-0"
          type="button"
          onClick={() => setIsOpened(false)}
        >
          Закрыть окно
        </button>
      </div>
    </dialog>
  );
};

ModalContent.displayName = "Modal.Content";
