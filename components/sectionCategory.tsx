import style from "../styles/components/sectionCategory.module.scss";
import TableList from "./tableList";
import DataResponse from "../DataResponse";

interface DataProp {
	data: DataResponse[];
	title: string;
	typeTable: string;
}

function ListItems({ data, title, typeTable }: DataProp) {
	return (
		<section className={style.containerSection}>
			<header>
				<h1>
					{title}{" "}
					<span>
						Arraste a tabela para o lado para visualizar o resto do contéudo
					</span>
				</h1>
			</header>
			<TableList data={data} typeTable={typeTable} />
		</section>
	);
}

export default ListItems;
