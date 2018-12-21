var app=getApp()

Page({
 

  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  
  onReady: function () {
    // 使用 wx.createContext 获取绘图上下文 context
    var context = wx.createCanvasContext('myCanvas')
    var width = 300;
    var height=300;
    var maxvalue=33;
    var Weight = app.globalData.Weight;
    var high = app.globalData.high;
    var BMI=Weight/(high*high);
    BMI =BMI.toFixed(1)
    var value=BMI-8;
    //W是大写的
    var R = width / 2 - 90;
    
    context.beginPath(); //画笔开始            
    context.setLineWidth(2); //设置画笔的线宽    
    context.setStrokeStyle('#576e87'); //设置画笔的颜色
    context.setLineCap('round');
    context.arc(width / 2, height / 2, R, 1.5 * Math.PI, 3.5 * Math.PI, false); //绘制圆形，坐标250,250 半径200，整圆（0-360度），false表示顺时针     
    context.stroke(); //绘图
    context.closePath(); //结束画布

    //BMI的范围
    context.beginPath(); //画笔开始            
    context.setLineWidth(2); //设置画笔的线宽    
    context.setStrokeStyle('#00e3e3'); //设置画笔的颜色
    context.setLineCap('round');
    context.arc(width / 2, height / 2, 1.2*R, -0.5 * Math.PI, 0.05 * Math.PI, false); //绘制圆形，坐标250,250 半径200，整圆（0-360度），false表示顺时针     
    context.stroke(); //绘图
    context.closePath(); 

    context.beginPath(); //画笔开始            
    context.setLineWidth(2); //设置画笔的线宽    
    context.setStrokeStyle('#00ec00'); //设置画笔的颜色
    context.setLineCap('round');
    context.arc(width / 2, height / 2, 1.2*R, 0.105* Math.PI, 0.47 * Math.PI, false); //绘制圆形，坐标250,250 半径200，整圆（0-360度），false表示顺时针     
    context.stroke(); //绘图
    context.closePath(); 

    context.beginPath(); //画笔开始            
    context.setLineWidth(2); //设置画笔的线宽    
    context.setStrokeStyle('#ffdc35'); //设置画笔的颜色
    context.setLineCap('round');
    context.arc(width / 2, height / 2, 1.2*R , 0.52 * Math.PI, 0.77 * Math.PI, false); //绘制圆形，坐标250,250 半径200，整圆（0-360度），false表示顺时针     
    context.stroke(); //绘图
    context.closePath();

    context.beginPath(); //画笔开始            
    context.setLineWidth(2); //设置画笔的线宽    
    context.setStrokeStyle('#ff8040'); //设置画笔的颜色
    context.setLineCap('round');
    context.arc(width / 2, height / 2, 1.2*R, 0.84 * Math.PI, 1.37 * Math.PI, false); //绘制圆形，坐标250,250 半径200，整圆（0-360度），false表示顺时针     
    context.stroke(); //绘图
    context.closePath();

    context.beginPath(); //画笔开始            
    context.setLineWidth(2); //设置画笔的线宽    
    context.setStrokeStyle('#ff0080'); //设置画笔的颜色
    context.setLineCap('round');
    context.arc(width / 2, height / 2, 1.2*R, 1.41 * Math.PI, 1.47 * Math.PI, false); //绘制圆形，坐标250,250 半径200，整圆（0-360度），false表示顺时针     
    context.stroke(); //绘图
    context.closePath();

    //绘制value值的弧度
    context.setLineWidth(2); //设置画笔的线宽 
    context.beginPath(); //画笔开始           
    context.setLineJoin('round');
    var y = Math.floor(value);
    if (y > value) {
      context.setStrokeStyle('#d0d0d0');
    } else if (y == 1) {
      context.setStrokeStyle('#32e0dc');
    }
    else if (y == 2) {
      context.setStrokeStyle('#2fddd5');
    }
    else if (y == 3) {
      context.setStrokeStyle('#2ae2d5');
    }
    else if (y == 4) {
      context.setStrokeStyle('#26e2d0');
    }
    else if (y == 5) {
      context.setStrokeStyle('#25e5cc');
    }
    else if (y == 6) {
      context.setStrokeStyle('#25e4c5');
    }
    else if (y == 7) {
      context.setStrokeStyle('#25e7c1');
    }
    else if (y == 8) {
      context.setStrokeStyle('#25e4b8');
    }
    else if (y == 9) {
      context.setStrokeStyle('#25e7b2');
    }
    else if (y == 10) {
      context.setStrokeStyle('#25e7a9');
    }
    else if (y == 11) {
      context.setStrokeStyle('#28e79f');
    }
    else if (y == 12) {
      context.setStrokeStyle('#35e08e');
    }
    else if (y == 13) {
      context.setStrokeStyle('#49e782');
    }
    else if (y == 14) {
      context.setStrokeStyle('#61e770');
    }
    else if (y == 15) {
      context.setStrokeStyle('#79e65e');
    }
    else if (y == 16) {
      context.setStrokeStyle('#94e54a');
    }
    else if (y == 17) {
      context.setStrokeStyle('#a9de38');
    }
    else if (y == 18) {
      context.setStrokeStyle('#c7e127');
    }
    else if (y == 19) {
      context.setStrokeStyle('#d9d91a');
    }
    else if (y == 20) {
      context.setStrokeStyle('#efd70d');
    }
    else if (y == 21) {
      context.setStrokeStyle('#fece03');
    }
    else if (y == 22) {
      context.setStrokeStyle('#f7c905');
    }
    else if (y == 23) {
      context.setStrokeStyle('#fbb904');
    }
    else if (y == 24) {
      context.setStrokeStyle('#f9a004');
    }
    else if (y == 25) {
      context.setStrokeStyle('#ff8504');
    }
    else if (y == 26) {
      context.setStrokeStyle('#ff680c');
    }
    else if (y == 27) {
      context.setStrokeStyle('#fa4a15');
    }
    else if (y == 28) {
      context.setStrokeStyle('#fa4a15');
    }
    else if (y == 29) {
      context.setStrokeStyle('#f4321d');
    }
    else if (y == 30) {
      context.setStrokeStyle('#ef1f22');
    }
    else if (y == 31) {
      context.setStrokeStyle('#ef1c23');
    }
    else if (y == 32) {
      context.setStrokeStyle('#eb1d24');
    }


 //设置画笔的颜色
    context.arc(width / 2, height / 2, R, 1.5 * Math.PI, (value * 2 / maxvalue + 1.5) * Math.PI, false); //绘制圆形，坐标250,250 半径200，整圆（0-360度），false表示顺时针     
    context.stroke(); //绘图            
    context.closePath(); //结束画布   



    //圆形外面刻度               
    for (var i = 0; i < maxvalue; i++) {
      context.save();
      context.setLineWidth(2);
      context.setStrokeStyle('#33dad9');
      if (i > value) {
        context.setStrokeStyle('#d0d0d0');
      } else if (i == 1) {
        context.setStrokeStyle('#32e0dc');
      }
      else if (i == 2) {
        context.setStrokeStyle('#2fddd5');
      }
      else if (i == 3) {
        context.setStrokeStyle('#2ae2d5');
      }
      else if (i == 4) {
        context.setStrokeStyle('#26e2d0');
      }
      else if (i == 5) {
        context.setStrokeStyle('#25e5cc');
      }
      else if (i == 6) {
        context.setStrokeStyle('#25e4c5');
      }
      else if (i == 7) {
        context.setStrokeStyle('#25e7c1');
      }
      else if (i == 8) {
        context.setStrokeStyle('#25e4b8');
      }
      else if (i == 9) {
        context.setStrokeStyle('#25e7b2');
      }
      else if (i == 10) {
        context.setStrokeStyle('#25e7a9');
      }
      else if (i == 11) {
        context.setStrokeStyle('#28e79f');
      }
      else if (i == 12) {
        context.setStrokeStyle('#35e08e');
      }
      else if (i == 13) {
        context.setStrokeStyle('#49e782');
      }
      else if (i == 14) {
        context.setStrokeStyle('#61e770');
      }
      else if (i == 15) {
        context.setStrokeStyle('#79e65e');
      }
      else if (i == 16) {
        context.setStrokeStyle('#94e54a');
      }
      else if (i == 17) {
        context.setStrokeStyle('#a9de38');
      }
      else if (i == 18) {
        context.setStrokeStyle('#c7e127');
      }
      else if (i == 19) {
        context.setStrokeStyle('#d9d91a');
      }
      else if (i == 20) {
        context.setStrokeStyle('#efd70d');
      }
      else if (i == 21) {
        context.setStrokeStyle('#fece03');
      }
      else if (i == 22) {
        context.setStrokeStyle('#f7c905');
      }
      else if (i == 23) {
        context.setStrokeStyle('#fbb904');
      }
      else if (i == 24) {
        context.setStrokeStyle('#f9a004');
      }
      else if (i == 25) {
        context.setStrokeStyle('#ff8504');
      }
      else if (i == 26) {
        context.setStrokeStyle('#ff680c');
      }
      else if (i == 27) {
        context.setStrokeStyle('#fa4a15');
      }
      else if (i == 28) {
        context.setStrokeStyle('#fa4a15');
      }
      else if (i == 29) {
        context.setStrokeStyle('#f4321d');
      }
      else if (i == 30) {
        context.setStrokeStyle('#ef1f22');
      }
      else if (i == 31) {
        context.setStrokeStyle('#ef1c23');
      }
      else if (i >= 32) {
        context.setStrokeStyle('#eb1d24');
      }

      context.translate(width / 2, height / 2);
      context.rotate(i * 2 / maxvalue * Math.PI);//i * 360/maxvalue * Math.PI / 180
      context.beginPath();
      context.moveTo(0, -(R + 20));
      context.lineTo(0, -(R + 32));
      context.stroke();
      context.closePath();
      context.restore();
    }
    //设置中间字体
    
    context.setFillStyle('#3a5463');
    context.setFontSize(20);
    context.setTextAlign('center');
    context.fillText('BMI', width / 2, height / 2 - 30);

    var x = Math.floor(value);
    if (x > value) {
      context.setFillStyle('#d0d0d0');
    } else if (x == 1) {
      context.setFillStyle('#32e0dc');
    }
    else if (x == 2) {
      context.setFillStyle('#2fddd5');
    }
    else if (x == 3) {
      context.setFillStyle('#2ae2d5');
    }
    else if (x == 4) {
      context.setFillStyle('#26e2d0');
    }
    else if (x == 5) {
      context.setFillStyle('#25e5cc');
    }
    else if (x == 6) {
      context.setFillStyle('#25e4c5');
    }
    else if (x == 7) {
      context.setFillStyle('#25e7c1');
    }
    else if (x == 8) {
      context.setFillStyle('#25e4b8');
    }
    else if (x == 9) {
      context.setFillStyle('#25e7b2');
    }
    else if (x == 10) {
      context.setFillStyle('#25e7a9');
    }
    else if (x == 11) {
      context.setFillStyle('#28e79f');
    }
    else if (x == 12) {
      context.setFillStyle('#35e08e');
    }
    else if (x == 13) {
      context.setFillStyle('#49e782');
    }
    else if (x == 14) {
      context.setFillStyle('#61e770');
    }
    else if (x == 15) {
      context.setFillStyle('#79e65e');
    }
    else if (x == 16) {
      context.setFillStyle('#94e54a');
    }
    else if (x == 17) {
      context.setFillStyle('#a9de38');
    }
    else if (x == 18) {
      context.setFillStyle('#c7e127');
    }
    else if (x == 19) {
      context.setFillStyle('#d9d91a');
    }
    else if (x == 20) {
      context.setFillStyle('#efd70d');
    }
    else if (x == 21) {
      context.setFillStyle('#fece03');
    }
    else if (x == 22) {
      context.setFillStyle('#f7c905');
    }
    else if (x == 23) {
      context.setFillStyle('#fbb904');
    }
    else if (x == 24) {
      context.setFillStyle('#f9a004');
    }
    else if (x == 25) {
      context.setFillStyle('#ff8504');
    }
    else if (x == 26) {
      context.setFillStyle('#ff680c');
    }
    else if (x == 27) {
      context.setFillStyle('#fa4a15');
    }
    else if (x == 28) {
      context.setFillStyle('#fa4a15');
    }
    else if (x == 29) {
      context.setFillStyle('#f4321d');
    }
    else if (x == 30) {
      context.setFillStyle('#ef1f22');
    }
    else if (x == 31) {
      context.setFillStyle('#ef1c23');
    }
    else if (x >= 32) {
      context.setFillStyle('#eb1d24');
    }
    context.setFontSize(47);
    context.fillText(BMI, width / 2 , height / 2 + 25);

    /*context.setFillStyle('#2ab0be');
    context.setFontSize(25);
    context.fillText('kg', width / 2 + 25, height / 2 + 25);

    context.setFillStyle('#9eb4ca');
    context.setFontSize(15);
    context.fillText('适宜', width / 2 + 30, height / 2 + 30);*/

    //起始值圆点
    context.translate(width / 2, height / 2);
    context.beginPath(); //画笔开始
    context.setLineWidth(1);
    context.setFillStyle('#32e0dc'); //设置画笔的颜色 
    context.arc(0, -R - 30, 0, 1.5, 2 * Math.PI, false); //绘制圆形，坐标250,250 半径200，整圆（0-360度），false表示顺时针 
    context.stroke(); //绘图   
    context.setFillStyle('#32e0dc') 
    context.fill();//填充
    //起始值（0℃）
    context.setFillStyle('#20323f');
    context.setFontSize(17);
    context.fillText('体重:'+Weight+'kg', 0 / 2, -R - 50);
    context.closePath();
     //结束画布
    context.setFillStyle('#20323f');
    context.setFontSize(17);
    context.fillText('身高:' + high + 'm', 0 / 2, -R - 70);
    context.closePath()
    //value值圆点
    context.beginPath(); //画笔开始
    context.setLineWidth(1);
    var z = Math.floor(value);
    if (z > value) {
      context.setFillStyle('#d0d0d0');
    } else if (z == 1) {
      context.setFillStyle('#32e0dc');
    }
    else if (z == 2) {
      context.setFillStyle('#2fddd5');
    }
    else if (z == 3) {
      context.setFillStyle('#2ae2d5');
    }
    else if (z == 4) {
      context.setFillStyle('#26e2d0');
    }
    else if (z == 5) {
      context.setFillStyle('#25e5cc');
    }
    else if (z == 6) {
      context.setFillStyle('#25e4c5');
    }
    else if (z == 7) {
      context.setFillStyle('#25e7c1');
    }
    else if (z == 8) {
      context.setFillStyle('#25e4b8');
    }
    else if (z == 9) {
      context.setFillStyle('#25e7b2');
    }
    else if (z == 10) {
      context.setFillStyle('#25e7a9');
    }
    else if (z == 11) {
      context.setFillStyle('#28e79f');
    }
    else if (z == 12) {
      context.setFillStyle('#35e08e');
    }
    else if (z == 13) {
      context.setFillStyle('#49e782');
    }
    else if (z == 14) {
      context.setFillStyle('#61e770');
    }
    else if (z == 15) {
      context.setFillStyle('#79e65e');
    }
    else if (z == 16) {
      context.setFillStyle('#94e54a');
    }
    else if (z == 17) {
      context.setFillStyle('#a9de38');
    }
    else if (z == 18) {
      context.setFillStyle('#c7e127');
    }
    else if (z == 19) {
      context.setFillStyle('#d9d91a');
    }
    else if (z == 20) {
      context.setFillStyle('#efd70d');
    }
    else if (z == 21) {
      context.setFillStyle('#fece03');
    }
    else if (z == 22) {
      context.setFillStyle('#f7c905');
    }
    else if (z == 23) {
      context.setFillStyle('#fbb904');
    }
    else if (z == 24) {
      context.setFillStyle('#f9a004');
    }
    else if (z == 25) {
      context.setFillStyle('#ff8504');
    }
    else if (z == 26) {
      context.setFillStyle('#ff680c');
    }
    else if (z == 27) {
      context.setFillStyle('#fa4a15');
    }
    else if (z == 28) {
      context.setFillStyle('#fa4a15');
    }
    else if (z == 29) {
      context.setFillStyle('#f4321d');
    }
    else if (z == 30) {
      context.setFillStyle('#ef1f22');
    }
    else if (z == 31) {
      context.setFillStyle('#ef1c23');
    }
    else if (z >= 32) {
      context.setFillStyle('#eb1d24');
    }
 //设置画笔的颜色
    context.arc(0, -R, 5, 0, 2 * Math.PI, false); //绘制圆形，坐标250,250 半径200，整圆（0-360度），false表示顺时针 
    context.rotate((360 / (maxvalue / value)) * Math.PI / 180);
    context.stroke(); //绘图    
    context.fill();//填充
    context.closePath(); //结束画布

    //value值外面的三个点
    context.beginPath(); //画笔开始
    context.setLineWidth(1);
    context.setStrokeStyle('#ffffff'); //设置画笔的颜色 
    context.arc(0, -R - 50, 2.5, 0, 2 * Math.PI, false); //绘制圆形，坐标250,250 半径200，整圆（0-360度），false表示顺时针 
    context.stroke(); //绘图    
    context.fill();//填充
    context.closePath(); //结束画布
    //value值外面的三个点
    context.beginPath(); //画笔开始
    context.setLineWidth(1);
    context.setStrokeStyle('#ffffff'); //设置画笔的颜色 
    context.arc(0 - 10, -R - 50, 1.5, 0, 2 * Math.PI, false); //绘制圆形，坐标250,250 半径200，整圆（0-360度），false表示顺时针 
    context.stroke(); //绘图    
    context.fill();//填充
    context.closePath(); //结束画布
    //value值外面的三个点
    context.beginPath(); //画笔开始
    context.setLineWidth(1);
    context.setStrokeStyle('#ffffff'); //设置画笔的颜色 
    context.arc(0 - 20, -R - 48, 1, 0, 2 * Math.PI, false); //绘制圆形，坐标250,250 半径200，整圆（0-360度），false表示顺时针 
    context.stroke(); //绘图    
    context.fill();//填充
    context.closePath(); //结束画布

    context.draw();
  },

history:function(){
  wx.navigateTo({
    url: '../wifi_station/tianqi/tianqi'
  })
},
  change: function (e) {
    //当有输入时激活发送按钮，无输入则禁用按钮
    if (e.detail.value != "") {
      this.setData({
        threshold: e.detail.value,
        opacity: 1,
        disabled: false,
      })
    } else {
      this.setData({
        threshold: 0,
        opacity: 0.4,
        disabled: true,
      })
    }
  },
advice:function(){
  var Weight = app.globalData.Weight;
  var high = app.globalData.high;
  var BMI = Weight / (high * high);
  BMI = BMI.toFixed(1)
  var value=BMI;
  if (value < 18) {
    wx.navigateTo({
      url: '../advice/advice1/advice1'
    })}
  if (value >= 18&&value<24) {
    wx.navigateTo({
      url: '../advice/advice2/advice2'
    })}
  if (value >= 24 && value < 30) {
    wx.navigateTo({
      url: '../advice/advice3/advice3'
    })
  }
  if (value >= 30 ) {
    wx.navigateTo({
      url: '../advice/advice4/advice4'
    })
  }
}
})

