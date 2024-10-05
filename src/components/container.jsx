export function Container({ children }) {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="p-2 max-w-[1192px] h-full w-full">{children}</div>
    </div>
  );
}
