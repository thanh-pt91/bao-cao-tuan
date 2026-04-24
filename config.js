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
  GAS_URL: 'https://script.google.com/macros/s/AKfycbydjyAM_3zVWWlvfTDpjWvjgLGyzvWkSRjRNJyScD-F8VUpxiDcOL4a99K9bEhK6pPqAQ/exec',

  // ----------------------------------------------------------
  //  GOOGLE SHEET ID
  //  Lấy từ URL Google Sheet:
  //  docs.google.com/spreadsheets/d/[ID_O_DAY]/edit
  // ----------------------------------------------------------
  SHEET_ID: '1MeEnH6EhWuEhhf-cnFfKixWUWlz-Fxa0BKAH80NBaQI',

  // ----------------------------------------------------------
  //  GOOGLE OAUTH CLIENT ID (dùng cho đăng nhập Google)
  //  Lấy từ: console.cloud.google.com → Credentials → OAuth 2.0
  //  Để trống nếu chưa cấu hình → tắt tính năng đăng nhập
  // ----------------------------------------------------------
  GOOGLE_CLIENT_ID: '326174705190-bcc9k0dq6srf34042jg0o7ma5b0gm0b3.apps.googleusercontent.com',

  // ----------------------------------------------------------
  //  THÔNG TIN ỨNG DỤNG
  // ----------------------------------------------------------
  APP_NAME: 'Báo cáo công việc',
  APP_VERSION: '1.0.0',
  MODULE: 'MODULE 1',

};
