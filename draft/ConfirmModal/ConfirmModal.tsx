import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import { EventHandler } from 'zvm-code-context';

export interface ConfirmModalPropData {
  buttonTitle: string;
  modalTitle: string;
  modalContent?: string;
}

export interface ConfirmModalStateData {
  txt?: string;
}

export interface ConfirmModalEvent {
  onConfirm?: EventHandler;
  onCancel?: EventHandler;
}

export interface ConfirmModalProps {
  propData: ConfirmModalPropData;
  propState: ConfirmModalStateData;
  event: ConfirmModalEvent;
}

export function ConfirmModal({ propData, event }: ConfirmModalProps) {
  const showConfirm = () => {
    Modal.confirm({
      title: propData.modalTitle || '',
      icon: <ExclamationCircleFilled />,
      content: propData.modalContent || '',
      onOk() {
        event.onConfirm?.call(null);
      },
      onCancel() {
        event.onCancel?.call(null);
      },
    });
  };

  return (
    <Button type='primary' onClick={showConfirm}>
      {propData.buttonTitle || ''}
    </Button>
  );
}
