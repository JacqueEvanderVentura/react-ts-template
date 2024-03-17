import React, { useState } from "react";

interface Option {
	value: string;
	alt: string;
	label?: string;
	imgSrc?: string;
}

interface CustomDropdownProps {
	options: Option[];
	onChange: (value: string) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ options, onChange }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(options[0].value);

	const toggleOpen = () => setIsOpen(!isOpen);
	const onOptionClick = (value: string) => {
		setSelectedOption(value);
		onChange(value);
		setIsOpen(false);
	};

	return (
		<div className="relative inline-block text-left">
			<div
				onClick={toggleOpen}
				className="cursor-pointer inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
				<img src={options.find((option) => option.value === selectedOption)?.imgSrc} className="h-5 w-5" />
				<span>{options.find((option) => option.value === selectedOption)?.label}</span>
			</div>
			{isOpen && (
				<div className="origin-top-right absolute right-0 mt-2 w-fit rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
					<div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
						{options.map((option) => (
							<div
								key={option.value}
								className="px-4 py-2 cursor-pointer text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
								role="menuitem"
								title={option.alt}
								onClick={() => onOptionClick(option.value)}>
								<img src={option.imgSrc} alt={option.alt} className="h-5 w-5" />
								<span>{option.label}</span>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default CustomDropdown;
