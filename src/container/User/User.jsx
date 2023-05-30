import React from "react";
import { PrimaryLayout } from "../../components/Layout";
import TableUser from "components/TableUser";

const User = () => {
    return (
        <PrimaryLayout title={"User"}>
            <TableUser></TableUser>
        </PrimaryLayout>
    );
};

export default User;