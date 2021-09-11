import { clientApi } from "../../../api/ClientApi";
import { CreateClientDto } from "../../../api/dto/create-client.dto";
import { UpdateClientDto } from "../../../api/dto/update-client.dto";
import ClientsTable from "../../../components/ClientsTable/ClientsTable";
import FormClient from "../../../components/FormClient/FormClient";
import { useAsync } from "../../../hooks/useAsync";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../../../components/Spinner/Spinner";

interface MyProps {}
const defaultProps = {};
const HomePage = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const {} = props;

  const { error, loading, res } = useAsync<UpdateClientDto[]>(
    clientApi.getAll(),
    []
  );

  const saveClient = async (client: CreateClientDto) => {
    try {
      let newClient = await clientApi.create(client);
      toast(`New Customer ${newClient.name} ${newClient.lastname}`);
    } catch (error) {
      toast(`Error: ${error}`, {
        type: "error",
      });
    }
  };

  return (
    <div data-testid="HomePage" className="fadein">
      <ToastContainer />
      <h1 className="my-4">Customers</h1>

      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <div className="card-title">
                <h3>Create Customer</h3>
              </div>
              <FormClient saveClient={saveClient} />
            </div>
          </div>
        </div>

        <div className="col-md-8">
          {loading ? (
            <>
              <h1>Cargando Clientes.....</h1>
              <Spinner />
            </>
          ) : (
            <>
              <h2>List of Customers</h2>
              <ClientsTable data={res ?? []} />
            </>
          )}
          {error && <h2>Ocurrio un error: {error}</h2>}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
