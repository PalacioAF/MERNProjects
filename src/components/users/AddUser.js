import React from "react";
import { Button, Tooltip } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";

const AddUser = ({ showModal }) => {
	return (
		<Tooltip title="Add User">
			<Button
				type="primary"
				style={{ marginBottom: "16px", float: "right" }}
				icon={<PlusCircleFilled />}
				size="large"
				shape="round"
				onClick={showModal}
			>
				Add User
			</Button>
		</Tooltip>
	);
};

export default AddUser;
