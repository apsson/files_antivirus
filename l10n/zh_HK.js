OC.L10N.register(
    "files_antivirus",
    {
    "Clean" : "清理",
    "Infected" : "被感染",
    "Unchecked" : "未檢查",
    "Scanner exit status" : "掃描程式退出狀態",
    "Scanner output" : "掃描程式輸出",
    "Saving…" : "正在儲存……",
    "Antivirus" : "防毒程式",
    "File {file} is infected with {virus}" : "檔案 {file} 被 {virus} 感染",
    "The file has been removed" : "檔案已被移除",
    "File containing {virus} detected" : "偵測到包含 {virus} 的檔案",
    "Antivirus detected a virus" : "防毒軟體偵測到病毒",
    "Virus %s is detected in the file. Upload cannot be completed." : "在檔案中偵測到病毒 %s。無法完成上傳。",
    "Saved" : "已儲存",
    "Antivirus for files" : "檔案防毒",
    "An antivirus app for Nextcloud" : "Nextcloud 的防毒應用程式",
    "Antivirus for files is an antivirus app for Nextcloud.\n\n* 🕵️‍♂️ When the user uploads a file, it's checked\n* ☢️ Uploaded and infected files will be deleted and a notification will be shown and/or sent via email\n* 🔎 Background Job to scan all files\n* ❓ Use ClamAV (open source) or Kaspersky Scan Engine\n\nThis application inspects files that are uploaded to Nextcloud for viruses before they are written to the Nextcloud storage. If a file is identified as a virus, it is either logged or not uploaded to the server. The application relies on the underlying ClamAV virus scanning engine, which the admin points Nextcloud to when configuring the application. Alternatively, a Kaspersky Scan Engine can be configured, which has to run on a separate server.\nFor this app to be effective, the ClamAV virus definitions should be kept up to date. Also note that enabling this app will impact system performance as additional processing is required for every upload. More information is available in the Antivirus documentation." : "檔案防毒是用於 Nextcloud 的防毒應用程式。\n\n* 🕵️‍♂️ 當用戶上傳檔案時，它會被檢查\n* ☢️ 已上傳且被感染的檔案將會被刪除，並會顯示通知及／或透過電子郵件傳送\n* 🔎 背景作業掃描所有檔案\n* ❓ 使用 ClamAV（開放原始碼）或卡巴斯基的掃描引擎\n\n此應用程式在檔案上傳到 Nextcloud 並寫入儲存空間之前，會先檢查其是否有病毒。如果檔案被識別為病毒，則該檔案會被紀錄，或是不會被上傳到伺服器。應用程式依賴於底層的 ClamAV 病毒掃描引擎，管理員在設定應用程式時會將 Nextcloud 指向該引擎。或是也可以設定卡巴斯基的掃描引擎，但其必須在獨立的伺服器上執行。\n為使此應用程式有效，ClamAV 的病毒定義檔應該要保持最新。另請注意，啟用此應用程式會影響系統效能，因為每次上傳均需要額外的處理。更多資訊請見防毒應用程式的文件。",
    "Greetings {user}," : "{user} 您好，",
    "Sorry, but a malware was detected in a file you tried to upload and it had to be deleted." : "抱歉，您試圖上傳的檔案中偵測到惡意軟體，因此必須將其刪除。",
    "This email is a notification from {host}. Please, do not reply." : "此電子郵件是來自 {host} 的通告。請勿回覆。",
    "File uploaded: {file}" : "檔案已上傳：{file}",
    "Antivirus for Files" : "檔案防毒",
    "Mode" : "模式",
    "ClamAV Executable" : "ClamAV 執行檔",
    "ClamAV Daemon" : "ClamAV 幕後程式",
    "ClamAV Daemon (Socket)" : "ClamAV 幕後程式（插座）",
    "Kaspersky Daemon" : "Kaspersky 幕後程式",
    "Socket" : "插座",
    "ClamAV Socket." : "ClamAV 插座。",
    "Not required in Executable Mode." : "在可執行模式下不需要。",
    "Host" : "主機",
    "Address of Antivirus Host." : "防毒主機的地址。",
    "Port" : "連接埠",
    "Port number of Antivirus Host." : "防毒主機的連接埠號。",
    "Stream Length" : "串流長度",
    "ClamAV StreamMaxLength value in bytes." : "ClamAV StreamMaxLength 值（以位元組為單位）。",
    "bytes" : "位元組",
    "Path to clamscan" : "clamscan 的路徑",
    "Path to clamscan executable." : "clamscan 執行檔的路徑。",
    "Not required in Daemon Mode." : "在守護程式模式下不需要。",
    "Extra command line options (comma-separated)" : "額外的命令列選項（以逗號分隔）",
    "When infected files are found during a background scan" : "在背景掃描時發現受感染的檔案時",
    "Only log" : "僅記錄",
    "Delete file" : "刪除檔案",
    "Save" : "儲存",
    "Advanced" : "進階",
    "Rules" : "規則",
    "Clear All" : "清除全部",
    "Reset to defaults" : "重設為預設值",
    "Match by" : "符合依據",
    "Scanner exit status or signature to search" : "掃描程式退出狀態或要搜尋的簽章",
    "Description" : "描述",
    "Mark as" : "標記為",
    "Add a rule" : "新增規則"
},
"nplurals=1; plural=0;");
