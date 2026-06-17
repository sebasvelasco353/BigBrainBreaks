import { ModalContainer } from "./ModalContainer"

// TODO: Add UI and connect to context

interface NewTimerModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (arg0: boolean) => void;
}

export const NewTimerModal = ({ isModalOpen, setIsModalOpen }: NewTimerModalProps) => {
  return (
    <ModalContainer isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="New Timer">
      <p> hello </p>
    </ModalContainer>
  )
}
