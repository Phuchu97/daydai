const VN_MOBILE_REGEX =
  /^0(3[2-9]|5[25689]|7[06-9]|8[1-689]|9[0-46-9])\d{7}$/;

const VN_LANDLINE_REGEX = /^0(2[0-9])\d{7,8}$/;

export function normalizeVietnamesePhone(raw: string): string {
  let digits = raw.replace(/[\s.\-()]/g, "");
  if (digits.startsWith("+84")) {
    digits = `0${digits.slice(3)}`;
  } else if (digits.startsWith("84") && digits.length === 11) {
    digits = `0${digits.slice(2)}`;
  }
  return digits;
}

export function isValidVietnamesePhone(raw: string): boolean {
  const phone = normalizeVietnamesePhone(raw.trim());
  return VN_MOBILE_REGEX.test(phone) || VN_LANDLINE_REGEX.test(phone);
}

export const VIETNAM_PHONE_ERROR =
  "Số điện thoại không hợp lệ. Vui lòng nhập số Việt Nam (10 số, bắt đầu bằng 0 hoặc +84).";
