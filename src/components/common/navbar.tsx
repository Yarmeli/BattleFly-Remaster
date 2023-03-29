import Image from "next/image";
import Link from "next/link";
import { type NextRouter, useRouter } from "next/router";
import { Navbar, Dropdown, Button, Menu } from "react-daisyui";

type NavigationItemType = {
  name: string;
  href: string;
};

const navigation = [
  { name: "Battlegrounds", href: "/battlegrounds" },
  { name: "Racer", href: "/racer" },
  {
    name: "Resources",
    submenu: [
      { name: "Lore", href: "#" },
      {
        name: "White Paper",
        href: "#",
      },
      { name: "FAQ", href: "/faq" },
      { name: "Strategy Guide", href: "#" },
    ],
  },

  {
    name: "About us",
    submenu: [
      { name: "Team", href: "/team" },
      { name: "Careers", href: "/careers" },
    ],
  },
  { name: "Shop", href: "#" },
  {
    name: "News",
    href: "#",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function activeNavbarLink(item: NavigationItemType, router: NextRouter) {
  return (
    <Link
      href={item.href}
      className={classNames(
        router.pathname == item.href ? "btn-active" : "",
        "btn-ghost z-10 rounded-xl font-bold uppercase"
      )}
    >
      {item.name}
    </Link>
  );
}

const NavbarComponent = () => {
  const router = useRouter();

  return (
    <div className="flex w-full items-center justify-center bg-base-300 p-4 lg:px-16">
      <Navbar>
        <Navbar.Start className="lg:justify-center">
          <Dropdown>
            <Button color="ghost" tabIndex={0} className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </Button>
            <Dropdown.Menu tabIndex={0} className="menu-compact mt-3 w-52">
              {navigation.map((item) => {
                if (item.submenu) {
                  return (
                    <li tabIndex={0} key={item.name}>
                      <div className="btn-ghost z-10 justify-between rounded-xl font-bold uppercase">
                        {item.name}
                        <svg
                          className="fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                        </svg>
                      </div>
                      <ul className="bg-base-100 p-2">
                        {item.submenu.map((subItem) => (
                          <li key={subItem.name}>
                            {activeNavbarLink(subItem, router)}
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                } else {
                  return (
                    <li key={item.name}>{activeNavbarLink(item, router)}</li>
                  );
                }
              })}
            </Dropdown.Menu>
          </Dropdown>
          <Link
            href="/"
            className="btn-ghost btn h-full p-0 align-top text-xl normal-case hover:bg-base-300"
          >
            <Image
              src="/Logo.png"
              alt="BattleFly Logo"
              width={200}
              height={150}
            />
          </Link>
        </Navbar.Start>
        <Navbar.Center className="hidden lg:flex">
          <Menu horizontal className="gap-2 p-0">
            {navigation.map((item) => {
              if (item.submenu) {
                return (
                  <Menu.Item tabIndex={0} key={item.name}>
                    <div className="btn-ghost z-10 rounded-xl font-bold uppercase">
                      {item.name}
                      <svg
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        viewBox="0 0 24 24"
                      >
                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                      </svg>
                    </div>
                    <Menu className="bg-base-100 p-2">
                      {item.submenu.map((subItem) => (
                        <Menu.Item key={subItem.name}>
                          {activeNavbarLink(subItem, router)}
                        </Menu.Item>
                      ))}
                    </Menu>
                  </Menu.Item>
                );
              } else {
                return (
                  <Menu.Item key={item.name}>
                    {activeNavbarLink(item, router)}
                  </Menu.Item>
                );
              }
            })}
          </Menu>
        </Navbar.Center>
        <Navbar.End className="lg:justify-center">
          <Button className="text-md btn-primary font-bold uppercase">
            Play
          </Button>
        </Navbar.End>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
