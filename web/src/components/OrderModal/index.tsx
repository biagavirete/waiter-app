import { ModalBody, Overlay } from './styles';
import CloseIcon from '../../assets/images/close-icon.svg';

interface Props {
  visible: boolean;
}

export function OrderModal({ visible }: Props) {
  if (!visible) {
    return null;
  }

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa 2</strong>
          <button type="button">
            <img src={CloseIcon} alt="Fechar" />
          </button>
        </header>
      </ModalBody>
      <h1>Modal</h1>
    </Overlay>
  );
}