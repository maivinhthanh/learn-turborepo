import { ReactComponent as HomeIcon } from "@/assets/home.svg";
import { ReactComponent as SearchIcon } from "@/assets/search.svg";
import { ReactComponent as ExploreIcon } from "@/assets/explore.svg";
import { ReactComponent as ReelsIcon } from "@/assets/reels.svg";
import { ReactComponent as MessageIcon } from "@/assets/message.svg";
import { ReactComponent as NotificationsIcon } from "@/assets/notifications.svg";
import { ReactComponent as CreateIcon } from "@/assets/create.svg";
import { ReactComponent as InstagramText } from "@/assets/instagram.svg";
import { ReactComponent as MoreIcon } from "@/assets/more.svg";
import { ReactComponent as InstagramIcon } from "@/assets/instagram-icon.svg";

const listItem = [
  {
    name: "Home",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    name: "Search",
    path: "/search",
    icon: <SearchIcon />,
  },
  {
    name: "Explore",
    path: "/explore",
    icon: <ExploreIcon />,
  },
  {
    name: "Reels",
    path: "/reels",
    icon: <ReelsIcon />,
  },
  {
    name: "Message",
    path: "/message",
    icon: <MessageIcon />,
  },
  {
    name: "Notifications",
    path: "/notifications",
    icon: <NotificationsIcon />,
  },
  {
    name: "Create",
    path: "/create",
    icon: <CreateIcon />,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        alt="avatar"
        width={24}
        height={24}
        src="https://instagram.fssa1-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fssa1-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=zUawtLjvcZ0AX8joJ6h&edm=AJ9x6zYBAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AfC63t0xVzokb0r35DVpBAio4IFS2ub4ApqLezho8P_O5g&oe=63FB694F&_nc_sid=cff2a4"
      />
    ),
  },
];

const Sidebar = () => {
  return (
    <nav className="overflow-y-hidden h-screen flex flex-col border-r border-slate-800">
      <div className="ml-4 my-12 lg:mr-4">
        <InstagramText className="hidden lg:block" />
        <InstagramIcon className="block lg:hidden"/>
      </div>
      <div className="flex-1 lg:mr-4">
        {listItem.map((item, index) => {
          return (
            <div
              className="flex rounded-3xl py-3 my-2 hover:bg-gray-900 w-full lg:min-w-[220px]"
              key={index}
            >
              <div className="flex-none mx-4">{item.icon}</div>
              <div className="flex-1 text-white hidden lg:block">
                {item.name}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex rounded-3xl py-3 my-2 hover:bg-gray-900 w-full lg:mr-4">
        <div className="flex-none mx-4">
          <MoreIcon />
        </div>
        <div className="flex-1 text-white hidden lg:block">More</div>
      </div>
    </nav>
  );
};

export default Sidebar;
