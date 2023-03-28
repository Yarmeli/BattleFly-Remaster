import Link from "next/link";
import { useRouter } from "next/router";
import { Navbar, Dropdown, Button, Menu } from "react-daisyui";

const navigation = [
  {
    name: "GAMES",
    submenu: [
      { name: "Battlegrounds", href: "/battlegrounds" },
      { name: "Racer", href: "/racer" },
    ],
  },
  {
    name: "HELP",
    submenu: [
      {
        name: "White Paper",
        href: "/#",
      },
      { name: "FAQ", href: "/faq" },
      { name: "Strategy Guide", href: "/#" },
    ],
  },
  {
    name: "SHOWCASE",
    submenu: [
      { name: "BattleFly Editions", href: "/#" },
      { name: "Shop", href: "/#" },
    ],
  },
  {
    name: "INFO",
    submenu: [
      { name: "Lore", href: "/#" },
      { name: "Team", href: "/team" },
      { name: "Careers", href: "/careers" },
    ],
  },
  {
    name: "NEWS",
    href: "/#",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const NavbarComponent = () => {
  const router = useRouter();

  console.log(router.pathname);

  return (
    <div className="flex w-full items-center justify-center gap-2 p-4 pb-40 font-sans">
      <Navbar>
        <Navbar.Start>
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
              <Dropdown.Item>Item 1</Dropdown.Item>
              <li tabIndex={0}>
                <a className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="bg-base-100 p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <Dropdown.Item>Item 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Link href="/" className="btn-ghost btn text-xl normal-case">
            BattleFly
          </Link>
        </Navbar.Start>
        <Navbar.Center className="hidden lg:flex">
          <Menu horizontal className="p-0">
            {navigation.map((item) => {
              if (item.submenu) {
                return (
                  <Menu.Item tabIndex={0} key={item.name}>
                    <div className="rounded-xl">
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
                    <Menu className="bg-base-400 p-2">
                      {item.submenu.map((subItem) => (
                        <Menu.Item key={subItem.name}>
                          <Link href={subItem.href}>{subItem.name}</Link>
                        </Menu.Item>
                      ))}
                    </Menu>
                  </Menu.Item>
                );
              } else {
                return (
                  <Menu.Item key={item.name}>
                    <Link
                      href={item.href}
                      className={classNames(
                        router.pathname == item.href ? "btn-active" : "",
                        "btn-ghost rounded-xl"
                      )}
                    >
                      {item.name}
                    </Link>
                  </Menu.Item>
                );
              }
            })}
          </Menu>
        </Navbar.Center>
        <Navbar.End>
          <Button className="text-md btn-primary font-bold">PLAY</Button>
        </Navbar.End>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
