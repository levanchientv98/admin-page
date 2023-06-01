import { Table } from 'antd';
import { useSelector } from 'react-redux'

const Customers = () => {

    const customersStore = useSelector((state) => state.customers);


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
    ];


    return (
        <Table columns={columns} dataSource={customersStore.listCustomers}></Table>
    );
};


export default Customers;