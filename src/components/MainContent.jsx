import SearchBox from "./SearchBox";
import Table from "./Table"
import "../styles/MainContent.css";

function MainContent(props) {
    return (
        <div className="main-content">
            <SearchBox></SearchBox>
            <Table course={props.course}></Table>
        </div>
    );
}

export default MainContent;