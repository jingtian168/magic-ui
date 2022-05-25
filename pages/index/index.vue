<template>
	<view class="content">
		<view class="title" >
			<text space="emsp">{{title}}</text>
			
		</view>
		<view class="title1">
			基础组件
		</view>
		<view class="list">
		<view class="item" v-for="(item,index) in list" :key="index" @tap="gotoList">
			{{item}}
		</view>
		</view>
	</view>
</template>

<script lang="ts" setup>
const title:String = "  Magic-ui 是一个基于vue3 script setup 语法糖 和 TypeScript 打造的uni-app的专用UI框架"
function gotoList(){
	console.log("aaaaa")
	uni.navigateTo({
		url:'../icon-list/icon-list'
	})
}
const list :string[] = ['图标']
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		
	}
	.title1{
		
		height: 100rpx;
		
		text-align: start;
	}
	.list{
		display: flex;
		width: 100%;
		
		
	}
	.item{
		width: 25%;
		height: 200rpx;
		background-color: aqua;
		align-items: center;
		display: flex;
		justify-content: center;
		
		
	}
	
</style>
