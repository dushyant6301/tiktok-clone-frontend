import { MusicNote } from '@material-ui/icons'
import React, { Fragment } from 'react'
import Ticker from 'react-ticker'
import "./VideoFooter.css"

const VideoFooter = ({ channel, description, song }) => {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3> @{channel} </h3>
                <p> {description} </p>
                <div className="videoFooter__ticker">
                    <MusicNote className="videoFooter__icon" />
                    <Ticker mode="smooth">
                        {({ index }) => (
                            <Fragment>
                                <p> {song}</p>
                            </Fragment>
                        )}
                    </Ticker>
                </div>
            </div>
            <img
                className="videoFooter__record"
                src="https://static.thenounproject.com/png/934821-200.png"
                alt="video footer" />
        </div>
    )
}

export default VideoFooter