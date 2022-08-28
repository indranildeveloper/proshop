import Alert from "react-bootstrap/Alert";

const AlertMessage = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

AlertMessage.defaultProps = {
  variant: "info",
};

export default AlertMessage;
