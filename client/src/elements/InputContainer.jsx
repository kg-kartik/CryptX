import styled from "styled-components";

const InputContainer = styled.div`
	display: inline-block;
	position: relative;
	text-align: start;
	margin: 1.5rem 2rem 0;

	.styled-input {
		border-bottom: 2px solid #ccc !important;
		// font-family: "IBM Plex Sans", sans-serif;
		width:100%;
		font-size: 1em;
		font-weight: 600;
		padding: 0.5em 0.5em;
		transition: 0.4s;
		background: transparent;
		color: white !important;
		caret-color: #888 !important;
		letter-spacing: 1px;
		&:focus{
			outline:none;
		}
	}

	.styled-input~.focus-border:before,
	.styled-input~.focus-border:after {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		width: 0;
		height: 2px;
		background-color: white;
		transition: 0.2s;
		transition-delay: 0.2s;
	}

	.styled-input~.focus-border:after {
		top: auto;
		bottom: 0;
		right: auto;
		left: 0;
		transition-delay: 0.6s;
	}

	.styled-input~.focus-border i:before,
	.styled-input~.focus-border i:after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 2px;
		height: 0;
		background-color: white;
		transition: 0.2s;
	}

	.styled-input~.focus-border i:after {
		left: auto;
		right: 0;
		top: auto;
		bottom: 0;
		transition-delay: 0.4s;
	}

	.styled-input:focus~.focus-border:before,
	.styled-input:focus~.focus-border:after,
	.has-content.styled-input~.focus-border:before,
	.has-content.styled-input~.focus-border:after {
		width: 100%;
		transition: 0.2s;
		transition-delay: 0.6s;
	}

	.styled-input:focus~.focus-border:after,
	.has-content.styled-input~.focus-border:after {
		transition-delay: 0.2s;
	}

	.styled-input:focus~.focus-border i:before,
	.styled-input:focus~.focus-border i:after,
	.has-content.styled-input~.focus-border i:before,
	.has-content.styled-input~.focus-border i:after {
		height: 100%;
		transition: 0.2s;
	}

	.styled-input:focus~.focus-border i:after,
	.has-content.styled-input~.focus-border i:after {
		transition-delay: 0.4s;
	}

	.styled-input~label {
		position: absolute;
		font-size: 1.2rem;
		left: 0.5rem;
		top: 0.4rem;
		width: 100%;
		color: #888;
		transition: 0.3s;
		z-index: -1;
		letter-spacing: 0.5px;
	}

	.styled-input:focus~label,
	.has-content.styled-input~label {
		top: -1.5rem;
		left: 0;
		font-size: 12px;
		color: #aaa;
		transition: 0.3s;
	}
`

export default InputContainer
