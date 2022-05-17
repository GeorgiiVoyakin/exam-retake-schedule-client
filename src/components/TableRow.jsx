function TableRow(props) {
  const elements = [];
  for (let index = 0; index < props.data.length; index++) {
    elements.push(<td>{props.data[index]}</td>);
  }
  return <tr>{elements}</tr>;
}

export default TableRow;
