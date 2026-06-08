import Card from "./Card";

export default function FeatureCard({ children, className = "", ...props }) {
  return (
    <Card className={className} {...props}>
      {children}
    </Card>
  );
}
