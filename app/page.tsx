import WalletStack from "@/components/WalletStack";

export default function Home() {
  return (
    <main className="h-dvh w-full bg-black flex items-center justify-center">
      {/* On desktop: simulate a phone viewport centred on screen.
          On mobile: take up full screen. */}
      <div className="relative w-full max-w-[430px] h-dvh">
        <WalletStack />
      </div>
    </main>
  );
}
