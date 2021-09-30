import { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { fetchUserList, setUserList, setFilteredUserList } from '../store/action'

import UserCard from '../components/UserCard'

import filterByName from '../helpers/filterByName'
import ascendingSort from '../helpers/ascendingSort'

export default function Home() {
    const dispatch = useDispatch()
    const { users, loadingUsers, filteredUsers } = useSelector((state) => state)

    const [isSearching, setIsSearching] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [buttonText, setButtonText] = useState('Sort By Name')

    useEffect(() => {
        dispatch(fetchUserList())
    }, [dispatch])

    useEffect(() => {
        if (searchQuery.trim()) {
            setIsSearching(true)
            const filteredUsers = filterByName(users, searchQuery)
            dispatch(setFilteredUserList(filteredUsers))
        } else {
            setIsSearching(false)
        }
    }, [searchQuery, dispatch, users])

    function sortUser() {
        let sortedUsers = []

        if (isSearching) {
            setButtonText('Cancel')

            sortedUsers = ascendingSort(filteredUsers)
            dispatch(setFilteredUserList(sortedUsers))
        } else {
            setButtonText('Sort By Name')

            sortedUsers = ascendingSort(users)
            dispatch(setUserList(sortedUsers))
        }
    }

    return (
        <>
            <div className="container mx-auto bg-gray-400 mt-5 p-5 rounded-xl">
                <div className="container mx-auto">
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    ></input>
                    <button
                        type="button"
                        className="bg-black text-white rounded-lg p-1 ml-5"
                        onClick={sortUser}
                    >
                        {buttonText}
                    </button>
                </div>
            </div>

            <div className="container mx-auto md:flex md:flex-row md:flex-wrap mt-5 p-5 rounded-xl bg-gray-300">
                {loadingUsers ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        {isSearching ? (
                            <>
                                {filteredUsers.map((user, idx) => {
                                    return <UserCard key={'user' + idx} user={user} />
                                })}
                            </>
                        ) : (
                            <>
                                {users.map((user, idx) => {
                                    return <UserCard key={'user' + idx} user={user} />
                                })}
                            </>
                        )}
                    </>
                )}
            </div>
        </>
    )
}
