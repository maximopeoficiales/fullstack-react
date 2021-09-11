import { clientApi } from "../../../api/ClientApi";
import { DashboardData } from "../../../api/entitys/dashboard.entity";
import Spinner from "../../../components/ui/Spinner/Spinner";
import CardColor from "../../../components/ui/CardColor/CardColor";
import { CardColors } from "../../../components/ui/CardColor/types/CardColors";
import ChartVerticalBar from "../../../components/ChartVerticalBar/ChartVerticalBar";
import { useAsync } from "../../../hooks/useAsync";

interface MyProps {}
const defaultProps = {};
const DashboardPage = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const {} = props;

  const { error, loading, res } = useAsync<DashboardData>(
    clientApi.getDataDashboard
  );
  return (
    <div data-testid="DashboardPage" className="fadein">
      <h1 className="my-4 text-center">Dashboard</h1>
      <div className="row justify-content-center">
        {loading ? (
          <Spinner />
        ) : (
          <>
            <div className="col-md-5">
              <div className="row">
                <div className="col-md-6 p-2">
                  <CardColor
                    bgColor={CardColors.DARK}
                    headerText="Information"
                    title="Average Ages"
                  >
                    <div className="card-text">
                      <b>{res?.averageAge}</b> years old
                    </div>
                  </CardColor>
                </div>
                <div className="col-md-6 p-2">
                  <CardColor
                    bgColor={CardColors.DANGER}
                    headerText="Information"
                    title="Customers Registered Today"
                  >
                    <div className="card-text">
                      <b>{res?.clientsRegistereds}</b> clients
                    </div>
                  </CardColor>
                </div>

                <div className="col-md-6 p-2">
                  <CardColor
                    bgColor={CardColors.PRIMARY}
                    headerText="Clients Adults"
                    title="Clients Adults +18"
                  >
                    <div className="card-text">
                      <b>{res?.clientsAdults}</b> clients
                    </div>
                  </CardColor>
                </div>

                <div className="col-md-6 p-2">
                  <CardColor
                    bgColor={CardColors.INFO}
                    headerText="Image Ramdom"
                    title=""
                  >
                    <div className="card-text">
                      <img
                        src="https://picsum.photos/200"
                        alt="img-ramdom"
                        className="img-fluid rounded-circle"
                        // width="100%"
                        // height="100%"
                      />
                    </div>
                  </CardColor>
                </div>
              </div>
            </div>
            <div className="col-md-7 my-2">
              <ChartVerticalBar dataSet={res?.clientsLetters} />x
            </div>
          </>
        )}
        {error && <h2>Ocurrio un error: {error}</h2>}
      </div>
    </div>
  );
};

export default DashboardPage;
