import LoginForm from "@/components/LoginForm";
export default function Login({ searchParams }) {
  return <LoginForm role={searchParams?.role} />;
}
