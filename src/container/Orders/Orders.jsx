import { Button, Table, Modal, Input, Space, Form } from "antd";
import React, { useState } from "react";
import { EditOutlined, DeleteOutlined, UserAddOutlined, UserSwitchOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";

const Order = () => {
    const [form] = Form.useForm();
    const [isEditing, setIsEditing] = useState(false);
    const [editingUser, setEditingUser] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);




    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const onReset = () => {
        form.resetFields();
    };

    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };

    // const [dataSource] = useState([
    //     {
    //         id: 1,
    //         name: "John",
    //         email: "john@gmail.com",
    //         address: "John Address",
    //     },
    //     {
    //         id: 2,
    //         name: "David",
    //         email: "david@gmail.com",
    //         address: "David Address",
    //     },
    //     {
    //         id: 3,
    //         name: "James",
    //         email: "james@gmail.com",
    //         address: "James Address",
    //     },
    //     {
    //         id: 4,
    //         name: "Sam",
    //         email: "sam@gmail.com",
    //         address: "Sam Address",
    //     },
    // ]);

    const columns = [
        {
            key: "1",
            title: "ID",
            dataIndex: "id",
        },
        {
            key: "2",
            title: "Name",
            dataIndex: "name",
        },
        {
            key: "3",
            title: "Email",
            dataIndex: "email",
        },
        {
            key: "4",
            title: "Address",
            dataIndex: "address",
        },
        {
            key: "5",
            title: "Phone",
            dataIndex: "phone",
        },
        {
            key: "6",
            title: "Actions",
            render: (record) => {
                return (
                    <>
                        <UserSwitchOutlined
                            onClick={() => {
                                onDecentralization(record);
                            }}
                            style={{ color: "#5574ff", marginRight: 12 }}
                        />

                        <EditOutlined
                            onClick={() => {
                                onEditUser(record);
                            }}
                            style={{ color: "#097017" }}
                        />
                        <DeleteOutlined
                            onClick={() => {
                                onDeleteUser(record);
                            }}
                            style={{ color: "red", marginLeft: 12 }}
                        />

                    </>
                );
            },
        },
    ];

    // const [users, setUsers] = useState(dataSource);

    const dispatch = useDispatch();
    const orderStore = useSelector((state) => state.oders);

    const onFinish = (values) => {
        const newUser = [...orderStore.listOrder, {
            id: Math.floor(Math.random() * 100) + 1, // Generate a unique key for the new user
            name: values.user.name,
            email: values.user.email,
            address: values.user.address,

        }];
        // Update the Users state with the new user
        dispatch.users.setListOrder(newUser);
        // setUsers([...users, newUser]);
        setIsModalOpen(false); // Close the modal after submitting the form
    };

    const onAddUser = () => {
        setIsModalOpen(true);
    };

    const onDecentralization = () => {

    };

    const onDeleteUser = (record) => {
        Modal.confirm({
            title: "Are you sure you want to delete this user record?",
            okText: "Yes",
            okType: "danger",
            onOk: () => {
                const deleteUser = orderStore.listUser.filter(
                    (user) => user.id !== record.id
                );
                dispatch.users.setListOrder(deleteUser)
            },
        });
    };

    const onEditUser = (record) => {
        setIsEditing(true);
        setEditingUser({ ...record });
    };

    const resetEditing = () => {
        setIsEditing(false);
        setEditingUser(null);
    };

    return (
        <>
            <Space wrap>
                <Button type="primary" onClick={onAddUser}>
                    <UserAddOutlined />
                    Add a new User
                </Button>
            </Space>
            <Table columns={columns} dataSource={orderStore.listUser} />

            <Modal
                footer={null}
                title="Add User"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form
                    form={form}
                    name="validateOnly"
                    layout="vertical"
                    onFinish={onFinish}

                >
                    <Form.Item
                        name={["user", "name"]}
                        label="Name"
                        rules={[
                            {
                                required: true,
                                message: "Please enter the name",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={["user", "email"]}
                        label="Email"
                        rules={[
                            {
                                required: true,
                                message: "Please enter the email",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={["user", "address"]}
                        label="Address"
                        rules={[
                            {
                                required: true,
                                message: "Please enter the address",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item  {...tailLayout}>
                        <Space size={"middle"}>
                            <Button type="primary" htmlType="submit" style={{ marginLeft: 12 }}>
                                Add
                            </Button>
                            <Button htmlType="button" onClick={onReset}>
                                Reset
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Modal>

            <Modal
                title="Edit User"
                open={isEditing}
                okText="Save"
                onCancel={resetEditing}
                onOk={() => {
                    const updateUser = orderStore.listUser.map(
                        (user) => {

                            if (user.id === editingUser.id) {
                                return editingUser;
                            } else {
                                return user;
                            }
                        }
                    );
                    dispatch.users.setListOrder(updateUser)
                    resetEditing();
                }}
            >
                <Form form={form} name="validateOnly" layout="vertical">
                    <Form.Item
                        label="Name"
                        rules={[
                            {
                                required: true,
                                message: "Please enter the name",
                            },
                        ]}
                    >
                        <Input
                            value={editingUser?.name}
                            onChange={(e) =>
                                setEditingUser((prevUser) => ({
                                    ...prevUser,
                                    name: e.target.value,
                                }))
                            }
                        />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        rules={[
                            {
                                required: true,
                                message: "Please enter the email",
                            },
                        ]}
                    >
                        <Input
                            value={editingUser?.email}
                            onChange={(e) =>
                                setEditingUser((prevUser) => ({
                                    ...prevUser,
                                    email: e.target.value,
                                }))
                            }
                        />
                    </Form.Item>
                    <Form.Item
                        label="Address"
                        rules={[
                            {
                                required: true,
                                message: "Please enter the address",
                            },
                        ]}
                    >
                        <Input
                            value={editingUser?.address}
                            onChange={(e) =>
                                setEditingUser((prevUser) => ({
                                    ...prevUser,
                                    address: e.target.value,
                                }))
                            }
                        />
                    </Form.Item>
                </Form>
            </Modal >
        </>
    );
};

export default Order;

