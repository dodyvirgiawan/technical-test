export default function ascendingSort(data) {
    return data.sort((a, b) =>
        a.name.first > b.name.first ? 1 : b.name.first > a.name.first ? -1 : 0
    )
}
