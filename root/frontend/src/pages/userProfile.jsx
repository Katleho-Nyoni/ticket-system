import { useUser } from "../auth/authenticate";

function UserInfo({user}){

  return(
    <>
      <div className="flex flex-col h-screen justify-center items-center gap-10">
        <div >
          <h1 className="font-extrabold text-3xl">Hello {user.displayName.split(" ")[0]}</h1>
          <p className="m-6">Hope you're enjoying the app!</p>
        </div>
        <img src={user.photoURL} alt="User Profile" 
        className="size-50 rounded-full border-4 border-blue-800"/>
        <h4 className="font-bold text-4xl">{user.displayName}</h4>
        <p className="font-bold text-xl">{user.email}</p>
        <button className="bg-red-600 font-bold text-white px-4 py-2 rounded hover:bg-red-700">Delete Account</button>
      </div>
    </>
  );
}

export default function UserProfilePage() {
  const { isLoading, user } = useUser();

  console.log("User Profile Page - User Data:", user);

  return (
    <>
      {isLoading ? <p>Loading info</p> : <UserInfo user={user} />}
    </>
  );
}
