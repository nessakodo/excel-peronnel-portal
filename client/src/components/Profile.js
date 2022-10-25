import React from 'react'
import ProfileCard from './ProfileCard'

function Profile({ currentCandidate, setCurrentCandidate, setProfileCard }) {

    function handleClick(e) {
        const state = e.target.name
        if (state === "profileCard") {
            setProfileCard(true)

        } else {
            setProfileCard(false)
        }
    }

    return (
        <div class='flex justify-center'>
            <div class='w-3/4 flex items-center flex-col pt-4'>

                <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">Welcome back<span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> {currentCandidate.name}</span></h1>

                {/* Dashboard Tabs */}
                <ul class="flex flex-wrap mb-5 mt-5 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                    <li class="mr-2">
                        <a href="#" onClick={handleClick} name="profileCard" aria-current="page" class="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Profile</a>
                    </li>
                </ul>

                        <ProfileCard currentCandidate={currentCandidate} setCurrentCandidate={setCurrentCandidate} />


            </div>
        </div>
    )
}

export default Profile