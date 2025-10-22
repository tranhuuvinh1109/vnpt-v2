import { LoaderIcon } from "lucide-react";

type LoadingPageProps = {
  isPending?: boolean;
};

export const LoadingPage = ({ isPending }: LoadingPageProps) => {
  if (!isPending) return;
  return (
    <div className="text-element-primary fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <LoaderIcon className="animate-spin" size={48} />
    </div>
  );
};
