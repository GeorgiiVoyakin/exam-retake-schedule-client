import TableRow from "./TableRow";
import "../styles/Table.css";

function Table(props) {
    const tableHead = ["Кафедра", "Дисциплина", "Дата", "Время", "Номер аудитории", "Группы", "Преподаватель", "Примечание"];

    return (
        <div className="retake-table">
            <table>
                <thead><TableRow data={tableHead}></TableRow></thead>
                <tbody>
                    {props.retakeInfo.map(item => (
                        <tr>
                            <td>{item.department}</td>
                            <td>{item.subject}</td>
                            <td>{item.date}</td>
                            <td>{item.time}</td>
                            <td>{item.place}</td>
                            <td>{item.group.join(", ")}</td>
                            <td>{item.teacher}</td>
                            <td>{item.note}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;