<template>
	<view class="container">
		<view class="content" v-for="(item,index) in list" :key="index">
			<m-icon :name="item.name" :size="item.size"></m-icon>
			<text>{{item.name}}</text>
		</view>
		
	</view>
</template>

<script lang="ts" setup>
	interface iconItem{
		name?:string;
		color?:string;
		size?:string
	}
	const list:iconItem[]=[{
		name:'add-rectangle',
		size:"50px"
	},
	{
		name:'image-circle',
		size:"50px"
	},
	{
		name:'invoice',
		size:"50px"
	},{
		name:'shopping-bag',
		size:"50px"
	},
	{
		name:'chat-01',
		size:"50px"
	},
	{
		name:'sort-arrow-up',
		size:"50px"
	}
	,{
		name:'chat-03',
		size:"50px"
	},
	{
		name:'chat-02',
		size:"50px"
	},
	{
		name:'arrow-right',
		size:"50px"
	},{
		name:'direction-right',
		size:"50px"
	},
	{
		name:'direction-down',
		size:"50px"
	},
	{
		name:'search',
		size:"50px"
	}];
	

</script>



<style>
.container{
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
}
.content{
	margin-left: 30rpx;
	width: 200rpx;
	text-align: center;
	
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 30rpx;
}
.icon{
	margin-left: 20rpx;
	margin-top: 20rpx;
}
</style>
