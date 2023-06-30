import React from "react";

type PageHeaderProps = {
	title: string;
	desc: string;
};

const PageHeader = ({ title, desc }: PageHeaderProps) => {
	return (
		<div className="mt-20">
			<h1 className="font-inter text-4xl font-bold">{title}</h1>
			<p className="text-sm font-inter mt-2 text-gray200 ">{desc}</p>
		</div>
	);
};

export default PageHeader;
