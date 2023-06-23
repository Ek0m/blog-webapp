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
                session ? session?.user!.image : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAACJCAMAAAAv+uv7AAAAaVBMVEUiLTqzusC2vcO7wsgfKjgbJzUWIzITITAYJTMdKTYOHS2lrLOvtryss7l+hY0QHy44QUyKkZlZYWpeZm8rNUKWnaRlbHUAFihPV2FqcnuQl56Di5JyeYEzPEgHGSpASVQADiIABB5HUFo138szAAAEXUlEQVR4nO2b21LjMAyGc7Cd2EmcQ5025Ah9/4dcpwWGLSWx3MhlZ/Mzw8BwwTeSLMuS6nm7du3atWvXrl27dv13IjQSImLzN0qeh0GjSDUvXdm2bdm9NIox+gwMIuihS8IwDK7SPyVdxQR3zMHFJDP9//2v0r9nshBOvRQp6Yf+PYWp9JgzDjL2P3BcWY4nR2aJh/ZnjouXSuUkdKMiCRZBtFmSIXYA0oRrINoq/oQeLKzx10E0SnZGtgofUhOQGcVDDVvurcbIJ0qCmv5FZwqiw1YKPJC4MQfRavDOsjD2zdU/IxZIfASZxA8OaEcZZJLZKEgXc1wtJ/nvChucpCJamEnmCwglUkiRAkF8Pxswcgo9QE2iVWEcZEhW+1AgcwSSV+DJuZAkrwgkb9CTMyt82x6EKCsSsn3I0saK5Lx9coPntQsJQm5jdiQIV4+lTX4RyfbeoeffEieWp3hCKAxOViQYZcEb/CrW6R4hx3qn2ubeOSGQ5BLungDlpUEbMIgfVBiVLBkyMEk2oNTUFnVsjfMMtKjtsR48CuqeVCE90iMJfHnJCAfE4wpIgvLGuGgsQS/0EiOtXcVBBzktEFs5ojc/PmGP8db5FAF0t3Dbw3QyJpmQu8OiN+w99ohdtqvi0iRUwtJBk3o0qFP0heNgiEDIKkpQ47aFP8RJveygsPYcTb7IqQt+NksQdCd3I7jo8GP7PkgPWPfefRSvvTtcCbRnnILoYInO9bf5SuDXDXM9HNWJhTXlZT77Hh1aZRM7SCN3REdayTrJtC2ypJYVG93b41Mx40oNxaA8zp5jjq8iXH89G2LXrn9KnFIW5bkQIs8jRulTjhCNxlxNTXXsezmr749VM6l8dLklRGIWq6kv6ySdk/x1KWf+7qdJXfZnRePYRcXGTqqSiT9vBd0tTvQfEnlQrwwXJmbFsfZvt4K+4+hL+VjgpX/OoqrNDHY+roVKWld5hGEYfipkaojxCSOnzQtJzqbOaPHkBsYvz9GmLMIrLTjeWbzt3j7MkyC33LCEUm1T2nJWWUxF/2LJDluku5is7IyZSFf8D3chRWUZIDdm8avH+jo8kpuAzCjykeTC6Qae+VBYc+veTjw8GKp/K0gKy/xPh2xLkPkM2aHExcYg8+vdZgmRri9aWqBk8D4gyRFA5lgB1y10pW9kq7AGkgjg2MJcQQdqjzLYWiEMpQJELVcbZdb7KIDd5hg0PQGTtMZZhVWYIIB9SMJs5vYQpYblCjMcEtgr6I2MQjxsk2gZDU1zwFzLVkabzUQl6CC+nxgYBboYbKfwZT1SbNYb4TJYiOQFfpTMCou1pyF0Ym+rQK66x2IHyIpkrTrggxOOGWXFPfHBTZis76bAdhge0dre+ejkDF+ULDYQYMsUjyldXEQkZ2cgKx9locg10lcFxyUSN5fOO8likRKhF0lfSBYrA1e5/kKy+PCx+cSDNUn5a0japdQmnKXY+Q5cWjJzapPfQ3LjnT9K1UAvpcK4tgAAAABJRU5ErkJggg=="
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
