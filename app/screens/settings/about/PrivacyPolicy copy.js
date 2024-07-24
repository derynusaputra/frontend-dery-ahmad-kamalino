import React from "react";
import {View, Text, SafeAreaView} from "react-native";
import {GlobalStyleSheet} from "../../../constants/styleSheet";
import {COLORS, FONTS} from "../../../constants/theme";
import Header from "../../../layout/Header";
import {useTheme} from "@react-navigation/native";
import {ScrollView} from "react-native-gesture-handler";
import Headers from "../../../layout/Headers";

const PrivacyPolicy = () => {
  const theme = useTheme();
  const {colors} = theme;

  return (
    <SafeAreaView style={{backgroundColor: colors.white, flex: 1}}>
      <Headers
        title={"Privacy Policy"}
        backgroundColor={colors?.white}
        icColor={colors?.green}
      />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: colors?.white,
        }}
      >
        <View style={GlobalStyleSheet.container}>
          <Text
            style={[
              GlobalStyleSheet.textfont,
              {fontSize: 14, marginTop: 20, color: colors.black},
            ]}
          >
            Kebijakan Privasi Aplikasi Al-Musyarrofah
          </Text>
          <Text
            style={[
              GlobalStyleSheet.textfont,
              {fontSize: 10, marginTop: 5, color: colors.grey},
            ]}
          >
            Terakhir diperbarui: 01 Juni 2024
          </Text>
          <Text
            style={[
              GlobalStyleSheet.textfont,
              {fontSize: 12, marginTop: 10, color: colors.black},
            ]}
          >
            Pendahuluan
          </Text>
          <Text
            style={[
              GlobalStyleSheet.textfont,
              GlobalStyleSheet.titlefont3,
              {fontSize: 10, color: colors.black, marginTop: 10},
            ]}
          >
            Selamat datang di Al-Musyarrofah. Kami berkomitmen untuk melindungi
            dan menghormati privasi Anda. Kebijakan Privasi ini menjelaskan
            bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi
            pribadi Anda dalam penggunaan aplikasi monitoring saldo anak sekolah
            Al-Musyarrofah.
          </Text>

          <Text
            style={[
              GlobalStyleSheet.textfont,
              {fontSize: 12, marginTop: 10, color: colors.black},
            ]}
          >
            Informasi yang Kami Kumpulkan
          </Text>
          <Text
            style={[
              GlobalStyleSheet.textfont,
              {fontSize: 10, marginTop: 5, color: colors.grey},
            ]}
          >
            Kami dapat mengumpulkan dan memproses informasi berikut:
          </Text>
          <Text
            style={[
              GlobalStyleSheet.textfont,
              GlobalStyleSheet.titlefont3,
              {fontSize: 10, color: colors.black, marginTop: 10},
            ]}
          >
            {
              "1. Informasi Pribadi Anak dan Orang Tua/Wali: \n- Nama lengkap \n- Nomor telepon \n- Alamat email \n- Informasi saldo dan transaksi"
            }
          </Text>
          <Text
            style={[
              GlobalStyleSheet.textfont,
              GlobalStyleSheet.titlefont3,
              {fontSize: 10, color: colors.black, marginTop: 10},
            ]}
          >
            {
              "2.	Informasi Teknis: \n- Alamat IP \n-	Jenis perangkat yang digunakan \n-	Versi aplikasi \n-	Data log"
            }
          </Text>
          <Text
            style={[
              GlobalStyleSheet.textfont,
              {fontSize: 12, marginTop: 10, color: colors.black},
            ]}
          >
            Penggunaan Informasi
          </Text>
          <Text
            style={[
              GlobalStyleSheet.textfont,
              {fontSize: 10, marginTop: 5, color: colors.grey},
            ]}
          >
            Kami menggunakan informasi yang dikumpulkan untuk tujuan berikut:
          </Text>

          <Text
            style={[
              GlobalStyleSheet.textfont,
              GlobalStyleSheet.titlefont3,
              {fontSize: 10, color: colors.black, marginTop: 10},
            ]}
          >
            {
              "1.	Penyediaan Layanan: \n-	Memantau saldo dan transaksi anak sekolah.\n-	Memberikan laporan dan notifikasi kepada orang tua/wali."
            }
          </Text>
          <Text
            style={[
              GlobalStyleSheet.textfont,
              GlobalStyleSheet.titlefont3,
              {fontSize: 10, color: colors.black, marginTop: 10},
            ]}
          >
            {
              "2.	Pengembangan dan Peningkatan Aplikasi:\n-	Menganalisis data penggunaan untuk memperbaiki kinerja dan fitur aplikasi.\n-	Mengidentifikasi dan memperbaiki bug."
            }
          </Text>
          <Text
            style={[
              GlobalStyleSheet.textfont,
              GlobalStyleSheet.titlefont3,
              {fontSize: 10, color: colors.black, marginTop: 10},
            ]}
          >
            {
              "3.	Komunikasi:\n-	Mengirimkan pembaruan dan informasi terkait layanan.\n-	Menanggapi pertanyaan atau permintaan bantuan dari pengguna."
            }
          </Text>

          <Text
            style={[
              GlobalStyleSheet.textfont,
              {fontSize: 12, marginTop: 10, color: colors.black},
            ]}
          >
            Perlindungan Informasi
          </Text>
          <Text
            style={[
              GlobalStyleSheet.textfont,
              {fontSize: 10, marginTop: 5, color: colors.grey},
            ]}
          >
            Kami mengambil langkah-langkah yang wajar untuk melindungi informasi
            pribadi Anda dari akses, penggunaan, atau pengungkapan yang tidak
            sah. Ini termasuk, tetapi tidak terbatas pada:
          </Text>
          <Text
            style={[
              GlobalStyleSheet.textfont,
              GlobalStyleSheet.titlefont3,
              {fontSize: 10, color: colors.black, marginTop: 10},
            ]}
          >
            {
              "•	Enkripsi data saat transmisi\n•	Penyimpanan data dalam server yang aman\n•	Pembatasan akses ke informasi pribadi hanya untuk staf yang membutuhkan"
            }
          </Text>

          <Text
            style={[
              GlobalStyleSheet.textfont,
              {fontSize: 12, marginTop: 10, color: colors.black},
            ]}
          >
            Pengungkapan Informasi
          </Text>
          <Text
            style={[
              GlobalStyleSheet.textfont,
              {fontSize: 10, marginTop: 5, color: colors.grey},
            ]}
          >
            Kami tidak akan menjual, memperdagangkan, atau mentransfer informasi
            pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, kecuali
            dalam kasus berikut:
          </Text>

          <Text
            style={[
              GlobalStyleSheet.textfont,
              GlobalStyleSheet.titlefont3,
              {fontSize: 10, color: colors.black, marginTop: 10},
            ]}
          >
            {
              "1.	Kewajiban Hukum:\n-	Jika diwajibkan oleh hukum atau perintah pengadilan."
            }
          </Text>
          <Text
            style={[
              GlobalStyleSheet.textfont,
              GlobalStyleSheet.titlefont3,
              {fontSize: 10, color: colors.black, marginTop: 10},
            ]}
          >
            {
              "2. Penyedia Layanan Pihak Ketiga:\n-	Untuk memfasilitasi layanan aplikasi, seperti penyimpanan data atau pengiriman notifikasi."
            }
          </Text>

          <Text
            style={[
              GlobalStyleSheet.textfont,
              {fontSize: 12, marginTop: 10, color: colors.black},
            ]}
          >
            Hak Anda
          </Text>
          <Text
            style={[
              GlobalStyleSheet.textfont,
              {fontSize: 10, marginTop: 5, color: colors.grey},
            ]}
          >
            Anda memiliki hak untuk:
          </Text>
          <Text
            style={[
              GlobalStyleSheet.textfont,
              GlobalStyleSheet.titlefont3,
              {fontSize: 10, color: colors.black, marginTop: 10},
            ]}
          >
            {
              "•	Mengakses dan memperbarui informasi pribadi Anda.\n•	Meminta penghapusan data pribadi Anda.\n•	Menarik persetujuan penggunaan data Anda kapan saja."
            }
          </Text>
          <Text
            style={[
              GlobalStyleSheet.textfont,
              {fontSize: 10, marginTop: 5, color: colors.grey},
            ]}
          >
            Untuk menggunakan hak-hak ini, Anda dapat menghubungi kami melalui
            informasi kontak yang disediakan di bawah ini.
          </Text>
          <Text
            style={[
              GlobalStyleSheet.textfont,
              {fontSize: 12, marginTop: 10, color: colors.black},
            ]}
          >
            Perubahan Kebijakan Privasi
          </Text>
          <Text
            style={[
              GlobalStyleSheet.textfont,
              {fontSize: 10, marginTop: 5, color: colors.grey},
            ]}
          >
            Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu.
            Setiap perubahan akan diberitahukan melalui aplikasi atau email.
            Harap tinjau Kebijakan Privasi ini secara berkala untuk memastikan
            Anda mengetahui perubahan apa pun.
          </Text>

          <Text
            style={[
              GlobalStyleSheet.textfont,
              {fontSize: 12, marginTop: 10, color: colors.black},
            ]}
          >
            Hubungi Kami
          </Text>
          <Text
            style={[
              GlobalStyleSheet.textfont,
              {fontSize: 10, marginTop: 5, color: colors.grey},
            ]}
          >
            Jika Anda memiliki pertanyaan atau kekhawatiran tentang Kebijakan
            Privasi ini, silakan hubungi kami di:
          </Text>
          <Text
            style={[
              GlobalStyleSheet.textfont,
              {fontSize: 10, marginTop: 5, color: colors.grey},
            ]}
          >
            {
              "• Email: my.itmerdeka@gmail.com\n• Telepon: 085155100613\n• Alamat: Jl. H. Hasbi Jl. Otista Raya No.1/3A, Bidara Cina, Kecamatan Jatinegara, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13330 – Indonesia"
            }
          </Text>
          <Text
            style={[
              GlobalStyleSheet.textfont,
              {fontSize: 10, marginTop: 5, color: colors.grey},
            ]}
          >
            Terima kasih telah menggunakan aplikasi Al-Musyarrofah. Kami
            berkomitmen untuk melindungi privasi Anda dan memberikan layanan
            terbaik bagi Anda dan anak-anak Anda.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PrivacyPolicy;
