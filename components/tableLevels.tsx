import style from "../styles/components/tableLevels.module.scss";

const TableLevels = () => {
	return (
		<div className={style.ContainerTableLevels}>
			<table className={style.TableLevels}>
				<thead>
					<tr>
						<th>Nome</th>
						<th>Tipo</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>100</td>
						<td>Básico</td>
					</tr>
					<tr>
						<td>200</td>
						<td>Intermediário</td>
					</tr>
					<tr>
						<td>300</td>
						<td>Avançado</td>
					</tr>
					<tr>
						<td>400</td>
						<td>Expert</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default TableLevels;
