import React, {useContext, useEffect, useState, useRef} from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "../fr.css";
import {DashContext} from "../../../Store";
import {UserContext} from "../../../Store";
import {CartContext} from "../../../Store";
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import price from "../../../OtherFiles/pricing.json";
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
init("user_mmsweAbVZuzTubZqCZWNq");


const AddItm = () => {
    const db = firebase.firestore();
    const [contactNumber, setContactNumber] = useState("000000");
	const form = useRef(null);
    const { register, handleSubmit, watch, errors } = useForm();

    const [dash, setDash] = useContext(DashContext);
    const [User, setUser] = useContext(UserContext);
    const [cart, setCart] = useContext(CartContext);
    const [projectName, setPro] = useState(null);
    const [delivery, setDelivery] = useState(null);
    const [date, setDate] = useState(null);
    const [product, setProduct] = useState(null);
    const [quantity, setQuo] = useState(1);
    const [landingpage, setLanding] = useState(null);
    const [nonlandingpage, setNonLandingPage] = useState(null);
    const [billablewords, setBillableWords] = useState(null);
    const [numberofposts, setNumberOfPosts] = useState(null);
    const [explanation, setExplanation] = useState(null);
    const [topic, setTopic] = useState(null);
    const [industry, setIndustry] = useState(null);
    const [contentgoals, setContentGoals] = useState(null);
    const [voice, setVoice] = useState(null);
    const [targetaudience, setTargetAudience] = useState(null);
    const [primarykeywords, setPrimaryKeywords] = useState(null);
    const [referencecontent, setReferenceContent] = useState(null);
    const [styletone, setStyleTone] = useState(null);
    const [linkingpreference, setLinkingPreference] = useState(null);
    const [additionalinformation, setAditionalInformation] = useState(null);
    const [attachment, setAttachment] = useState(null);
    const [sel, setSel] = useState(0);
    const [main, setMain] = useState(0);
    const [type, setType] = useState("type1");
    // const [intr]

    const createData = (data) => {
        return db.collection('Cart').doc(User.uid).collection('Items').add({
            created: firebase.firestore.FieldValue.serverTimestamp(),
            
            data
        }).then(() => {window.location.href="/dashboard/cart"; getData();})
    };

    const getData = () => {
        const k = db.collection('Cart').doc(User.uid).collection('Items')
            .get()
            .then((querySnapshot) => {
                let arr = [];
                querySnapshot.docs.map((doc) =>
                    arr.push({ id: doc.id, value: doc.data() })
                );
                setCart(arr);;
            },[db]);
    };

    const onSubmit = (data) => {
		generateContactNumber();  
		sendForm('dashboard', 'template_wzop1zw', '#add_item')
			.then(function(response) {
                window.location.href="/dashboard/cart";
			}, function(error) {
			console.log('FAILED...', error);
			});
		console.log(data);

	};
    const generateContactNumber = () => {
		const numStr = "000000" + (Math.random() * 1000000 | 0);
		setContactNumber(numStr.substring(numStr.length - 6));
	  }

    const [step, setStep] = useState(0);

    const SubmitEvent = (event) => {        
        event.preventDefault();
        if(step==0){
            setStep(1);
            if(sel==1){
                if(product=="Whitepaper"){
                    if(billablewords <= 1500)
                        setType("type1");
                    else if(billablewords <= 2500)
                        setType("type2");
                    else if(billablewords<=5000)
                        setType("type3");
                }
                else{
                    if(billablewords <= 500)
                        setType("type1");
                    else if(billablewords <= 1000)
                        setType("type2");
                    else if(billablewords<=2000)
                        setType("type3");
                    else if(billablewords <= 3000)
                        setType("type4");
                }
            }
        }
        else{
            var data = {
                ProjectName : projectName,
                Product: product,
                Topic: topic,
                Industry: industry,
                ContentGoals: contentgoals,
                Voice: voice,
                TargetAudience: targetaudience,
                ReferenceContent: referencecontent,
                StyleTone: styletone,
                LinkingPreference: linkingpreference,
                AdditionalInformation: additionalinformation,
                delivery: delivery
                
            };

            if(sel==1){
                data["billableWords"] = billablewords;
            }
            else if(sel == 2){
                data["landing"] = landingpage;
                data["nonLanding"] = nonlandingpage;
            }
            
            console.log(data);
            createData(data);
        }
        
        
        
    }

    // const minDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() +4);

    // function onRenderDayCell(args) {
    //     if ((args.date).getDay() === 0 || (args.date).getDay() === 6) {
    //         args.isDisabled = true;
    //     }
    // }

    // function onDateChange(args){
    //     setDate(args.value);
    //     console.log(date);
    // }

    const contact = () => {
        return(<p class="fillUpMsg">{price[product].message}</p>)
    }

    useEffect(() => {
        setDash(1);
        if(cart.length === 0)
            getData();
        
        if(product == "Whitepaper" || product == "Blog" || product == "Technical_Write_Up" || product == "Article"){
            setSel(1);
            setMain(1);
        }

        else if(product == "Website_Content"){
            setSel(2);
            setMain(1)
        }
        else if(product == "Social_Media_Post" || product == "Case_Study" || product == "Product_Description" || product == "Custom" || product == "Advertisement_Script" || product == "SOP" || product == "Cover_Letter" || product == "Research_Paper" || product == "Resume" || product == "LOR"){
            setMain(2);
            setSel(0);
        }
        else if(product == "Press_Release" || product == "Newsletter"){
            setSel(0);
            setMain(1);
        }
        

    })

    const step1 = () => {
        return(<fieldset>
            <legend><span class="number">1</span> Project Name*</legend>
            {/* <label for="job">Project Name*</label> */}
            <input onChange={(event) => {setPro(event.target.value)}} type="text" name="project_name" placeholder="Give your project a name" value={projectName} ref={register} />
            <legend><span class="number">2</span>Choose a Product*</legend>
            {/* <label for="job">Product:</label> */}
            <select onChange={(event) => {setProduct(event.target.value)}} id="product" name="product" ref={register} value={product}>
            <optgroup label="Services">
            <option value="none" selected disabled hidden>
                Select an Option
            </option>
            <option value="Whitepaper">Whitepaper</option>
            <option value="Website_Content">Website Content</option>
            <option value="Social_Media_Post">Social Media</option>
            <option value="Technical_Write_Up">Technical Writing</option>
            <option value="Blog">Blog Writing</option>
            <option value="Article">Article Writing</option>
            <option value="LOR">LOR</option>
            <option value="Resume">Resume/CV</option>
            <option value="SOP">SOP</option>
            <option value="Cover_Letter">Cover Letter</option>
            <option value="Press_Release">Press Release</option>
            <option value="Newsletter">E-Mail Newsletter</option>
            <option value="Research_Paper">Research Paper</option>
            <option value="Product_Description">Product Description</option>
            <option value="Advertisement_Script">Advertisement Script</option>
            <option value="Case_Study">Case Study</option>
            <option value="Custom">Custom</option>            
            </optgroup>
            </select>
            {/* {(sel==1) ? <><label for="design">Design:</label>
            <select onChange={(event) => {setQuo(event.target.value)}} id="design" name="design">
            <optgroup label="design">
            <option value="none" selected disabled hidden>
                Select an Option
            </option>
            <option value="1">With Design</option>
            <option value="0">Without Design</option>
            </optgroup>
            </select></> : null} */}
            {(sel==2) ? <><label for="job">Number of Landing Pages:</label><textarea onChange={(event) => {setLanding(event.target.value)}} name="landing" value={landingpage} placeholder="Enter number of landing pages"/> 
            <label for="job">Number of Non Landing Pages:</label><textarea onChange={(event) => {setNonLandingPage(event.target.value)}} name="nonlanding" value={nonlandingpage} placeholder="Enter number of non-landing pages"></textarea></>: null }
            {(sel==3 || sel==1) ? <textarea onChange={(event) => {setBillableWords(event.target.value)}} value={billablewords} name="billable" placeholder="Enter number of billable words" />: null }
            {(main==2) ? <legend><span class="number">3</span>Project Description</legend> : null}
            {(main ==2) ? contact() : null}
            {(main==2) ? <><br/><br/><label for="job">Phone Number:</label><input type="text" name="phone" placeholder="Give your phone number" ref={register} /><label for="job">Details:</label> <textarea onChange={(event) => {setTopic(event.target.value)}} name="details" placeholder="Enter your project details" ref={register}></textarea></> : null}
            {(main==1) ? <><legend><span class="number">3</span> Topic</legend>
            <input type="text" value={topic} onChange={(event) => {setTopic(event.target.value)}} name="topic" placeholder="Enter your Topic" />
            <legend><span class="number">4</span> Industry</legend>
            <select onChange={(event) => {setIndustry(event.target.value)}} value={industry} id="Industry" name="industry">
            <optgroup label="Industry">
            <option value="none" selected disabled hidden>
                Select an Option
            </option>
            <option value="Software_and_Technology">Software and Technology</option>
            <option value="information_technology">Information Technology</option>
            <option value="marketing_and_advertisement">Marketing and Advertisement</option>
            <option value="finance">Finance</option>
            <option value="e_commerce">E-Commerce</option>
            <option value="academics">Academics</option>
            <option value="events_and_hospitality">Events and Hospitality</option>
            <option value="healthcare_and_sciences">Healthcare and Sciences</option>
            <option value="fashion">Fashion</option>
            <option value="travel">Travel</option>
            <option value="entertainment">Entertainment</option>
            <option value="sports_and_fitness">Sports and Fitness</option>
            </optgroup>
            </select>
            <legend><span class="number">5</span> Content Goals</legend>
            <textarea onChange={(event) => {setContentGoals(event.target.value)}} value={contentgoals} name="contentgoals" placeholder="About Your School"></textarea>
            <legend><span class="number">6</span> Voice</legend>
            <textarea value={voice} onChange={(event) => {setVoice(event.target.value)}} name="voice" placeholder="About Your School"></textarea>
            <legend><span class="number">7</span> Target Audience</legend>
            <textarea value={targetaudience} onChange={(event) => {setTargetAudience(event.target.value)}} name="targetaudience" placeholder="About Your School"></textarea>
            <legend><span class="number">8</span> Primary Keywords</legend>
            <textarea value={primarykeywords} onChange={(event) => {setPrimaryKeywords(event.target.value)}} name="primarykeywords" placeholder="About Your School"></textarea>
            <legend><span class="number">9</span> Reference Content</legend>
            <textarea value={referencecontent} onChange={(event) => {setReferenceContent(event.target.value)}} name="referencecontent" placeholder="About Your School"></textarea>
            <legend><span class="number">10</span> Style and Tone</legend>
            <textarea value={styletone} onChange={(event) => {setStyleTone(event.target.value)}} name="styletone" placeholder="About Your School"></textarea>
            <legend><span class="number">11</span> Referencing and Linking Preference</legend>
            <textarea value={linkingpreference} onChange={(event) => {setLinkingPreference(event.target.value)}} name="linkingpreference" placeholder="About Your School"></textarea>
            <legend><span class="number">12</span> Additional Information</legend>
            <textarea value={additionalinformation} onChange={(event) => {setAditionalInformation(event.target.value)}} name="additionalinformation" placeholder="About Your School"></textarea>
            </> : null}
            <input type='hidden' name='contact_number' value={contactNumber} />
            <input type="submit" value="Proceed" />
            </fieldset>
        );
    }

    const step2 = () => {
        return(
            <fieldset>
                <legend><span class="number">13</span> Delivery</legend>
                <select id="Delivery" onChange={(event) => {setDelivery(price[product][type][event.target.value]); console.log(delivery);}} name="Delivery">
                <optgroup label="Delivery">
                <option value="none" selected disabled hidden>
                    Select an Option
                </option>
                {price[product][type].map((type,index) => {
                    if(product == "Website_Content"){
                        type.charge = type.lcharge*landingpage + type.nlcharge*nonlandingpage;
                    }
                    return(<option value={index}>{type.deliveryName + "  - Delivery in " + type.days + " days - ₹" + type.charge}</option>);
                })}
                </optgroup>
                </select>
                <input onClick={() => {setStep(0)}} type="button" value="Back" />
                <input type="submit" value="Submit" />
            </fieldset>
        )
    }

    return(
        <div class="form-style-5">
            <form onSubmit={(main==2) ? handleSubmit(onSubmit) : SubmitEvent} id="add_item">
            {(step==0) ? step1() : step2()}
            </form>
        </div>
    )
}

export default AddItm;


// {(delivery==2 || delivery==1) ? <label for="deadline">Delivery Deadline</label> : null}
//             {(delivery==1) ? <DatePickerComponent id="datepicker" change={onDateChange}  renderDayCell={onRenderDayCell} min={new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() +4)} placeholder="Enter date"/> : (delivery==2) ? <DatePickerComponent id="datepicker"  change={onDateChange} renderDayCell={onRenderDayCell} min={new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() +2)} placeholder="Enter date"/> : null}
//             <br/><br/><br/>