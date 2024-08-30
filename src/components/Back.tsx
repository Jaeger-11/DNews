"use client"
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const Back = () => {
    const router = useRouter();

    const backToPreviousPage = () => {
        router.back()
    }
  return (
    <div onClick={backToPreviousPage} className="cursor-pointer">Back</div>
  )
}

export default Back