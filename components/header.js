import Image from "next/image";
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
} from "@heroicons/react/solid";
    import {
        FlagIcon,
        PlayIcon,
        SearchIcon,
        ShoppingCartIcon,
    } from "@heroicons/react/outline";

function header() {
    return (
        <div className="sticky top-8 z-50 bg-white flex-items-center p-2 lg:px-5 shadow-md">
            <h1 className="text-6xl">Header</h1>
            {/* Left */}
            <div className="flex items-center">
                <Image
                    src="https://links.papareact.com/5me"
                    width={40} 
                    height={40}
                    layout="fixed"
            />
            <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                <SearchIcon className="h-6 text-gray-600" />
                <input 
                    className="flex ml-2 items-center bg-transparent outline-none
                    placeholder-gray-500 flex-shrink" 
                    type="text" 
                    placeholder="Search Facebook"
                />
                </div>
            </div>

            {/* Center */}
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2">
                    <HeaderIcon Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>

            {/* Right */}
        </div>
    );
}

export default header;