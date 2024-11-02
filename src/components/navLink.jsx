"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NavLink = ({ link, setOpen }) => {
  const pathName = usePathname();
  const router = useRouter();

  const handleClick = async (e) => {
    e.preventDefault();
    if (setOpen) {
      setOpen(false);
    }
    await router.push(link.url);
  };

  return (
    <Link
      href={link.url}
      className={`rounded p-1 ${
        pathName === link.url && "bg-black text-white"
      }`}
      onClick={handleClick}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
