import { Button, Table, Modal, Input, Space, Form } from "antd";
import React, { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const TableUser = () => {
    const [form] = Form.useForm();
    const [isEditing, setIsEditing] = useState(false);
    const [editingStudent, setEditingStudent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const [dataSource] = useState([
        {
            id: 1,
            name: "John",
            email: "john@gmail.com",
            address: "John Address",
        },
        {
            id: 2,
            name: "David",
            email: "david@gmail.com",
            address: "David Address",
        },
        {
            id: 3,
            name: "James",
            email: "james@gmail.com",
            address: "James Address",
        },
        {
            id: 4,
            name: "Sam",
            email: "sam@gmail.com",
            address: "Sam Address",
        },
    ]);

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
            title: "Actions",
            render: (record) => {
                return (
                    <>
                        <EditOutlined
                            onClick={() => {
                                onEditStudent(record);
                            }}
                        />
                        <DeleteOutlined
                            onClick={() => {
                                onDeleteStudent(record);
                            }}
                            style={{ color: "red", marginLeft: 12 }}
                        />
                    </>
                );
            },
        },
    ];

    const [users, setUsers] = useState(dataSource);

    const onFinish = (values) => {
        const newUser = {
            id: (users.length + 1).toString(), // Generate a unique key for the new user
            name: values.user.name,
            email: values.user.email,
            address: values.user.address,
        };
        // Update the students state with the new student
        setUsers([...users, newUser]);
        setIsModalOpen(false); // Close the modal after submitting the form
    };

    const onAddUser = () => {
        setIsModalOpen(true);
    };

    const onDeleteStudent = (record) => {
        Modal.confirm({
            title: "Are you sure you want to delete this user record?",
            okText: "Yes",
            okType: "danger",
            onOk: () => {
                setUsers((prevStudents) => {
                    return prevStudents.filter((student) => student.id !== record.id);
                });
            },
        });
    };

    const onEditStudent = (record) => {
        setIsEditing(true);
        setEditingStudent({ ...record });
    };

    const resetEditing = () => {
        setIsEditing(false);
        setEditingStudent(null);
    };

    return (
        <>
            <Space wrap>
                <Button type="primary" onClick={onAddUser}>
                    Add a new User
                </Button>
            </Space>
            <Modal
                footer={null}
                title="Add User"
                visible={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form
                    form={form}
                    name="nest-messages"
                    onFinish={onFinish}
                    style={{
                        maxWidth: 600,
                    }}
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
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Add
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>

            <Table columns={columns} dataSource={users} />

            <Modal
                title="Edit User"
                visible={isEditing}
                okText="Save"
                onCancel={resetEditing}
                onOk={() => {
                    setUsers((prevStudents) =>
                        prevStudents.map((student) => {
                            if (student.id === editingStudent.id) {
                                return editingStudent;
                            } else {
                                return student;
                            }
                        })
                    );
                    resetEditing();
                }}
            >
                <Form form={form} name="validateOnly" layout="vertical">
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[
                            {
                                required: true,
                                message: "Please enter the name",
                            },
                        ]}
                    >
                        <Input
                            value={editingStudent?.name}
                            onChange={(e) =>
                                setEditingStudent((prevStudent) => ({
                                    ...prevStudent,
                                    name: e.target.value,
                                }))
                            }
                        />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                            {
                                required: true,
                                message: "Please enter the email",
                            },
                        ]}
                    >
                        <Input
                            value={editingStudent?.email}
                            onChange={(e) =>
                                setEditingStudent((prevStudent) => ({
                                    ...prevStudent,
                                    email: e.target.value,
                                }))
                            }
                        />
                    </Form.Item>
                    <Form.Item
                        name="address"
                        label="Address"
                        rules={[
                            {
                                required: true,
                                message: "Please enter the address",
                            },
                        ]}
                    >
                        <Input
                            value={editingStudent?.address}
                            onChange={(e) =>
                                setEditingStudent((prevStudent) => ({
                                    ...prevStudent,
                                    address: e.target.value,
                                }))
                            }
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default TableUser;

