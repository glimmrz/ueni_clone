import { AuthWrapper } from "@/components/auth/auth-wrapper";
import { Background } from "@/components/background";

export default function Page() {
  return (
    <Background>
      <div className="flex items-center justify-center">
        <AuthWrapper />
      </div>
    </Background>
  );
}
