import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type LabelInputProps = {
  htmlFor: string;
  id: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  label: string;
};

function LabelInput({
  htmlFor,
  id,
  type,
  required,
  label,
  placeholder,
}: LabelInputProps) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="py-5"
      />
    </div>
  );
}

export default LabelInput;
