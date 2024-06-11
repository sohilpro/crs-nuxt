export const useTickets = () => {
  const tickets = useState("tickets", () => null);
  return { tickets };
};
