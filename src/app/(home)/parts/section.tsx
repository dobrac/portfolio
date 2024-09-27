import {cn} from "../../../lib/utils";

export function Section({children, className, id}: Readonly<{
  children: React.ReactNode,
  className?: string,
  id?: string
}>) {
  return (
    <section id={id} className={cn("my-5 w-full", className)}>
      {children}
    </section>
  )
}