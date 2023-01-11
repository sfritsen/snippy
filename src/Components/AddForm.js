import React from 'react';

export default function AddForm() {
	return (
		<>
			<div className="container form_container">
				<div className="row">
					<div className="col">
						<label for="code_snippet">Code Snippet</label>
						<textarea id="code_snippet"></textarea>
					</div>
				</div>
				<div className="row">
					<div className="col right_align">
						<button type="button" className="btn btn_form">
							Save
						</button>
						{/* <button type="button" className="btn btn_form">
							Cancel
						</button> */}
					</div>
				</div>
			</div>
		</>
	);
}
