import { SignupProvider } from "./SignupContext";

export function SignUpProviders({ children }: { children: React.ReactNode }) {
    return <SignupProvider>{children}</SignupProvider>;
}