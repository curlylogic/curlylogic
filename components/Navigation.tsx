"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const path = usePathname();
  return (
    <nav className="cl__nav">
      <ul>
        <li>
          <Link
            href={"/articles"}
            className={path.startsWith("/articles") ? "active" : ""}
          >
            Articles
          </Link>
        </li>
        <li>
          <Link
            href={"/snippets"}
            className={path.startsWith("/snippets") ? "active" : ""}
          >
            Snippets
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
