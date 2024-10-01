import Image from "next/image";

const FloatingWA = () => {
  return (
    <section className="fixed bottom-16 right-16">
      <Image src={"/logo/WA.svg"} alt={"WA"} width={72} height={72} />
    </section>
  )
}

export default FloatingWA;
