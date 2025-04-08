'use client';
import { openTransactionModal } from '@xswap-link/sdk';

export default function Home() {
  return (
    <div
      className="flex flex-col gap-8 items-center justify-center h-screen
    "
    >
      <appkit-button />
      <button
        className="px-3 py-2 bg-white text-black rounded-full"
        onClick={() => {
          openTransactionModal({
            integratorId: '575bbf79c59ccd523ef1',
          });
        }}
      >
        open sdk
      </button>
    </div>
  );
}
