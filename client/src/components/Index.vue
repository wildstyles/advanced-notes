<template>
  <div class="hero_background" style="background-image: url(https://us.123rf.com/450wm/photoraidz/photoraidz1611/photoraidz161100011/67798433-start-icon-road-asphalt-background-texture-with-some-fine-grain-in-it-background-of-road.jpg);">
  <div class="hero-overlay"></div>
    <div class="hero-composition">
        <h1>some text goes here</h1> 
        <p>fancy description about my project</p>
    </div>
    
  </div>
</template>



<style scoped lang="sass">

.hero_background
    height: calc(100vh - 64px)
    min-height: 700px
    width: 100%
    background-position: center
    background-size: cover
    position: relative

.hero-overlay
	position: absolute
	content: ''
	display: block
	top: 0
	left: 0
	right: 0
	bottom: 0
	background-color: rgba(0,0,0,.79)

.hero-composition
  position: absolute
  left: 50%
  top: 50%
  transform: translate(-50%,-50%)
  color: #fff
  text-align: center


</style>
