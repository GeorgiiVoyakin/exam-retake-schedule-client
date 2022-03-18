import SearchBox from "./SearchBox";
import Table from "./Table"
import "../styles/MainContent.css";

function mainContent() {
    return (
        <div className="main-content">
            <SearchBox></SearchBox>
            <Table></Table>
        </div>
    );
}

export default mainContent;