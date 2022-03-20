import SearchBox from "./SearchBox";
import Table from "./Table"
import "../styles/MainContent.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { matchSorter } from "match-sorter";

function MainContent(props) {
    const [retakeInfo, setRetakeInfo] = useState([]);
    const [inputValue, setInputValue] = useState("");

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

    function search(data) {
        return matchSorter(data, inputValue, {keys: ['date', 'time', 'place', 'note', 'teacher', 'group.*', 'subject', 'department']})
    }

    return (
        <div className="main-content">
            <SearchBox inputValue={inputValue} setInputValue={setInputValue}></SearchBox>
            <Table retakeInfo={search(retakeInfo)}></Table>
        </div>
    );
}

export default MainContent;