import TableRow from "./TableRow";
import "../styles/Table.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Table(props) {
    const [retakeInfo, setRetakeInfo] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/schedule/retake_info?course="+props.course)
            .then(
                response => {
                    console.log("RESPONSE :" + JSON.stringify(response));
                    setRetakeInfo(response.data);
                },
                error => {
                    console.error("Failed to execute request: " + error);
                })
    }, [props.course]);

    const tableHead = ["Кафедра", "Дисциплина", "Дата", "Время", "Номер аудитории", "Группа", "Преподаватель", "Примечание"];

    return (
        <div className="retake-table">
            <table>
                <thead><TableRow data={tableHead}></TableRow></thead>
                <tbody>
                    {retakeInfo.map(item => (
                        <tr>
                            <td>{item.department}</td>
                            <td>{item.subject}</td>
                            <td>{item.date}</td>
                            <td>{item.time}</td>
                            <td>{item.place}</td>
                            <td>{item.group[0]}</td>
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