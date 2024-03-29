import React from "react";

import "./socialicons.scss";

function Socialicons() {
	return (
		<div className="socialicons">
			<ul className="social-list">
				<li>
					<a
						href="https://github.com/adarshcodes"
						className="social-links"
						target="_blank"
						rel="noreferrer"
					>
						<i class="fa-brands fa-github"></i>
					</a>
				</li>
				<li>
					<a
						href="https://twitter.com/ideallyadarsh"
						className="social-links"
						target="_blank"
						rel="noreferrer"
					>
						<i class="fa-brands fa-twitter"></i>
					</a>
				</li>
				<li>
					<a
						href="https://www.instagram.com/officiallyadarsh/"
						className="social-links"
						target="_blank"
						rel="noreferrer"
					>
						<i class="fa-brands fa-instagram"></i>
					</a>
				</li>
				<li>
					<a
						href="https://www.youtube.com/channel/UCTtem0QNEAeh4Nm4tg3rMHg"
						className="social-links"
						target="_blank"
						rel="noreferrer"
					>
						<i class="fa-brands fa-youtube"></i>
					</a>
				</li>
				<li>
					<a
						href="https://www.linkedin.com/in/adarshofficial/"
						className="social-links"
						target="_blank"
						rel="noreferrer"
					>
						<i class="fa-brands fa-linkedin-in"></i>
					</a>
				</li>
				<li>
					<a
						href="https://medium.com/@officiallyAdarsh"
						className="social-links"
						target="_blank"
						rel="noreferrer"
					>
						<i class="fa-brands fa-medium"></i>
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Socialicons;
