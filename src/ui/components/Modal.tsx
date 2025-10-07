import {
  CURRENT_MODAL_HIGH_CLASS,
  TModalHighClass,
} from "@/utils/constants/modalHighClass";
import { IconClose } from "../../../public/icons";

interface IModalProps {
  children: React.ReactNode;
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  high: TModalHighClass;
}
export default function Modal({
  children,
  openModal,
  setOpenModal,
  high,
}: IModalProps): React.ReactNode {
  return (
    <>
      {openModal && (
        <div className="bg-black/20 absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div
            className={`bg-white p-4 rounded-lg ${CURRENT_MODAL_HIGH_CLASS[high]} flex justify-center items-center relative`}
          >
            <div
              className="absolute top-1 right-1 cursor-pointer"
              onClick={() => setOpenModal(!openModal)}
            >
              <IconClose className="h-6 w-6 hover:text-[var(--color-red)]" />
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
}
