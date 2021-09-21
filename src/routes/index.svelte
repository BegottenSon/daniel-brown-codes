<script>
import Transition from "$lib/Transition.svelte";
import { blur } from "svelte/transition";

//COLOR SETTINGS FOR FLASHING HEADLINE
let colors = [
	"var(--blue)",
	"var(--accent)",
	"purple",
	"var(--soft-white)",
	"#f0e56a"
];

let flashing;

function randomColor() {
	return colors[Math.floor(Math.random() * colors.length)]
}

setInterval(() => {
	flashing = randomColor();
}, 3000);

//SETTINGS FOR ABOUT RADIO SELECTIONS
let selected = 'code';
let options = [
	'music',
	'artist',
	'code'
];
</script>

<svelte:head>
	<title>Daniel Brown Codes</title>
</svelte:head>

<Transition>
<main>
	<h1>Daniel Brown</h1>
	<h2>Music Producer | Artist | Audio Engineer...</h2>
	<h2 style="color: {flashing}">WEB DEVELOPER</h2>
	<div class="about-selection">
		<h4>View the Many Facets of Daniel: </h4>
		{#each options as value }
			<label><input type="radio" {value} bind:group={selected}><span class="choice">{value}</span></label>
		{/each}
	</div>
	<section class='about-section'>
		<p>
			<span id='purpose-statement'><strong>To Create and Inspire</strong></span> <br>
			That's my life's mission statement summed up in it's simplest form.
		</p>
		{#if selected === 'music'}
		<p 	in:blur="{{amount: 10, delay: 400}}"
			out:blur="{{amount: 10}}">
			The love for music runs deep. Started out rapping, which left me with the desire to create 
			my own music. Music Production opened a whole new level of creativity with a momentum that 
			propelled me to attend Sheffield Institute for Recording Arts to become an Audio Engineer. 
			Now, I enjoy the freedom to flex my creative muscles on controlling the music creation process 
			from beginning to end. Dive into the sounds at 
			<a href="https://www.begottensounds.com" class='p-links'>Begotten Sounds</a>.
		</p>

		{:else if selected === 'artist'}
		<p 	in:blur="{{amount: 10, delay: 400}}"
			out:blur="{{amount: 10}}">
			As an artist, I've been working consistently for over three years now to 
			release a new song each week on all major music streaming platforms. Under 
			the name <a href="https://www.begottensounds.com/music" target="_blank" class="p-links">
			D. Brown the Begotten Son</a>, the playlist, #BegottenSonDay, is on 
			<a href="http://bit.ly/BSDlist" target="_blank" rel="norefferer noopener" class="p-links">Spotify</a> and 
			<a href="http://bit.ly/BSDplay" target="_blank" rel="norefferer noopener" class="p-links">Apple Music</a>
		</p>

		{:else}
		<p 	in:blur="{{amount: 10, delay: 400}}"
			out:blur="{{amount: 10}}">
			I've had a close relationship with tech and computers since I was a kid and
			my parents signed me up for computer camp. Ever since then, I've found myself
			going deeper and deeper into the world of tech. After creating the website for 
			my music company, <a href="https://www.begottensounds.com" class='p-links'>Begotten Sounds</a>
			, with Squarespace, I quickly found myself wanting to customize in ways I couldn't 
			with a template. This lead me diving deeper into 
			<a href="https://codepen.io/BegottenSon" target="_blank" rel="noopener noreferrer" class="p-links">code</a>. 
			Now, with every new web project or idea, I reach for my code editor and become unaware of the 
			time flying by.
		</p>
			
		{/if}
	</section>

	<img id="BSon-Pic" 
		src="https://res.cloudinary.com/begottenson/image/upload/c_scale,q_100,w_400/v1601780846/Begotten%20Sounds/BSon_profile_transp.png" 
		alt="Daniel Brown's Profile" 
		height="200px">
</main>
</Transition>

<style>
	main {
		padding: 2em;
	}
	h1, h2, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
		color: var(--accent);
	}

	h2:nth-of-type(2) {
		font-family: "Quicksand";
		font-weight: bold;
		transition: ease-out 400ms;
	}

	h4 {
		font-size: 0.8em;
		opacity: 0.5;
	}

	p {
		margin: 1em auto;
	}

	.about-section {
		background-color: var(--dark-blue);
		border-radius: 8px;
		padding: 1em;
		margin: 0.2em auto;
		max-width: 30em;
	}

	#purpose-statement {
		color: var(--blue);
	}

	.about-selection {
		display: flex;
		justify-content: space-between;
		margin-top: 2em;
	}

	input[type="radio"] {
		appearance: none;
		-webkit-appearance: none;
		display: none;
	}

	.choice:before {
		position: absolute;
		content: "";
		display: block;
		border: 1px solid var(--accent);
		border-radius: 50em;
		width: 1em;
		height: 1em;
		left: -60%;
		top: 10%;
	}

	input:checked ~ .choice:before {
		background-color: var(--accent);
	}

	label {
		position: relative;
		font-size: 0.7em;
		color: hsla(348, 100%, 95%, 0.5);
		cursor: pointer;
	}

	#BSon-Pic {
		display: block;
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: -1;
	}

	@media (max-width: 567px) {
		#BSon-Pic {
			height: 120px;
		}
	}

	@media (max-width: 480px) {
		#BSon-Pic {
			height: 200px;
		}
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

