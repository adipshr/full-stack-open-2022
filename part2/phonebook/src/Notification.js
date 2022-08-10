export default function Notification({ successMessage, errorMessage }) {
  if (successMessage !== null || errorMessage !== null) {
    if (successMessage) return <div className="success">{successMessage}</div>;
    else if (errorMessage) return <div className="error">{errorMessage}</div>;
  } else return null;
}
