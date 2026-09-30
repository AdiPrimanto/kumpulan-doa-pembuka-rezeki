// ---------- Data ----------
// Bagian { q: [surat, dari, sampai] } diambil dari API equran.id (teks & terjemahan Kemenag).
// Bagian statis dipakai untuk doa dari hadits/atsar yang bukan satu ayat utuh.

const QARI = {
  '05': 'Misyari Rasyid Al-Afasi',
  '01': 'Abdullah Al-Juhany',
  '02': 'Abdul Muhsin Al-Qasim',
  '03': 'Abdurrahman as-Sudais',
  '04': 'Ibrahim Al-Dossari',
  '06': 'Yasser Al-Dosari',
};

const DOA = [
  {
    id: 'waqiah', kind: 'surah', hue: 'turquoise', arab: 'الواقعة',
    title: 'Surah Al-Waqi‘ah', meta: 'QS 56 · 96 ayat',
    desc: 'Surah yang masyhur dibaca tiap malam sebagai ikhtiar agar dijauhkan dari kefakiran.',
    fadhilah: 'Ibnu Mas‘ud meriwayatkan: “Barangsiapa membaca surah Al-Waqi‘ah setiap malam, ia tidak akan ditimpa kefakiran selamanya.” (HR. Al-Baihaqi dalam Syu‘abul Iman). Sebagian ulama menilai sanadnya lemah, namun membacanya tetap bernilai ibadah membaca Al-Qur’an.',
    bismillah: true, parts: [{ q: [56, 1, 96] }],
  },
  {
    id: 'rahman', kind: 'surah', hue: 'rose', arab: 'الرحمن',
    title: 'Surah Ar-Rahman', meta: 'QS 55 · 78 ayat',
    desc: 'Mengajak mensyukuri nikmat Allah yang tak terhitung: “Maka nikmat Tuhanmu yang manakah yang kamu dustakan?”',
    fadhilah: 'Ayat “Fa bi’ayyi ālā’i rabbikumā tukażżibān” diulang 31 kali, mengingatkan betapa banyak nikmat yang sudah diterima. Syukur adalah kunci bertambahnya nikmat (QS. Ibrahim: 7).',
    bismillah: true, parts: [{ q: [55, 1, 78] }],
  },
  {
    id: 'mulk', kind: 'surah', hue: 'blue', arab: 'الملك',
    title: 'Surah Al-Mulk', meta: 'QS 67 · 30 ayat',
    desc: 'Surah penjaga dari azab kubur. Ayat 15 memerintahkan berjalan di muka bumi dan makan dari rezeki-Nya.',
    fadhilah: 'Rasulullah ﷺ bersabda: “Ada satu surah dalam Al-Qur’an sebanyak tiga puluh ayat yang memberi syafaat bagi pembacanya hingga ia diampuni, yaitu Tabārakal-lażī biyadihil-mulk.” (HR. Tirmidzi no. 2891, dinilai hasan).',
    bismillah: true, parts: [{ q: [67, 1, 30] }],
  },
  {
    id: 'seribu-dinar', kind: 'ayat', hue: 'amber', arab: 'الطلاق ٢–٣',
    title: 'Ayat seribu dinar', meta: 'QS At-Talaq: 2–3',
    desc: 'Janji Allah: siapa yang bertakwa akan diberi jalan keluar dan rezeki dari arah yang tidak disangka.',
    fadhilah: 'Dikenal sebagai “ayat seribu dinar” dari kisah yang populer di tengah masyarakat. Keutamaan utamanya ada pada isi ayat itu sendiri: takwa dan tawakal adalah sebab datangnya jalan keluar dan kecukupan rezeki.',
    parts: [{ q: [65, 2, 3] }],
  },
  {
    id: 'yunus', kind: 'ayat', hue: 'plum', arab: 'دعاء ذي النون',
    title: 'Doa Nabi Yunus', meta: 'QS Al-Anbiya: 87–88',
    desc: 'Doa Nabi Yunus di perut ikan: “Lā ilāha illā anta subḥānaka innī kuntu minaẓ-ẓālimīn.”',
    fadhilah: 'Rasulullah ﷺ bersabda: “Doa Dzun Nun ketika berada di perut ikan: Lā ilāha illā anta subḥānaka innī kuntu minaẓ-ẓālimīn. Tidaklah seorang muslim berdoa dengannya dalam suatu urusan, melainkan Allah mengabulkan doanya.” (HR. Tirmidzi no. 3505).',
    parts: [{ q: [21, 87, 88] }],
  },
  {
    id: 'hasbunallah', kind: 'doa', hue: 'emerald', arab: 'حسبنا الله',
    title: 'Hasbunallah wa ni‘mal wakil', meta: 'Dzikir tawakal',
    desc: 'Kalimat penyerahan diri: cukuplah Allah sebagai penolong, pelindung, dan tempat bersandar.',
    fadhilah: 'Ibnu ‘Abbas berkata: “Ḥasbunallāhu wa ni‘mal-wakīl” diucapkan Nabi Ibrahim saat dilemparkan ke dalam api, dan diucapkan Nabi Muhammad ﷺ ketika dikatakan kepadanya bahwa musuh telah berkumpul. (HR. Bukhari no. 4563).',
    parts: [{
      label: 'Gabungan QS. Ali ‘Imran: 173 dan QS. Al-Anfal: 40', count: 33,
      arab: 'حَسْبُنَا اللّٰهُ وَنِعْمَ الْوَكِيْلُ، نِعْمَ الْمَوْلٰى وَنِعْمَ النَّصِيْرُ',
      latin: 'Ḥasbunallāhu wa ni‘mal-wakīl, ni‘mal-maulā wa ni‘man-naṣīr.',
      arti: 'Cukuplah Allah (menjadi penolong) bagi kami dan Dia sebaik-baik pelindung, sebaik-baik pelindung dan sebaik-baik penolong.',
    }],
  },
  {
    id: 'sapu-jagat', kind: 'ayat', hue: 'coral', arab: 'ربنا آتنا',
    title: 'Doa sapu jagat', meta: 'QS Al-Baqarah: 201',
    desc: 'Doa ringkas memohon kebaikan dunia dan akhirat serta perlindungan dari api neraka.',
    fadhilah: 'Anas bin Malik berkata: “Doa yang paling sering dipanjatkan Nabi ﷺ adalah: Allāhumma rabbanā ātinā fid-dun-yā ḥasanah, wa fil-ākhirati ḥasanah, wa qinā ‘ażāban-nār.” (HR. Bukhari no. 6389 dan Muslim no. 2690).',
    parts: [{ q: [2, 201, 201] }],
  },
  {
    id: 'baqarah-akhir', kind: 'ayat', hue: 'turquoise', arab: 'آمن الرسول',
    title: '2 ayat terakhir Al-Baqarah', meta: 'QS Al-Baqarah: 285–286',
    desc: 'Dua ayat penutup Al-Baqarah yang mencukupi pembacanya di malam hari.',
    fadhilah: 'Rasulullah ﷺ bersabda: “Barangsiapa membaca dua ayat terakhir dari surah Al-Baqarah pada malam hari, maka keduanya telah mencukupinya.” (HR. Bukhari no. 5009 dan Muslim no. 807).',
    parts: [{ q: [2, 285, 286] }],
  },
  {
    id: 'kursi', kind: 'ayat', hue: 'amber', arab: 'آية الكرسي',
    title: 'Ayat Kursi', meta: 'QS Al-Baqarah: 255',
    desc: 'Ayat paling agung dalam Al-Qur’an. Dibaca setelah shalat dan sebelum tidur sebagai perlindungan.',
    fadhilah: 'Rasulullah ﷺ bertanya kepada Ubay bin Ka‘b ayat apa yang paling agung dalam Kitabullah, lalu Ubay menjawab Ayat Kursi, dan beliau membenarkannya (HR. Muslim no. 810). Siapa membacanya ketika hendak tidur, ia senantiasa dijaga Allah dan setan tidak akan mendekatinya hingga pagi (HR. Bukhari no. 2311). Siapa membacanya setiap selesai shalat wajib, tidak ada yang menghalanginya masuk surga selain kematian (HR. An-Nasa’i dalam As-Sunan Al-Kubra no. 9848).',
    parts: [{ q: [2, 255, 255] }],
  },
  {
    id: 'ubun-ubun', kind: 'doa', hue: 'rose', arab: 'خيرها',
    title: 'Doa memegang ubun-ubun istri', meta: 'HR. Abu Dawud no. 2160',
    desc: 'Dibaca suami sambil memegang ubun-ubun istri, memohon kebaikan dan keberkahan rumah tangga.',
    fadhilah: 'Rasulullah ﷺ bersabda: “Apabila salah seorang dari kalian menikahi seorang wanita, hendaklah ia memegang ubun-ubunnya, menyebut nama Allah, dan memohon keberkahan.” (HR. Abu Dawud no. 2160, Ibnu Majah no. 1918). Pernikahan juga termasuk pintu rezeki (QS. An-Nur: 32).',
    parts: [{
      label: 'HR. Abu Dawud no. 2160 · awali dengan Bismillah',
      arab: 'اَللّٰهُمَّ إِنِّيْ أَسْأَلُكَ خَيْرَهَا وَخَيْرَ مَا جَبَلْتَهَا عَلَيْهِ، وَأَعُوْذُ بِكَ مِنْ شَرِّهَا وَشَرِّ مَا جَبَلْتَهَا عَلَيْهِ',
      latin: 'Allāhumma innī as’aluka khairahā wa khaira mā jabaltahā ‘alaih, wa a‘ūżu bika min syarrihā wa syarri mā jabaltahā ‘alaih.',
      arti: 'Ya Allah, sesungguhnya aku memohon kepada-Mu kebaikannya dan kebaikan tabiat yang Engkau ciptakan padanya, dan aku berlindung kepada-Mu dari keburukannya dan keburukan tabiat yang Engkau ciptakan padanya.',
    }],
  },
  {
    id: 'takdir', kind: 'doa', hue: 'blue', arab: 'يمحو الله',
    title: 'Doa merubah takdir', meta: 'Atsar Umar bin Khattab',
    desc: 'Memohon agar ketetapan buruk dihapus dan diganti dengan kebahagiaan, berlandaskan QS. Ar-Ra‘d: 39.',
    fadhilah: 'Rasulullah ﷺ bersabda: “Tidak ada yang dapat menolak takdir kecuali doa.” (HR. Tirmidzi no. 2139, dinilai hasan). Lafaz doa di bawah adalah atsar yang dinisbatkan kepada Umar bin Khattab (diriwayatkan Ath-Thabari dalam tafsir QS. Ar-Ra‘d: 39); para ulama memperselisihkan kekuatan sanadnya.',
    parts: [
      {
        label: 'Atsar Umar bin Khattab',
        arab: 'اَللّٰهُمَّ إِنْ كُنْتَ كَتَبْتَنِيْ فِيْ أَهْلِ الشَّقَاوَةِ فَامْحُنِيْ وَأَثْبِتْنِيْ فِيْ أَهْلِ السَّعَادَةِ، فَإِنَّكَ تَمْحُوْ مَا تَشَاءُ وَتُثْبِتُ وَعِنْدَكَ أُمُّ الْكِتَابِ',
        latin: 'Allāhumma in kunta katabtanī fī ahlisy-syaqāwati famḥunī wa aṡbitnī fī ahlis-sa‘ādah, fa innaka tamḥū mā tasyā’u wa tuṡbitu wa ‘indaka ummul-kitāb.',
        arti: 'Ya Allah, jika Engkau telah menetapkan aku termasuk golongan orang yang celaka, maka hapuslah dan tetapkanlah aku termasuk golongan orang yang bahagia. Sesungguhnya Engkau menghapus apa yang Engkau kehendaki dan menetapkan (apa yang Engkau kehendaki), dan di sisi-Mu terdapat Ummul Kitab.',
      },
      { q: [13, 39, 39] },
    ],
  },
  {
    id: 'ilmu-rezeki-amal', kind: 'doa', hue: 'emerald', arab: 'علما نافعا',
    title: 'Doa ilmu, rezeki, dan amal', meta: 'HR. Ibnu Majah no. 925',
    desc: 'Memohon ilmu yang bermanfaat, rezeki yang baik, dan amal yang diterima. Dibaca Nabi ﷺ setelah salam shalat Subuh.',
    fadhilah: 'Ummu Salamah meriwayatkan bahwa Nabi ﷺ setelah salam shalat Subuh membaca doa ini. (HR. Ibnu Majah no. 925, dinilai shahih oleh Syaikh Al-Albani).',
    parts: [{
      label: 'HR. Ibnu Majah no. 925 · setelah shalat Subuh',
      arab: 'اَللّٰهُمَّ إِنِّيْ أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا',
      latin: 'Allāhumma innī as’aluka ‘ilman nāfi‘ā, wa rizqan ṭayyibā, wa ‘amalan mutaqabbalā.',
      arti: 'Ya Allah, sesungguhnya aku memohon kepada-Mu ilmu yang bermanfaat, rezeki yang baik, dan amal yang diterima.',
    }],
  },
  {
    id: 'urusan', kind: 'ayat', hue: 'plum', arab: 'رب اشرح لي',
    title: 'Doa kelancaran urusan', meta: 'QS Taha: 25–28',
    desc: 'Doa Nabi Musa memohon kelapangan dada, kemudahan urusan, dan kefasihan lisan.',
    fadhilah: 'Doa yang dipanjatkan Nabi Musa ketika diperintahkan Allah menghadap Fir‘aun (QS. Taha: 24–28), lalu Allah mengabulkannya: “Sungguh, telah diperkenankan permintaanmu, wahai Musa.” (QS. Taha: 36). Cocok dibaca sebelum bekerja, belajar, presentasi, atau menghadapi urusan penting.',
    parts: [{ q: [20, 25, 28] }],
  },
  {
    id: 'yusra', kind: 'ayat', hue: 'coral', arab: 'إن مع العسر يسرا',
    title: 'Fa inna ma‘al-‘usri yusrā', meta: 'QS Al-Insyirah: 5–6',
    desc: 'Janji Allah yang diulang dua kali: bersama kesulitan pasti ada kemudahan.',
    fadhilah: 'Ayat ini turun untuk menghibur Nabi ﷺ di masa-masa sulit dakwah. Kata “al-‘usr” (kesulitan) disebut dengan kata sandang yang sama, sedangkan “yusrā” (kemudahan) disebut tanpa kata sandang, sehingga para mufassir menjelaskan: satu kesulitan tidak akan mengalahkan dua kemudahan.',
    parts: [{ q: [94, 5, 6] }],
  },
  {
    id: 'ikfini', kind: 'doa', hue: 'amber', arab: 'اكفني بحلالك',
    title: 'Doa kecukupan rezeki halal', meta: 'HR. Tirmidzi no. 3563',
    desc: 'Memohon dicukupkan dengan yang halal, dijauhkan dari yang haram, dan tidak bergantung kepada selain Allah.',
    fadhilah: 'Ali bin Abi Thalib mengajarkan doa ini kepada seseorang yang terlilit utang, seraya berkata: “Maukah aku ajarkan kalimat yang diajarkan Rasulullah ﷺ kepadaku? Seandainya engkau memiliki utang sebesar gunung, niscaya Allah akan melunasinya.” (HR. Tirmidzi no. 3563, dinilai hasan).',
    parts: [{
      label: 'HR. Tirmidzi no. 3563',
      arab: 'اَللّٰهُمَّ اكْفِنِيْ بِحَلَالِكَ عَنْ حَرَامِكَ، وَأَغْنِنِيْ بِفَضْلِكَ عَمَّنْ سِوَاكَ',
      latin: 'Allāhummakfinī bi ḥalālika ‘an ḥarāmik, wa agninī bi faḍlika ‘amman siwāk.',
      arti: 'Ya Allah, cukupkanlah aku dengan yang halal dari-Mu sehingga terhindar dari yang haram, dan jadikanlah aku kaya dengan karunia-Mu sehingga tidak bergantung kepada selain-Mu.',
    }],
  },
  {
    id: 'kemudahan-rezeki', kind: 'doa', hue: 'turquoise', arab: 'رزقا حلالا',
    title: 'Doa kemudahan meraih rezeki', meta: 'Doa masyhur para ulama',
    desc: 'Memohon rezeki yang halal, luas, dan baik, yang didapat tanpa letih dan tanpa mudarat.',
    fadhilah: 'Doa ini masyhur diamalkan dan diajarkan para ulama, namun lafaznya tidak bersumber dari hadits tertentu. Boleh diamalkan sebagai doa umum, karena isinya adalah permohonan kebaikan yang dibenarkan syariat.',
    parts: [{
      label: 'Doa masyhur para ulama',
      arab: 'اَللّٰهُمَّ إِنِّيْ أَسْأَلُكَ أَنْ تَرْزُقَنِيْ رِزْقًا حَلَالًا وَاسِعًا طَيِّبًا مِنْ غَيْرِ تَعَبٍ وَلَا مَشَقَّةٍ وَلَا ضَيْرٍ وَلَا نَصَبٍ، إِنَّكَ عَلٰى كُلِّ شَيْءٍ قَدِيْرٌ',
      latin: 'Allāhumma innī as’aluka an tarzuqanī rizqan ḥalālan wāsi‘an ṭayyiban min gairi ta‘abin wa lā masyaqqatin wa lā ḍairin wa lā naṣabin, innaka ‘alā kulli syai’in qadīr.',
      arti: 'Ya Allah, aku memohon kepada-Mu limpahan rezeki yang halal, luas, dan baik, yang didapat tanpa letih, tanpa memberatkan, tanpa membahayakan, dan tanpa banting tulang. Sungguh Engkau Mahakuasa atas segala sesuatu.',
    }],
  },
  {
    id: 'dzikir-pendek', kind: 'doa', hue: 'rose', arab: 'يا فتاح يا رزاق',
    title: 'Dzikir pendek pembuka rezeki', meta: '4 dzikir ringkas',
    desc: 'Kalimat-kalimat pendek yang mudah dirutinkan: memohon rezeki baik, pintu rezeki, syukur, dan kemudahan.',
    fadhilah: 'Jumlah bacaan (33× atau 100×) adalah hitungan yang populer untuk membantu istiqamah, bukan ketentuan dari dalil. Yang terpenting adalah dibaca dengan hadir hati dan dirutinkan. “Alḥamdulillāh ‘alā kulli ḥāl” diucapkan Nabi ﷺ ketika mendapati hal yang tidak beliau sukai (HR. Ibnu Majah no. 3803).',
    parts: [
      {
        label: 'Minta rezeki yang baik', count: 33,
        arab: 'اَللّٰهُمَّ إِنِّيْ أَسْأَلُكَ رِزْقًا طَيِّبًا',
        latin: 'Allāhumma innī as’aluka rizqan ṭayyibā.',
        arti: 'Ya Allah, sesungguhnya aku memohon kepada-Mu rezeki yang baik.',
      },
      {
        label: 'Minta dibukakan pintu rezeki', count: 100,
        arab: 'يَا فَتَّاحُ يَا رَزَّاقُ',
        latin: 'Yā Fattāḥu yā Razzāq.',
        arti: 'Wahai Yang Maha Membuka (pintu rahmat), wahai Yang Maha Memberi rezeki.',
      },
      {
        label: 'Bersyukur dalam keadaan apa pun · HR. Ibnu Majah no. 3803', count: 33,
        arab: 'اَلْحَمْدُ لِلّٰهِ عَلٰى كُلِّ حَالٍ',
        latin: 'Alḥamdulillāhi ‘alā kulli ḥāl.',
        arti: 'Segala puji bagi Allah dalam setiap keadaan.',
      },
      {
        label: 'Minta dipermudah urusan', count: 33,
        arab: 'اَللّٰهُمَّ يَسِّرْ وَلَا تُعَسِّرْ',
        latin: 'Allāhumma yassir wa lā tu‘assir.',
        arti: 'Ya Allah, mudahkanlah dan janganlah Engkau persulit.',
      },
    ],
  },
  {
    id: 'dzikir-sholat', kind: 'doa', hue: 'lapis', arab: 'أذكار الصلاة',
    title: 'Dzikir setelah shalat', meta: 'Wirid sesuai sunnah',
    desc: 'Rangkaian dzikir setelah shalat fardhu: istighfar, Ayat Kursi, tiga surah pelindung, dan tasbih 33×.',
    fadhilah: 'Siapa yang setelah shalat bertasbih 33×, bertahmid 33×, bertakbir 33×, lalu menyempurnakan seratus dengan tahlil, diampuni kesalahannya walau sebanyak buih di lautan (HR. Muslim no. 597). Siapa membaca Ayat Kursi setiap selesai shalat wajib, tidak ada yang menghalanginya masuk surga selain kematian (HR. An-Nasa’i dalam As-Sunan Al-Kubra no. 9848, dinilai shahih oleh Al-Albani). Rasulullah ﷺ memerintahkan membaca Al-Mu‘awwidzat (Al-Ikhlas, Al-Falaq, An-Nas) setiap selesai shalat (HR. Abu Dawud no. 1523). Dzikir “Allāhumma lā māni‘a limā a‘ṭaita” mengingatkan bahwa pemberi dan penahan rezeki hanyalah Allah.',
    parts: [
      {
        label: 'Istighfar · HR. Muslim no. 591', count: 3,
        arab: 'أَسْتَغْفِرُ اللّٰهَ',
        latin: 'Astagfirullāh.',
        arti: 'Aku memohon ampun kepada Allah.',
      },
      {
        label: 'HR. Muslim no. 591',
        arab: 'اَللّٰهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ',
        latin: 'Allāhumma antas-salām wa minkas-salām, tabārakta yā żal-jalāli wal-ikrām.',
        arti: 'Ya Allah, Engkaulah As-Salām (Yang Maha Memberi keselamatan), dan dari-Mu keselamatan. Mahaberkah Engkau, wahai Pemilik keagungan dan kemuliaan.',
      },
      {
        label: 'HR. Bukhari no. 844 dan Muslim no. 593',
        arab: 'لَا إِلٰهَ إِلَّا اللّٰهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلٰى كُلِّ شَيْءٍ قَدِيْرٌ، اَللّٰهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ، وَلَا مُعْطِيَ لِمَا مَنَعْتَ، وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ',
        latin: 'Lā ilāha illallāhu waḥdahu lā syarīka lah, lahul-mulku wa lahul-ḥamdu wa huwa ‘alā kulli syai’in qadīr. Allāhumma lā māni‘a limā a‘ṭaita, wa lā mu‘ṭiya limā mana‘ta, wa lā yanfa‘u żal-jaddi minkal-jadd.',
        arti: 'Tidak ada tuhan selain Allah semata, tiada sekutu bagi-Nya. Milik-Nya kerajaan dan milik-Nya segala puji, dan Dia Mahakuasa atas segala sesuatu. Ya Allah, tidak ada yang dapat menghalangi apa yang Engkau berikan, tidak ada yang dapat memberi apa yang Engkau halangi, dan kekayaan tidak bermanfaat bagi pemiliknya di hadapan-Mu.',
      },
      {
        label: 'HR. Abu Dawud no. 1522',
        arab: 'اَللّٰهُمَّ أَعِنِّيْ عَلٰى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ',
        latin: 'Allāhumma a‘innī ‘alā żikrika wa syukrika wa ḥusni ‘ibādatik.',
        arti: 'Ya Allah, tolonglah aku untuk berdzikir kepada-Mu, bersyukur kepada-Mu, dan beribadah kepada-Mu dengan baik.',
      },
      { q: [2, 255, 255] },
      { q: [112, 1, 4], basmalah: true },
      { q: [113, 1, 5], basmalah: true },
      { q: [114, 1, 6], basmalah: true },
      { label: 'Tasbih · HR. Muslim no. 597', count: 33, arab: 'سُبْحَانَ اللّٰهِ', latin: 'Subḥānallāh.', arti: 'Mahasuci Allah.' },
      { label: 'Tahmid', count: 33, arab: 'اَلْحَمْدُ لِلّٰهِ', latin: 'Alḥamdulillāh.', arti: 'Segala puji bagi Allah.' },
      { label: 'Takbir', count: 33, arab: 'اَللّٰهُ أَكْبَرُ', latin: 'Allāhu akbar.', arti: 'Allah Mahabesar.' },
      {
        label: 'Penyempurna seratus · HR. Muslim no. 597',
        arab: 'لَا إِلٰهَ إِلَّا اللّٰهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلٰى كُلِّ شَيْءٍ قَدِيْرٌ',
        latin: 'Lā ilāha illallāhu waḥdahu lā syarīka lah, lahul-mulku wa lahul-ḥamdu wa huwa ‘alā kulli syai’in qadīr.',
        arti: 'Tidak ada tuhan selain Allah semata, tiada sekutu bagi-Nya. Milik-Nya kerajaan dan milik-Nya segala puji, dan Dia Mahakuasa atas segala sesuatu.',
      },
    ],
  },
];

// Saran bacaan menurut waktu (jam lokal).
const SLOTS = [
  { until: 11, name: 'pagi ini', items: [
    ['ilmu-rezeki-amal', 'Dibaca Nabi ﷺ setelah salam shalat Subuh'],
    ['dzikir-sholat', 'Setelah shalat Subuh'],
    ['urusan', 'Sebelum memulai pekerjaan'],
  ] },
  { until: 15, name: 'siang ini', items: [
    ['dzikir-sholat', 'Setelah shalat Zuhur'],
    ['ikfini', 'Saat urusan rezeki terasa sempit'],
    ['hasbunallah', 'Menenangkan hati di tengah kesibukan'],
  ] },
  { until: 18, name: 'sore ini', items: [
    ['dzikir-sholat', 'Setelah shalat Asar'],
    ['seribu-dinar', 'Menguatkan takwa dan tawakal'],
    ['yusra', 'Pengingat bahwa kesulitan pasti berlalu'],
  ] },
  { until: 24, name: 'malam ini', items: [
    ['waqiah', 'Masyhur dibaca setiap malam'],
    ['mulk', 'Nabi ﷺ tidak tidur sebelum membacanya (HR. Tirmidzi no. 2892)'],
    ['baqarah-akhir', 'Mencukupi pembacanya di malam hari'],
    ['kursi', 'Sebelum tidur, dijaga Allah hingga pagi (HR. Bukhari no. 2311)'],
  ] },
];

const QUOTES = [
  { t: 'Dan tidak satu pun makhluk bergerak (bernyawa) di bumi melainkan semuanya dijamin Allah rezekinya.', s: 'QS. Hud: 6', hue: 'turquoise' },
  { t: 'Dan barangsiapa bertawakal kepada Allah, niscaya Allah akan mencukupkan (keperluan)nya.', s: 'QS. At-Talaq: 3', hue: 'amber' },
  { t: 'Sesungguhnya jika kamu bersyukur, niscaya Aku akan menambah (nikmat) kepadamu.', s: 'QS. Ibrahim: 7', hue: 'rose' },
  { t: 'Mohonlah ampunan kepada Tuhanmu, sungguh Dia Maha Pengampun, niscaya Dia akan menurunkan hujan yang lebat dari langit kepadamu, dan Dia memperbanyak harta dan anak-anakmu.', s: 'QS. Nuh: 10–12', hue: 'blue' },
  { t: 'Seandainya kalian bertawakal kepada Allah dengan sebenar-benar tawakal, niscaya Dia akan memberi rezeki kepada kalian sebagaimana Dia memberi rezeki kepada burung: pergi pagi dalam keadaan lapar dan pulang sore dalam keadaan kenyang.', s: 'HR. Tirmidzi no. 2344', hue: 'emerald' },
  { t: 'Barangsiapa ingin dilapangkan rezekinya dan dipanjangkan umurnya, hendaklah ia menyambung tali silaturahim.', s: 'HR. Bukhari no. 5986 dan Muslim no. 2557', hue: 'coral' },
  { t: 'Tidak ada yang dapat menolak takdir kecuali doa, dan tidak ada yang dapat menambah umur kecuali kebaikan.', s: 'HR. Tirmidzi no. 2139', hue: 'plum' },
  { t: 'Tidaklah seseorang memakan makanan yang lebih baik daripada makanan hasil kerja tangannya sendiri.', s: 'HR. Bukhari no. 2072', hue: 'amber' },
  { t: 'Sungguh beruntung orang yang masuk Islam, diberi rezeki yang cukup, dan Allah menjadikannya merasa cukup dengan apa yang diberikan kepadanya.', s: 'HR. Muslim no. 1054', hue: 'turquoise' },
  { t: 'Aku tahu rezekiku tidak akan diambil orang lain, maka hatiku tenang. Aku tahu amalku tidak akan dikerjakan orang lain, maka aku sibuk beramal.', s: 'Hasan Al-Bashri', hue: 'rose' },
];

// ---------- Helpers ----------
const $ = (s, el = document) => el.querySelector(s);
const hueVar = (h) => `var(--${h})`;
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
};

let toastTimer;
function toast(msg) {
  const el = $('#toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 3500);
}

// ---------- Theme ----------
const root = document.documentElement;
const savedTheme = store.get('theme', null);
if (savedTheme) root.dataset.theme = savedTheme;
$('.theme-toggle').addEventListener('click', () => {
  const dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  root.dataset.theme = dark ? 'light' : 'dark';
  store.set('theme', root.dataset.theme);
});

// ---------- Wirid harian ----------
const dayKey = (d = new Date()) => d.toLocaleDateString('sv'); // YYYY-MM-DD, jam lokal
const readLog = store.get('readLog', {}); // { 'YYYY-MM-DD': ['waqiah', ...] }
const isRead = (id) => (readLog[dayKey()] || []).includes(id);

function setRead(id, on) {
  const d = dayKey();
  const list = new Set(readLog[d] || []);
  if (on) list.add(id); else list.delete(id);
  if (list.size) readLog[d] = [...list]; else delete readLog[d];
  store.set('readLog', readLog);
  refreshWirid();
}

function streak() {
  const d = new Date();
  if (!readLog[dayKey(d)]) d.setDate(d.getDate() - 1); // belum baca hari ini: rangkaian sampai kemarin masih dihitung
  let n = 0;
  while (readLog[dayKey(d)]) { n++; d.setDate(d.getDate() - 1); }
  return n;
}

// Hitungan tasbih tersimpan per hari, kembali ke 0 besoknya.
let savedCounts = store.get('counts', {});
function countStore() {
  if (savedCounts.day !== dayKey()) savedCounts = { day: dayKey(), v: {} };
  return savedCounts.v;
}

function refreshWirid() {
  document.querySelectorAll('[data-id]').forEach((el) => el.classList.toggle('is-read', isRead(el.dataset.id)));
  $('#stat-streak').textContent = streak();
  $('#stat-today').textContent = (readLog[dayKey()] || []).length;
  const mark = $('#r-mark');
  if (mark && current) {
    const on = isRead(current.id);
    mark.classList.toggle('is-read', on);
    mark.textContent = on ? '✓ Sudah dibaca hari ini' : 'Tandai sudah dibaca hari ini';
  }
}

// ---------- Bacaan waktu ini ----------
const slot = SLOTS.find((sl) => new Date().getHours() < sl.until);
$('#today-title').textContent = `Bacaan ${slot.name}`;
$('#today-list').innerHTML = slot.items.map(([id, why]) => {
  const d = DOA.find((x) => x.id === id);
  return `<li><button type="button" class="today-item" data-id="${id}" style="--hue:${hueVar(d.hue)}">
    <span class="today-dot"></span>
    <span class="today-text"><strong>${d.title}</strong><small>${why}</small></span>
    <span class="today-check">✓</span>
  </button></li>`;
}).join('');
$('#today-list').addEventListener('click', (e) => {
  const b = e.target.closest('.today-item');
  if (b) openReader(DOA.find((d) => d.id === b.dataset.id));
});

// ---------- Grid ----------
const grid = $('#grid');
grid.innerHTML = DOA.map((d) => `
  <li data-kind="${d.kind}">
    <button type="button" class="tile" data-id="${d.id}" style="--hue:${hueVar(d.hue)}">
      <div class="tile-top"><p class="tile-arab" lang="ar" dir="rtl">${d.arab}</p></div>
      <div class="tile-body">
        <h3 class="tile-title">${d.title}</h3>
        <p class="tile-desc">${d.desc}</p>
        <p class="tile-meta">${d.meta}</p>
      </div>
    </button>
  </li>`).join('');

grid.addEventListener('click', (e) => {
  const tile = e.target.closest('.tile');
  if (tile) openReader(DOA.find((d) => d.id === tile.dataset.id));
});

document.querySelectorAll('.chip').forEach((chip) => chip.addEventListener('click', () => {
  document.querySelectorAll('.chip').forEach((c) => c.setAttribute('aria-pressed', c === chip));
  const f = chip.dataset.filter;
  grid.querySelectorAll('li').forEach((li) => { li.hidden = f !== 'all' && li.dataset.kind !== f; });
}));

// ---------- Quran fetch ----------
const surahCache = new Map();
function getSurah(n) {
  if (!surahCache.has(n)) {
    const p = fetch(`https://equran.id/api/v2/surat/${n}`)
      .then((r) => { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then((j) => j.data);
    p.catch(() => surahCache.delete(n)); // izinkan retry
    surahCache.set(n, p);
  }
  return surahCache.get(n);
}

async function loadItems(doa) {
  const groups = await Promise.all(doa.parts.map(async (part) => {
    if (!part.q) return [{ ...part, no: null }];
    const [n, from, to] = part.q;
    const s = await getSurah(n);
    return s.ayat
      .filter((a) => a.nomorAyat >= from && a.nomorAyat <= to)
      .map((a, j) => ({
        basmalah: part.basmalah && j === 0,
        no: a.nomorAyat,
        label: `QS. ${s.namaLatin}: ${a.nomorAyat}`,
        arab: a.teksArab,
        latin: a.teksLatin,
        arti: a.teksIndonesia,
        audio: a.audio,
      }));
  }));
  return groups.flat();
}

// ---------- Reader ----------
const reader = $('#reader');
const body = $('#r-body');
const qariSel = $('#r-qari');
const playAllBtn = $('#r-playall');
qariSel.innerHTML = Object.entries(QARI).map(([k, v]) => `<option value="${k}">${v}</option>`).join('');
qariSel.value = store.get('qari', '05');

const prefs = { latin: store.get('latin', true), arti: store.get('arti', true), size: store.get('size', 2) };
$('#t-latin').checked = prefs.latin;
$('#t-arti').checked = prefs.arti;
function applyPrefs() {
  body.classList.toggle('hide-latin', !prefs.latin);
  body.classList.toggle('hide-arti', !prefs.arti);
  reader.style.setProperty('--arab-size', `${prefs.size}rem`);
}
applyPrefs();

$('#t-latin').addEventListener('change', (e) => { prefs.latin = e.target.checked; store.set('latin', prefs.latin); applyPrefs(); });
$('#t-arti').addEventListener('change', (e) => { prefs.arti = e.target.checked; store.set('arti', prefs.arti); applyPrefs(); });
$('#f-up').addEventListener('click', () => { prefs.size = Math.min(3.6, +(prefs.size + 0.2).toFixed(1)); store.set('size', prefs.size); applyPrefs(); });
$('#f-down').addEventListener('click', () => { prefs.size = Math.max(1.4, +(prefs.size - 0.2).toFixed(1)); store.set('size', prefs.size); applyPrefs(); });
qariSel.addEventListener('change', () => {
  store.set('qari', qariSel.value);
  if (player.index >= 0 && items[player.index]?.audio) playAt(player.index, player.all);
});

let items = [];
let current = null;

async function openReader(doa) {
  current = doa;
  reader.style.setProperty('--hue', hueVar(doa.hue));
  $('#r-arab').textContent = doa.arab;
  $('#r-title').textContent = doa.title;
  $('#r-src').textContent = doa.meta;
  $('#r-qari-wrap').hidden = !doa.parts.some((p) => p.q);
  stop();
  history.replaceState(null, '', `#${doa.id}`);
  if (!reader.open) reader.showModal();
  body.scrollTop = 0;
  body.innerHTML = '<div class="state"><div class="spinner"></div>Memuat bacaan…</div>';
  try {
    items = await loadItems(doa);
    if (current !== doa) return;
    renderItems(doa);
  } catch {
    if (current !== doa) return;
    items = [];
    body.innerHTML = `<div class="state"><p>Bacaan gagal dimuat. Periksa koneksi internet, lalu coba lagi.</p>
      <button type="button" class="btn btn-play" id="r-retry">Coba lagi</button></div>`;
    $('#r-retry').addEventListener('click', () => openReader(doa));
  }
}

function renderItems(doa) {
  const cs = countStore();
  const hasStatic = items.some((it) => !it.audio);
  body.innerHTML = `
    <details class="fadhilah"><summary>Keutamaan &amp; sumber</summary><p>${doa.fadhilah}</p></details>
    ${doa.bismillah ? '<p class="basmalah" lang="ar" dir="rtl">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</p>' : ''}
    <ol class="ayat">${items.map((it, i) => `
      <li class="ayah" data-i="${i}">
        ${it.basmalah ? '<p class="basmalah" lang="ar" dir="rtl">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</p>' : ''}
        <div class="ayah-top">
          <span class="ayah-no">${it.no ?? '✦'}</span>
          <span class="ayah-label">${esc(it.label)}</span>
          <button type="button" class="round ayah-play" data-i="${i}" aria-label="Putar ${esc(it.label)}">▶</button>
        </div>
        <p class="ayah-arab" lang="ar" dir="rtl">${esc(it.arab)}</p>
        <p class="ayah-latin">${esc(it.latin)}</p>
        <p class="ayah-arti">${esc(it.arti)}</p>
        ${it.count ? (() => { const n = cs[`${doa.id}:${i}`] || 0; return `<div class="counter${n >= it.count ? ' done' : ''}" data-i="${i}">
          <div class="counter-row">
            <button type="button" class="count-step" data-step="-1" aria-label="Kurangi hitungan">−</button>
            <p class="count-value" aria-live="polite"><b>${n}</b> <span>/ ${it.count}×</span></p>
            <button type="button" class="count-step plus" data-step="1" aria-label="Tambah hitungan">+</button>
          </div>
          <div class="count-bar"><span style="width:${Math.min(100, (n / it.count) * 100)}%"></span></div>
          <button type="button" class="count-reset">↺ Ulang dari 0</button>
        </div>`; })() : ''}
      </li>`).join('')}
    </ol>
    ${hasStatic ? '<p class="note">Doa dari hadits tidak memiliki rekaman murottal. Tombol putar memakai suara bahasa Arab bawaan perangkat, jika tersedia.</p>' : ''}
    <button type="button" class="btn mark-read" id="r-mark"></button>`;
  refreshWirid();
}

body.addEventListener('click', (e) => {
  if (e.target.closest('#r-mark')) {
    const on = !isRead(current.id);
    setRead(current.id, on);
    if (on) toast(`Alhamdulillah. ${streak()} hari berturut-turut.`);
    return;
  }
  const cb = e.target.closest('.count-step, .count-reset');
  if (cb) {
    const box = cb.closest('.counter');
    const i = +box.dataset.i;
    const target = items[i].count;
    const cs = countStore();
    const key = `${current.id}:${i}`;
    const prev = cs[key] || 0;
    const n = cb.dataset.step ? Math.max(0, prev + +cb.dataset.step) : 0;
    cs[key] = n;
    store.set('counts', savedCounts);
    box.querySelector('b').textContent = n;
    box.querySelector('.count-bar span').style.width = `${Math.min(100, (n / target) * 100)}%`;
    box.classList.toggle('done', n >= target);
    if (n === target && prev < target) {
      navigator.vibrate?.(250);
      const allDone = items.every((it, j) => !it.count || (cs[`${current.id}:${j}`] || 0) >= it.count);
      if (allDone && !isRead(current.id)) {
        setRead(current.id, true);
        toast('Semua hitungan selesai. Ditandai sudah dibaca hari ini.');
      } else toast(`Alhamdulillah, ${target}× selesai.`);
    } else if (n > prev) navigator.vibrate?.(15);
    return;
  }
  const btn = e.target.closest('.ayah-play');
  if (!btn) return;
  const i = +btn.dataset.i;
  if (player.index === i && player.playing) stop();
  else playAt(i, false);
});

playAllBtn.addEventListener('click', () => {
  if (player.playing && player.all) stop();
  else if (items.length) playAt(0, true);
});

$('#r-close').addEventListener('click', () => reader.close());
reader.addEventListener('click', (e) => { if (e.target === reader) reader.close(); }); // klik backdrop
reader.addEventListener('close', () => {
  stop();
  current = null;
  history.replaceState(null, '', location.pathname + location.search);
});

$('#r-share').addEventListener('click', async () => {
  const url = location.href;
  if (navigator.share) {
    try { await navigator.share({ title: current.title, text: `${current.title}: ${current.desc}`, url }); } catch {}
    return;
  }
  try { await navigator.clipboard.writeText(url); toast('Link bacaan disalin.'); }
  catch { toast(url); }
});

function openFromHash() {
  const doa = DOA.find((d) => `#${d.id}` === location.hash);
  if (doa && current !== doa) openReader(doa);
}
window.addEventListener('hashchange', openFromHash);

// ---------- Player ----------
const audio = new Audio();
audio.preload = 'auto';
const player = { index: -1, all: false, playing: false };

function arabicVoice() {
  return speechSynthesis?.getVoices().find((v) => v.lang.toLowerCase().startsWith('ar'));
}

function markPlaying() {
  body.querySelectorAll('.ayah').forEach((el) => {
    const on = +el.dataset.i === player.index && player.playing;
    el.classList.toggle('playing', on);
    el.querySelector('.ayah-play').textContent = on ? '■' : '▶';
  });
  playAllBtn.textContent = player.playing && player.all ? '■ Hentikan' : '▶ Putar semua';
}

function playAt(i, all) {
  audio.pause();
  if ('speechSynthesis' in window) speechSynthesis.cancel();
  if (i >= items.length) return stop();
  const it = items[i];
  Object.assign(player, { index: i, all, playing: true });
  markPlaying();
  body.querySelector(`.ayah[data-i="${i}"]`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });

  if (it.audio) {
    audio.src = it.audio[qariSel.value] || it.audio['05'];
    audio.play().catch(() => { toast('Audio gagal diputar. Periksa koneksi internet.'); stop(); });
    return;
  }
  const voice = arabicVoice();
  if (!voice) {
    toast('Suara bahasa Arab belum tersedia di perangkat ini.');
    return all ? next() : stop();
  }
  const u = new SpeechSynthesisUtterance(it.arab);
  u.voice = voice;
  u.lang = voice.lang;
  u.rate = 0.8;
  u.onend = () => { if (player.index === i && player.playing) next(); };
  speechSynthesis.speak(u);
}

function next() {
  if (player.all && player.index + 1 < items.length) playAt(player.index + 1, true);
  else stop();
}

function stop() {
  audio.pause();
  if ('speechSynthesis' in window) speechSynthesis.cancel();
  Object.assign(player, { index: -1, all: false, playing: false });
  markPlaying();
}

audio.addEventListener('ended', next);
if ('speechSynthesis' in window) speechSynthesis.getVoices(); // picu pemuatan daftar suara

// ---------- Quotes ----------
let qi = Math.floor(Math.random() * QUOTES.length);
const quoteEl = $('#quote');
const dots = $('#quote-dots');
dots.innerHTML = QUOTES.map((_, i) => `<button type="button" data-i="${i}" aria-label="Kutipan ${i + 1}"></button>`).join('');

function showQuote(i) {
  qi = (i + QUOTES.length) % QUOTES.length;
  const q = QUOTES[qi];
  quoteEl.style.setProperty('--hue', hueVar(q.hue));
  $('#quote-text').textContent = q.t;
  $('#quote-src').textContent = q.s;
  quoteEl.classList.remove('swap');
  void quoteEl.offsetWidth; // restart animasi
  quoteEl.classList.add('swap');
  dots.querySelectorAll('button').forEach((b, j) => b.setAttribute('aria-current', j === qi));
}
showQuote(qi);

$('#quote-prev').addEventListener('click', () => showQuote(qi - 1));
$('#quote-next').addEventListener('click', () => showQuote(qi + 1));
dots.addEventListener('click', (e) => { if (e.target.dataset.i) showQuote(+e.target.dataset.i); });

let paused = false;
const quotesSection = $('#penyemangat');
quotesSection.addEventListener('mouseenter', () => { paused = true; });
quotesSection.addEventListener('mouseleave', () => { paused = false; });
quotesSection.addEventListener('focusin', () => { paused = true; });
quotesSection.addEventListener('focusout', () => { paused = false; });
if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  setInterval(() => { if (!paused && !document.hidden) showQuote(qi + 1); }, 9000);
}

refreshWirid();
openFromHash();
