import{i as r,r as c,y as n,j as d}from"./index-DMY49dVe.js";const a=()=>{const{data:s,isSuccess:t,isLoading:i}=r();return c.useEffect(()=>{t&&n.success("doctor fetch success")},[t]),d.jsx(d.Fragment,{children:d.jsx("div",{className:"container mt-5",children:s&&d.jsxs("table",{className:"table table-bordered table-striped table-hover",children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"day"}),d.jsx("th",{children:"reason"}),d.jsx("th",{children:"timeSlot"}),d.jsx("th",{children:"status"}),d.jsx("th",{children:"doctor name"}),d.jsx("th",{children:"doctor Mobile"}),d.jsx("th",{children:"doctor Email"}),d.jsx("th",{children:"doctor address"}),d.jsx("th",{children:"patient name"}),d.jsx("th",{children:"patient Mobile"}),d.jsx("th",{children:"patient Email"})]})}),d.jsx("tbody",{children:s&&s.map(e=>d.jsxs("tr",{children:[d.jsx("td",{children:e.day}),d.jsx("td",{children:e.reason}),d.jsx("td",{children:e.timeSlot}),d.jsx("td",{children:e.status}),d.jsx("td",{children:e.doctorId.name}),d.jsx("td",{children:e.doctorId.mobile}),d.jsx("td",{children:e.doctorId.email}),d.jsx("td",{children:e.doctorId.address}),d.jsx("td",{children:e.patientId.name}),d.jsx("td",{children:e.patientId.mobile}),d.jsx("td",{children:e.patientId.email})]},e.id))})]})})})};export{a as default};
