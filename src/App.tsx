import { useState, ChangeEvent } from "react";
import "./App.scss";
import { Button, Input, Heading, Datalist } from "./components";

function App() {
	const [datalistValue, setDatalistValue] = useState<string | number>();
	function handleDatalistChange(e: ChangeEvent<HTMLInputElement>) {
		e.preventDefault();

		setDatalistValue(e.target.value);
	}

	return (
		<div className="flex flex-col justify-center items-center w-full">
			<div className="flex flex-col justify-center items-center w-5/12  gap-2">
				<Heading level="h2">Welcome to my template :)</Heading>
				<div className="flex flex-row gap-2">
					<Input placeholder="Input" type="text" />
					<Input placeholder="Type number" type="number" />
					<Input placeholder="Type email" type="email" />
					<Input placeholder="Type password" type="password" />
					<Input placeholder="Type url" type="url" />
					<Input type="checkbox" />
					<Input type="radio" />
					<Input type="date" />
					<Input className="w-20 h-11" type="color" />
				</div>
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
					<Button
						textSize="medium"
						className="bg-green-300 hover:bg-green-500 active:bg-green-800 text-black"
					>
						Custom button
					</Button>
				</div>
				<div className="flex flex-row gap-3">
					<Datalist
						selectedValue={datalistValue ?? "Datalist"}
						onChange={handleDatalistChange}
					>
						<option value="Datalist">From my component library</option>
						<option value="Value">Abc</option>
						<option value="Arroz">Plato típico</option>
						<option value="Soda">Beverage</option>
						<option value="Mismo value y label">Mismo value y label</option>
					</Datalist>
				</div>
			</div>
		</div>
	);
}

export default App;
