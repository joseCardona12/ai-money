"use client";
import TitleContent from "@/ui/components/TitleContent";

export default function WalletPage(): React.ReactNode {
  return (
    <div className="p-6 space-y-6">
      <TitleContent
        title="Wallet"
        description="Manage your digital wallets and payment methods"
      />
      
      <div className="p-8 rounded-xl border border-[var(--color-gray-border)] bg-white">
        <h3 className="text-lg font-semibold mb-4">Your Wallets</h3>
        <p className="text-gray-500">
          This is where wallet management will be implemented.
        </p>
      </div>
    </div>
  );
}
