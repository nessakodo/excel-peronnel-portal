import React, { useEffect, useState } from 'react'

function JobCard({ job, loggedIn, onApply, setHideAlert }) {
    const [details, setDetails] = useState(false)
    const [toApply, setToApply] = useState(false)



    function viewDetails(e) {
        if (e.target.textContent === "View Details") {
            setDetails(true)
        } else {
            setDetails(false)
        }
    }

    function handleApply() {
        onApply(job)
        setToApply(!toApply)
        setHideAlert("")
        setTimeout(function () { setHideAlert("hidden") }, 5000)
    }


    return (
        <div className='w-3/4 pt-4'>

            <p class="block p-6 max-w-3/4 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div className='flex flex-row justify-between border-b border-slate-500'>
                    <div>
                        <ul class="flex flex-wrap justify-start items-center mb-6 text-gray-900 dark:text-white">
                            <li>
                                <span class="mr-4 hover:underline text-gray-900 dark:text-gray-400 hover:cursor-pointer md:mr-6">View Details</span>
                            </li>
                        </ul>
                    </div>

                    {loggedIn ?
                        <div className='flex flex-row hover:cursor-pointer ' onClick={handleApply}>
                            <h5 className='text-black  dark:text-gray-400 pr-1'>{toApply ? "Applied" : "Apply"}</h5>
                            {toApply ? <svg class="w-6 h-6 hover:text-gray-400 dark:hover:text-gray-200 dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                :
                                <svg class="w-6 h-6 hover:text-gray-400 dark:hover:text-gray-200 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                            }
                        </div>
                        :
                        <></>
                    }
                </div>

                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white pt-5">{job.name}</h5>

                {/* Data Info */}
                <ul class="flex flex-wrap justify-start items-center mb-6 text-gray-900 dark:text-white text-sm">

                    <li>
                        <a href="#" class="mr-4 md:mr-6"><span class='text-black dark:text-gray-400'>Job Type: </span>{job.type_of_hire}</a>
                    </li>
    
                    <li>
                        <a href="#" class="mr-4 md:mr-6"><span class='text-black dark:text-gray-400'>Description: </span>{job.description}</a>
                    </li>
                </ul>

                {details ?

                    <ul class="flex flex-col items-start mb-6 text-gray-900 dark:text-white text-sm">
                        <li>
                            <a href="#" class="mr-4 md:mr-6 font-bold italic">{job.qualifications}</a>
                        </li>
                    </ul>

                    :
                    <p class="font-normal text-gray-700 dark:text-gray-400">{job.qualifications}</p>
                }
            </p>
        </div>
    )
}

export default JobCard