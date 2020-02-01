import React, { useContext } from "react";
import AlertContext from "../../Context/alert/alertContext";

function Alert() {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fa fa-warning"></i> {alert.msg}
      </div>
    )
  );
}

export default Alert;
