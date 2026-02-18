# 🔐 SecureFx 加密工具箱

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/11955/badge)](https://www.bestpractices.dev/projects/11955)
[![Security](https://img.shields.io/badge/Security-Client%20Side-green.svg)](https://github.com)
[![Web Crypto API](https://img.shields.io/badge/API-Web%20Crypto-blue.svg)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)

一款功能完善的浏览器端加密工具箱，所有加密操作均在本地完成，数据不经过任何服务器。支持 AES-GCM/CBC 对称加密、RSA/ECC 非对称加密、ECDSA 数字签名、SHA-2/SHA-3 哈希计算、古典密码等功能

**注意：这只是一个轻量级工具，不能用于处理国家秘密、金融核心系统或任何高风险场景。安全的前提是你的设备本身是干净的**

## 能干点啥？

- 加密/解密  
  用 AES 或 RSA 给文件或文字加锁，只有你知道密码才能打开。
  
- 数字签名 & 验签  
  证明某段内容确实是你发的，并且没被中间人篡改过。

- 哈希校验（SHA 系列）  
  快速生成文件指纹，用来核对下载是否完整、有没有被动手脚。

- 密码生成器  
  一键生成高强度随机密码，还能评估你自定义密码的安全性。

- 趣味编码  
  支持摩斯电码、Base64、凯撒密码、猪圈密码等，适合教学、解谜或整活。

## 怎么用？

## 两种方式，任你选：

1. 在线使用（推荐）  
   直接打开 👉 https://secure-fx.vercel.app

2. 本地运行  
   下载本项目，双击 index.html 即可——不需要服务器，也不依赖网络。

## 安全说明

- 所有计算均在浏览器内存中完成，不会上传任何数据。
- 源码开源，欢迎审查（也欢迎提 PR）。
- 但请记住：如果电脑已中毒、装了恶意软件，再强的加密也救不了你。工具只是辅助，安全始于你自己的习惯。

# 最后一句

SecureFx 不是万能的，但它足够简单、透明、可控。  
如果你只是想安全地处理一点私人文件，或者对密码学有点兴趣——试试看，或许刚好合你胃口。
