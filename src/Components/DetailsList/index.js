import { useFormik } from "formik";

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
      ClientName: "",
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
        ? `${formik.values.TemplateContent} ${"${variable" + count + "} "}`
        : "${variable" + count + "} ",
      TemplateVariable: `${formik.values.TemplateVariable} variable${count}`,
    });
    count++;
  };

  const handleChangeTemplateContent = (event) => {
    const { value } = event.target;
    const templateVariablePattern = /\${(.*?)}/g;
    const templateVariables = [...value.matchAll(templateVariablePattern)].map((match) => match[1]);

  formik.setValues({
    ...formik.values,
    TemplateContent: value,
    TemplateVariable: templateVariables.join(' '), // Joining template variables with a space
  });
};


 return (
   <form onSubmit={formik.handleSubmit}>
     <div>
       <div>
       <div className="mb-3 row">


<nav class="navbar navbar-expand-lg" style={{ backgroundColor: '#accbff' }}>
 <div class="container-fluid">
   <a className="navbar-brand me-auto mb-2 mb-lg-0" style={{ marginLeft: '10px', color: 'white' }} >Notice</a>
   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse" id="navbarText">
     <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       <li class="nav-item">
         <a class="nav-link active" aria-current="page" href="#" style={{ color: 'white' }}></a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="#" style={{ color: 'white' }}></a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="#" style={{ color: 'white' }}></a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="#" style={{ color: 'white' }}></a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="#" style={{ color: 'white' }}></a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="#" style={{ color: 'white' }}></a>
       </li>
     </ul>
     <div class="container-fluid">
   <a className="navbar-brand me-auto mb-2 mb-lg-0" style={{ float: 'right', marginRight: '20px', color: 'white' }}>Kaya Natarajan <span style={{ marginLeft: '5px' }}>|</span></a>
   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
     </button>
     </div>

   <a class="navbar-brand" style={{ color: 'white' }}> Sign Out </a>
   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
     </button>
   </div>
 </div>
</nav>

<nav class="navbar navbar-expand-lg bg-secondary">
 <div class="container-fluid">
   <a className="navbar-brand me-auto mb-2 mb-lg-0" style={{ marginLeft: '10px', color: 'yellow' }} >Dashboard</a>
   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse" id="navbarText">
     <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       <li class="nav-item">
         <a class="nav-link active" aria-current="page" href="#" style={{ color: 'yellow' }}>Profiles</a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="#" style={{ color: 'yellow' }}>Messages</a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="#" style={{ color: 'yellow' }}>Templates</a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="#" style={{ color: 'yellow' }}>Reports</a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="#" style={{ color: 'yellow' }}>Accounts</a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="#" style={{ color: 'yellow' }}>Settings</a>
       </li>
     </ul>
     <div class="container-fluid">
   <a className="navbar-brand me-auto mb-2 mb-lg-0" style={{ float: 'right', marginRight: '20px', color: 'yellow' }}>Business Test</a>
   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
     </button>
     </div>

   <a class="navbar-brand" style={{ color: 'yellow' }}>Admin</a>
   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
     </button> 
   </div>
 </div>
</nav> 


</div>
</div>
</div>



<div className="d-flex">
 <div className="btn-group me-3">
   <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: '#accbff', marginLeft: '100px' }}>
     Create
   </button>
   <ul className="dropdown-menu">
     {/* ... */}
   </ul>
 </div>

 <div className="btn-group">
   <button className="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ backgroundColor: '#888888', color: 'yellow' }}>
     Library Template
   </button>
   <ul className="dropdown-menu">
   <li><a href="#">Option 1</a></li>
 <li><a href="#">Option 2</a></li>
 <li><a href="#">Option 3</a></li>
   </ul>
 </div>
</div>
<div></div>

<div className="row">
 <label htmlFor="text" className="col-sm-2 col-form-label mt-4">Client Name</label>
 <div className="col-sm-2 mt-4">
   <input
     type="text"
     onChange={formik.handleChange}
     name="ClientName"
     className="inputPassword form-control"
   />
 </div>
</div>
<div className="row">
 <label htmlFor="text" className="col-sm-2 col-form-label mt-4">Template Category</label>
 <div className="col-sm-2 mt-4">
   <input
     type="text"
     onChange={formik.handleChange}
     name="TemplateCategory"
     className="inputPassword form-control"
   />
 </div>
</div>
          

    <div className="row">
 <label htmlFor="text" className="col-sm-2 col-form-label mt-4">Template Type</label>
 <div className="col-sm-2 offset-sm-0">
  <select
     className="col-sm-10 mt-4"
     onChange={formik.handleChange}
     name="TemplateType"
     aria-label=".form-select-lg example"
   >
     <option defaultValue="None">None</option>
     <option value="OTP">OTP</option>
     <option value="Transaction">Transaction</option>
     <option value="Promo">Promo</option>
   </select>
 </div>
</div> 

<div className="row">
 <label htmlFor="text" className="col-sm-2 col-form-label mt-4">Template Name</label>
 <div className="col-sm-2 offset-sm-0">
   <input
     type="text"
     onChange={formik.handleChange}
     name="TemplateName"
     className="inputPassword form-control"
   />
 </div>
</div>

<div className="row">
 <label htmlFor="text" className="col-sm-2 col-form-label mt-4">Template Content</label>
 <div className="col-sm-2">
 <textarea
               className="col-sm-12 col-form-label"
               id="input1"
               value={formik.values.TemplateContent}
               onChange={handleChangeTemplateContent}
               name="TemplateContent"
             ></textarea>
 </div>
 </div>


 <div className="mb-3 row">
           <label for="inputPassword" className="col-sm-2 col-form-label"></label>
           <div className="col-sm-2">
             <button type="button" onClick={handleClick}>
               Add variable
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

    </form>
  );
}
export default DetailsList;
