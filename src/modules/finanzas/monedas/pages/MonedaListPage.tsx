const CoinCard = ({ name, code, color }: { name: string; code: string; color: string }) => (
  <div className="bg-slate-800 rounded-xl p-5 shadow-lg flex items-center gap-4">
    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold`} style={{ background: color }}>
      {code}
    </div>
    <div>
      <div className="text-sm text-slate-300">{name}</div>
      <div className="text-white font-semibold">{code}</div>
    </div>
  </div>
);

export const MonedaListPage = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Monedas</h1>
        <p className="text-sm text-slate-400">Listado de monedas registradas</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CoinCard name="Dólar Estadounidense" code="USD" color="#0ea5a4" />
        <CoinCard name="Sol Peruano" code="PEN" color="#f59e0b" />
        <CoinCard name="Euro" code="EUR" color="#6366f1" />
      </div>
    </div>
  );
};
