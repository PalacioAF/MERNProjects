import React from "react";
import { Button, Tooltip } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";

const AddProyect = ({ showModal }) => {
	return (
		<Tooltip title="Add Proyect">
			<Button
				type="primary"
				style={{ marginBottom: "16px", float: "right" }}
				icon={<PlusCircleFilled />}
				size="large"
				shape="round"
				onClick={showModal}
			>
				Add Proyect
			</Button>
		</Tooltip>
	);
};

export default AddProyect;
