

function Contact() {
  return (
    <div className="bg-zinc-100 my-2 flex flex-col gap-4 justify-center items-center">
      <h1 className="text-2xl text-center font-semibold">You Are Currently In The Contact Section</h1>
      <input className="border-2 rounded" type="text" placeholder="Enter your name" />
      <input className="border-2 rounded" type="email" placeholder="Enter your email" />
      <textarea className="border-2 rounded" cols="30" rows="10" placeholder="Enter your comment"></textarea>
      <button className="bg-teal-400 text-white font-semibold rounded px-2 py-1">Submit</button>
    </div>
  )
}

export default Contact;