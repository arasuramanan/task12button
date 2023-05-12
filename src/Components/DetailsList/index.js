import { useFormik } from "formik";
import axios from "axios";

let count = 1;
function DetailsList() {
  const apple = (data) => {
    console.log(data);
    fetch(`localhost:5000/details`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
  };

  const formik = useFormik({
    initialValues: {
      clientName: "",
      TemplateCategory: "",
      TemplateType: "",
      TemplateName: "",
      TemplateContent: "",
      TemplateVariable: "",
    },

    onSubmit:  (values) => {
      console.log(values);
      
    },
  });

  const handleClick = () => {
    formik.setValues({
      ...formik.values,
      TemplateContent: formik.values.TemplateContent
        ? `${formik.values.TemplateContent} ${"${name" + count + "} "}`
        : "${name" + count + "} ",
      TemplateVariable: `${formik.values.TemplateVariable} name${count}`,
    });
    count++;
  };


  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <div>
          <div className="mb-3 row">
            <label for="text" className="col-sm-2 col-form-label">
              Client Name*
            </label>
            <div className="col-sm-2">
              <input
                type="text"
                onChange={formik.handleChange}
                name="ClientName*"
                className="inputPassword"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label for="inputPassword" className="col-sm-2 col-form-label">
              Template Category
            </label>
            <div className="col-sm-2">
              <input
                type="text"
                onChange={formik.handleChange}
                name="TemplateCategory"
                className="inputPassword"
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label for="text" className="col-sm-2 col-form-label">
              Template Type
            </label>
            <div className="col-sm-3">
              <select
                className="form-select form-select-lg mb-3"
                onChange={formik.handleChange}
                name="TemplateType"
                aria-label=".form-select-lg example"
              >
                <option selected></option>
                <option value="1">DropDown1</option>
                <option value="2">DropDown2</option>
                <option value="3">DropDown3</option>
                <option value="4">DropDown4</option>
              </select>
            </div>
          </div>

          <div className="mb-3 row">
            <label for="inputPassword" className="col-sm-2 col-form-label">
              Template Name
            </label>
            <div className="col-sm-2">
              <input
                type="text"
                onChange={formik.handleChange}
                name="TemplateName"
                className="inputPassword"
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label for="inputPassword" className="col-sm-2 col-form-label">
              Template Content
            </label>
            <div className="col-sm-2">
              <textarea
                className="col-sm-12 col-form-label"
                id="input1"
                value={formik.values.TemplateContent}
                onChange={formik.handleChange}
                name="TemplateContent"
              ></textarea>
            </div>
          </div>
          <div className="mb-3 row">
            <label for="inputPassword" className="col-sm-2 col-form-label"></label>
            <div className="col-sm-2">
              <button type="button" onClick={handleClick}>
                Click Me
              </button>
            </div>
          </div>

          <div className="mb-3 row">
            <label for="inputPassword" className="col-sm-2 col-form-label">
              Template Variable
            </label>
            <div className="col-sm-2">
              <textarea
                className="col-sm-12 col-form-label"
                id="input1"
                value={formik.values.TemplateVariable}
                onChange={formik.handleChange}
                name="TemplateVariable"
              ></textarea>
            </div>
          </div>

          <div className="col-sm-2">
            <button
              id="button"
              onChange={formik.handleChange}
              name="ClickMe"
              className="inputPassword"
            >
              Submit
            </button>


            
        
          </div>
        </div>
      </div>
    </form>
  );
}
export default DetailsList;
