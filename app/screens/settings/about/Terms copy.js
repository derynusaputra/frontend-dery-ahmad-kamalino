import React from "react";
import {View, Text, SafeAreaView, ScrollView} from "react-native";
import {GlobalStyleSheet} from "../../../constants/styleSheet";
import {COLORS, FONTS} from "../../../constants/theme";
import Header from "../../../layout/Header";
import {useTheme} from "@react-navigation/native";
import Headers from "../../../layout/Headers";
import {termOfUsData} from "./dummyData";

const Terms = () => {
  const theme = useTheme();
  const {colors} = theme;

  return (
    <SafeAreaView style={{backgroundColor: colors.white, flex: 1}}>
      <Headers
        title={"Terms of Use"}
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
            Ketentuan Penggunaan Aplikasi Al-Musyarrofah
          </Text>

          <Text
            style={[
              GlobalStyleSheet.textfont,
              {fontSize: 10, marginTop: 5, color: colors.grey},
            ]}
          >
            Selamat datang di aplikasi Al-Musyarrofah. Dengan mengakses dan
            menggunakan aplikasi ini, Anda setuju untuk mematuhi dan terikat
            oleh ketentuan penggunaan berikut. Jika Anda tidak setuju dengan
            ketentuan ini, harap jangan gunakan aplikasi ini.
          </Text>

          <Text
            style={[
              GlobalStyleSheet.textfont,
              {fontSize: 12, marginTop: 10, color: colors.black},
            ]}
          >
            1. Definisi
          </Text>

          <Text
            style={[
              GlobalStyleSheet.textfont,
              GlobalStyleSheet.titlefont3,
              {fontSize: 10, color: colors.black, marginTop: 5},
            ]}
          >
            {
              "•	Aplikasi: Aplikasi Al-Musyarrofah, yaitu aplikasi monitoring saldo anak sekolah.\n•	Pengguna: Orang tua, wali, siswa, dan pihak sekolah yang menggunakan aplikasi ini.\n•	Layanan: Fitur dan layanan yang disediakan oleh aplikasi Al-Musyarrofah untuk memonitor saldo anak sekolah."
            }
          </Text>
          <Text
            style={[
              GlobalStyleSheet.textfont,
              {fontSize: 12, marginTop: 10, color: colors.black},
            ]}
          >
            2. Pendaftaran Pengguna
          </Text>

          <Text
            style={[
              GlobalStyleSheet.textfont,
              GlobalStyleSheet.titlefont3,
              {fontSize: 10, color: colors.black, marginTop: 5},
            ]}
          >
            {
              "•	Pengguna diwajibkan untuk mendaftar dengan memberikan informasi yang akurat dan lengkap.\n•	Pengguna bertanggung jawab untuk menjaga kerahasiaan informasi akun mereka."
            }
          </Text>
          <Text
            style={[
              GlobalStyleSheet.textfont,
              {fontSize: 12, marginTop: 10, color: colors.black},
            ]}
          >
            3. Penggunaan Aplikasi
          </Text>

          <Text
            style={[
              GlobalStyleSheet.textfont,
              GlobalStyleSheet.titlefont3,
              {fontSize: 10, color: colors.black, marginTop: 5},
            ]}
          >
            {
              "•	Aplikasi ini hanya boleh digunakan untuk tujuan monitoring saldo anak sekolah.\n•	Pengguna tidak diperbolehkan menggunakan aplikasi ini untuk tujuan yang melanggar hukum atau merugikan pihak lain.\n•	Pengguna bertanggung jawab penuh atas aktivitas yang dilakukan melalui akun mereka."
            }
          </Text>

          <Text
            style={[
              GlobalStyleSheet.textfont,
              {fontSize: 12, marginTop: 10, color: colors.black},
            ]}
          >
            4. Data dan Privasi
          </Text>

          <Text
            style={[
              GlobalStyleSheet.textfont,
              GlobalStyleSheet.titlefont3,
              {fontSize: 10, color: colors.black, marginTop: 5},
            ]}
          >
            {
              "•	Kami menghormati privasi Anda dan berkomitmen untuk melindungi informasi pribadi Anda.\n•	Data yang dikumpulkan melalui aplikasi ini akan digunakan sesuai dengan kebijakan privasi kami."
            }
          </Text>
          <Text
            style={[
              GlobalStyleSheet.textfont,
              {fontSize: 12, marginTop: 10, color: colors.black},
            ]}
          >
            5. Pembaruan dan Perubahan
          </Text>

          <Text
            style={[
              GlobalStyleSheet.textfont,
              GlobalStyleSheet.titlefont3,
              {fontSize: 10, color: colors.black, marginTop: 5},
            ]}
          >
            {
              "•	Kami berhak untuk mengubah atau memperbarui ketentuan penggunaan ini kapan saja tanpa pemberitahuan sebelumnya.\n•	Pengguna diharapkan untuk memeriksa ketentuan penggunaan ini secara berkala."
            }
          </Text>
          <Text
            style={[
              GlobalStyleSheet.textfont,
              {fontSize: 12, marginTop: 10, color: colors.black},
            ]}
          >
            6. Pembatasan Tanggung Jawab
          </Text>

          <Text
            style={[
              GlobalStyleSheet.textfont,
              GlobalStyleSheet.titlefont3,
              {fontSize: 10, color: colors.black, marginTop: 5},
            ]}
          >
            {
              "•	Kami tidak bertanggung jawab atas kerugian atau kerusakan yang timbul dari penggunaan aplikasi ini.\n•	Pengguna setuju untuk menggunakan aplikasi ini dengan risiko sendiri."
            }
          </Text>
          <Text
            style={[
              GlobalStyleSheet.textfont,
              {fontSize: 12, marginTop: 10, color: colors.black},
            ]}
          >
            7. Penghentian Layanan
          </Text>

          <Text
            style={[
              GlobalStyleSheet.textfont,
              GlobalStyleSheet.titlefont3,
              {fontSize: 10, color: colors.black, marginTop: 5},
            ]}
          >
            {
              "•	Kami berhak untuk menghentikan akses pengguna ke aplikasi ini kapan saja, tanpa pemberitahuan sebelumnya, jika pengguna melanggar ketentuan penggunaan ini."
            }
          </Text>
          <Text
            style={[
              GlobalStyleSheet.textfont,
              {fontSize: 12, marginTop: 10, color: colors.black},
            ]}
          >
            8. Hukum yang Berlaku
          </Text>

          <Text
            style={[
              GlobalStyleSheet.textfont,
              GlobalStyleSheet.titlefont3,
              {fontSize: 10, color: colors.black, marginTop: 5},
            ]}
          >
            {
              "• Ketentuan penggunaan ini diatur oleh dan ditafsirkan sesuai dengan hukum yang berlaku di Indonesia."
            }
          </Text>
          <Text
            style={[
              GlobalStyleSheet.textfont,
              {fontSize: 10, marginTop: 5, color: colors.grey},
            ]}
          >
            Dengan menggunakan aplikasi Al-Musyarrofah, Anda mengakui bahwa Anda
            telah membaca, memahami, dan setuju untuk terikat oleh ketentuan
            penggunaan ini.
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
            Jika Anda memiliki pertanyaan atau kekhawatiran mengenai ketentuan
            penggunaan ini, silakan hubungi kami di my.itmerdeka@gmail.com
          </Text>
          <Text
            style={[
              GlobalStyleSheet.textfont,
              {fontSize: 10, marginTop: 5, color: colors.grey},
            ]}
          >
            Terima kasih telah menggunakan aplikasi Al-Musyarrofah.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Terms;
