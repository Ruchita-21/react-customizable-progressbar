import React, { FunctionComponent } from 'react'
//@ts-ignore
import ProgressBar from 'react-customizable-progressbar'
import { ExampleProps } from './Examples'

const Cut: FunctionComponent<ExampleProps> = ({ progress }) => (
    <div className="item">
        <div className="title">
            <span>Cut</span>
            <a
                href="https://github.com/martyan/react-customizable-progressbar/blob/master/examples/Cut.tsx"
                target="_blank"
            >
                code <i className="fa fa-external-link-square" />
            </a>
        </div>

        <ProgressBar
            radius={100}
            progress={progress}
            strokeWidth={28}
            strokeColor="#ffce54"
            strokeLinecap="butt"
            trackStrokeWidth={14}
            trackStrokeLinecap="butt"
            cut={120}
            rotate={-210}
           pointerStrokeWidth={50}
        >
            <div className="indicator">
                <div>{progress}%</div>
            </div>
        </ProgressBar>
    </div>
)

export default Cut
