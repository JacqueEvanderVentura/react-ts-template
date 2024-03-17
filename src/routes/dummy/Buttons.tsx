import { Button } from "../../components";

export const Buttons = () => {
	return (
		<div className="grid grid-cols-3 gap-2">
			<Button textSize="large">Large cool Button</Button>
			<Button textSize="medium">Medium cool Button</Button>
			<Button textSize="small">Small cool Button</Button>
			<Button textSize="medium" variant="primary">
				Primary variant
			</Button>
			<Button textSize="medium" variant="secondary">
				Secondary variant
			</Button>
			<Button textSize="medium" className="bg-green-300 hover:bg-green-500 active:bg-green-800 text-black">
				Custom button
			</Button>
		</div>
	);
};
