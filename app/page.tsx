import WalletStack from "@/components/WalletStack";

export default function Home() {
  return (
    <main className="h-dvh w-full bg-white flex items-center justify-center">
      {/* Mobile: full width. md: wider card. lg: dashboard width. */}
      <div className="relative w-full max-w-[430px] lg:max-w-none h-dvh">
        <WalletStack />
      </div>
    </main>
  );
}
