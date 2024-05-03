function Table(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>UserID</th>
          <th>ID</th>
          <th>Title</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        {props.toDos.map(function (row) {
          return (
            <tr key={row.id}>
              <td>{row.userId}</td>
              <td>{row.id}</td>
              <td>{row.title}</td>
              <td>{row.completed ? "Yes" : "No"}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
