import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  imageUrl: string;
  username: string;
  role: string;
  discord?: string;
  twitter?: string;
};

function TeamComponent({ imageUrl, username, role, discord, twitter }: Props) {
  return (
    <div className="card-compact card h-80 w-72 -skew-x-6 border-2 border-secondary bg-base-100 shadow-md shadow-secondary">
      <figure className="skew-x-6">
        <Image
          src={imageUrl}
          alt={`BattleFly Image that represents user ${username}`}
          className="my-6 rounded-full"
          width={100}
          height={100}
        />
      </figure>
      <div className="card-body pb-0 text-center">
        <h2
          className="card-title justify-center gap-0 uppercase"
          style={{ textShadow: "0 0px 20px var(--tw-shadow-color)" }}
        >
          {username}
        </h2>
        <p className="capitalize tracking-wide">{role}</p>
        <div className="flex flex-col items-center justify-center">
          {/* Only display discord if there's one */}
          {discord ? (
            <button
              className="flex flex-row items-center hover:text-secondary"
              onClick={() => {
                void navigator.clipboard.writeText(discord);
                toast.success(`Copied ${username}'s discord handle`);
              }}
            >
              <span className="p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 127.14 96.36"
                  width="24"
                  height="24"
                  className="fill-current"
                >
                  <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
                </svg>
              </span>{" "}
              {discord}
            </button>
          ) : null}

          {/* Only display twitter if there's one */}
          {twitter ? (
            <div>
              <Link
                href={`https://twitter.com/${twitter}`}
                target="_blank"
                className="flex w-full flex-row items-center hover:text-secondary"
              >
                <span className="p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </span>
                @{twitter}
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default TeamComponent;
