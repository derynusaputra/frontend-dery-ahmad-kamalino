import {Dimensions} from "react-native";
const {width, height} = Dimensions.get("screen");

export const COLORS = {
  primary: "#2979F8",
  primary3: "#8810f7",
  primaryLight: "#7BAEFF",
  secondary: "#002C72",
  success: "#0ecb81",
  danger: "#ff4a5c",
  info: "#627EEA",
  warning: "#ffb02c",
  yellow: "#fff346",
  white: "#fff",
  dark: "#2f2f2f",
  light: "#E6E6E6",
  borderColor: "#E6E6E6",
  //
  green: "#3C6E57",

  // light
  title: "#232954",
  text: "#697089",
  background: "#EFF3FA",
  card: "#fff",
  border: "rgba(0, 0, 0, 0.10)",
  input: "#EFF3FA",
  placeholder: "rgba(71,90,119,.5)",
  //

  // dark
  darkTitle: "#fff",
  darkText: "rgba(255,255,255,0)",
  darkBackground: "#070C1F",
  darkCard: "#0D163D",
  darkBorder: "rgba(255, 255, 255, 0.2)",
  darkInput: "rgba(255,255,255,.1)",
  darkPlaceholder: "rgba(255,255,255,.5)",
  gray: "#CBCBCB",
  gray1: "#979797",
  semactic: "#CC3931",

  // pesantren
};

export const SIZES = {
  font: 14,
  fontSm: 13,
  fontXs: 12,
  radius: 10,
  radius_lg: 20,
  radius_sm: 8,

  //space
  padding: 15,
  margin: 15,

  //Font Sizes
  h1: 40,
  h2: 28,
  h3: 24,
  h4: 20,
  h5: 18,
  h6: 16,

  //App dimensions
  width,
  height,

  container: 800,
  contentArea: {
    paddingTop: 70,
    paddingBottom: 150,
  },
};
export const FONTS = {
  font: {fontSize: SIZES.font, lineHeight: 20, fontFamily: "Poppins-Regular"},
  fontSm: {
    fontSize: SIZES.fontSm,
    lineHeight: 18,
    fontFamily: "Poppins-Regular",
  },

  fontXs: {
    fontSize: SIZES.fontXs,
    lineHeight: 16,
    fontFamily: "Poppins-Regular",
  },
  h1: {
    fontSize: SIZES.h1,
    lineHeight: 48,
    color: COLORS.title,
    fontFamily: "Poppins-SemiBold",
  },
  h2: {
    fontSize: SIZES.h2,
    lineHeight: 34,
    color: COLORS.title,
    fontFamily: "Poppins-SemiBold",
  },
  h3: {
    fontSize: SIZES.h3,
    lineHeight: 28,
    color: COLORS.title,
    fontFamily: "Poppins-SemiBold",
  },
  h4: {
    fontSize: SIZES.h4,
    lineHeight: 26,
    color: COLORS.title,
    fontFamily: "Poppins-SemiBold",
  },
  h4v2: {
    fontSize: SIZES.h4,
    color: COLORS.title,
    fontFamily: "Poppins-SemiBold",
  },

  h5: {
    fontSize: SIZES.h5,
    lineHeight: 24,
    color: COLORS.title,
    fontFamily: "Poppins-SemiBold",
  },
  h6: {
    fontSize: SIZES.h6,
    lineHeight: 20,
    color: COLORS.title,
    fontFamily: "Poppins-SemiBold",
  },

  fontRegular: {fontFamily: "Poppins-Regular"},
  fontMedium: {fontFamily: "Poppins-Medium"},
  fontSemiBold: {fontFamily: "Poppins-SemiBold"},
  fontBold: {fontFamily: "Poppins-Bold"},

  //
  fontsRegular: "Poppins-Regular",
  fontsMedium: "Poppins-Medium",
  fontsSemiBold: "Poppins-SemiBold",
  fontsBold: "Poppins-Bold",
};

export const IMAGES = {
  logo: require("../assets/images/logo.png"),
  logo2: require("../assets/images/logo2.png"),
  logo3: require("../assets/images/logo3.png"),
  email: require("../assets/images/icons/email.png"),
  // pesantren
  icTopup: require("../assets/images/icons/ic_topup.png"),
  icScan: require("../assets/images/icons/ic_scan.png"),
  icDpribadi: require("../assets/images/icons/ic-data-pribadi.png"),
  icInfaq: require("../assets/images/icons/ic-Infaq.png"),
  icPembayaran: require("../assets/images/icons/ic-pembayaran.png"),
  icPengumuman: require("../assets/images/icons/ic-pengumuman.png"),
  icRiwayat: require("../assets/images/icons/ic-riwayat.png"),
  icTabungan: require("../assets/images/icons/ic-tabungan.png"),
  icUpload: require("../assets/images/icons/ic-upload.png"),
  icTarikSaldo: require("../assets/images/icons/ic-tarikSaldo.png"),
  gbrDefaultProfile: require("../assets/images/profile/default-profile.jpg"),

  // gbr
  gbrBayarBerulang: require("../assets/images/icons/gbr-pembayaran-berulang.png"),
  gbrBayarSetahun: require("../assets/images/icons/gbr-pembayaran-tahunan.png"),
  gbrBayarSukses: require("../assets/images/icons/gbr-transaksi-sukses.png"),
  gbrAnnScholl: require("../assets/images/icons/gbr-school-announc.png"),
  gbrAnnCashless: require("../assets/images/icons/gbr-cashless-announc.png"),
  gbrEmptyWallet: require("../assets/images/icons/gbr-empty_wallet.png"),

  //wallet
  icDana: require("../assets/images/icons/ic-wallet-dana.png"),
  icGopay: require("../assets/images/icons/ic-wallet-gopay.png"),
  icIsaku: require("../assets/images/icons/ic-wallet-isaku.png"),
  icOvo: require("../assets/images/icons/ic-wallet-ovo.png"),
  icShopeepay: require("../assets/images/icons/ic-wallet-shopeepay.png"),

  lock: require("../assets/images/icons/lock.png"),
  eyeopen: require("../assets/images/icons/img-5.png"),
  eyeclose: require("../assets/images/icons/eye-close.png"),
  google: require("../assets/images/icons/google.png"),
  usename: require("../assets/images/icons/usename.png"),
  home: require("../assets/images/icons/home.png"),
  search: require("../assets/images/icons/search.png"),
  reels: require("../assets/images/icons/reels.png"),
  chat: require("../assets/images/icons/chat.png"),
  chat2: require("../assets/images/icons/chat-2.png"),
  avatar: require("../assets/images/icons/avatar.png"),

  comment: require("../assets/images/icons/comment.png"),
  like: require("../assets/images/icons/like.png"),
  like2: require("../assets/images/icons/like2.png"),
  bell: require("../assets/images/icons/bell.png"),
  more: require("../assets/images/icons/more.png"),
  plus: require("../assets/images/icons/plus.png"),
  save: require("../assets/images/icons/save.png"),
  save2: require("../assets/images/icons/save-2.png"),
  search: require("../assets/images/icons/search.png"),
  share: require("../assets/images/icons/share.png"),
  share2: require("../assets/images/icons/share2.png"),
  profile: require("../assets/images/profile/profile.jpg"),
  profile2: require("../assets/images/profile/profile-2.jpg"),
  profilepic1: require("../assets/images/profile/pic-1.jpg"),
  profilepic2: require("../assets/images/profile/pic-2.jpg"),
  profilepic3: require("../assets/images/profile/pic-3.jpg"),
  profilepic4: require("../assets/images/profile/pic-4.jpg"),
  profilepic5: require("../assets/images/profile/pic-5.jpg"),
  profilepic6: require("../assets/images/profile/pic-6.jpg"),
  profilepic7: require("../assets/images/profile/pic-7.jpg"),
  profilepic8: require("../assets/images/profile/pic-8.jpg"),
  profilepic9: require("../assets/images/profile/pic-9.jpg"),
  profilepic10: require("../assets/images/profile/pic-10.jpg"),
  profilepic11: require("../assets/images/profile/pic-11.jpg"),
  profilepic12: require("../assets/images/profile/pic-12.jpg"),
  profilepic13: require("../assets/images/profile/pic-13.jpg"),
  profilepic14: require("../assets/images/profile/pic-14.jpg"),
  profilepic15: require("../assets/images/profile/pic-15.jpg"),
  profilepic16: require("../assets/images/profile/pic-16.jpg"),
  profilepic17: require("../assets/images/profile/pic-17.jpg"),
  profilepic18: require("../assets/images/profile/pic-18.jpg"),
  profilepic19: require("../assets/images/profile/pic-19.jpg"),
  profilepic20: require("../assets/images/profile/pic-20.jpg"),
  profilepic21: require("../assets/images/profile/pic-21.jpg"),
  profilepic22: require("../assets/images/profile/pic-22.jpg"),
  camera: require("../assets/images/icons/camera.png"),
  components: require("../assets/images/icons/components.png"),
  storypic1: require("../assets/images/story/story-1.jpg"),
  storypic2: require("../assets/images/story/story-2.jpg"),
  storypic3: require("../assets/images/story/story-3.jpg"),
  storypic4: require("../assets/images/story/story-4.jpg"),
  storypic5: require("../assets/images/story/story-5.jpg"),
  storypic6: require("../assets/images/story/story-6.jpg"),
  storypic7: require("../assets/images/story/story-7.jpg"),
  storypic8: require("../assets/images/story/story-8.jpg"),
  storypic9: require("../assets/images/story/story-9.jpg"),
  storypic10: require("../assets/images/story/story-10.jpg"),
  storypic11: require("../assets/images/story/story-11.jpg"),
  storypic12: require("../assets/images/story/story-12.jpg"),
  storypic13: require("../assets/images/story/story-13.jpg"),
  storypic14: require("../assets/images/story/story-14.jpg"),
  storypic15: require("../assets/images/story/story-15.jpg"),
  arrowleft: require("../assets/images/icons/arrow-left.png"),
  happy: require("../assets/images/icons/happy.png"),
  send: require("../assets/images/icons/send.png"),
  downarrow: require("../assets/images/icons/downarrow.png"),
  rigtharrow: require("../assets/images/icons/rightarrow.png"),
  verified: require("../assets/images/icons/verified.png"),
  about: require("../assets/images/icons/about.png"),
  theme: require("../assets/images/icons/theme.png"),
  logout: require("../assets/images/icons/logout.png"),
  login: require("../assets/images/icons/login.png"),
  user: require("../assets/images/icons/user.png"),
  pin: require("../assets/images/icons/pin.png"),
  cards: require("../assets/images/icons/cards.png"),
  heart2: require("../assets/images/icons/heart2.png"),
  chat2: require("../assets/images/icons/chat2.png"),

  info: require("../assets/images/icons/info.png"),
  close: require("../assets/images/icons/close.png"),
  downaeeowsmall: require("../assets/images/icons/downaeeowsmall.png"),
  close2: require("../assets/images/icons/close2.png"),
  copylink: require("../assets/images/icons/copy.png"),
  write: require("../assets/images/icons/write.png"),
  write2: require("../assets/images/icons/write2.png"),
  call: require("../assets/images/icons/call.png"),
  video: require("../assets/images/icons/video.png"),
  videocall: require("../assets/images/story/videocall.jpg"),
  videocall2: require("../assets/images/story/videocall2.jpg"),
  phone: require("../assets/images/icons/phone.png"),
  audio: require("../assets/images/icons/audio.png"),
  audiomute: require("../assets/images/icons/audiomute.png"),
  volume: require("../assets/images/icons/volume.png"),
  zoom: require("../assets/images/icons/zoom.png"),
  block: require("../assets/images/icons/block.png"),
  delete: require("../assets/images/icons/delete.png"),
  cricle: require("../assets/images/icons/cricle.png"),
  music: require("../assets/images/icons/music.png"),
  profilebackground: require("../assets/images/profile/profilebackground.jpg"),
  setting: require("../assets/images/icons/setting.png"),
  profilepic: require("../assets/images/icons/profilepic.png"),
  musicpic: require("../assets/images/profile/musicpic.jpg"),
  play: require("../assets/images/icons/play.png"),
  pause: require("../assets/images/icons/pause.png"),
  volume: require("../assets/images/icons/volume.png"),
  volumemute: require("../assets/images/icons/volumemute.png"),
  check: require("../assets/images/icons/check.png"),
  text: require("../assets/images/icons/text.png"),
  sticker: require("../assets/images/icons/sticker.png"),
  effect: require("../assets/images/icons/effect.png"),
  smallpic1: require("../assets/images/small/small-1.jpg"),
  smallpic2: require("../assets/images/small/small-2.jpg"),
  smallpic3: require("../assets/images/small/small-3.jpg"),
  smallpic4: require("../assets/images/small/small-4.jpg"),
  smallpic5: require("../assets/images/small/small-5.jpg"),
  smallpic6: require("../assets/images/small/small-6.jpg"),
  smallpic7: require("../assets/images/small/small-7.jpg"),
  smallpic8: require("../assets/images/small/small-8.jpg"),
  smallpic9: require("../assets/images/small/small-9.jpg"),
  smallpic10: require("../assets/images/small/small-10.jpg"),
  smallpic11: require("../assets/images/small/small-11.jpg"),

  // mulai
  slderPic1: require("../assets/images/slider/pic1.png"),
  slderPic2: require("../assets/images/slider/pic2.png"),
  slderPic3: require("../assets/images/slider/pic3.png"),
  slderPic4: require("../assets/images/slider/pic4.png"),
  slderPic5: require("../assets/images/slider/pic5.png"),
  likedPic1: require("../assets/images/liked/pic1.png"),
  likedPic2: require("../assets/images/liked/pic2.png"),
  likedPic3: require("../assets/images/liked/pic3.png"),
  likedPic4: require("../assets/images/liked/pic4.png"),
  likedPic5: require("../assets/images/liked/pic5.png"),
  likedPic6: require("../assets/images/liked/pic6.png"),
  star: require("../assets/images/icons/star.png"),

  // riwayat
  shop: require("../assets/images/icons/ic_shop.png"),
};

export const VIDEO = {
  video1: require("../assets/video/video1.mp4"),
  video2: require("../assets/video/video2.mp4"),
  video3: require("../assets/video/video3.mp4"),
  video4: require("../assets/video/video4.mp4"),
};

const appTheme = {COLORS, SIZES, FONTS, IMAGES, VIDEO};

export default appTheme;
