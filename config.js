

const config = {

    botName:    "𝐂𝐇𝐄𝐎𝐍 𝐁𝐎𝐓",
    botTag:     "@CHEON",
    botVersion: "2.0.0",
    botDev:     "𝐋𝐎𝐘𝐃",
    devNumber:  "4917672339436",

    sessions:   "sessions",
    botNumber:  "212723811992", // رقم البوت هنا ضروري 


    owner: [
        "4917672339436", //رقم المطور
    ],

    ownerLid: [],
    prems:    [],
    premsLid: [],

    prefix: /^[°•π÷×¶∆£¢€¥®™✓=|~!?#%^&.]/,

    
    ch: {
        main:    "120363402804601196@newsletter",
        second:  "120363377374711810@newsletter", // خلهم مش هيفيدوك🐦
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
        channel: "https://whatsapp.com/channel/0029Vb6kG3s0AgW2lYD8ad1L",
        group:   "https://chat.whatsapp.com/DSktEHhJ1c0Bn5zjVC4eBO?mode=gi_t",
        support: "https://chat.whatsapp.com/KkuYNJrg3qv1JslwoFOTUt?mode=gi_t",
        github:  "https://github.com/Loydsumer/baileys-speed",
        dev:     "https://wa.me/4917672339436",
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
