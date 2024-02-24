import "./App.scss";

import { useSnackbar } from "notistack";

import { Button, Input, Heading, Datalist, Select } from "./components";
import { useForm } from "react-hook-form";

function App() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const { enqueueSnackbar } = useSnackbar();

	function handleOnSubmitForm(formState: Record<string, any>) {
		console.info(formState);
		const content = (
			<div>
				{Object.entries(formState).map(([key, value]) => (
					<div key={key + value + Date.now()}>
						{key}: {String(value)}
					</div>
				))}
			</div>
		);

		enqueueSnackbar(content, {
			variant: "success",
			autoHideDuration: 5000,
		});
	}

	return (
		<div>
			<div className="flex flex-col justify-center items-center w-full">
				<div className="flex flex-col justify-center items-center w-5/12 gap-2">
					<Heading level="h2" className="my-8">
						Welcome to my template :)
					</Heading>

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
					<div className="w-full h-full border-3 border-black  ">
						<form onSubmit={handleSubmit(handleOnSubmitForm)} className="border-2 w-full p-3">
							<Heading level="h3">Form Component</Heading>
							<Input
								label="Email"
								type="email"
								name="email"
								placeholder="Type in your email"
								register={register("email")}
								errors={errors}
							/>
							<Input
								label="Password"
								type="password"
								name="password"
								placeholder="Type in your password"
								register={register("password")}
							/>
							{errors.password && <span>This field is required</span>}
							<Select
								name="exampleSelect"
								label="Example Select"
								defaultValue="Please select an option"
								register={register}
								errors={errors}
								required
							>
								<option>lorei lorai</option>
								<option>como tan mushasho</option>
								<option value="bien">lo veo muy</option>
							</Select>
							<Datalist
								register={register}
								required
								name="datalist"
								label="Choose from Datalist"
								errors={errors}
							>
								<option>Option 1</option>
								<option>Lotion 1</option>
								<option value="option2">Option 2</option>
							</Datalist>
							<Input register={register("URL")} name="URL" placeholder="Type in your URL" type="url" />
							<div className="flex flex-row justify-center gap-2">
								<Input
									type="radio"
									name="radioGroup"
									value="radio1"
									register={register("radioGroup")}
									label="Radio 1"
								/>

								<Input
									type="radio"
									name="radioGroup"
									value="radio2"
									register={register("radioGroup")}
									label="Radio 2"
								/>

								<Input
									type="radio"
									name="radioGroup"
									value="radio3"
									register={register("radioGroup")}
									label="Radio 3"
								/>
							</div>

							<div className="flex flex-row justify-center gap-2">
								<Input type="checkbox" name="checkbox1" register={register("checkbox1")} label="Checkbox  1" />

								<Input type="checkbox" name="checkbox2" register={register("checkbox2")} label="Checkbox  2" />

								<Input type="checkbox" name="checkbox3" register={register("checkbox3")} label="Checkbox  3" />
							</div>
							<Input register={register("date")} name="date" type="date" />
							<Input register={register("color")} name="color" className="w-20 h-20" type="color" />
							<div className="flex flex-row justify-end gap-2">
								<Button type="submit">Submit</Button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
