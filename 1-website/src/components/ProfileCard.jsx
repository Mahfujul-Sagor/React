

function ProfileCard({name, age, birthdate, height}) {
  return (
    <div className="bg-zinc-600 text-white font-semibold max-w-[20rem] px-4 py-2 rounded border shadow">
      <h1 className="text-center text-2xl">{name}</h1>
      <p>Age: {age}</p>
      <p>Birthdate: {birthdate}</p>
      <p>Height: {height}</p>
    </div>
  );
}

export default ProfileCard;