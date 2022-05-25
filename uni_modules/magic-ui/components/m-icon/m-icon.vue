<template>
	<view class="">
		<text :class="iconClasses" class="magic-iconfont" :style="iconStyles"></text>
	</view>
</template>
<script lang="ts" setup>
	import {  computed } from 'vue';
   interface Props{
    name?: string;
	color?:string;
	size?:string;
   }
   const props = withDefaults(defineProps<Props>(),{
	   name:'',
	   color:'',
	   size:''
   })
   
   const iconClasses = computed(() => ({
	     [`magic-icon-${props.name}`]: true,
		 
   }));
   const iconStyles =  computed(()=>{
	   return {
		   color:props.color,
		   fontSize:props.size
	   }
   })
	 console.log(props);
</script>
<style lang="scss">
@import '../../iconfont.css';
</style>
