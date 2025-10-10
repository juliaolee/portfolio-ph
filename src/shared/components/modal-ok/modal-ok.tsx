import { Modal, Button } from "antd";

type Props = {
  open: boolean;
  onOk: () => void;
  title: string;
};

export const ModalOk = ({ open, onOk, title }: Props) => {
  return (
    <Modal
      title={title}
      open={open}
      footer={
        <div className="flex justify-center ">
          <Button className="mt-3" type="primary" onClick={onOk}>
            Ok
          </Button>
        </div>
      }
      width={400}
      closable={false}
    ></Modal>
  );
};
