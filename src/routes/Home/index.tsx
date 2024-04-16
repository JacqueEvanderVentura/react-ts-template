import Header from "../../components/Header";

const Home = () => {
	return (
		<div className="text-white">
			<div
				className="bg-cover z-0 absolute bg-center bg-no-repeat h-screen w-screen "
				style={{ backgroundImage: "url('src/assets/images/bg/bg-landing-page.svg')" }}
			/>
			<div className="bg-[#0008] absolute z-10  h-full w-full" />
			<div className="absolute z-20">
				<Header />
			</div>
		</div>
	);
};

export default Home;
