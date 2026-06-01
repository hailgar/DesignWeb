export default function DecorativeShape({ className = "", ...props }) {
  return <div className={className} {...props} />;
}
