<template>
  <el-form class="login-form" status-icon :rules="loginRules" ref="loginForm" :model="loginForm" label-width="0">
    <el-form-item prop="username">
      <el-input size="small" @keyup.enter.native="handleLogin" v-model="loginForm.username" auto-complete="off" placeholder="请输入用户名">
        <i slot="prefix" class="icon-yonghu"></i>
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input size="small" @keyup.enter.native="handleLogin" :type="passwordType" v-model="loginForm.password" auto-complete="off" placeholder="请输入密码">
        <i class="el-icon-view el-input__icon" :style="fontstyle" slot="suffix" @click="showPassword"></i>
        <i slot="prefix" class="icon-mima"></i>
      </el-input>
    </el-form-item>
    <el-form-item  prop="verifycode">
      <!-- 注意：prop与input绑定的值一定要一致，否则验证规则中的value会报undefined，因为value即为绑定的input输入值 -->
      <el-input v-model="loginForm.verifycode" placeholder="请输入验证码" class="identifyinput"></el-input>
    </el-form-item>
    <el-form-item>
      <div class="identifybox">
        <div @click="refreshCode">
          <s-identify :identifyCode="identifyCode"></s-identify>
        </div>
        <el-button @click="refreshCode" type='text' class="textbtn">看不清，换一张</el-button>
      </div>
    </el-form-item>
    <el-checkbox v-model="checked">记住账号</el-checkbox>
    <el-form-item>
      <el-button type="primary" size="small" @click.native.prevent="handleLogin" class="login-submit">登录</el-button>
    </el-form-item>
  </el-form>
</template>


