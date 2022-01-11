import React, { useState } from "react";

import SingleColor from "./SingleColor";
//https://github.com/noeldelgado/values.js
import Values from "values.js";

const App = () => {
	const [color, setColor] = useState("");
	const [error, setError] = useState(false);
	const [list, setList] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Hello World");
	};

	return (
		<>
			<section className="container">
				<h3>color generator</h3>
				<form onSubmit={handleSubmit}>
					<input
						placeholder="f15025"
						type="text"
						value={color}
						onChange={(e) => setColor(e.target.value)}
						className={`${error ? "error" : null}`}
					/>
					<button type="submit" className="btn">
						Submit
					</button>
				</form>
			</section>
			<section className="colors">
				<h4>List</h4>
			</section>
		</>
	);
};

export default App;
