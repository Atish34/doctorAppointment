import{r as c,t as S,z as p,A as b,B as f,C as v,y as i,j as e}from"./index-V72yjM_x.js";import{u as N,c as T,a}from"./index.esm-Cy5vp3Bt.js";const g=()=>{const[d,l]=c.useState(null),{doctorId:r}=S(s=>s.auth.doctor),{data:o}=p(r),[x,{isSuccess:u}]=b(),[j,{isSuccess:h}]=f(),[y,{isSuccess:m}]=v(),t=N({enableReinitialize:!0,initialValues:d||{day:"",date:"",startTime:"",endTime:""},validationSchema:T({day:a().required("Enter day"),date:a().required("Enter date"),startTime:a().required("Enter start time"),endTime:a().required("Enter end time")}),onSubmit:(s,{resetForm:n})=>{d?(j({_id:d._id,...s}),l(null)):x({doctorId:r,...s}),n()}});return c.useEffect(()=>{u&&i.success("Schedule added successfully!")},[u]),c.useEffect(()=>{h&&i.success("Schedule updated successfully!")},[h]),c.useEffect(()=>{m&&i.success("Schedule deleted successfully!")},[m]),e.jsx("div",{className:"container mt-4",children:e.jsx("div",{className:"row justify-content-center",children:e.jsxs("div",{className:"col-md-8",children:[e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header",children:"Manage Your Schedule"}),e.jsx("div",{className:"card-body",children:e.jsxs("form",{onSubmit:t.handleSubmit,children:[e.jsxs("div",{className:"row mb-3",children:[e.jsx("div",{className:"col-md-3",children:e.jsxs("select",{className:"form-control",...t.getFieldProps("day"),children:[e.jsx("option",{value:"",children:"Select Day"}),e.jsx("option",{value:"Monday",children:"Monday"}),e.jsx("option",{value:"Tuesday",children:"Tuesday"}),e.jsx("option",{value:"Wednesday",children:"Wednesday"}),e.jsx("option",{value:"Thursday",children:"Thursday"}),e.jsx("option",{value:"Friday",children:"Friday"}),e.jsx("option",{value:"Saturday",children:"Saturday"}),e.jsx("option",{value:"Sunday",children:"Sunday"})]})}),e.jsx("div",{className:"col-md-3",children:e.jsx("input",{type:"date",className:"form-control",...t.getFieldProps("date")})}),e.jsx("div",{className:"col-md-3",children:e.jsx("input",{type:"time",className:"form-control",...t.getFieldProps("startTime")})}),e.jsx("div",{className:"col-md-3",children:e.jsx("input",{type:"time",className:"form-control",...t.getFieldProps("endTime")})})]}),e.jsx("button",{type:"submit",className:d?"btn btn-info":"btn btn-success",children:d?"Update Schedule":"Save Schedule"}),d&&e.jsx("button",{type:"button",className:"btn btn-secondary ms-2",onClick:()=>l(null),children:"Cancel"})]})})]}),e.jsx("div",{className:"container mt-5",children:o&&e.jsxs("table",{className:"table table-bordered table-striped table-hover",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Day"}),e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Start Time"}),e.jsx("th",{children:"End Time"}),e.jsx("th",{children:"Actions"})]})}),e.jsx("tbody",{children:o.result.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:s.day}),e.jsx("td",{children:s.date}),e.jsx("td",{children:s.startTime}),e.jsx("td",{children:s.endTime}),e.jsxs("td",{children:[e.jsx("button",{onClick:n=>l(s),className:"btn btn-sm btn-warning ",children:"edit"}),e.jsx("button",{onClick:n=>y(s._id),className:"btn btn-sm btn-danger ",children:"delete"})]})]},s._id))})]})})]})})})};export{g as default};
