const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix) => {
	return`┌────《 ＯＷＮＥＲ  ＭＥＮＵ 》
│
├▹ ${prefix}ᴜɴʙᴀɴᴜsᴇʀ
├▹ ${prefix}ᴀᴅᴅsᴜᴅᴏ
├▹ ${prefix}ɢᴇᴛsᴜᴅᴏ
├▹ ${prefix}ᴅᴇʟsᴜᴅᴏ
├▹ ${prefix}ʙᴀɴᴄʜᴀᴛ
├▹ ${prefix}ᴜɴʙᴀɴᴄʜᴀᴛ
├▹ ${prefix}ʟɪsᴛʙᴀɴᴄʜᴀᴛ
├▹ ${prefix}ᴅᴇʟᴀʟʟᴄʜᴀᴛ
├▹ ${prefix}ᴀᴅᴅʙᴀᴅ
├▹ ${prefix}ᴅᴇʟʙᴀᴅ
├▹ ${prefix}ʟɪsᴛʙᴀᴅ
├▹ ${prefix}ᴊᴏɪɴ
├▹ ${prefix}ʟᴇᴀᴠᴇ
├▹ ${prefix}ʀᴇsᴛᴀʀᴛ
├▹ ${prefix}sᴇᴛʙᴏᴛʙɪᴏ
├▹ ${prefix}sᴇᴛʙᴏᴛᴘᴘ
├▹ ${prefix}ᴅᴇʟʙᴏᴛᴘᴘ
├▹ ${prefix}ʙʀᴏᴀᴅᴄᴀsᴛ
├▹ ${prefix}ᴘᴜsʜᴄᴏɴᴛᴀᴄᴛ
├▹ ${prefix}ʙʟᴏᴄᴋ
├▹ ${prefix}ᴜɴʙʟᴏᴄᴋ
├▹ ${prefix}ɢᴇᴛᴀʟʟᴜsᴇʀ
├▹ ${prefix}ᴜsᴇʀᴊɪᴅ
├▹ ${prefix}ᴀᴅᴅᴊɪᴅ
├▹ ${prefix}ᴅᴇʟᴊɪᴅ
├▹ ${prefix}ʟɪsᴛᴊɪᴅ
├▹ ${prefix}ғᴏʀᴡᴀʀᴅ
├▹ ${prefix}ᴅɪʀᴇᴄᴛᴅʟ
├▹ ${prefix}ᴠᴠ
├▹ ${prefix}ɢᴇᴛᴘᴘ
├▹ ${prefix}ᴄʜʀ
├▹ ${prefix}ᴄʜɪᴅ
├▹ ${prefix}sᴀᴠᴇ
└───────────────────


┌────《 ＧＲＯＵＰ  ＭＥＮＵ 》
│
├▹ ${prefix}ʟɪsᴛᴀᴅᴍɪɴ
├▹ ${prefix}ɪɴᴠɪᴛᴇ
├▹ ${prefix}ᴇᴘʜᴇᴍᴇʀᴀʟ
├▹ ${prefix}ᴅᴇʟᴇᴛᴇ
├▹ ${prefix}sᴇᴛɢʀᴏᴜᴘᴘᴘ
├▹ ${prefix}ᴅᴇʟɢʀᴏᴜᴘᴘᴘ
├▹ ${prefix}sᴇᴛɢʀᴏᴜᴘɴᴀᴍᴇ
├▹ ${prefix}sᴇᴛɢʀᴏᴜᴘᴅᴇsᴄ
├▹ ${prefix}ᴄʟᴏsᴇᴛɪᴍᴇ
├▹ ${prefix}ᴏᴘᴇɴᴛɪᴍᴇ
├▹ ${prefix}ᴋɪᴄᴋ
├▹ ${prefix}ᴀᴅᴅ
├▹ ${prefix}ᴘʀᴏᴍᴏᴛᴇ
├▹ ${prefix}ᴅᴇᴍᴏᴛᴇ
├▹ ${prefix}ᴛᴀɢᴀʟʟ
├▹ ${prefix}ʜɪᴅᴇᴛᴀɢ
├▹ ${prefix}ᴛᴏᴛᴀɢ
├▹ ${prefix}ᴍᴜᴛᴇ
├▹ ${prefix}ᴜɴᴍᴜᴛᴇ
├▹ ${prefix}ᴜɴʟᴏᴄᴋɢs
├▹ ${prefix}ʟᴏᴄᴋɢs
├▹ ${prefix}ɢʀᴏᴜᴘʟɪɴᴋ
├▹ ${prefix}ʀᴇsᴇᴛʟɪɴᴋ
├▹ ${prefix}ʀᴇǫʟɪsᴛ
├▹ ${prefix}ᴠᴏᴛᴇ
├▹ ${prefix}ᴄʜᴇᴄᴋᴠᴏᴛᴇ
├▹ ${prefix}ᴅᴇʟᴇᴛᴇᴠᴏᴛᴇ
├▹ ${prefix}ᴜᴘᴠᴏᴛᴇ
├▹ ${prefix}ᴅᴏᴡɴᴠᴏᴛᴇ
├▹ ${prefix}ɢʀᴏᴜᴘᴊɪᴅ
└───────────────────


┌────《 ＤＯＷＮＬＯＡＤ  ＭＥＮＵ 》
│
├▹ ${prefix}sᴏɴɢ
├▹ ${prefix}ᴠɪᴅᴇᴏ
├▹ ${prefix}ᴘʟᴀʏ
├▹ ${prefix}ʏᴛᴍᴘ𝟹
├▹ ${prefix}ʏᴛᴍᴘ𝟺
├▹ ${prefix}ᴛɪᴋᴛᴏᴋ
├▹ ${prefix}ɢᴅʀɪᴠᴇ
├▹ ${prefix}ʜᴀᴘᴘʏᴍᴏᴅ
├▹ ${prefix}ғᴀᴄᴇʙᴏᴏᴋ
├▹ ${prefix}ᴡᴀʟʟᴘᴀᴘᴇʀ
├▹ ${prefix}ᴡᴀʟʟᴘᴀᴘᴇʀ𝟸
├▹ ${prefix}ʟɪᴠᴇᴡᴀʟʟᴘᴀᴘᴇʀ
├▹ ${prefix}ᴍᴇᴅɪᴀғɪʀᴇ
├▹ ${prefix}ɪɴsᴛᴀɢʀᴀᴍ
├▹ ${prefix}ᴛᴡɪᴛᴛᴇʀ
├▹ ${prefix}ᴍᴇɢᴀ
├▹ ${prefix}sᴘᴏᴛɪғʏ
├▹ ${prefix}xɴxx
├▹ ${prefix}sᴏᴜɴᴅᴄʟᴏᴜᴅ
├▹ ${prefix}ᴘɪɴᴛᴇʀᴇsᴛ
├▹ ${prefix}ɢɪᴛ
├▹ ${prefix}ᴄɪɴᴇᴍᴏᴠɪᴇ
├▹ ${prefix}sɪɴʜᴀʟᴀᴍᴏᴠɪᴇ
├▹ ${prefix}ᴄɪɴᴇsᴇʀɪᴇs
├▹ ${prefix}ᴀɴɪᴍᴇᴍᴏᴠɪᴇ
└───────────────────


┌────《 ＤＡＴＡＢＡＳＥ  ＭＥＮＵ 》
│
├▹ ${prefix}sᴇᴛᴄᴍᴅ
├▹ ${prefix}ɢᴇᴛᴄᴍᴅ
├▹ ${prefix}ᴅᴇʟᴄᴍᴅ
├▹ ${prefix}ʟɪsᴛᴄᴍᴅ
├▹ ${prefix}ᴅᴇʟᴀʟʟᴄᴍᴅ
└───────────────────

	
┌────《 ＶＯＩＣＥ  ＭＥＮＵ 》
│
├▹ ${prefix}ʙᴀss
├▹ ${prefix}ʙʟᴏᴡɴ
├▹ ${prefix}ᴅᴇᴇᴘ
├▹ ${prefix}ᴇᴀʀʀᴀᴘᴇ
├▹ ${prefix}ғᴀsᴛ
├▹ ${prefix}ғᴀᴛ
├▹ ${prefix}ɴɪɢʜᴛᴄᴏʀᴇ
├▹ ${prefix}ʀᴇᴠᴇʀsᴇ
├▹ ${prefix}ʀᴏʙᴏᴛ
├▹ ${prefix}sʟᴏᴡ
├▹ ${prefix}sᴍᴏᴏᴛʜ
├▹ ${prefix}sǫᴜɪʀʀᴇʟ
└───────────────────


┌────《 ＳＥＡＲＣＨ  ＭＥＮＵ 》
│
├▹ ${prefix}ʏᴛs
├▹ ${prefix}ɢᴏᴏɢʟᴇ
├▹ ${prefix}ᴡɪᴋɪᴍᴇᴅɪᴀ
├▹ ${prefix}ᴡɪᴋɪᴘᴇᴅɪᴀ
└───────────────────


┌────《 ＯＴＨＥＲ  ＭＥＮＵ 》
│
├▹ ${prefix}sʏsᴛᴇᴍ
├▹ ${prefix}ᴏᴡɴᴇʀ
├▹ ${prefix}sᴛɪᴄᴋᴇʀ
├▹ ${prefix}ᴇᴍᴏᴊɪᴍɪx
├▹ ${prefix}ᴇᴍᴏᴊɪᴍɪx𝟸
├▹ ${prefix}ᴛᴏǫʀ
├▹ ${prefix}sᴛʏʟᴇᴛᴇxᴛ
├▹ ${prefix}ʀᴇᴍɪɴɪ
├▹ ${prefix}ssᴡᴇʙ
├▹ ${prefix}ᴛɪɴʏᴜʀʟ
├▹ ${prefix}ʀᴇᴍᴏᴠᴇʙɢ
├▹ ${prefix}ᴘʜᴏᴛᴏʟᴇᴀᴘ
├▹ ${prefix}ʀᴇᴀᴅᴍᴏʀᴇ
├▹ ${prefix}ᴛᴏᴜʀʟ
├▹ ${prefix}ᴛᴏɪᴍᴀɢᴇ
├▹ ${prefix}ᴇʙɪɴᴀʀʏ
├▹ ${prefix}ᴅʙɪɴᴀʀʏ
├▹ ${prefix}ᴘɪɴɢ
├▹ ${prefix}ʀᴜɴᴛɪᴍᴇ
├▹ ${prefix}ʜɪʀᴜɴᴇᴡs
├▹ ${prefix}ᴀᴅᴀᴅᴇʀᴀɴᴀ
├▹ ${prefix}ᴘʀᴏxʏ
├▹ ${prefix}ɢᴘᴛ
├▹ ${prefix}ɢᴘᴛ𝟸
├▹ ${prefix}ᴅᴀʟʟᴇ
├▹ ${prefix}ᴀʀᴛᴀɪ
├▹ ${prefix}ʀᴀɴɪᴍᴇ
├▹ ${prefix}ᴍᴀʟ
├▹ ${prefix}ᴀᴋᴜᴀʀɪ
├▹ ${prefix}ᴇsᴀɴᴀ
└───────────────────`
}

global.ownermenu = (prefix) => {
	return `┌────《 ＯＷＮＥＲ  ＭＥＮＵ 》
│
├▹ ${prefix}ᴜɴʙᴀɴᴜsᴇʀ
├▹ ${prefix}ᴀᴅᴅsᴜᴅᴏ
├▹ ${prefix}ɢᴇᴛsᴜᴅᴏ
├▹ ${prefix}ᴅᴇʟsᴜᴅᴏ
├▹ ${prefix}ʙᴀɴᴄʜᴀᴛ
├▹ ${prefix}ᴜɴʙᴀɴᴄʜᴀᴛ
├▹ ${prefix}ʟɪsᴛʙᴀɴᴄʜᴀᴛ
├▹ ${prefix}ᴅᴇʟᴀʟʟᴄʜᴀᴛ
├▹ ${prefix}ᴀᴅᴅʙᴀᴅ
├▹ ${prefix}ᴅᴇʟʙᴀᴅ
├▹ ${prefix}ʟɪsᴛʙᴀᴅ
├▹ ${prefix}ᴊᴏɪɴ
├▹ ${prefix}ʟᴇᴀᴠᴇ
├▹ ${prefix}ʀᴇsᴛᴀʀᴛ
├▹ ${prefix}sᴇᴛʙᴏᴛʙɪᴏ
├▹ ${prefix}sᴇᴛʙᴏᴛᴘᴘ
├▹ ${prefix}ᴅᴇʟʙᴏᴛᴘᴘ
├▹ ${prefix}ʙʀᴏᴀᴅᴄᴀsᴛ
├▹ ${prefix}ᴘᴜsʜᴄᴏɴᴛᴀᴄᴛ
├▹ ${prefix}ʙʟᴏᴄᴋ
├▹ ${prefix}ᴜɴʙʟᴏᴄᴋ
├▹ ${prefix}ɢᴇᴛᴀʟʟᴜsᴇʀ
├▹ ${prefix}ᴜsᴇʀᴊɪᴅ
├▹ ${prefix}ᴀᴅᴅᴊɪᴅ
├▹ ${prefix}ᴅᴇʟᴊɪᴅ
├▹ ${prefix}ʟɪsᴛᴊɪᴅ
├▹ ${prefix}ғᴏʀᴡᴀʀᴅ
├▹ ${prefix}ᴅɪʀᴇᴄᴛᴅʟ
├▹ ${prefix}ᴠᴠ
├▹ ${prefix}ɢᴇᴛᴘᴘ
├▹ ${prefix}ᴄʜʀ
├▹ ${prefix}ᴄʜɪᴅ
├▹ ${prefix}sᴀᴠᴇ
└───────────────────`
}

global.othermenu = (prefix) => {
	return `┌────《 ＯＴＨＥＲ  ＭＥＮＵ 》
│
├▹ ${prefix}sʏsᴛᴇᴍ
├▹ ${prefix}ᴏᴡɴᴇʀ
├▹ ${prefix}sᴛɪᴄᴋᴇʀ
├▹ ${prefix}ᴇᴍᴏᴊɪᴍɪx
├▹ ${prefix}ᴇᴍᴏᴊɪᴍɪx𝟸
├▹ ${prefix}ᴛᴏǫʀ
├▹ ${prefix}sᴛʏʟᴇᴛᴇxᴛ
├▹ ${prefix}ʀᴇᴍɪɴɪ
├▹ ${prefix}ssᴡᴇʙ
├▹ ${prefix}ᴛɪɴʏᴜʀʟ
├▹ ${prefix}ʀᴇᴍᴏᴠᴇʙɢ
├▹ ${prefix}ᴘʜᴏᴛᴏʟᴇᴀᴘ
├▹ ${prefix}ʀᴇᴀᴅᴍᴏʀᴇ
├▹ ${prefix}ᴛᴏᴜʀʟ
├▹ ${prefix}ᴛᴏɪᴍᴀɢᴇ
├▹ ${prefix}ᴇʙɪɴᴀʀʏ
├▹ ${prefix}ᴅʙɪɴᴀʀʏ
├▹ ${prefix}ᴘɪɴɢ
├▹ ${prefix}ʀᴜɴᴛɪᴍᴇ
├▹ ${prefix}ʜɪʀᴜɴᴇᴡs
├▹ ${prefix}ᴀᴅᴀᴅᴇʀᴀɴᴀ
├▹ ${prefix}ᴘʀᴏxʏ
├▹ ${prefix}ɢᴘᴛ
├▹ ${prefix}ɢᴘᴛ𝟸
├▹ ${prefix}ᴅᴀʟʟᴇ
├▹ ${prefix}ᴀʀᴛᴀɪ
├▹ ${prefix}ʀᴀɴɪᴍᴇ
├▹ ${prefix}ᴍᴀʟ
├▹ ${prefix}ᴀᴋᴜᴀʀɪ
├▹ ${prefix}ᴇsᴀɴᴀ
└───────────────────`
}

global.downloadmenu = (prefix) => {
	return `┌────《 ＤＯＷＮＬＯＡＤ  ＭＥＮＵ 》
│
├▹ ${prefix}sᴏɴɢ
├▹ ${prefix}ᴠɪᴅᴇᴏ
├▹ ${prefix}ᴘʟᴀʏ
├▹ ${prefix}ʏᴛᴍᴘ𝟹
├▹ ${prefix}ʏᴛᴍᴘ𝟺
├▹ ${prefix}ᴛɪᴋᴛᴏᴋ
├▹ ${prefix}ɢᴅʀɪᴠᴇ
├▹ ${prefix}ʜᴀᴘᴘʏᴍᴏᴅ
├▹ ${prefix}ғᴀᴄᴇʙᴏᴏᴋ
├▹ ${prefix}ᴡᴀʟʟᴘᴀᴘᴇʀ
├▹ ${prefix}ᴡᴀʟʟᴘᴀᴘᴇʀ𝟸
├▹ ${prefix}ʟɪᴠᴇᴡᴀʟʟᴘᴀᴘᴇʀ
├▹ ${prefix}ᴍᴇᴅɪᴀғɪʀᴇ
├▹ ${prefix}ɪɴsᴛᴀɢʀᴀᴍ
├▹ ${prefix}ᴛᴡɪᴛᴛᴇʀ
├▹ ${prefix}ᴍᴇɢᴀ
├▹ ${prefix}sᴘᴏᴛɪғʏ
├▹ ${prefix}xɴxx
├▹ ${prefix}sᴏᴜɴᴅᴄʟᴏᴜᴅ
├▹ ${prefix}ᴘɪɴᴛᴇʀᴇsᴛ
├▹ ${prefix}ɢɪᴛ
├▹ ${prefix}ᴄɪɴᴇᴍᴏᴠɪᴇ
├▹ ${prefix}sɪɴʜᴀʟᴀᴍᴏᴠɪᴇ
├▹ ${prefix}ᴄɪɴᴇsᴇʀɪᴇs
├▹ ${prefix}ᴀɴɪᴍᴇᴍᴏᴠɪᴇ
└───────────────────`
}

global.groupmenu = (prefix) => {
	return `┌────《 ＧＲＯＵＰ  ＭＥＮＵ 》
│
├▹ ${prefix}ʟɪsᴛᴀᴅᴍɪɴ
├▹ ${prefix}ɪɴᴠɪᴛᴇ
├▹ ${prefix}ᴇᴘʜᴇᴍᴇʀᴀʟ
├▹ ${prefix}ᴅᴇʟᴇᴛᴇ
├▹ ${prefix}sᴇᴛɢʀᴏᴜᴘᴘᴘ
├▹ ${prefix}ᴅᴇʟɢʀᴏᴜᴘᴘᴘ
├▹ ${prefix}sᴇᴛɢʀᴏᴜᴘɴᴀᴍᴇ
├▹ ${prefix}sᴇᴛɢʀᴏᴜᴘᴅᴇsᴄ
├▹ ${prefix}ᴄʟᴏsᴇᴛɪᴍᴇ
├▹ ${prefix}ᴏᴘᴇɴᴛɪᴍᴇ
├▹ ${prefix}ᴋɪᴄᴋ
├▹ ${prefix}ᴀᴅᴅ
├▹ ${prefix}ᴘʀᴏᴍᴏᴛᴇ
├▹ ${prefix}ᴅᴇᴍᴏᴛᴇ
├▹ ${prefix}ᴛᴀɢᴀʟʟ
├▹ ${prefix}ʜɪᴅᴇᴛᴀɢ
├▹ ${prefix}ᴛᴏᴛᴀɢ
├▹ ${prefix}ᴍᴜᴛᴇ
├▹ ${prefix}ᴜɴᴍᴜᴛᴇ
├▹ ${prefix}ᴜɴʟᴏᴄᴋɢs
├▹ ${prefix}ʟᴏᴄᴋɢs
├▹ ${prefix}ɢʀᴏᴜᴘʟɪɴᴋ
├▹ ${prefix}ʀᴇsᴇᴛʟɪɴᴋ
├▹ ${prefix}ʀᴇǫʟɪsᴛ
├▹ ${prefix}ᴠᴏᴛᴇ
├▹ ${prefix}ᴄʜᴇᴄᴋᴠᴏᴛᴇ
├▹ ${prefix}ᴅᴇʟᴇᴛᴇᴠᴏᴛᴇ
├▹ ${prefix}ᴜᴘᴠᴏᴛᴇ
├▹ ${prefix}ᴅᴏᴡɴᴠᴏᴛᴇ
├▹ ${prefix}ɢʀᴏᴜᴘᴊɪᴅ
└───────────────────`
}

global.databasemenu = (prefix) => {
	return `┌────《 ＤＡＴＡＢＡＳＥ  ＭＥＮＵ 》
│
├▹ ${prefix}sᴇᴛᴄᴍᴅ
├▹ ${prefix}ɢᴇᴛᴄᴍᴅ
├▹ ${prefix}ᴅᴇʟᴄᴍᴅ
├▹ ${prefix}ʟɪsᴛᴄᴍᴅ
├▹ ${prefix}ᴅᴇʟᴀʟʟᴄᴍᴅ
└───────────────────`
}

global.searchmenu = (prefix) => {
	return `┌────《 ＳＥＡＲＣＨ  ＭＥＮＵ 》
│
├▹ ${prefix}ʏᴛs
├▹ ${prefix}ɢᴏᴏɢʟᴇ
├▹ ${prefix}ᴡɪᴋɪᴍᴇᴅɪᴀ
├▹ ${prefix}ᴡɪᴋɪᴘᴇᴅɪᴀ
└───────────────────`
}

global.voicemenu = (prefix) => {
	return `┌────《 ＶＯＩＣＥ  ＭＥＮＵ 》
│
├▹ ${prefix}ʙᴀss
├▹ ${prefix}ʙʟᴏᴡɴ
├▹ ${prefix}ᴅᴇᴇᴘ
├▹ ${prefix}ᴇᴀʀʀᴀᴘᴇ
├▹ ${prefix}ғᴀsᴛ
├▹ ${prefix}ғᴀᴛ
├▹ ${prefix}ɴɪɢʜᴛᴄᴏʀᴇ
├▹ ${prefix}ʀᴇᴠᴇʀsᴇ
├▹ ${prefix}ʀᴏʙᴏᴛ
├▹ ${prefix}sʟᴏᴡ
├▹ ${prefix}sᴍᴏᴏᴛʜ
├▹ ${prefix}sǫᴜɪʀʀᴇʟ
└───────────────────`
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})