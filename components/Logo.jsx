import { cn } from "@/lib/utils";
import React from "react";

export default function Logo({ width, height }) {
	return (
		<div className={cn("flex items-center justify-center", width, height)}>
			<svg
				width="84"
				height="43"
				viewBox="0 0 84 43"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g id="Logo">
					<rect
						id="Rectangle 1"
						width="43"
						height="43"
						rx="4"
						fill="#F97316"
					/>
					<g id="TokoKu">
						<path
							d="M17.34 13.96V16.7H13.62V28H10.2V16.7H6.48V13.96H17.34ZM24.1364 28.16C23.0431 28.16 22.0564 27.9267 21.1764 27.46C20.3097 26.9933 19.6231 26.3267 19.1164 25.46C18.6231 24.5933 18.3764 23.58 18.3764 22.42C18.3764 21.2733 18.6297 20.2667 19.1364 19.4C19.6431 18.52 20.3364 17.8467 21.2164 17.38C22.0964 16.9133 23.0831 16.68 24.1764 16.68C25.2697 16.68 26.2564 16.9133 27.1364 17.38C28.0164 17.8467 28.7097 18.52 29.2164 19.4C29.7231 20.2667 29.9764 21.2733 29.9764 22.42C29.9764 23.5667 29.7164 24.58 29.1964 25.46C28.6897 26.3267 27.9897 26.9933 27.0964 27.46C26.2164 27.9267 25.2297 28.16 24.1364 28.16ZM24.1364 25.2C24.7897 25.2 25.3431 24.96 25.7964 24.48C26.2631 24 26.4964 23.3133 26.4964 22.42C26.4964 21.5267 26.2697 20.84 25.8164 20.36C25.3764 19.88 24.8297 19.64 24.1764 19.64C23.5097 19.64 22.9564 19.88 22.5164 20.36C22.0764 20.8267 21.8564 21.5133 21.8564 22.42C21.8564 23.3133 22.0697 24 22.4964 24.48C22.9364 24.96 23.4831 25.2 24.1364 25.2ZM38.6108 28L35.2108 23.32V28H31.7908V13.2H35.2108V21.38L38.5908 16.84H42.8108L38.1708 22.44L42.8508 28H38.6108Z"
							fill="white"
						/>
						<path
							d="M49.2341 28.16C48.1407 28.16 47.1541 27.9267 46.2741 27.46C45.4074 26.9933 44.7207 26.3267 44.2141 25.46C43.7207 24.5933 43.4741 23.58 43.4741 22.42C43.4741 21.2733 43.7274 20.2667 44.2341 19.4C44.7407 18.52 45.4341 17.8467 46.3141 17.38C47.1941 16.9133 48.1807 16.68 49.2741 16.68C50.3674 16.68 51.3541 16.9133 52.2341 17.38C53.1141 17.8467 53.8074 18.52 54.3141 19.4C54.8207 20.2667 55.0741 21.2733 55.0741 22.42C55.0741 23.5667 54.8141 24.58 54.2941 25.46C53.7874 26.3267 53.0874 26.9933 52.1941 27.46C51.3141 27.9267 50.3274 28.16 49.2341 28.16ZM49.2341 25.2C49.8874 25.2 50.4407 24.96 50.8941 24.48C51.3607 24 51.5941 23.3133 51.5941 22.42C51.5941 21.5267 51.3674 20.84 50.9141 20.36C50.4741 19.88 49.9274 19.64 49.2741 19.64C48.6074 19.64 48.0541 19.88 47.6141 20.36C47.1741 20.8267 46.9541 21.5133 46.9541 22.42C46.9541 23.3133 47.1674 24 47.5941 24.48C48.0341 24.96 48.5807 25.2 49.2341 25.2ZM65.0284 28L60.3084 21.8V28H56.8884V13.96H60.3084V20.12L64.9884 13.96H69.0084L63.5684 20.84L69.2084 28H65.0284ZM81.8538 16.84V28H78.4338V26.48C78.0871 26.9733 77.6138 27.3733 77.0138 27.68C76.4271 27.9733 75.7738 28.12 75.0538 28.12C74.2004 28.12 73.4471 27.9333 72.7938 27.56C72.1404 27.1733 71.6338 26.62 71.2738 25.9C70.9138 25.18 70.7338 24.3333 70.7338 23.36V16.84H74.1338V22.9C74.1338 23.6467 74.3271 24.2267 74.7138 24.64C75.1004 25.0533 75.6204 25.26 76.2738 25.26C76.9404 25.26 77.4671 25.0533 77.8538 24.64C78.2404 24.2267 78.4338 23.6467 78.4338 22.9V16.84H81.8538Z"
							fill="black"
						/>
					</g>
				</g>
			</svg>
		</div>
	);
}