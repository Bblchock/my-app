type PhoneProps = { to: string };

export const Phone = ({ to }: PhoneProps) => {
  return (
    <a href={`tel:${to}`}>
      <strong>{to}</strong>
    </a>
  );
};
