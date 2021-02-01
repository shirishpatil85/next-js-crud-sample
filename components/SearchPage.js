import { useSelector, useDispatch } from "react-redux";
import {fetchEmployeesAction} from "@/store";
import { useEffect, useState } from "react";

export function SearchPage() {
	const state = useSelector((state) => state.employee);
	let [searchTerm, setSearchTerm] = useState([]);
	let [searchResults, setSearchResults] = useState([]);

	const dispatch = useDispatch();

	useEffect(() => {
		console.log(" use effect called");
		dispatch(fetchEmployeesAction());
		var temp =[];
		console.log(" searchterm", searchTerm);
		console.log(" state.employeeList", state.employeeList);
		if(searchTerm.length >0 ) {
			for(var i =0; i < state.employeeList.length; i++) {
				if(state.employeeList[i].name.toUpperCase() === searchTerm.toUpperCase()) {
					temp.push(state.employeeList[i].name); 
				}         
			}
		}
		console.log(" temp", temp);
		setSearchResults(temp);	
	}, [searchTerm]);

	const handleChange = e => {
		setSearchTerm(e.target.value);	
	};
	  
	return (
		<div className="searchPage">
	      <input
        	type="text"
        	placeholder="Employee Name"
        	value={searchTerm}
        	onChange={handleChange}
      		/>
			<div className="searchResult"></div>
				<ul>
					{searchResults.map(item => (<li>{item}</li>))}
				</ul>				
			</div>
	);
}
