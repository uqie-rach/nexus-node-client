import {
  RiArrowDropDownLine,
  RiMenuLine,
  RiNotification2Fill,
  RiNotification2Line,
} from "@remixicon/react";
import { RiSearchLine } from "@remixicon/react";
import { Icon, TextInput } from "@tremor/react";

import { Search } from "../";
import { mockProfile } from "../../assets";

const Navbar = () => {
  return (
    <nav className="navbar flex justify-between items-center py-4">
      <div className="nav-left flex gap-10 items-center">
        <RiMenuLine className="w-[40px]" />
        <div>
          <TextInput
            icon={RiSearchLine}
            placeholder="Search..."
            className="rounded-tremor-full w-[400px] h-[40px]"
          />
        </div>
      </div>

      <div className="nav-right flex gap-4 items-center">
        {/* notif icon */}
        <Icon icon={RiNotification2Fill} className="mr-3 cursor-pointer" color="slate" size="lg" />

        {/* profile image */}
        <div className="profile-image rounded-full overflow-hidden">
          <img src={mockProfile} alt="Profile" />
        </div>

        {/* profile detail */}
        <div className="detail">
          <p className="text-sm font-bold">Moni Rot</p>
          <p className="text-xs font-normal text-gray-500">Admin</p>
        </div>

        {/* dropdown menu */}
        <div className="dropdown rounded-full overflow-hidden border p-1 cursor-pointer">
          <RiArrowDropDownLine />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
