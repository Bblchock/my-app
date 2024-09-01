type EmailProps = { to: string };

export const Email = ({ to }: EmailProps) => {
  return (
    <a href={`mailto:${to}`}>
      <strong>{to}</strong>
    </a>
  );
};
