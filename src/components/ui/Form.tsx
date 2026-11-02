import type { ComponentProps } from "react";

type FormProps = ComponentProps<"form">;

function Form({ children, className, ...props }: FormProps) {
  return (
    <form {...props} className={`flex flex-col gap-5 ${className ?? ""}`}>
      {children}
    </form>
  );
}

export default Form;
