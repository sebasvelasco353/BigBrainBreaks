import { ModalContainer } from "../ModalContainer"

interface NewTimerModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (arg0: boolean) => void;
}

export const NewTimerModal = ({ isModalOpen, setIsModalOpen }: NewTimerModalProps) => {
  return (
    <ModalContainer isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <p> hello </p>
    </ModalContainer>
  )
}
