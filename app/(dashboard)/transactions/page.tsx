"use client";

import { useState } from "react";
import { Transaction } from "@/lib/api/transactions";
import { TransactionDetails } from "@/components/transactions/transaction-details";

export default function TransactionsPage() {
  const [selected, setSelected] = useState<Transaction | null>(null);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>
      <TransactionDetails
        transaction={selected}
        open={!!selected}
        onClose={() => setSelected(null)}
      />
    </div>
  );
}
