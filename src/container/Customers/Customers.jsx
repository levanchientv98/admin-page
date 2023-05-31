import { Table } from 'antd';
import { PrimaryLayout } from 'components/Layout';
import { useSelector } from 'react-redux'

const Customers = () => {

    const usersStore = useSelector((state) => state.users);


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
        <PrimaryLayout title={"Customer"}>
            <Table columns={columns} dataSource={usersStore.listUser}></Table>
        </PrimaryLayout>
    );
};


export default Customers;