import CardMenu from "@/components/cardMenu/cardMenu";
import Carousel from "@/components/carousel/carousel";
import Header from "@/components/header/header";

export default function Menu() {
    return (
        <>
            <div className="bg-white text-black w-full min-h-screen flex flex-col">
                <Header />
                <Carousel />
                <div className="p-5 font-semibold text-center">
                    Name of establishment
                </div>
                <CardMenu />
                <div className="bg-gray-500 flex-grow flex justify-center items-center">
                    in development..
                </div>
            </div>
        </>
    );
}