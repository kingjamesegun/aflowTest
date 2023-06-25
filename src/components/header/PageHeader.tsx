import React from "react";

type PageHeaderProps = {
	title: string;
	desc: string;
};

const PageHeader = ({ title, desc }: PageHeaderProps) => {
	return (
		<div className="mt-10">
			<h1 className="font-inter text-4xl font-bold">{title}</h1>
			<p className="text-sm font-inter text-gray200 ">{desc}</p>
		</div>
	);
};

export default PageHeader;
