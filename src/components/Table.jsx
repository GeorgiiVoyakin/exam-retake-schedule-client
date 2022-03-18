import TableRow from "./TableRow";
import "../styles/Table.css";

function table() {
    const tableHead = ["Кафедра", "Предмет", "Группы"];
    const elements = [];
    elements.push(<thead><TableRow data={tableHead}></TableRow></thead>);
    // for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
        
    // }
    elements.push(<tbody></tbody>)
    return (
        <div className="retake-table">
            <table>
                {elements}
            </table>
        </div>
    );
}

export default table;