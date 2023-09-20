import Image from "next/image";

export default function SupportForum() {
  return (
    <main className="mt-20 text-center">
      <h1 className="m-44 w-full text-md sm:text-xl lg:text-2xl font-medium text-black-600 leading-relaxed mx-auto my-4 mb-10s">
        Dear users! We need your support very much
      </h1>
      <h3>
        Dear users, our project is free and always will be free, but for that we
        Need your support to continue and improve our product. We will add more
        Servers and create apps for Desktop and Mobile for a better user
        Experience also to git rid of the PIN code ;{")"}
      </h3>
      <div className="text-start mt-20">
        <h3>Erhereum wallet (MetaMask):</h3>
        <h3>
          <strong>0xD19f3531879693Fb1e84b2547dBec585baacA584</strong>
        </h3>
        <div className="w-44">
          <Image
            src="/assets/ethereum.jpg"
            alt="Free me VPN"
            quality={100}
            width={100}
            height={100}
            layout="responsive"
          />
        </div>
        <h3>Please send only ETH to this address</h3>
      </div>
      {/* <div className="text-start mt-20">
        <h3>Erhereum wallet (MetaMask):</h3>
        <h3>
          <strong>0xD19f3531879693Fb1e84b2547dBec585baacA584</strong>
        </h3>
        <div className="w-44">
          <Image
            src="/assets/ethereum.jpg"
            alt="Free me VPN"
            quality={100}
            width={100}
            height={100}
            layout="responsive"
          />
        </div>
        <h3>Please send only ETH to this address</h3>
      </div> */}
      <h1 className="mt-16">Thanks for your Support ❤️</h1>
    </main>
  );
}
