type FormProps = {
  children: React.ReactNode;
};

function Form({ children }: FormProps) {
  return <form className="flex flex-col gap-7">{children}</form>;
}

export default Form;
