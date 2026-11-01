import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

type CardCompactProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode | string;
};

function CardCompact({
  title,
  description,
  children,
  footer,
}: CardCompactProps) {
  return (
    <Card className="w-full max-w-sm rounded-md">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>{children}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
}

export default CardCompact;
