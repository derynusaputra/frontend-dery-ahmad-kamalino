// import moment from "moment";

import moment from "moment";

export const capitalizeWords = (str) => {
  return str?.replace(/\b\w/g, (char) => char.toUpperCase());
};

//   export const htmlChanger = (params) => {
//     const decoded = decode(params, { level: "html5" });
//     return decoded;
//   };

export const getNamaBulan = (angkaBulan) => {
  const bulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  return bulan[angkaBulan - 1];
};

export const formatDate = (time) => {
  const timestamp = time * 1000;

  const formattedDate = moment(timestamp).format("DD MMM YYYY, HH:mm");
  return formattedDate;
};

export const formatNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export const getDateAgo = (params) => {
  moment.locale("id");
  const fromNow = moment.unix(params).fromNow();
  return fromNow;
};

export const formatToRupiah = (value) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumSignificantDigits: (value + "").replace(",", "").length,
  }).format(value);
