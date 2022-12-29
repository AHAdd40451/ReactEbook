import React, { useRef, useState, useEffect } from "react";
import { ReactReader, ReactReaderStyle } from "react-reader";

const ownStyles = {
    ...ReactReaderStyle,
    arrow: {
        ...ReactReaderStyle.arrow,
        color: "orange"
    }
};

const loc = null;

export default function ReaderCostum() {
    const [selections, setSelections] = useState([]);
    const renditionRef = useRef(null);

    const [location, setLocation] = useState(loc);
    const locationChanged = (epubcifi) => {
        setLocation(epubcifi);
    };



    useEffect(() => {
        if (renditionRef.current) {
            function setRenderSelection(cfiRange, contents) {
                setSelections(
                    selections.concat({
                        text: renditionRef.current.getRange(cfiRange).toString(),
                        cfiRange
                    })
                );
                renditionRef.current.annotations.add(
                    "highlight",
                    cfiRange,
                    {},
                    null,
                    "hl",
                    {
                        fill: "yellow",
                        "fill-opacity": "0.5"
                    }
                );
                contents.window.getSelection().removeAllRanges();
            }
            renditionRef.current.on("selected", setRenderSelection);
            console.log(selections);
            return () => {
                renditionRef.current.off("selected", setRenderSelection);
            };
        }
    }, [setSelections, selections]);
    return (
        <>
            <div className="App" style={{ position: "relative", height: "100vh" }}>
                <ReactReader
                    location={location}
                    locationChanged={locationChanged}
                    url="https://altmshfkgudtjr.github.io/react-epub-viewer/files/Alices%20Adventures%20in%20Wonderland.epub"
                    styles={ownStyles}
                    getRendition={(rendition) => {
                        renditionRef.current = rendition;
                        renditionRef.current.themes.default({
                            "::selection": {
                                background: "yellow"
                            }
                        });
                        setSelections([]);
                    }}
                />
            </div>
            <div
                style={{
                    position: "absolute",
                    bottom: "1rem",
                    right: "1rem",
                    zIndex: 1,
                    backgroundColor: "white"
                }}
            >
                Selection:
                <ul>
                    {selections.map(({ text, cfiRange }, i) => (
                        <li key={i}>
                            {text}{" "}
                            <button
                                onClick={() => {
                                    renditionRef.current.display(cfiRange);
                                }}
                            >
                                Show
                            </button>
                            <button
                                onClick={() => {
                                    renditionRef.current.annotations.remove(
                                        cfiRange,
                                        "highlight"
                                    );
                                    setSelections(selections.filter((item, j) => j !== i));
                                }}
                            >
                                x
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
