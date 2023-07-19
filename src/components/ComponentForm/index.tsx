import { FieldError, FieldErrorsImpl, Merge, UseFormRegisterReturn } from "react-hook-form";
import { ComponentInfo } from "../../models/ComponentInfo";
import "./styles.css";
import useComponentsByType from "../../hooks/useComponentsByType";
import Peca from "../../models/Peca";

interface Props {
  idList: Record<string, string>;
  registerArgs: UseFormRegisterReturn;
  error: FieldError | Merge<FieldError, FieldErrorsImpl> | undefined
  info: ComponentInfo;
}

const ComponentForm = ({idList, registerArgs, error, info}: Props) => {
  const {
    data: resultIds,
    error: errorIds,
  } = useComponentsByType(info.raw);

  const elements: Peca[] = resultIds?.data || [];

  if (errorIds) {
    throw errorIds;
  }

  const createIds = () => {
    const content: JSX.Element[] = [];

    content.push(
      <option key={`${info.raw}-empty`} value="" />
    );

    if (elements.length > 0) {
      elements.forEach((element, index) => {
        content.push(
          <option key={`${info.raw}-${index}`}>
            {element.id}
          </option>
        );
      });
    }

    return content;
  }

  return (
    <>
      <div className="container col-12 col-md-6 col-xl-4 d-flex justify-content-center">
        <div className="column mb-2 rounded build-label bg-dark w-100">
          <label htmlFor={`form-${info.raw}`} className="fw-bold build-label text-center text-white p-2 bg-dark bg-gradient rounded w-100">
            {info.name}
          </label>
          <div className="component-form w-100">
            <div className={`m-2 ${error ? "is-invalid" : ""}`}>
              <select
                {...registerArgs}
                className="h-100 w-100 text-center bg-light rounded fw-semibold"
                name={`select-${info.raw}`}
                id={`select-${info.raw}`}
                onChange={(event) => idList[info.raw] = event.target.value}
              >
                {createIds()}
              </select>
            </div>
            <div className="invalid-feedback p-2 pt-0">
              {
                error
                  ? error.message as string
                  : null
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ComponentForm;