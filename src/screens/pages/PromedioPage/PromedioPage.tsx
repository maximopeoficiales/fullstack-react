import { clientApi } from "../../../api/ClientApi";
import { DashboardData } from "../../../api/entitys/dashboard.entity";
import Spinner from "../../../components/Spinner/Spinner";
import { useAsync } from "../../../hooks/useAsync";

interface MyProps {}
const defaultProps = {};
const PromedioPage = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const {} = props;
  const { error, loading, res } = useAsync<DashboardData>(
    clientApi.getDataDashboard(),
    []
  );

  return (
    <div data-testid="PromedioPage" className="fadein">
      <div className="row justify-content-center">
        <div className="col-md-8">
          {loading ? (
            <>
              <Spinner />
            </>
          ) : (
            <>
              <h1 className="my-4">
                Average age of customers: <b>{res?.averageAge}</b> years old
              </h1>
              <img
                className="rounded"
                width="100%"
                height="400"
                src={
                  (res?.averageAge ?? 0) >= 18
                    ? "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2018/03/05/15202825364825.jpg"
                    : "https://cnnespanol.cnn.com/wp-content/uploads/2015/10/life-and-work-balance.png?w=460&h=260&crop=1"
                }
                alt="img-average"
              />
            </>
          )}
          {error && <h2>Ocurrio un error: {error}</h2>}
        </div>
      </div>
    </div>
  );
};

export default PromedioPage;
