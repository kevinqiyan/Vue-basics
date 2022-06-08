<template>
	<div id="box">
		<div style="padding: 20px">
			<el-tabs v-model="activeName" @tab-click="handleClick">
				<el-tab-pane label="编辑授权证书" name="first">
					<div style="display: flex; align-items: center">
						<p
							style="
								display: flex;
								align-items: center;
								height: 40px;
							"
						>
							设置证书名称：
						</p>
						<el-input
							v-model="name"
							placeholder="请输入内容"
							style="width: 20%"
						></el-input>
					</div>
					<div style="margin-top: 20px; display: flex">
						<div class="bg">
							<div style="width: 500px; margin: 0 auto">
								<div
									style="
										padding-top: 350px;
										margin-bottom: 20px;
									"
								></div>
								<div
									style="
										margin-bottom: 20px;
										text-indent: 2em;
										position: relative;
									"
								>
									<div>
										授权编号：___________________________________
									</div>

									<!-- <p :draggable="true" class="pos" v-if="type1"  @dragstart="drag($event)" @dragover.prevent @drop="drop($event)" >授权编号</p> -->
									<p
										v-drag
										v-if="type1"
										class="pos noselect"
										ref="pos1"
										style="
											padding: 6px 30px;
											top: -20px;
											left: 174px;
										"
									>
										授权编号
									</p>
								</div>
								<div
									style="
										margin-bottom: 20px;
										position: relative;
									"
								>
									兹授权______________为________________贸易有限公司
									<p
										v-drag
										v-if="type2"
										class="pos noselect"
										ref="pos2"
										style="
											padding: 4px 15px;
											top: -16px;
											left: 74px;
										"
									>
										代理姓名
									</p>
									<p
										v-drag
										v-if="type3"
										class="pos noselect"
										ref="pos3"
										style="
											padding: 4px 15px;
											top: -16px;
											left: 234px;
										"
									>
										公司名称
									</p>
								</div>
								<div style="margin-bottom: 20px">
									__________________，授予
									<span>奥德美</span> 产品销售代理权.
								</div>
								<div
									style="
										margin-bottom: 20px;
										text-indent: 3em;
										position: relative;
									"
								>
									被授权人微信号：
									<p
										v-drag
										v-if="type4"
										class="pos noselect"
										ref="pos4"
										style="
											padding: 6px 30px;
											top: -8px;
											left: 230px;
										"
									>
										被授权人微信号
									</p>
								</div>
								<div
									style="
										margin-bottom: 20px;
										text-indent: 3em;
										position: relative;
									"
								>
									被授权人手机号：
									<p
										v-drag
										v-if="type5"
										class="pos noselect"
										ref="pos5"
										style="
											padding: 6px 30px;
											top: -8px;
											left: 230px;
										"
									>
										被授权人手机号
									</p>
								</div>
								<div
									style="
										margin-bottom: 20px;
										text-indent: 2em;
										position: relative;
									"
								>
									被授权人身份证号：
									<p
										v-drag
										v-if="type6"
										class="pos noselect"
										ref="pos6"
										style="
											padding: 6px 30px;
											top: -8px;
											left: 230px;
										"
									>
										被授权人身份证号
									</p>
								</div>
								<div
									style="
										margin-bottom: 20px;
										text-indent: 4em;
										display: flex;
										position: relative;
									"
								>
									<span style="margin-right: 10px"
										>被授权有效期：</span
									>
									<p
										v-drag
										v-if="type7"
										class="pos noselect"
										ref="pos7"
										style="
											padding: 6px 30px;
											top: -8px;
											left: 230px;
										"
									>
										被授权有效期
									</p>
									<!-- <input type="" v-model="time" placeholder="请输入..." /> -->
								</div>
								<div
									style="
										margin-bottom: 20px;
										text-indent: 5em;
										position: relative;
									"
								>
									被授权单位：
									<p
										v-drag
										v-if="type8"
										class="pos noselect"
										ref="pos8"
										style="
											padding: 6px 30px;
											top: -8px;
											left: 230px;
										"
									>
										被授权单位
									</p>
								</div>
								<div style="text-indent: 4em; display: flex">
									<span style="margin-right: 20px"
										>法人代表签字:</span
									>
									<img
										v-if="type9"
										src="../../../assets/images/1.jpg"
										style="width: 80px; height: 30px"
									/>
								</div>
							</div>
						</div>
						<div>
							<div class="title">关键数据选择：</div>
							<el-checkbox-group v-model="checkList">
								<div style="margin-bottom: 20px">
									<el-checkbox
										label="1"
										@change="onChange($event, 1)"
										>代理授权号</el-checkbox
									>
								</div>
								<div style="margin-bottom: 20px">
									<el-checkbox
										label="2"
										@change="onChange($event, 2)"
										>代理姓名</el-checkbox
									>
								</div>

								<div style="margin-bottom: 20px">
									<el-checkbox
										label="4"
										@change="onChange($event, 4)"
										>微信号</el-checkbox
									>
								</div>

								<div style="margin-bottom: 20px">
									<el-checkbox
										label="5"
										@change="onChange($event, 5)"
										>代理号码</el-checkbox
									>
								</div>
								<div style="margin-bottom: 20px">
									<el-checkbox
										label="7"
										@change="onChange($event, 6)"
										>身份证</el-checkbox
									>
								</div>
								<div style="margin-bottom: 20px">
									<el-checkbox
										label="9"
										@change="onChange($event, 7)"
										>授权有效期</el-checkbox
									>
								</div>
								<div style="margin-bottom: 20px">
									<el-checkbox
										label="6"
										@change="onChange($event, 9)"
										>签字</el-checkbox
									>
								</div>
								<div style="margin-bottom: 20px">
									<el-checkbox
										label="8"
										@change="onChange($event, 8)"
										>授权单位</el-checkbox
									>
								</div>
							</el-checkbox-group>
							<div
								style="
									display: flex;
									height: 40px;
									width: 80px;
									align-items: center;
									background: #409eff;
									justify-content: center;
									color: #fff;
									border-radius: 10px;
									margin: 30px auto 30px;
								"
								@click="onConfirm"
							>
								保存
							</div>
						</div>
					</div>
				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script>
import { updateCertificateApi } from '@/api/api.js'
export default {
	components: {},
	data() {
		return {
			activeName: 'first',
			name: '',
			company: '',
			sign: '',
			time: '',

			checkList: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],

			type1: true,
			type2: true,
			type3: true,
			type4: true,
			type5: true,
			type6: true,
			type7: true,
			type8: true,
			type9: true,

			pos: [
				{ type: 1, t: '-20px', l: '174px' },
				{ type: 2, t: '-16px', l: '74px' },
				{ type: 3, t: '-16px', l: '234px' },
				{ type: 4, t: '-8px', l: '230px' },
				{ type: 5, t: '-8px', l: '230px' },
				{ type: 6, t: '-8px', l: '230px' },
				{ type: 7, t: '-8px', l: '230px' },
			],
		}
	},

	directives: {
		drag: {
			// 指令的定义
			inserted: function (el) {
				console.log(el.innerText, 'el************', this)

				el.style.cursor = 'pointer'
				// el.drag();
				//获取元素
				// var dv = document.getElementById("dv");
				let x = 0
				let y = 0
				let l = 0
				let t = 0
				let isDown = false

				//鼠标移动
				const moveFunc = e => {
					if (isDown == false) {
						return
					}
					//获取x和y
					let nx = e.clientX
					let ny = e.clientY
					//计算移动后的左偏移量和顶部的偏移量
					nl = nx - (x - l)
					nt = ny - (y - t)

					el.style.left = nl + 'px'
					el.style.top = nt + 'px'

					console.log(nx, ny)
				}

				//鼠标按下事件
				el.onmousedown = function (e) {
					window.onmousemove = moveFunc
					el.style.cursor = 'move'
					//获取x坐标和y坐标
					x = e.clientX
					y = e.clientY

					//获取左部和顶部的偏移量
					l = el.offsetLeft
					t = el.offsetTop

					console.log(x, y, 'clientXclientY', el.innerText)
					console.log(l, t, 'offsetLeftoffsetTop')

					//开关打开
					isDown = true
					//设置样式
				}
				let nl = 0
				let nt = 0
				/* window.onmousemove = function(e) {
						console.log(isDown);
						if (isDown == false) {
							return;
						}
						//获取x和y
						let nx = e.clientX;
						let ny = e.clientY;
						//计算移动后的左偏移量和顶部的偏移量
						nl = nx - (x - l);
						nt = ny - (y - t);

						el.style.left = nl + "px";
						el.style.top = nt + "px";
					}; */
				//鼠标抬起事件
				el.onmouseup = function () {
					window.onmousemove = () => {}
					//开关关闭
					isDown = false
					el.style.cursor = 'default'
				}
			},
		},
	},

	mounted() {
		console.log(this.$route.query, '+++')
		console.log('pos1pos1pos1', this.$refs.pos1.clientWidth)
		if (this.$route.query.data) {
			for (let i = 0; i < this.$route.query.data.length; i++) {
				if (this.$route.query.data[i].id == 28) {
					this.time = this.$route.query.data[i].content
				}
				if (this.$route.query.data[i].id == 9) {
					this.sign = this.$route.query.data[i].content
				}
				if (this.$route.query.data[i].id == 8) {
					this.company = this.$route.query.data[i].content
				}
			}
		}
	},
	methods: {
		handleClick(tab, event) {
			console.log(tab, event)
		},

		startx(e) {
			console.log(e, '111111111111111')
		},
		movex(e) {
			console.log(e, '222222222222222')
		},
		endx(e) {
			console.log(e, '333333333333333333333')
		},

		drag($event, data, col) {
			console.log('移动', $event, col)
		},

		drop($event, data, col) {
			console.log('停止移动 ', $event, col)
		},
		onConfirm() {
			let token = localStorage.getItem('token')
			let data = [
				{
					type: 1,
					l: this.$refs.pos1.style.left,
					t: this.$refs.pos1.style.top,
				},
				{
					type: 2,
					l: this.$refs.pos2.style.left,
					t: this.$refs.pos1.style.top,
				},
				{
					type: 3,
					l: this.$refs.pos1.style.left,
					t: this.$refs.pos1.style.top,
				},
				{
					type: 4,
					l: this.$refs.pos2.style.left,
					t: this.$refs.pos1.style.top,
				},
				{
					type: 5,
					l: this.$refs.pos1.style.left,
					t: this.$refs.pos1.style.top,
				},
				{
					type: 6,
					l: this.$refs.pos2.style.left,
					t: this.$refs.pos1.style.top,
				},
				{
					type: 7,
					l: this.$refs.pos1.style.left,
					t: this.$refs.pos1.style.top,
				},
				{
					type: 8,
					l: this.$refs.pos2.style.left,
					t: this.$refs.pos1.style.top,
				},
			]

			console.log(data, '+9999999999')

			let params = {
				token: token,

				id: this.$route.query.data.id, // 	T文本	是	列表ID

				title: this.name, // 	T文本	是	标题

				content: JSON.stringify(data), // 	T文本	是	内容传什么格式列表返回什么格式

				agent_grade: this.$route.query.data.agent_grade, // 	T文本	是	关联代理等级  例：总代,核心代
			}
			updateCertificateApi(params).then(res => {
				if (res.data.code == 200) {
					console.log('shouquan授权证书', res)
					this.$message.success(res.data.msg)
				} else {
					this.$message.error(res.data.msg)
				}
				console.log(res)
			})
		},

		onChange(e, index) {
			console.log('onChangeonChange+++++++', e, index)
			if (index == 1) {
				this.type1 = !this.type1
			} else if (index == 2) {
				this.type2 = !this.type2
			} else if (index == 3) {
				this.type3 = !this.type3
			} else if (index == 4) {
				this.type4 = !this.type4
			} else if (index == 5) {
				this.type5 = !this.type5
			} else if (index == 6) {
				this.type6 = !this.type6
			} else if (index == 7) {
				this.type7 = !this.type7
			} else if (index == 8) {
				this.type8 = !this.type8
			} else if (index == 9) {
				this.type9 = !this.type9
			}
		},
	},
}
</script>

<style>
.box {
	width: 100%;
	height: 100%;
}

.bg {
	width: 700px;
	height: 1000px;
	background-image: url('../../../assets/images/bg@2x.png');
	background-size: 100% 100%;
	background-repeat: no-repeat;
	font-size: 20px;
	font-weight: 600;
	margin-right: 80px;
}

.title {
	font-size: 20px;
	font-weight: 600;
	margin-bottom: 20px;
}

input {
	border: none;
	outline: none;
	background: transparent;
}

.input {
	text-align: center;
}

.pos {
	position: absolute;
	top: 0;
	left: 0;
	color: red;
	border: 1px solid red;
	padding: 8px 10px;
	text-align: center;
	font-size: 16px;
	text-indent: 0em;
}

.noselect {
	-webkit-touch-callout: none; /* iOS Safari */
	-webkit-user-select: none; /* Chrome/Safari/Opera */
	-khtml-user-select: none; /* Konqueror */
	-moz-user-select: none; /* Firefox */
	-ms-user-select: none; /* Internet Explorer/Edge */
	user-select: none; /* Non-prefixed version, currently not supported by any browser */
}
</style>
