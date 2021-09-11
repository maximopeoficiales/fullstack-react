import Datatable from "react-data-table-component";
import { UpdateClientDto } from "../../api/dto/update-client.dto";
interface MyProps {
  data: UpdateClientDto[];
}
const DataTableClients = (props: MyProps) => {
  let { data } = props;
  const columnas = [
    {
      name: "Name",
      selector: (row: any) => row.name,
      sortable: false,
    },
    {
      name: "LastName",
      selector: (row: any) => row.lastname,
      sortable: false,
    },
    {
      name: "dateBirthday",
      selector: (row: any) => row.dateBirthday,
      sortable: false,
    },
  ];
  return (
    <div data-testid="DataTableClients" className="table-responsive">
      <Datatable
        columns={columnas}
        data={data as any}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="600px"
      />
    </div>
  );
};

export default DataTableClients;
