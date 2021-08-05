<template>
	<view style="width: 100%;height: 1300rpx;">
		<!-- 返回 功能按钮 -->
		<view class="button">
			<view class="Back bc"></view>
			<view class="Menu bc"></view>
		</view>


		<view style="width: 100%;height: 80%;border: 1rpx solid #007AFF;overflow: auto;">
			<!-- 左侧聊天内容框 -->
			<view class="chat-message">
				<view class="" style="display: flex;">
					<!-- 头像logo -->
					<view class="chat-logo"></view>
					<!-- 名称 -->
					<view class="name">客服001</view>
				</view>

				<!-- 消息框 -->
				<view class="chat-box">
					您好，请问有什么可以帮到你的？
				</view>
			</view>

			<!-- 右侧聊天框 -->
			<view class="chat-message">
				<view class="" style="display: flex;margin-left: 480rpx;">
					<!-- 名称 -->
					<view class="" style="margin-right: 20rpx;">客服002</view>
					<!-- 头像logo -->
					<view class="chat-logo"></view>
				</view>
				<!-- 消息框 -->
				<view class=""
					style="width: 70%;height: auto;background-color: #4CD964;border-radius: 10rpx;margin-left: 95rpx;margin-top: -40rpx;">
					您好，我想要一杯牛奶，一杯咖啡，一杯茶，绝对是假的哈斯大海的说大话啥都是空的hi卡仕达卡仕达客户哈的话覅凯撒计划的手机打开手机打开话说卡仕达卡仕达卡号是的客户很快机器上的卡号是的夸奖哈抠脚大汉好看的卡仕达好看的话蝴蝶卡进度很快就撒谎的卡号是贷款还电话到海口会降低卡斯蒂啊客户打款
				</view>
			</view>




		</view>
	</view>




	<!-- <!-- 底部功能 -->
	<!-- <view class=""> -->
	<!-- 表情icon -->
	<!-- 语言icon -->
	<!-- input -->
	<!-- 发送icon -->
	<!-- </view> -->
	<!-- </view> -->
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.button {
		width: 100%;
		height: 150rpx;
	}

	.Back {
		width: 20%;
		height: 70%;
		background-image: url(../../../static/img/chat/back.png);
		float: left;
	}

	.Menu {
		width: 20%;
		height: 70%;
		background-image: url(../../../static/img/chat/menu.png);
		float: right;
	}

	.bc {
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}

	.chat-message {
		width: 100%;
		height: auto;
		border: 1px solid #007AFF;
	}

	.chat-logo {
		width: 110rpx;
		height: 110rpx;
		background-color: #3F536E;
		border-radius: 80%;
	}

	.name {
		margin-left: 20rpx;

	}

	.chat-box {
		width: 70%;
		height: auto;
		background-color: #4CD964;
		border-radius: 10rpx;
		/* text-align: center; */
		margin-top: -40rpx;
		margin-left: 130rpx;
	}
</style>
