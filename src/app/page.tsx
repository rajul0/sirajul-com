import Image from "next/image";

export default function Home() {
  return (
    <div className="px-4">
      <div className="h-20"></div>
      <div className="flex flex-row place-content-between">
        <div className="mr-10">
          <h1 className="text-2xl font-bold">Who am I</h1>
        </div>

        <div className="hidden md:flex w-24 h-24 rounded-full overflow-hidden drop-shadow-lg">
          <Image
            src="/images/fotoProfile-2.jpg"
            alt="Foto Profile"
            width={96} // Tentukan ukuran gambar
            height={96}
            className="object-cover scale-150"
          />
        </div>
      </div>
    </div>
  );
}
