import classNames from "classnames";
import { FC } from "react";

export interface ListItem {
	id: string;
	content: string;
}

interface ListProps {
	items: ListItem[];
	type?: "ul" | "ol";
	variant?: "standard" | "verticalSeparation";
	listContainerClassname?: string;
	listClassname?: string;
}
const List: FC<ListProps> = ({
	items,
	type = "ul",
	listClassname = "",
	listContainerClassname = "",
	variant = "standard",
}) => {
	const ListTag = type === "ul" ? "ul" : "ol";

	const listClasses = classNames("text-sm", listClassname);
	const listContainerClasses = classNames(
		{
			"divide-y divide-gray-200": variant === "verticalSeparation",
			"list-disc": variant === "standard",
		},
		listContainerClassname,
	);
	return (
		<ListTag className={listContainerClasses}>
			{items.map((item) => (
				<li key={item.id} className={listClasses}>
					{item.content}
				</li>
			))}
		</ListTag>
	);
};

export default List;
