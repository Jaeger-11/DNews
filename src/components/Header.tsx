"use client";
import { useAppSelector } from "@/lib/hooks";

const Header = () => {
    const { category } = useAppSelector((state) => state.content);
  return (
    <h2 className="font-bold text-xl uppercase mb-2 font-primary text-primary">{category}</h2>
  )
}

export default Header