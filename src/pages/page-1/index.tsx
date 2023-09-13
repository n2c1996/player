import { Button, Form, Input, Modal, Select, Table } from "antd";
import { useCallback, useEffect, useMemo, useState } from "react";
import { addPlayer } from "../../service/add-player";
import { getPlayer } from "../../service/get-player";
import { Player } from "../../service/entity";
import { updatePlayer } from "../../service/update-player";
import { baseColumns, position } from "./constants";
import { getTitleModal, handleModalDelete, success } from "./util";

const Page: React.FC = () => {
  const [form] = Form.useForm();
  const [isSubmitting, setSubmitting] = useState(false);
  const [modalData, setModalData] = useState<{ open: boolean; data?: Player }>({
    open: false,
    data: undefined,
  });
  const [dataSource, setDataSource] = useState<Array<Player> | undefined>(
    undefined
  );

  useEffect(() => {
    (async () => {
      if (!modalData.open) {
        const data = await getPlayer();
        setDataSource(data);
      }
    })();
  }, [modalData]);

  const columns = useMemo(() => {
    return [
      ...baseColumns,
      {
        title: "Action",
        dataIndex: "action",
        key: "action",
        // @ts-ignore
        render: (_, record: Player) => {
          return (
            <div>
              <Button
                style={{ marginRight: 8 }}
                type="primary"
                onClick={() => setModalData({ open: true, data: record })}
              >
                Update
              </Button>
              <Button
                type="primary"
                danger
                onClick={() => handleModalDelete(record, setDataSource)}
              >
                Delete
              </Button>
            </div>
          );
        },
      },
    ];
  }, []);

  const handleOK = useCallback(() => {
    form
      .validateFields()
      .then(async (values) => {
        setSubmitting(true);
        if (modalData.data) {
          await updatePlayer({ id: modalData.data.id, ...values });
        } else {
          await addPlayer(values);
        }
        setModalData({ open: false, data: undefined });
        setSubmitting(false);
        success();
      })
      .catch(() => {});
  }, [modalData, form]);

  return (
    <>
      <section>
        <Button
          style={{ marginBottom: 16 }}
          type="primary"
          onClick={() => setModalData({ open: true, data: undefined })}
        >
          Add new player
        </Button>

        <Table
          dataSource={dataSource}
          columns={columns}
          loading={!dataSource}
          bordered
        />
      </section>

      <Modal
        maskClosable={false}
        title={getTitleModal(!!modalData.data)}
        open={modalData.open}
        onCancel={() => setModalData({ open: false, data: undefined })}
        onOk={handleOK}
        okButtonProps={{ disabled: isSubmitting }}
        destroyOnClose={true}
        afterClose={() => form.resetFields()}
      >
        <Form
          style={{ padding: "16px 8px 0" }}
          name="add"
          labelCol={{ span: 5 }}
          labelAlign="left"
          autoComplete="off"
          form={form}
        >
          <Form.Item
            initialValue={modalData.data ? modalData.data.name : ""}
            label="Name"
            name="name"
            rules={[{ required: true, message: "Name is required" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            initialValue={modalData.data ? modalData.data.position : ""}
            label="Position"
            name="position"
            rules={[{ required: true, message: "Position is required" }]}
          >
            <Select placeholder="Select a position" allowClear>
              {position.map(({ value, title }) => (
                <Select.Option key={value} value={value}>
                  {title}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Page;
