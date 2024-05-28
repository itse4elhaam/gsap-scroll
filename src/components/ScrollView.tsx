import { useEffect } from "react";
import makeScroll from "../utils/makeScroll";
import "./ScrollView.css"

export default function ScrollView() {

    useEffect(() => {
        makeScroll();
    }, [window, document])

    return (
        <>
            <section className="spacer">
                <h1>Start Scrolling</h1>
            </section>
            <section className="image-unmask">
                <img
                    id="img"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/smile.jpg"
                />
                <svg id="svg">
                    <defs>
                        <mask id="mask">
                            <rect width="100%" height="100%" fill="white" />
                            <circle id="circle" cx="50%" cy="50%" r={100} fill="black" />
                        </mask>
                    </defs>
                    {/*<rect id="whiteLayer" width="100%" height="100%" fill="white"></rect>*/}
                    <rect width="100%" height="100%" fill="black" mask="url(#mask)" />
                </svg>
            </section>
            <section className="content">
                <div className="inner">
                    <h1>Some Content Here</h1>
                    <p>
                        Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast
                        yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog
                        yardarm hempen halter furl. Swab barque interloper chantey doubloon
                        starboard grog black jack gangway rutters. Deadlights jack lad schooner
                        scallywag dance the hempen jig carouser broadside cable strike colors.
                        Bring a spring upon her cable holystone blow the man down spanker Shiver
                        me timbers to go on account lookout wherry doubloon chase. Belay
                        yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom
                        heave to. Trysail Sail ho Corsair red ensign hulk smartly boom jib rum
                        gangway. Case shot Shiver me timbers gangplank crack Jennys tea cup
                        ballast Blimey lee snow crow's nest rutters. Fluke jib scourge of the
                        seven seas boatswain schooner gaff booty Jack Tar transom spirits.
                    </p>
                    <p>
                        Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast
                        yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog
                        yardarm hempen halter furl. Swab barque interloper chantey doubloon
                        starboard grog black jack gangway rutters. Deadlights jack lad schooner
                        scallywag dance the hempen jig carouser broadside cable strike colors.
                        Bring a spring upon her cable holystone blow the man down spanker Shiver
                        me timbers to go on account lookout wherry doubloon chase. Belay
                        yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom
                        heave to. Trysail Sail ho Corsair red ensign hulk smartly boom jib rum
                        gangway. Case shot Shiver me timbers gangplank crack Jennys tea cup
                        ballast Blimey lee snow crow's nest rutters. Fluke jib scourge of the
                        seven seas boatswain schooner gaff booty Jack Tar transom spirits.
                    </p>
                </div>
            </section>
            <section className="content">
                <div className="inner">
                    <h1>Some Content Here</h1>
                    <p>
                        Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast
                        yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog
                        yardarm hempen halter furl. Swab barque interloper chantey doubloon
                        starboard grog black jack gangway rutters. Deadlights jack lad schooner
                        scallywag dance the hempen jig carouser broadside cable strike colors.
                        Bring a spring upon her cable holystone blow the man down spanker Shiver
                        me timbers to go on account lookout wherry doubloon chase. Belay
                        yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom
                        heave to. Trysail Sail ho Corsair red ensign hulk smartly boom jib rum
                        gangway. Case shot Shiver me timbers gangplank crack Jennys tea cup
                        ballast Blimey lee snow crow's nest rutters. Fluke jib scourge of the
                        seven seas boatswain schooner gaff booty Jack Tar transom spirits.
                    </p>
                    <p>
                        Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast
                        yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog
                        yardarm hempen halter furl. Swab barque interloper chantey doubloon
                        starboard grog black jack gangway rutters. Deadlights jack lad schooner
                        scallywag dance the hempen jig carouser broadside cable strike colors.
                        Bring a spring upon her cable holystone blow the man down spanker Shiver
                        me timbers to go on account lookout wherry doubloon chase. Belay
                        yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom
                        heave to. Trysail Sail ho Corsair red ensign hulk smartly boom jib rum
                        gangway. Case shot Shiver me timbers gangplank crack Jennys tea cup
                        ballast Blimey lee snow crow's nest rutters. Fluke jib scourge of the
                        seven seas boatswain schooner gaff booty Jack Tar transom spirits.
                    </p>
                </div>
            </section>
            <img
                id="img-fixed"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/smile.jpg"
            />
        </>

    )
}