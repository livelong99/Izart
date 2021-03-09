import React, {useContext, useEffect} from "react";
import "../fr.css"
import {DashContext} from "../../../Store";

const AddItm = () => {

    const [dash, setDash] = useContext(DashContext);

    useEffect(() => {
        setDash(1);
    })

    return(
        <div class="form-style-5">
            <form>
            <fieldset>
            <legend><span class="number">1</span> Candidate Info</legend>
            <input type="text" name="field1" placeholder="Your Name *" />
            <input type="email" name="field2" placeholder="Your Email *" />
            <textarea name="field3" placeholder="About yourself"></textarea>
            <label for="job">Interests:</label>
            <select id="job" name="field4">
            <optgroup label="Indoors">
            <option value="fishkeeping">Fishkeeping</option>
            <option value="reading">Reading</option>
            <option value="boxing">Boxing</option>
            <option value="debate">Debate</option>
            <option value="gaming">Gaming</option>
            <option value="snooker">Snooker</option>
            <option value="other_indoor">Other</option>
            </optgroup>
            <optgroup label="Outdoors">
            <option value="football">Football</option>
            <option value="swimming">Swimming</option>
            <option value="fishing">Fishing</option>
            <option value="climbing">Climbing</option>
            <option value="cycling">Cycling</option>
            <option value="other_outdoor">Other</option>
            </optgroup>
            </select>      
            </fieldset>
            <fieldset>
            <legend><span class="number">2</span> Additional Info</legend>
            <textarea name="field3" placeholder="About Your School"></textarea>
            </fieldset>
            <input type="submit" value="Add Item" />
            </form>
        </div>
    )
}

export default AddItm;