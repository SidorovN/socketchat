<template>
  <div class="switcher">
		<div class="switcher__container">
      <input type="checkbox" id="toggle" class="remove-from-screen" >
      <label for="toggle" class="switch"></label>
		</div>
      <slot></slot>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

.switcher {
	display: flex;	
}
.switcher__container {
	margin-right: 12px;
}
@supports (appearance: none) {
	.switch {
		position: relative;
		display: inline-block;
		width: 40px;
		height: 20px;
		background-color: rgba(0, 0, 0, 0.25);
		border-radius: 20px;
		transition: all 0.3s;
	}

	.switch:after {
		content: "";
		position: absolute;
		width: 18px;
		height: 18px;
		border-radius: 18px;
		background-color: white;
		top: 1px;
		left: 1px;
		transition: all 0.3s;
	}

	input[type="checkbox"]:checked + .switch:after {
		transform: translateX(20px);
	}

	input[type="checkbox"]:checked + .switch {
		background-color: #7983ff;
	}

	.remove-from-screen {
		position: absolute;
		left: -9999px;
	}
}

</style>