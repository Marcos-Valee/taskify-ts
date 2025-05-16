import { type ModalProps } from "../types/ModalProps";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    if(!isOpen) return null
    
    return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 flex items-center justify-center bg-black/20"
    >
      <div className="bg-[#EDEDF9] p-5 rounded-lg shadow-lg w-96 flex flex-col justify-center gap-6">
        <div className="flex justify-between">
          <h4 className="text-lg font-semibold">Edição de tarefa</h4>
          <button
            className=" text-2xl text-indigo-500 hover:text-indigo-600 cursor-pointer"
            onClick={onClose}
          >
            <IoMdClose />
          </button>
        </div>
        {children}
      </div>
    </motion.div>
  );
};

export default Modal;
