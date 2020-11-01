import { useRef, useState } from "react";
import Header from "../components/header";
import style from "../styles/pages/registerItem.module.scss";
import RegisterService from "../services/registerService";
import NotificationService from "../services/toastifyService";

interface ValueInputs {
	name: string;
	link: string;
	level: string;
	category: string;
}

function RegisterItem() {
	const FormRef = useRef(null);
	const [valueInputs, setValueInputs] = useState<ValueInputs>({
		name: "",
		link: "",
		level: "100",
		category: "dashboard",
	});

	const HandleInput = (e: React.FormEvent<HTMLInputElement>) => {
		setValueInputs({
			...valueInputs,
			[e.currentTarget.name]: e.currentTarget.value,
		});
	};

	const HandleSelect = (e: React.FormEvent<HTMLSelectElement>) => {
		setValueInputs({
			...valueInputs,
			[e.currentTarget.name]: e.currentTarget.value,
		});
	};

	const SubmitForm = async (e: React.FormEvent) => {
		e.preventDefault();

		let status = await RegisterService.CreateLayout(valueInputs);

		if (status === "success") {
			FormRef.current.reset();
			NotificationService.Notification(
				"Layout cadastrado com sucesso!",
				"success"
			);
		} else {
			NotificationService.Notification("Não foi possível cadastrar o Layout");
		}
	};

	return (
		<>
			<Header />

			<article id={style.containerRegisterItem}>
				<header>
					<h1>Registrar Layout</h1>
				</header>

				<section className={style.containerForm}>
					<form ref={FormRef} onSubmit={e => SubmitForm(e)}>
						<section className={style.containerInput}>
							<label htmlFor="name">Nome</label>
							<input
								type="text"
								id="name"
								name="name"
								placeholder="Digite o Nome do Layout"
								onInput={e => HandleInput(e)}
							/>
						</section>

						<section className={style.containerInput}>
							<label htmlFor="link">Link</label>
							<input
								type="text"
								id="link"
								name="link"
								placeholder="Digite o Link do Layout"
								onInput={e => HandleInput(e)}
							/>
						</section>

						<section className={style.containerSelect}>
							<label htmlFor="level">Level:</label>

							<select onChange={e => HandleSelect(e)} name="level" id="level">
								<option value="100">100 - Básico</option>
								<option value="200">200 - Intermediário</option>
								<option value="300">300 - Avançado</option>
								<option value="400">400 - Expert</option>
							</select>
						</section>

						<section className={style.containerSelect}>
							<label htmlFor="category">Categoria:</label>

							<select
								onChange={e => HandleSelect(e)}
								name="category"
								id="category"
							>
								<option value="dashboard">Dashboard</option>
								<option value="landing page">Landing Page</option>
							</select>
						</section>

						<button type="submit">Registrar</button>
					</form>
				</section>
			</article>
		</>
	);
}

export default RegisterItem;
