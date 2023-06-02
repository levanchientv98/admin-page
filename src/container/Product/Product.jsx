import { Button, Table, Modal, Input, Space, Form } from "antd";
import React, { useState, useEffect } from "react";
import { EditOutlined, DeleteOutlined, UserAddOutlined, UserSwitchOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";

const Product = () => {
    const [form] = Form.useForm();
    const [isEditing, setIsEditing] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
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
            title: "Product Name",
            dataIndex: "title",
        },
        {
            key: "3",
            title: "Description",
            dataIndex: "description",
        },
        {
            key: "4",
            title: "image",
            dataIndex: "thumbnail",
            render: (text) => {
                return (
                    <img style={{ width: 200, height: 100 }} src={text} alt="img-product" />
                );
            },
        },
        {
            key: "5",
            title: "Price",
            dataIndex: "price",
            render: (text) => {
                return (
                    <span style={{ color: '#045211', fontWeight: "bold" }}>$ {text}</span>
                );
            }
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
                                onEditProduct(record);
                            }}
                            style={{ color: "#097017" }}
                        />
                        <DeleteOutlined
                            onClick={() => {
                                onDeleteProduct(record);
                            }}
                            style={{ color: "red", marginLeft: 12 }}
                        />

                    </>
                );
            },
        },
    ];

    // const [users, setUsers] = useState(dataSource);


    const productsStore = useSelector((state) => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch.products.fetchProducts();
    }, [dispatch.products]);
    console.log(productsStore.listProduct);

    const onFinish = (values) => {
        const newProduct = [...productsStore.listProduct, {
            id: Math.floor(Math.random() * 100) + 1, // Generate a unique key for the new user
            title: values.product.title,
            description: values.product.description,
            price: values.product.price,
        }];
        // Update the Users state with the new user
        dispatch.users.setListProduct(newProduct);
        // setUsers([...users, newUser]);
        setIsModalOpen(false); // Close the modal after submitting the form
    };

    const onAddProduct = () => {
        setIsModalOpen(true);
    };

    const onDecentralization = () => {

    };

    const onDeleteProduct = (record) => {
        Modal.confirm({
            title: "Are you sure you want to delete this user record?",
            okText: "Yes",
            okType: "danger",
            onOk: () => {
                const deleteUser = productsStore.listProduct.filter(
                    (user) => user.id !== record.id
                );
                dispatch.users.setListProduct(deleteUser)
            },
        });
    };

    const onEditProduct = (record) => {
        setIsEditing(true);
        setEditingProduct({ ...record });
    };

    const resetEditing = () => {
        setIsEditing(false);
        setEditingProduct(null);
    };

    return (
        <>
            <Space wrap>
                <Button type="primary" onClick={onAddProduct}>
                    <UserAddOutlined />
                    Add a new Product
                </Button>
            </Space>
            <Table columns={columns} dataSource={productsStore.listProduct} />

            <Modal
                footer={null}
                title="Add Product"
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
                        name={["product", "name"]}
                        label="Product name"
                        rules={[
                            {
                                required: true,
                                message: "Please enter the product name",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={["product", "description"]}
                        label="Description"
                        rules={[
                            {
                                required: true,
                                message: "Please enter the description",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={["product", "price"]}
                        label="Price"
                        rules={[
                            {
                                required: true,
                                message: "Please enter the price",
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
                    const updateProduct = productsStore.listProduct.map(
                        (product) => {

                            if (product.id === editingProduct.id) {
                                return editingProduct;
                            } else {
                                return product;
                            }
                        }
                    );
                    dispatch.products.setListProduct(updateProduct)
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
                            value={editingProduct?.name}
                            onChange={(e) =>
                                setEditingProduct((prevUser) => ({
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
                            value={editingProduct?.email}
                            onChange={(e) =>
                                setEditingProduct((prevUser) => ({
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
                            value={editingProduct?.address}
                            onChange={(e) =>
                                setEditingProduct((prevUser) => ({
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

export default Product;

