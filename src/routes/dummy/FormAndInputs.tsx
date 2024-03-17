import { enqueueSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { Heading, Input, Select, Datalist, Button } from "../../components";
import { useTranslation } from "react-i18next";

export const FormAndInputs = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	function handleOnSubmitForm(formState: Record<string, any>) {
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

	const { t } = useTranslation();
	return (
		<div className="w-full h-full border-2 p-3">
			<form onSubmit={handleSubmit(handleOnSubmitForm)} className="w-full">
				<Heading level="h3">{t("form-component")}</Heading>
				<Input
					label="Email"
					type="email"
					name="email"
					placeholder={t("placeholder-email")}
					register={register("email", { required: true })}
					errors={errors}
				/>
				<Input
					label="Password"
					type="password"
					name="password"
					placeholder={t("placeholder-password")}
					register={register("password")}
				/>
				{errors.password && <span>{t("field-required")}</span>}
				<Select name="select" label="Select" register={register} errors={errors} required>
					<option value="lorei lorai">lorei lorai</option>
					<option value="como tan mushasho">como tan mushasho</option>
					<option value="bien">lo veo muy</option>
				</Select>
				<Datalist register={register} required name="datalist" label="Choose from Datalist" errors={errors}>
					<option>Option 1</option>
					<option>Lotion 1</option>
					<option value="option2">Option 2</option>
				</Datalist>
				<Input register={register("URL")} name="URL" placeholder="Type in your URL" type="url" />
				<div className="flex flex-row justify-center gap-2">
					<Input type="radio" name="radioGroup" id="radio1" value="radio1" register={register("radioGroup")} label="Radio 1" />

					<Input type="radio" name="radioGroup" id="radio2" value="radio2" register={register("radioGroup")} label="Radio 2" />

					<Input type="radio" name="radioGroup" id="radio3" value="radio3" register={register("radioGroup")} label="Radio 3" />
				</div>

				<div className="flex flex-row justify-center gap-2">
					<Input type="checkbox" name="checkbox1" register={register("checkbox1")} label="Checkbox  1" />

					<Input type="checkbox" name="checkbox2" register={register("checkbox2")} label="Checkbox  2" />

					<Input type="checkbox" name="checkbox3" register={register("checkbox3")} label="Checkbox  3" />
				</div>
				<Input register={register("date")} name="date" type="date" />
				<Input register={register("color")} name="color" className="w-20 h-20" type="color" />
				<div className="flex flex-row justify-end gap-2">
					<Button type="submit">{t("submit-button")}</Button>
				</div>
			</form>
		</div>
	);
};
