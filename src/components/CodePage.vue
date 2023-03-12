<template>
	<div>
		<button>
			Développe <img src="../assets/icons/basics/brain_logo_60x60.svg" />
		</button>
		<section>
			<div>
				<h2>
					Expérience : {{ Exp }}
				</h2>
				<h2>
					10 Expérience par seconde
				</h2>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	name: "CodePage",
	data() {
		Exp : 1,
	}
}
</script>
