export default function RichText({ parts }) {
  if (!Array.isArray(parts)) {
    return parts;
  }

  return parts.map((part, index) => {
    if (typeof part === "string") {
      return part;
    }

    if (part.br) {
      return <br key={`br-${index}`} />;
    }

    if (part.em) {
      return <em key={`em-${index}`}>{part.em}</em>;
    }

    return part.text || null;
  });
}
