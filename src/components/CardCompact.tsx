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
  footer: React.ReactNode | string;
};

function CardCompact({
  title,
  description,
  children,
  footer,
}: CardCompactProps) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>{footer}</CardFooter>
    </Card>
  );
}

export default CardCompact;
