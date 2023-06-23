import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"

const Header = () => {

  const {data:session} = useSession()
  console.log(session)

  return (
    <div className="w-full h-20 border-b-[1px] border-b-black font-titleFont sticky top-0 bg-white z-50 px-4">
      <div className="max-w-7xl h-full mx-auto flex justify-between items-center">
        <Link href="/">
          <div>
            <h2 className=" text-2xl font-bold font-titleFont">The BigNews</h2>
          </div>
        </Link>
        <div>
          <ul className="hidden lg:inline-flex gap-8 uppercase text-sm font-semibold">
            <li className="headerLi">Home</li>
            <li className="headerLi">Posts</li>
            <li className="headerLi">Pages</li>
            <li className="headerLi">Features</li>
            <li className="headerLi">Contact</li>
          </ul>
        </div>
        <div className="flex items-center gap-8 text-lg">
          <div className="flex items-center gap-1">
            <img
              className="w-8 h-8 rounded-full"
              src={
                session ? session?.user!.image! : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fionicframework.com%2Fdocs%2Fapi%2Favatar&psig=AOvVaw0k8pmseXWv0_pCv4ycki0Y&ust=1687614467901000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNiZyfrD2f8CFQAAAAAdAAAAABAE"
              }
              alt="logo"
            />
            <p className="text-sm font-medium">
              {
                session ? session?.user!.name : "Hello Stranger"
              }
            </p>
          </div>

          {
            session ? <button onClick={() => signOut()} className="uppercase text-sm border-[1px] border-primaryColor hover:border-secondaryColor px-4 py-1 font-semibold hover:text-white rounded-md hover:bg-secondaryColor transition-all duration-300 active:bg-yellow-600">
            Sign Out
          </button> : <button onClick={() => signIn()} className="uppercase text-sm border-[1px] border-primaryColor hover:border-secondaryColor px-4 py-1 font-semibold hover:text-white rounded-md hover:bg-secondaryColor transition-all duration-300 active:bg-yellow-600">
            Sign In
          </button>   
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
