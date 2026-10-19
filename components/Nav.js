"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [["HOME","/"],["DRIVERS","/drivers"],["COMPANIES","/companies"],["FEATURES","/features"],["PRICING","/pricing"],["CONTACT","/contact"]];

export default function Nav() {
  const path = usePathname();
  return (
    <header className="nav">
      <nav>
        {links.map(([t, h]) => (
          <Link key={h} href={h} className={path === h ? "active" : ""}>{t}</Link>
        ))}
      </nav>
      {path === "/contact" ? (
        <div className="nav-right">
          <Link href="/login" className="pill">Company Log in</Link>
          <Link href="/login?role=driver" className="pill">Driver Log in</Link>
        </div>
      ) : path !== "/login" && (
        <Link href="/login" className="login-btn">LOG IN</Link>
      )}
    </header>
  );
}
