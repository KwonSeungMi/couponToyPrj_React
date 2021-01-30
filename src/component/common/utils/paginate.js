import _ from 'lodash';

export function paginate(items, pageNumber, pageSize,changePage) {
  // 현재 페이지랑 새로 선택된 페이지가 다르면, 새로 선택된 페이지 기준으로 slice 되도록 세팅
  if(changePage != pageNumber)
    pageNumber = changePage;

  const startIndex = (pageNumber - 1) * pageSize; // 자를 배열의 시작점
  
  return _(items)
    .slice(startIndex) // 시작점부터 배열을 자르되
    .take(pageSize) // pageSize만큼의 배열을 취함
    .value(); // lodash wrapper 객체를 regular 배열로 변환
}