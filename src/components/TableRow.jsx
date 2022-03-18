function tableRow(props) {
    const elements = [];
    console.log(props.data);
    for (let index = 0; index < props.data.length; index++) {
        elements.push(<td>{props.data[index]}</td>);
    }
    return (
        <tr>
            {elements}
        </tr>
    );
}

export default tableRow;