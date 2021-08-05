<template>
	<view style="width: 100%;height: 1300rpx;">
		<!-- 聊天banner -->
		<view class="chat">
			<text class="chattext">聊天</text>
		</view>
		
		<!-- 搜索框 -->
		<view class="playindex-search">
			<view class="search-logo bc"></view>
			<input type="text" value="" placeholder="搜索" style="width: 80%;height: 100rpx;margin-top:-15rpx;margin-left: 10rpx;font-size: 30rpx;" />
		</view>
		
		<!-- 添加好友 -->
		<view class="add-friend">
			<view class="add">
				<view class="add-first bc"></view>
				<view class="">添加朋友</view>
			</view>
			
			<view class="add">
				<view class="addbc add-first"></view>
				<view class="">输入文本</view>
			</view>
			
			
			<view class="add">
				<view class="addbc add-first"></view>
				<view class="">输入文本</view>
			</view>
			
			<view class="add">
				<view class="addbc add-first"></view>
				<view class="">输入文本</view>
			</view>
		</view>
		
		<!-- 消息区域 -->
		<view class="message-area">
			<view class="message" @click="MessageDetails">
				<!-- 头像 -->
				<view class="logo-img"></view>
				
				<!-- 昵称 消息内容 -->
				<view class="message-box">
					<!-- 昵称 -->
					<view class="message-nike">
						包小图
					</view>
					<!-- 消息内容 -->
					<view class="message-content">
						好设计让产品易被理解
					</view>
				</view>
				
				<!-- 消息时间 -->
				<view class="message-time">
					5:30 下午
				</view>
			</view>
			
			<view class="message">
				<!-- 头像 -->
				<view class="logo-img"></view>
				
				<!-- 昵称 消息内容 -->
				<view class="message-box">
					<!-- 昵称 -->
					<view class="message-nike">
						包小图
					</view>
					<!-- 消息内容 -->
					<view class="message-content">
						好设计让产品易被理解
					</view>
				</view>
				
				<!-- 消息时间 -->
				<view class="message-time">
					5:30 下午
				</view>
			</view>
			
			
			
			<view class="message">
				<!-- 头像 -->
				<view class="logo-img"></view>
				
				<!-- 昵称 消息内容 -->
				<view class="message-box">
					<!-- 昵称 -->
					<view class="message-nike">
						包小图
					</view>
					<!-- 消息内容 -->
					<view class="message-content">
						好设计让产品易被理解
					</view>
				</view>
				
				<!-- 消息时间 -->
				<view class="message-time">
					5:30 下午
				</view>
			</view>
			
			
			
			<view class="message">
				<!-- 头像 -->
				<view class="logo-img"></view>
				
				<!-- 昵称 消息内容 -->
				<view class="message-box">
					<!-- 昵称 -->
					<view class="message-nike">
						包小图
					</view>
					<!-- 消息内容 -->
					<view class="message-content">
						好设计让产品易被理解
					</view>
				</view>
				
				<!-- 消息时间 -->
				<view class="message-time">
					5:30 下午
				</view>
			</view>
			
			
			
			<view class="message">
				<!-- 头像 -->
				<view class="logo-img"></view>
				
				<!-- 昵称 消息内容 -->
				<view class="message-box">
					<!-- 昵称 -->
					<view class="message-nike">
						包小图
					</view>
					<!-- 消息内容 -->
					<view class="message-content">
						好设计让产品易被理解
					</view>
				</view>
				
				<!-- 消息时间 -->
				<view class="message-time">
					5:30 下午
				</view>
			</view>
			
			
			<view class="message">
				<!-- 头像 -->
				<view class="logo-img"></view>
				
				<!-- 昵称 消息内容 -->
				<view class="message-box">
					<!-- 昵称 -->
					<view class="message-nike">
						包小图
					</view>
					<!-- 消息内容 -->
					<view class="message-content">
						好设计让产品易被理解
					</view>
				</view>
				
				<!-- 消息时间 -->
				<view class="message-time">
					5:30 下午
				</view>
			</view>
		</view>
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			MessageDetails() {
				uni.navigateTo({
					url:'../message-details/message-details'
				})
			}
		}
	}
</script>

<style>
	.chat {
		width: 100%;
		height: 150rpx;
		/* border-bottom: 1px solid #007AFF; */
		box-shadow: darkgrey 10px 10px 30px 5px ;//边框
		text-align: center;
		font-size: 50rpx;
	}

	.chattext {
		line-height: 150rpx;
	}
	
	.bc {
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	
	.playindex-search {
		width: 80%;
		height: 5%;
		border-radius: 10rpx;
		background-color: #f1f1f1;
		margin: 0 auto;
		display: flex;
		margin-top: 20rpx;
	}
	
	.search-logo {
		width: 60rpx;
		height: 60rpx;
		background: url(../../../static/img/search.png);
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}
	
	.add-friend {
		width: 100%;
		height: 15%;
		display: flex;
		margin-top: 5%;
		/* border: 1rpx solid #3F536E; */
	}
	
	.add {
		width: 30%;
		height: 70%;
	}
	
	.add-first {
		width: 80%;
		height: 100%;
		border-radius: 80%;
		/* background-color: #00007F; */
		border: 5rpx solid #00007F;
		background-image: url(../../../static/img/add.png);
	}
	
	.addbc {
		background-color: #007AFF;
	}
	
	.message-area {
		width: 100%;
		height: 70%;
		margin-top: 5%;
		/* border: 1rpx solid #4CD964; */
	}
	
	.message {
		width: 100%;
		height: 20%;
		/* border: 1rpx solid #999999; */
		display: flex;
	}
	
	.logo-img {
		width: 25%;
		height: 80%;
		background-color: #007AFF;
		border-radius: 80%;
	}
	
	.message-box {
		width: 70%;
		height: 100%;
		margin-left: 10rpx;
		
	}
	
	.message-nike {
		font-size: 50rpx;
	}
	
	.message-content {
		font-size: 40rpx;
		color: #999999;
	}
	
	.message-time {
		width: 15%;
		height: 100%;
		color: #e6e6e6;
		font-size: 35rpx;
	}
</style>
