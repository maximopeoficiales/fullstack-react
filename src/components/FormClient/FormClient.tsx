import { useFormik } from "formik";
import { CreateClientDto } from "../../api/dto/create-client.dto";
import { Client } from "../../api/entitys/client.entity";
import { createClientSchema } from "../../api/validations/client.validation";
import { showErrors } from "../../utils/utils";
import HelpText from "../HelpText/HelpText";

interface MyProps {
  saveClient(client: CreateClientDto): void;
}
const FormClient = (props: MyProps) => {
  const { saveClient } = props;

  const initialProduct: Client = {
    name: "",
    lastname: "",
    dateBirthday: "",
  };

  const { handleChange, handleSubmit, values, errors, isValid } = useFormik({
    initialValues: initialProduct,
    onSubmit: (values: Client, { resetForm }) => {
      // reseteo el formulario despues de crear el registro
      saveClient(values);
      resetForm({
        values: initialProduct,
      });
    },
    validationSchema: createClientSchema,
  });
  return (
    <div data-testid="FormClient" className="">
      <form action="" onSubmit={handleSubmit}>
        <div className="my-2">
          <div className="form-group">
            <label html-for="name">Name:</label>
            <input
              id="name"
              onChange={handleChange}
              value={values.name}
              type="text"
              name="name"
              className="form-control"
              placeholder="Example: Maximo"
              aria-describedby="helpId"
            />
          </div>
          <HelpText visible={showErrors(errors.name)}>{errors.name}</HelpText>

          <div className="form-group">
            <label html-for="lastname">Lastname:</label>
            <input
              id="lastname"
              onChange={handleChange}
              value={values.lastname}
              type="text"
              name="lastname"
              placeholder="Example: Apaza"
              className="form-control"
            />
          </div>
          <HelpText visible={showErrors(errors.lastname)}>
            {errors.lastname}
          </HelpText>

          <div className="form-group">
            <label html-for="dateBirthday">Date Birthday:</label>
            <input
              id="dateBirthday"
              onChange={handleChange}
              value={values.dateBirthday}
              type="date"
              name="dateBirthday"
              placeholder="Example: Apaza"
              className="form-control"
            />
          </div>
          <HelpText visible={showErrors(errors.dateBirthday)}>
            {errors.dateBirthday}
          </HelpText>
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-lg d-block w-100"
          disabled={!isValid}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default FormClient;
