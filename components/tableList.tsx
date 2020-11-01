import style from "../styles/components/tableList.module.scss";
import DataResponse from "../DataResponse";

interface Props {
	data: DataResponse[];
	typeTable: string;
}

const TableList = ({ data, typeTable }: Props) => {
	return (
		<div className={style.ContainerTableListItems}>
			<table className={style.TableListItems}>
				<thead>
					<tr>
						<th>Nome</th>
						<th>Nível</th>
						<th>Link</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) =>
						item.category === typeTable ? (
							<tr key={index}>
								<td>{item.name}</td>
								<td>{item.level}</td>
								<td>
									<a href={item.link} target="__blank" rel="noopener">
										Ver Design
									</a>
								</td>
							</tr>
						) : null
					)}
				</tbody>
			</table>
		</div>
	);
};

export default TableList;
