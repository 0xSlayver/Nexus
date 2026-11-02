import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  type FieldValues,
  type Path,
  type RegisterOptions,
  type UseFormRegister,
} from "react-hook-form";

type LabelInputProps<T extends FieldValues> = {
  name: Path<T>;
  type?: string;
  required?: boolean;
  placeholder?: string;
  label: string;
  register: UseFormRegister<T>;
  rules?: RegisterOptions<T, Path<T>>;
  error?: string;
};

function LabelInput<T extends FieldValues>({
  name,
  type = "text",
  required,
  label,
  placeholder,
  register,
  rules,
  error,
}: LabelInputProps<T>) {
  return (
    <div className="grid gap-2">
      <div className="flex items-center gap-2">
        <Label htmlFor={name}>{label}</Label>

        <span className="text-destructive text-xs">{error ?? ""}</span>
      </div>

      <Input
        id={name}
        type={type}
        placeholder={placeholder}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className="py-5"
        {...register(name, rules)}
      />
    </div>
  );
}

export default LabelInput;
