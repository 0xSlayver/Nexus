import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type LabelButtonProps = {
  htmlFor: string;
  id: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  label: string;
};

function LabelButton({
  htmlFor,
  id,
  type,
  required,
  label,
  placeholder,
}: LabelButtonProps) {
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

export default LabelButton;
