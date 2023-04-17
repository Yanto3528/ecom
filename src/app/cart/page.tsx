import { CartTable, Summary } from "./components";

export default function Cart() {
  return (
    <main className="container">
      <h1 className="font-bold text-3xl mb-8">My Cart</h1>
      <div className="flex flex-col gap-10">
        <CartTable />
        <Summary />
      </div>
    </main>
  );
}
