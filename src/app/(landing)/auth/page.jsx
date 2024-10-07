import { AuthWrapper } from "@/components/auth/auth-wrapper";

export default function Page({ params }) {
  return (
    <div className="flex items-center justify-center">
      <AuthWrapper mode={params.mode}></AuthWrapper>
    </div>
  );
}
