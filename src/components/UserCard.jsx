export default function UserCard(props) {
    const { user } = props

    return (
        <div className="container bg-gray-100 border-2 md:w-1/3 mx-auto flex flex-col p-5 text-center">
            <img src={user.picture.medium} alt={user.name.first} className="w-24 mx-auto"></img>
            <h3 className="mt-3">{user.name.first}</h3>
            <p className="mt-3">{user.email}</p>
        </div>
    )
}
