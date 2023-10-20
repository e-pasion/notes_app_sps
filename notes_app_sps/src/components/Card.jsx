function Card({note}) {
  return (
    <div className="w-80 h-80 rounded-md bg-gray-100">
        <div className="p-3 flex justify-between">
            <p>{note.title}</p>
            <button className="bg-gray-600 text-white px-3 py-2">Edit</button>
        </div>
        <div className="bg-white h-48 border-y-2">
            <p>{note.content}</p>
            <p>{note.user.name}</p>
            <p>{note.date}</p>

        </div>

    </div>
  )
}
export default Card