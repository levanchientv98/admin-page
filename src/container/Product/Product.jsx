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
            id: productsStore.listProduct.length + 1, // Generate a unique key for the new user
            title: values.product.title,
            description: values.product.description,
            price: values.product.price,
            discountPercentage: 12.96,
            rating: 4.69,
            stock: 94,
            brand: "Apple",
            category: "smartphones",
            thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            images: [
                "https://i.dummyjson.com/data/products/1/1.jpg",
                "https://i.dummyjson.com/data/products/1/2.jpg",
                "https://i.dummyjson.com/data/products/1/3.jpg",
                "https://i.dummyjson.com/data/products/1/4.jpg",
                "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
            ]

        }];
        // Update the Users state with the new user
        console.log(newProduct);
        dispatch.products.setListProduct(newProduct);
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
                const deleteProduct = productsStore.listProduct.filter(
                    (product) => product.id !== record.id
                );
                dispatch.products.setListProduct(deleteProduct)
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
                        name={["product", "title"]}
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
                title="Edit Product"
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
                        label="Product name"
                        rules={[
                            {
                                required: true,
                                message: "Please enter the product name",
                            },
                        ]}
                    >
                        <Input
                            value={editingProduct?.title}
                            onChange={(e) =>
                                setEditingProduct((prevUser) => ({
                                    ...prevUser,
                                    title: e.target.value,
                                }))
                            }
                        />
                    </Form.Item>
                    <Form.Item
                        label="Description"
                        rules={[
                            {
                                required: true,
                                message: "Please enter the description",
                            },
                        ]}
                    >
                        <Input
                            value={editingProduct?.description}
                            onChange={(e) =>
                                setEditingProduct((prevUser) => ({
                                    ...prevUser,
                                    description: e.target.value,
                                }))
                            }
                        />
                    </Form.Item>
                    <Form.Item
                        label="Price"
                        rules={[
                            {
                                required: true,
                                message: "Please enter price",
                            },
                        ]}
                    >
                        <Input
                            value={editingProduct?.price}
                            onChange={(e) =>
                                setEditingProduct((prevUser) => ({
                                    ...prevUser,
                                    price: e.target.value,
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

