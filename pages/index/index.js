//index.js
//获取应用实例
const app = getApp()
var util=require('../../utils/util')

Page({
  data: {
    time:'',
    inputValue:' ',
    checkValue:' ',
    recordTime:["上午","下午","晚间"],
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: 'best',
    author: 'cute',
    src: 'http://music.163.com/song/media/outer/url?id=476592630.mp3',
    // src:'http://music.163.com/song/media/outer/url?id=563563649.mp3',
    items: [
      {value: 'plan1', name: 'plan',checked: 'true',disabled:'',time:'06:00'},
      {value: 'plan2', name: 'plan', checked: 'true',disabled:'',time:'06:00'},
      {value: 'plan3', name: 'plan',checked: 'true',disabled:'',time:'06:00'},
      {value: 'plan4', name: 'plan',checked: 'true',disabled:'',time:'06:00'},
      {value: 'plan5', name: 'plan',checked: 'true',disabled:'',time:'06:00'},
      {value: 'plan6', name: 'plan',checked: 'true',disabled:'',time:'06:00'}
    ],
    itemss: [
      {value: 'plan1', name: 'plan',checked: 'true',disabled:'',time:'12:00'},
      {value: 'plan2', name: 'plan', checked: 'true',disabled:'',time:'12:00'},
      {value: 'plan3', name: 'plan',checked: 'true',disabled:'',time:'12:00'},
      {value: 'plan4', name: 'plan',checked: 'true',disabled:'',time:'12:00'},
      {value: 'plan5', name: 'plan',checked: 'true',disabled:'',time:'12:00'},
      {value: 'plan6', name: 'plan',checked: 'true',disabled:'',time:'12:00'}
    ],
    itemsss: [
      {value: 'plan1', name: 'plan',checked: 'true',disabled:'',time:'18:00'},
      {value: 'plan2', name: 'plan', checked: 'true',disabled:'',time:'18:00'},
      {value: 'plan3', name: 'plan',checked: 'true',disabled:'',time:'18:00'},
      {value: 'plan4', name: 'plan',checked: 'true',disabled:'',time:'18:00'},
      {value: 'plan5', name: 'plan',checked: 'true',disabled:'',time:'18:00'},
      {value: 'plan6', name: 'plan',checked: 'true',disabled:'',time:'18:00'}
    ]
  },
    /**
   * 生命周期函数--监听页面加载
   */
  
 
  onLoad: function (options) {
    var TIME=util.formatTime(new Date())
    
    this.setData({
      time:TIME
    })
  
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  onShow: function () {
    const items1=this.data.items
    for (let i = 0, lenI = items1.length; i < lenI; ++i) {
        if (items1[i].time === this.data.time) {
          this.audioCtx.play()
          console.log("it is time:",this.data.time)
          break
        }
      }
      const items2=this.data.itemss
      for (let i = 0, lenI = items2.length; i < lenI; ++i) {
          if (items2[i].time === this.data.time) {
            this.audioCtx.play()
            console.log("it is time:",this.data.time)
            break
          }
        }
        const items3=this.data.itemsss
        for (let i = 0, lenI = items3.length; i < lenI; ++i) {
            if (items3[i].time === this.data.time) {
              this.audioCtx.play()
              console.log("it is time:",this.data.time)
              break
            }
          }
  },

  bindKeyInput:function(e){
    console.log('input发生回车事件，携带value值为：', e.detail.value)
    const v=e.detail.value
    this.setData({
      // inputValue:e.detail.value,
      checkValue:v,
    })
    
 
  },
  operateInput:function(){
    const itemss=this.data.items
    const cv=this.data.checkValue
    let record1=0;
    for (let i = 0, lenI = itemss.length; i < lenI; ++i) {
        if (itemss[i].name === 'plan') {
          record1=1
          itemss[i].value=cv
          itemss[i].name=cv
          break
        }

      }
      if(record1===0){
        wx:wx.showModal({
          confirmColor: 'red',
          confirmText: '好吧！',
          content: '小可耐，6个小任务很多啦，再多就有压力了哦！',

          title: '够够啦！',
          success:function(res){
            if(res.confirm)
            console.log('(ง •_•)ง')
          else{
            console.log('(ง •_•)ง')
          }
        }
        })

      }
    this.setData({
      // 其他对inputValue的操作
      //inputValue
      
      inputValue:' ',
      items:itemss
    })

  },
  operateInputt:function(){
    const itemss=this.data.itemss
    const cv=this.data.checkValue
    let record1=0;
    for (let i = 0, lenI = itemss.length; i < lenI; ++i) {
        if (itemss[i].name === 'plan') {
          record1=1
          itemss[i].value=cv
          itemss[i].name=cv
          break
        }

      }
      if(record1===0){
        wx:wx.showModal({
          confirmColor: 'red',
          confirmText: '好吧！',
          content: '小可耐，6个小任务很多啦，再多就有压力了哦！',

          title: '够够啦！',
          success:function(res){
            if(res.confirm)
            console.log('(ง •_•)ง')
          else{
            console.log('(ง •_•)ง')
          }
        }
        })

      }
    this.setData({
      // 其他对inputValue的操作
      //inputValue
      
      inputValue:' ',
      itemss:itemss
    })

  },
  operateInputtt:function(){
    const itemss=this.data.itemsss
    const cv=this.data.checkValue
    let record1=0;
    for (let i = 0, lenI = itemss.length; i < lenI; ++i) {
        if (itemss[i].name === 'plan') {
          record1=1
          itemss[i].value=cv
          itemss[i].name=cv
          break
        }

      }
      if(record1===0){
        wx:wx.showModal({
          confirmColor: 'red',
          confirmText: '好吧！',
          content: '小可耐，6个小任务很多啦，再多就有压力了哦！',

          title: '够够啦！',
          success:function(res){
            if(res.confirm)
            console.log('(ง •_•)ง')
          else{
            console.log('(ง •_•)ง')
          }
        }
        })

      }
    this.setData({
      // 其他对inputValue的操作
      //inputValue
      
      inputValue:' ',
      itemsss:itemss
    })

  },
  checkboxChange:function(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)

    const items = this.data.items
    const values = e.detail.value

    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      items[i].checked = false

      for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (items[i].value === values[j]) {
          items[i].checked = true
          break
        }
      }


    }
    this.setData({
      items
    })

  },
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  bindTimeChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    const items1 = this.data.items
    const values = e.detail.value

    for (let i = 0, lenI = items1.length; i < lenI; ++i) {
        if (items1[i].time === '06:00') {
          items1[i].time = values
          items1[i].checked=true
          break
        }
    }

    this.setData({
      items:items1
    })

  },
  bindTimeChange2: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    const items1 = this.data.itemss
    const values = e.detail.value

    for (let i = 0, lenI = items1.length; i < lenI; ++i) {
        if (items1[i].time === '12:00') {
          items1[i].time = values
          items1[i].checked=true
          break
        }
    }

    this.setData({
      itemss:items1
    })

  },
  bindTimeChange3: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    const items1 = this.data.itemsss
    const values = e.detail.value

    for (let i = 0, lenI = items1.length; i < lenI; ++i) {
        if (items1[i].time === '18:00') {
          items1[i].time = values
          items1[i].checked=true
          break
        }
    }

    this.setData({
      itemsss:items1
    })

  },

  // clock:function(e){
  //   const values=e.detail.value
  //   if(values===TIME){
  //     this.audioCtx.play()
  //   }
  // }
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
  }

})
// Component({
//   observers:{
//     'items':function(items){
//       for (let i = 0, lenI = items.length; i < lenI; ++i) {
//         if (items[i].time === this.data.time) {
//           this.audioCtx.play()
//           console.log("it is time:",this.data.time)
//           break
//         }
//       }
//     },
//     'itemss':function(itemss){
//       for (let i = 0, lenI = itemss.length; i < lenI; ++i) {
//         if (itemss[i].time === this.data.time) {
//           this.audioCtx.play()
//           console.log("it is time:",this.data.time)
//           break
//         }
//       }
//     },
//     'itemsss':function(itemsss){
//       for (let i = 0, lenI = itemsss.length; i < lenI; ++i) {
//         if (itemsss[i].time === this.data.time) {
//           this.audioCtx.play()
//           console.log("it is time:",this.data.time)
//           break
//         }
//       }
//     }
//   },
// })
 