import Image from "next/image"
const HorizontalAds = () => {
  return (
    <div className="p-3 bg-primary text-white flex justify-center">
      <Image src={'https://s.adroll.com/a/HTD/MKH/HTDMKHKXSREZHJ6FDE3FWX.png'} className="max-h-[20svh]" width={600} height={500} alt="ads" />
    </div>
  )
}

export default HorizontalAds