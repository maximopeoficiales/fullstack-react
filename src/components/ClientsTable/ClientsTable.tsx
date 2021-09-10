import { UpdateClientDto } from "../../api/dto/update-client.dto";

interface MyProps {
  data: UpdateClientDto[];
}
const ClientsTable = (props: MyProps) => {
  const { data } = props;
  return (
    <div data-testid="ClientsTable" className="">
      {data.length > 0 ? (
        <table className="table ">
          <thead>
            <tr>
              <th>Name</th>
              <th>Lastname</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {data.map((client) => (
              <tr key={client.id}>
                <td>{client.name}</td>
                <td>{client.lastname}</td>
                <td>{client.dateBirthday}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1>ClientsTable component</h1>
      )}
    </div>
  );
};

export default ClientsTable;
