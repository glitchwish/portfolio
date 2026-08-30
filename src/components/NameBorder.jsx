export default function NameBorder({ children }) {
  return (
    <span className="name-border relative block border border-zinc-900 px-3 py-2 text-xs font-medium tracking-wide text-zinc-900 transition-colors duration-200 group-hover:bg-zinc-900 group-hover:text-white">
      <span aria-hidden="true" className="name-border-corner absolute -left-2 -top-2 h-px w-5 bg-zinc-900" />
      <span aria-hidden="true" className="name-border-corner absolute -left-2 -top-2 h-5 w-px bg-zinc-900" />

      <span aria-hidden="true" className="name-border-corner absolute -right-2 -top-2 h-px w-5 bg-zinc-900" />
      <span aria-hidden="true" className="name-border-corner absolute -right-2 -top-2 h-5 w-px bg-zinc-900" />

      <span aria-hidden="true" className="name-border-corner absolute -bottom-2 -left-2 h-px w-5 bg-zinc-900" />
      <span aria-hidden="true" className="name-border-corner absolute -bottom-2 -left-2 h-5 w-px bg-zinc-900" />

      <span aria-hidden="true" className="name-border-corner absolute -bottom-2 -right-2 h-px w-5 bg-zinc-900" />
      <span aria-hidden="true" className="name-border-corner absolute -bottom-2 -right-2 h-5 w-px bg-zinc-900" />
      {children}
    </span>
  );
}
