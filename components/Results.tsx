import React from 'react'

import FlipMove from 'react-flip-move';
import {Thumbnail} from '../components'

interface ResultsProps {
    results: any
}

export const Results: React.FC<ResultsProps> = ({results}) => {
    return <FlipMove className={'px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'}>
        {results.map((result, key) => <Thumbnail result={result} key={key} />)}
    </FlipMove>
}