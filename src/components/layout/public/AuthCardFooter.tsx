import { Button } from "@/components/ui/button";
import Link from "next/link";

type AuthCardFooterProps = {
  submitText: string;
  toggleText: string;
  linkText: string;
  href: string;
  isLoading?: boolean;
};

function AuthCardFooter({
  submitText,
  toggleText,
  linkText,
  href,
}: AuthCardFooterProps) {
  return (
    <div className="flex w-full flex-col items-center gap-3">
      <Button type="submit" size={"icon-lg"} className="w-full">
        {submitText}
      </Button>
      <div className="text-muted-foreground flex items-center gap-1 pt-1 text-sm">
        <span>{toggleText}</span>
        <Link
          href={href}
          className="text-primary font-medium underline-offset-4 hover:underline"
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
}

export default AuthCardFooter;
