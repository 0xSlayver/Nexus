type FormProps = {
  children: React.ReactNode;
};

function Form({ children }: FormProps) {
  return <form className="flex flex-col gap-5">{children}</form>;
}

export default Form;
