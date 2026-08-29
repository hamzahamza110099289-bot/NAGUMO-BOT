

const config = {

    botName:    "JOY BOY BOT",
    botTag:     "@CHEON",
    botVersion: "2.0.0",
    botDev:     "JOY BOY",
    devNumber:  "212625654754",

    sessions:   "sessions",
    botNumber:  "212723811992", // رقم البوت هنا ضروري 


    owner: [
        "212625654754", //رقم المطور
    ],

    ownerLid: [],
    prems:    [],
    premsLid: [],

    prefix: /^[°•π÷×¶∆£¢€¥®™✓=|~!?#%^&.]/,

    
    ch: {
        main:    "",
        second:  "", // خلهم مش هيفيدوك🐦
    },

   
    

    theme: {
        border:    "🪻",
        icon:      "✦",
        separator: "~*『✦▬▬▬✦┇• 🪻 •┇✦▬▬▬✦』*~",
        header:    (title) => `╔═══「 🪻 ${title} 🪻 」═══╗`,
        subHeader: (title) => `┌─「 ✦ ${title} 」`,
        tail:      `╚══════════════════════╝`,
        subTail:   `└──────────────────────`,
        footer:    `〔 𝐂𝐇𝐄𝐎𝐍 𝐁𝐎𝐓 〕`,
        row:       (key, val) => `│ ✦ ${key}: 〘${val}〙`,
        zarfLine:  `~*『✦▬▬▬✦┇• 🪻 •┇✦▬▬▬✦』*~`,
    },

    links: {
        channel: "",
        group:   "",
        support: "",
        github:  "",
        dev:     "",
    },

    images: {
        menu:       "https://raw.githubusercontent.com/LOYD-SOLO/uploads1/main/files/0c0e6a-1777368831455.jpg",
        owner:      "https://raw.githubusercontent.com/LOYD-SOLO/uploads1/main/files/0c0e6a-1777368831455.jpg",
        group:      "https://raw.githubusercontent.com/LOYD-SOLO/uploads1/main/files/0c0e6a-1777368831455.jpg",
        economy:    "https://raw.githubusercontent.com/LOYD-SOLO/uploads1/main/files/0c0e6a-1777368831455.jpg",
        games:      "https://raw.githubusercontent.com/LOYD-SOLO/uploads1/main/files/0c0e6a-1777368831455.jpg",
        tools:      "https://raw.githubusercontent.com/LOYD-SOLO/uploads1/main/files/0c0e6a-1777368831455.jpg",
        info:       "https://raw.githubusercontent.com/LOYD-SOLO/uploads1/main/files/0c0e6a-1777368831455.jpg",
        downloader: "https://raw.githubusercontent.com/LOYD-SOLO/uploads1/main/files/0c0e6a-1777368831455.jpg",
        ai:         "https://raw.githubusercontent.com/LOYD-SOLO/uploads1/main/files/0c0e6a-1777368831455.jpg",
    },

    

    opts: {
        queque:    false,
        restrict:  false,
        noprint:   false,
        autoread:  true,
        autoReact: true,
    },
}


global.botName    = config.botName
global.botTag     = config.botTag
global.botVersion = config.botVersion
global.botDev     = config.botDev
global.devNumber  = config.devNumber
global.sessions   = config.sessions
global.botNumber  = config.botNumber
global.owner      = config.owner
global.ownerLid   = config.ownerLid
global.prems      = config.prems
global.premsLid   = config.premsLid
global.prefix     = config.prefix
global.ch         = config.ch
global.zarf       = config.zarf
global.theme      = config.theme
global.links      = config.links
global.images     = config.images
global.zarf_settings = config.zarf_settings

global.opts = { ...config.opts, ...(global.opts || {}) }

export default config
