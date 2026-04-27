// ============================================================
//  CONFIG.JS — Cấu hình tập trung cho toàn bộ ứng dụng
//  Mỗi lần cần update chỉ cần sửa file này
// ============================================================
var APP_CONFIG = {
  // ----------------------------------------------------------
  //  GOOGLE APPS SCRIPT
  //  Lấy từ: Apps Script → Deploy → Manage deployments → URL
  //  Mỗi lần deploy lại phải cập nhật URL mới vào đây
  // ----------------------------------------------------------
  GAS_URL: 'https://script.google.com/macros/s/AKfycbwL-f1IJt0UgpvbMx3WUtJIGdYuh2qbNkZusJsYPrWDlF6ygxOI6fExeEI5Cue2KYvSWw/exec',

  // ----------------------------------------------------------
  //  GOOGLE SHEET IDs
  //  Lấy từ URL Google Sheet:
  //  docs.google.com/spreadsheets/d/[ID_O_DAY]/edit
  // ----------------------------------------------------------
  SHEET_ID: '1MeEnH6EhWuEhhf-cnFfKixWUWlz-Fxa0BKAH80NBaQI',
  TRANSACTION_SHEET_ID: '1tohWfRekNvVxaCNbc49vbvEv69AWs-PMrSFY_6FBZ_E',

  // ----------------------------------------------------------
  //  GOOGLE OAUTH CLIENT ID (dùng cho đăng nhập Google)
  //  Lấy từ: console.cloud.google.com → Credentials → OAuth 2.0
  //  Để trống nếu chưa cấu hình → tắt tính năng đăng nhập
  // ----------------------------------------------------------
  GOOGLE_CLIENT_ID: '326174705190-bcc9k0dq6srf34042jg0o7ma5b0gm0b3.apps.googleusercontent.com',

  // ----------------------------------------------------------
  //  THÔNG TIN ỨNG DỤNG
  // ----------------------------------------------------------
  APP_NAME: 'Báo cáo tuần - TPBank EDC',
  APP_VERSION: '2.0.0',
  MODULE: 'FULL',
};
