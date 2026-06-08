export default function Logo({ name, className = "nav-logo", onClick }) {
  return (
    <a href="#/" className={className} onClick={onClick}>
      {name}
    </a>
  );
}
