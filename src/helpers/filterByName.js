export default function filterByName(users, query) {
    return users.filter((user) => {
        return user.name.first.toLowerCase().includes(query.toLowerCase())
    })
}
