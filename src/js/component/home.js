import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="jumbotron jumbotron-fluid">
				<div className="container">
					<h1 className="display-4">Not So Sweet</h1>
					<p className="lead">
						Despite their fun advertising, these companies are
						anything but fun for abusive practices fueled by profit.
						To learn why these companies are here, select from the
						dropdown below.
					</p>
					<div className="dropdown mx-auto col-2">
						<button
							className="btn btn-info dropdown-toggle"
							type="button"
							id="dropdownMenuButton"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Make A Selection
						</button>
						<div
							className="dropdown-menu"
							aria-labelledby="dropdownMenuButton">
							<a className="dropdown-item" href="#">
								Oreos
							</a>
							<a className="dropdown-item" href="#">
								Nutella
							</a>
							<a className="dropdown-item" href="#">
								Lipton Iced Tea
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
