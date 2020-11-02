import Header from "../components/header";
import SectionCategory from "../components/sectionCategory";
import style from "../styles/pages/home.module.scss";
import StyleSectionCategory from "../styles/components/sectionCategory.module.scss";
import DataResponse from "../DataResponse";
import TableLevels from "../components/tableLevels";
import Head from "next/head";
import LayoutService from "../services/layoutsService";

interface DataProp {
	data: DataResponse[];
}

function Home({ data }: DataProp) {
	return (
		<>
			<Head>
				<title>Layouts To Clone</title>
			</Head>

			<Header />

			<article id={style.containerHome}>
				<section className={StyleSectionCategory.containerSection}>
					<header>
						<h1>
							Level Layouts
							<span>
								Arraste a tabela para o lado para visualizar o resto do contéudo
							</span>
						</h1>
					</header>
					<TableLevels />
				</section>
				<SectionCategory data={data} title="dashboard" typeTable="dashboard" />
				<SectionCategory
					data={data}
					title="landing page"
					typeTable="landing page"
				/>
			</article>
		</>
	);
}

export async function getServerSideProps() {
	// let data = await LayoutService.GetLayouts();
	let data = [];

	return {
		props: { data: data },
	};
}

export default Home;
