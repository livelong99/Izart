import React, {useRef} from 'react';

const Infograph = () => {
    return(
        <div class="darkBg">
                <div class="graphics">
                    <div class="blank-start" style={{zIndex: "6"}}>
                    </div>
                    <div class="blk" style={{zIndex: "5"}}>
                        <img class="tri-2" src="../Images/triangle.svg" />
                        <img class="tri-1" src="../Images/triangle02.svg" />
                        <div class="blkContent">
                            <div class="blkHead"><p>INITIATE</p></div>
                            <div class="blkBdy"><p>Our Delivery Executive gets on a quick call with you, understands your requirements, and allocates a Content Strategist for your brand. </p></div>
                        </div>
                    </div>
                    <div class="blk" style={{zIndex: "4"}}>
                      
                    <img class="tri-2" src="../Images/triangle.svg" />
                        <img class="tri-1" src="../Images/triangle02.svg" />
                        <div class="blkContent">
                            <div class="blkHead"><p>RECON</p></div>
                            <div class="blkBdy"><p>Our Content Strategist gets on a call with you. They brainstorm on ideas with you and finalize a plan of action that will serve you the best. </p></div>

                        </div>
                    </div>
                    <div class="blk" style={{zIndex: "3"}}>
                        <img class="tri-2" src="../Images/triangle.svg" />
                        <img class="tri-1" src="../Images/triangle02.svg" />
                        <div class="blkContent">
                            <div class="blkHead"><p>EXECUTION</p></div>
                            <div class="blkBdy"><p>Sit back and relax. Our team of writers are now working on your requirement and will provide the final deliverable right on time.</p></div>
                        </div>
                    </div>
                    <div class="blk" style={{zIndex: "2"}}>
                        <img class="tri-2" src="../Images/triangle.svg" />
                        <img class="tri-1" src="../Images/triangle02.svg" />
                        <div class="blkContent">
                            <div class="blkHead"><p>CURATION </p></div>
                            <div class="blkBdy"><p>Have some edits? Great! We love editing. Send your comments to our first draft and we will edit it in no time.</p></div>
                        </div>
                    </div>
                    <div class="blk" style={{zIndex: "1"}}>
                        <img class="tri-2" src="../Images/triangle.svg" />
                        <img class="tri-1" src="../Images/triangle02.svg" />
                        <div class="blkContent">
                            <div class="blkHead"><p>IT’S A WRAP</p></div>
                            <div class="blkBdy"><p>Publish the final content and see your inbound traffic, leads, and revenue grow exponentially.</p></div>
                        </div>
                    </div>
                    <div class="blank-end"  style={{zIndex: "2"}}></div>
                    </div>
                </div>
    );
}

export default Infograph;