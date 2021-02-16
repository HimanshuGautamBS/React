import React ,{useState,useEffect} from 'react';
import axios from 'axios';

const ComA=()=>{

const [num,setNum] = useState();
const [name,setName] = useState();
const [moves , setMoves] = useState();
const [move , setMove] = useState();


useEffect(()=>{
	// alert("Hello") 
	async function getData(){
		const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
		console.log(res.data.name);
		setName (res.data.name)
		setMove(res.data.moves[+1].move.name)
		setMoves(res.data.moves.length)
	}

	getData();
});

return (<>
			<h1> POkemon </h1>

			<select 
	value={num} 
	onChange={(event)=>{
	setNum(event.target.value);
	}} >
		<option value="1">1</option>
		<option value="25">25</option>
		<option value="3">3</option>
		<option value="4">4</option>
		<option value="5">5</option>
	</select>
	

			<h1>you choose <span style={{color: "red"}}>{num} value</span></h1>
			<h1>My name is <span style={{color: "red"}}> {name} </span></h1>
			<h1>I have <span style={{color: "red"}}>{moves} moves</span> and my first move is <span style={{color:"red"}}>{move}</span></h1>
	
</>);
};

export default ComA;
