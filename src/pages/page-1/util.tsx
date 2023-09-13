import { Modal, message } from "antd";
import { Player } from "../../service/entity";
import { deletePlayer } from "../../service/delete-player";
import { getPlayer } from "../../service/get-player";

export const success = () => {
  message.open({
    type: "success",
    content: "Successfully",
  });
};

export const getTitleModal = (flag: boolean) =>
  flag ? "Update player" : "Add new player";

export const handleModalDelete = (
  record: Player,
  handleDataTable: (data: Array<Player>) => void
) => {
  Modal.confirm({
    title: "Delete player",
    content: `Are you sure to delete ${record.name} ?`,
    okText: "Confirm",
    cancelText: "Cancel",
    onOk: async () => {
      await deletePlayer(record.id);
      const data = await getPlayer();
      handleDataTable(data);
      success();
    },
    footer: (_, { OkBtn, CancelBtn }) => (
      <>
        <CancelBtn />
        <OkBtn />
      </>
    ),
  });
};
