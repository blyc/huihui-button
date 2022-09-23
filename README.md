# huihui-button

#### setting 文件夹

- **color.styl** 颜色配置

```styl
// 主颜色
$main-color = #F5C1BB
// 夜间模式主颜色
$main-color-dark = rgba(245,193,187,0.9)
// 副颜色
$sub-color = #F5F0F2
// 夜间模式副颜色
$sub-color-dark = rgba(245, 240, 242,0.9)
// 按钮文字颜色
$btn-text-color = #5F505F
// 控制栏文字颜色
$title-color = #5F505F
// 夜间模式控制栏文字颜色
$title-color-dark = #999999
// 控制栏按钮active颜色
$icon-active-color = #ff9488
// 按钮hover颜色
$hover-color = #bbc5cf
// 按钮active颜色
$active-color = #93a3b3
```

- **setting.json**项目配置

```jsonc
{
  // 是否使用多语言
  "i18n": true,
  // 是否使用猫耳按钮
  "neko_mimi": true,
  "name": {
    "CN": {
      // Header和网站名
      "title": "语音按钮",
      // MediaSession歌手
      "fullName": ""
    },
    "EN": {
      "title": "Voives Button",
      "fullName": ""
    }
  },
  // Readme组件显示文字，支持HTML
  "readme": "",
  "header": {
    // Header图标URL
    "icon": "img/logo.svg",
    // 外链按钮地址
    "youtube": "",
    "twitter": "",
    "bilibili": ""
  },
  // 相关链接，格式与友链相同
  "related": [],
  // 友链列表
  "link": [
    {
      // 友链按钮名
      "name": "Hiiro按钮",
      // 友链地址
      "url": "https: //hiiro.club/",
      // 友链按钮颜色
      "background": "#F5C1BB",
      // 友链按钮文字颜色
      "color": "#5F505F"
    }
  ],
  "footer": {
    // 作者列表
    "author": [
      {
        // 作者名
        "name": "Blacktunes",
        // 作者URL，可选
        "url": "https://github.com/blacktunes"
      }
    ],
    // 页脚说明列表，支持HTML
    "info": [""],
    // 项目Github图标地址
    "githubUrl": "https://github.com/blacktunes/voices-button"
  },
  // 控制台输出
  "console": {
    // 控制台输出文字
    "text": "https://github.com/blacktunes/voices-button",
    // 字号，默认16px
    "size": "",
    // 文字颜色
    "color": "",
    // 控制台输出图片名，请放到public/img文件夹
    "img": "",
    // 图片宽度，默认100%
    "imgWidth": "",
    // 图片高度，默认100%
    "imgHeight": ""
  },
  // MediaSession专辑图片名，请放到public/img文件夹
  "mediaSession": "",
  // 语音CDN地址
  "CDN": ""
}
```

#### setting/translate 文件夹

`category.json`和`locales.json`为固定命名，请勿修改

- **category.json** 分类列表

```jsonc
[
  {
    // 分类命名
    "name": "名言",
    // 是否隐藏
    "hide": true,
    "translate": {
      // 分类中文翻译
      "zh-CN": "猫猫名言~",
      // 分类英文翻译
      "en-US": "witticism~"
    }
  }
]
```

- 语音列表文件可任意命名

```jsonc
[
  {
    // 语音命名
    "name": "voiceName",
    // 语音文件名
    "path": "voiceName.mp3",
    // 是否隐藏
    "hide": true,
    "translate": {
      // 语音中文翻译
      "zh-CN": "voiceName",
      // 语音英语翻译
      "en-US": "voiceName"
    },
    // 语音所属分类(对应category的name)
    "category": "分类",
    // 以下属性为可选
    // hover时显示图片，请放到public/voices/img目录
    "usePicture": {
      "zh-CN": "",
      "en-US": ""
    },
    // 添加时间
    "date": "2020-11-11",
    // 语音出处
    "mark": {
      "title": "标题",
      "time": "0:00:01~0:00:03",
      "url": "https://www.bilibili.com/video/AV1"
    }
  }
]
```

### LICENSE
- 使用[voices-button-cli](https://github.com/blacktunes/voices-button-cli)创建的语音按钮
- 所用模板为[Hiiro按钮](https://github.com/blacktunes/hiiro-button)
