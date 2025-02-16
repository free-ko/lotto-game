const LottoTicketList = ({ tickets }: { tickets: number[][] }) => {
  return (
    <div className="mt-4 mb-4">
      <h2 className="mb-2 text-lg font-semibold">구매한 로또 번호</h2>
      <ul className="space-y-2">
        {tickets.map((ticket, index) => (
          <li key={index} className="rounded bg-gray-100 p-2">
            {ticket.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LottoTicketList;
