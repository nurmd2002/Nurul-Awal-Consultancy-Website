export default function SectionDivider() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="h-8 bg-gradient-to-b from-transparent via-[#fbf7ef]/65 to-[#fbf7ef]" />

      <div className="relative py-3">
        <div className="mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-[#d8b75b]/70 to-transparent" />

        <div className="absolute left-1/2 top-3 -translate-x-1/2 -translate-y-1/2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fbf7ef]">
            <div className="relative">
              <div className="h-4 w-4 rotate-45 border border-[#c6aa47] bg-[#fbf7ef]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-[#c6aa47]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="h-6 opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(#177D3F 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
    </div>
  );
}