import React from 'react';
import aboutpic from '../assets/aboutpic.jpg'
import { Tabs, Timeline } from 'flowbite-react'



export default function AboutPage () {

    return (
        <>
        <div>
            <img src={aboutpic} alt="Picture Courtesy of fauxels on Pexels" />
            We don’t just build business relationships, we make friends. We want to get to know you, understand your hopes and dreams, and figure out how we can make them a reality. But above all things, we love building networks of candidates and clients, so that we can introduce you to one another, and create a working partnership.
        </div>
        <h1>Why Choose Excel?</h1>
        <Tabs.Group aria-label="Default tabs" style="default" >
            <Tabs.Item
                active={true}
                title="Focus"
            >
                We realize that strong search capabilities are what ensures the success of our clients, so that’s where we focus our resources and efforts.
            </Tabs.Item>
            <Tabs.Item title="Quality">
                Quality costs less – when you need to hire, don’t settle for anything less than the highest quality available.
            </Tabs.Item>
            <Tabs.Item title="Relationships">
                You need a staffing partner that focuses on solving problems rather than just filling orders. We take a strategic approach to solving your staffing challenges and improving your bottom line.
            </Tabs.Item>
            <Tabs.Item title="Results">
                In order to make sure of constant progress and improvement, you need to be able to measure your results and the parameters of success that have been agreed upon. We pride ourselves on achieving results that benefit you!
            </Tabs.Item>
            <Tabs.Item
                disabled={true}
                title="Expertise"
            >
                We have been providing exceptional, customized staffing fulfillment since 1992.
            </Tabs.Item>
        </Tabs.Group>

        <h1>Excel Milestones</h1>
        <ol class = "relative border-l border-gray-200 dark:border-gray-700 left-6">
            <ul class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
                <Timeline>
                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                        <Timeline.Time>
                            1987 
                        </Timeline.Time>
                        <Timeline.Title>
                            Excel Personnel established in San Diego, CA
                        </Timeline.Title>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                        <Timeline.Time>
                            1992
                        </Timeline.Time>
                        <Timeline.Title>
                            Expanded to service the Denver market & the Front Range
                        </Timeline.Title>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                        <Timeline.Time>
                            1992
                        </Timeline.Time>
                        <Timeline.Title>
                            Denver established as corporate headquarters
                        </Timeline.Title>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                        <Timeline.Time>
                            2002
                        </Timeline.Time>
                        <Timeline.Title>
                            Five offices located in Denver area covering the entire Metro region
                        </Timeline.Title>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                        <Timeline.Time>
                            2004
                        </Timeline.Time>
                        <Timeline.Title>
                            Relocated Corporate offices to the Denver Tech Center
                        </Timeline.Title>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                        <Timeline.Time>
                            2007
                        </Timeline.Time>
                        <Timeline.Title>
                            Nominated "Best Companies to Work for in Colorado"
                        </Timeline.Title>
                        </Timeline.Content>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Timeline.Point />
                        <Timeline.Content>
                        <Timeline.Time>
                            2022
                        </Timeline.Time>
                        <Timeline.Title>
                            Celebrated 30 years in Denver Metro region
                        </Timeline.Title>
                        </Timeline.Content>
                    </Timeline.Item>
                </Timeline>
            </ul>
        </ol>
        
        </>
    )

};

