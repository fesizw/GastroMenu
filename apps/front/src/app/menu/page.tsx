import Carousel from "@/components/carousel/carousel";
import Header from "@/components/header/header";
import MenuNavigation from "@/components/menuNavigation/menuNavigation";

export default function Menu() {
    return (
        <>
            <div className="bg-white text-black w-full min-h-screen">
                <Header />
                <Carousel />
                <div className="p-5 font-semibold text-center">
                    Name of establishment
                </div>
                <MenuNavigation />
                {/* <div className="bg-gray-500">
                    in development..
                </div> */}
            </div>
        </>
    );
}