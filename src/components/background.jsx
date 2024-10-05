export function Background({ children }) {
  return (
    <div className="inset-0 -z-10 h-full w-full items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      {children}
    </div>
  );
}
