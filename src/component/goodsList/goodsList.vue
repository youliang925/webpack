<template>
    <div class="goods-list">
        <div class="goods-item">
            <img src="//m.360buyimg.com/babel/s661x661_jfs/t16939/292/1764168877/71608/94425578/5ad7229cNa42ff7b3.jpg!q70.dpg" alt="">
            <h1 class="title">Apple iPhone XS (A2099) 64GB 深空灰色 移动联通4G手机</h1>
            <div class="info">
                <p class="price">
                    <span class="now">$899</span>
                    <span class="old">$999</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>还剩20件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="//m.360buyimg.com/babel/jfs/t1/48595/29/2245/415641/5d02053dEbe699d7e/99865a81f6953eb1.png" alt="">
            <h1 class="title">Apple iPhone XS (A2099) 64GB 深空灰色 移动联通4G手机</h1>
            <div class="info">
                <p class="price">
                    <span class="now">$899</span>
                    <span class="old">$999</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>还剩20件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="//m.360buyimg.com/babel/jfs/t26437/251/284926806/266564/3fb661c3/5b8d20bbN249af185.png" alt="">
            <h1 class="title">Apple iPhone XS (A2099) 64GB 深空灰色 移动联通4G手机</h1>
            <div class="info">
                <p class="price">
                    <span class="now">$899</span>
                    <span class="old">$999</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>还剩20件</span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .goods-list{
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;

  .goods-item{
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 270px;
    img{
      width: 100%;
    }
    .title{
      font-size: 14px;
    }

    .info{
      background-color: #eee;
      p{
        margin: 0;
        padding: 5px;
      }
      .price{
        .now{
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old{
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
}
</style>
