const getQueryString = (name) => {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  let r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  }
  return undefined;
}

const convertDate = (dateString) => {
  const monthName = ["Jan", "Feb", "March", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  let yearString = dateString.slice(0, 4);
  let month = Number(dateString.slice(4, 6));
  let day = Number(dateString.slice(6, 8));
  return `${monthName[month - 1]} ${day}, ${yearString}`;
}
