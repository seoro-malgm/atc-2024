import countryCodes from "country-codes-list";
import getUnicodeFlagIcon from "country-flag-icons/unicode";

// countryCodes.customList 메서드를 사용하여 국가 코드와 전화번호를 객체로 가져옵니다.
const countryList = countryCodes.customList(
  "countryCode",
  "{countryNameEn}/{countryCallingCode}"
);

// 객체를 배열로 변환하고, 원하는 형태로 변환합니다.
const arr = Object.entries(countryList).map(([countryCode, value]) => {
  const flagIcon = getUnicodeFlagIcon(countryCode);
  const [countryNameEn, countryCallingCode] = value.split("/");
  return {
    value: countryCallingCode,
    label: `${flagIcon} +${countryCallingCode}`
  };
});

// 중복되는 countryCallingCode를 제거한 후 정렬
const uniqueSortedArr = Array.from(new Set(arr.map(item => item.value)))
  .map(value => arr.find(item => item.value === value))
  .sort((a, b) => Number(a.value) - Number(b.value));

export default uniqueSortedArr;
