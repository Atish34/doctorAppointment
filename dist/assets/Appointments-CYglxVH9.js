import{k as r,r as n,y as c,j as t}from"./index-V72yjM_x.js";const a=()=>{const{data:d,isSuccess:s,isLoading:i}=r();return n.useEffect(()=>{s&&c.success("doctor fetch success")},[s]),t.jsx(t.Fragment,{children:t.jsx("div",{className:"container mt-5",children:d&&t.jsxs("table",{className:"table table-bordered table-striped table-hover",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"date"}),t.jsx("th",{children:"day"}),t.jsx("th",{children:"reason"}),t.jsx("th",{children:"timeSlot"}),t.jsx("th",{children:"status"}),t.jsx("th",{children:"doctor name"}),t.jsx("th",{children:"doctor Mobile"}),t.jsx("th",{children:"doctor Email"}),t.jsx("th",{children:"doctor address"}),t.jsx("th",{children:"patient name"}),t.jsx("th",{children:"patient Mobile"}),t.jsx("th",{children:"patient Email"})]})}),t.jsx("tbody",{children:d&&d.map(e=>t.jsxs("tr",{children:[t.jsx("td",{children:new Date(e.date).toLocaleDateString()}),t.jsx("td",{children:e.day}),t.jsx("td",{children:e.reason}),t.jsx("td",{children:new Date(e.timeSlot).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!0})}),t.jsx("td",{children:e.status}),t.jsx("td",{children:e.doctorId.name}),t.jsx("td",{children:e.doctorId.mobile}),t.jsx("td",{children:e.doctorId.email}),t.jsx("td",{children:e.doctorId.address}),t.jsx("td",{children:e.patientId.name}),t.jsx("td",{children:e.patientId.mobile}),t.jsx("td",{children:e.patientId.email})]},e.id))})]})})})};export{a as default};
