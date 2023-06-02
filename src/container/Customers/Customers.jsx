import { Table, Button } from 'antd';
import { useSelector } from 'react-redux'
import Excel from "components/Excel";


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
        <>
            <Excel
                fileName="export-user"
                data={[
                    {
                        columns: [
                            {
                                title: "Customer Id",
                                dataIndex: "id",
                                width: 5,
                            },
                            {
                                title: "Name",
                                dataIndex: "name",
                                width: 20,
                            },
                            {
                                title: "Email",
                                dataIndex: "email",
                                width: 50,
                            },
                        ],
                        data: customersStore.listCustomers,
                        tabName: "info",
                    },
                    {
                        columns: [
                            {
                                title: "Name",
                                dataIndex: "name",
                                width: 30,
                            },
                            {
                                title: "Phone",
                                dataIndex: "phone",
                                width: 30,
                            },
                        ],
                        data: customersStore.listCustomers,
                        tabName: "contact",
                    },
                ]}
            >
                <Button style={{ width: 200, fontWeight: 700, borderColor: "#0270d6" }}>Export customers</Button>
            </Excel>
            <Table columns={columns} dataSource={customersStore.listCustomers}></Table>

        </>
    );
};


export default Customers;