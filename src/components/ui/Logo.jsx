import { Link } from "react-router-dom";

export default function Logo({ name, className = "nav-logo", onClick }) {
  return (
    <Link to="/" className={className} onClick={onClick}>
      {name}
    </Link>
  );
}
