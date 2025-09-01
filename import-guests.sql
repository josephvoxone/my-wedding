
-- Create guests table if not exists
CREATE TABLE IF NOT EXISTS guests (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  nickname TEXT,
  special_message TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Clear existing data (optional - comment out if you want to keep existing data)
DELETE FROM guests;


INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('andy', 'Andy', 'Andy', 'Terima kasih sudah menjadi teman baik bagian perjalanan hidupku. Perjalanan kita bersama telah membentuk siapa kita hari ini, pedas, manis, bahagia, kecewa dan aku sangat bersyukur untuk hal yang kita lakukan, dukungan, dan pertemanan yang telah kita bangun bersama mbe abed juga kwkwkw. Tapi berkat dirimu ya kadang aku gak kesepian lagi, punya temen ya bisa saling support dari sisi mental issue dan lainnya. Uangmu nanti tak ganti habis nikahe e kelar hahaha. 100%. Tapi berkat awakmu aku semakin dipertajam mbe Tuhan mengerti pola pikir manusia dan etika sisan ketika aku potong kuku harus cari tisu buat bungkus kotorane. \n\nKamu bisa hadir atau nonton streaming di hari bahagia kami jadi melengkapi sukacita yang Tuhan berikan. Kiranya berkat Tuhan juga menyertai perjalanan hidupmu dan kamu dapat mendapatkan jawaban apa yang kamu cari ndy!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('benyamin', 'benyamin', 'benyamin', 'Halo ben, terima kasih sudah menjadi teman baik waktu kuliah, kita pernah sharing keuangan juga dan pekerjaan kantoran, terima kasih juga dulu sempat carry aku pas tugas-tugas kuliah, haha. Aku sempat berpikir yak opo carane pinter koyok awakmu kwkw. Tapi aku ya aku bersyukur masih ada temen yang dulu bisa menajamkan satu sama lain dan membuka pintu kerjaan dulu buat aku bisa part time nde ez code atau sharing proyek yang lain.\n\nKamu bisa hadir atau nonton streaming di hari bahagia kami jadi melengkapi sukacita yang Tuhan berikan. Kiranya berkat Tuhan juga menyertai perjalanan hidupmu dan kamu dapat menemukan apa yang kamu cari!.');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('abednego', 'Abednego', 'Abednego', 'Terima kasih sudah menjadi teman sharing yang baik bed. Dalam setiap hal yang kamu lakukan menjadi pengalaman yang baik dan bertumbuh buat aku. aku belajar banyak mengenai kamu dunia sosial, dan keseruan yang kita rasakan, pedas, manis, asem, kecewa dan bahagia justru menajamkan satu sama lain. Terima kasih sudah menjadi teman yang baik, dengan adanya kamu dan kosmu aku merasa gak kesepian tapi tolong jangan ngekos di tempat yang luasnya kayak kamar mandi lol, bahkan tikus sempat masuk juga sampe ngira itu kamar mandi. Tapi aku bersyukur bed punya temen mbe kamu, berhubung aku juga gtw dimana dubai, berau atau surabaya, jadi kita stay in touch aja bed\n\nKami percaya Tuhan yang telah mempertemukan kita untuk saling menajamkan, aku juga berharap kamu dapat menemukan pekerjaan yang baik dan pasangan yang baik bed.');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('liana', 'Liana', 'Liana', 'Terima kasih ce triana sudah bantu aku dan dukung aku dikala aku bingung, menjadi pantutan satu satunya teman baik yang mempunya integritas didalam hidup, gak ikut judi dan aneh-aneh hahaha. Gila sih aku tanpa cece wes jadi depresi dan gak tau mau kemana, cece cocok jadi penuntun jalan orang tersesat gitu kwkwkw. Tapi aku bersyukur seh punya temen seperti cece buaaikkk poll, aku bangga seh bisa kenal sama cece. Cece jadi temen sharing yang bagus dan pendengar ya bagus walaupun aku tau cece agak strict dirumah tapi aku berdoa yang terbaik buat cece.\n\nDi hari bahagia kami, aku harap kehadirannya tapi karena jauh cece bisa liat streaming. Kiranya sukacita yang aku rasakan juga menjadi sukacitamu. Semoga cece mendapatkan jawaban apa yang kamu cari dan menemukannya. Amin!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('celine', 'Celine', 'Celine', 'Halo Celine Angelina, suaramu bagus cel, seperti sikapmu. Selalu juga menjadi cerminan yang baik bagi sekeliling. Aku dulu masih inget kamu juga baik juga terhadap orang bahkan gak kamu kenal, kamu punya hati yang tulus dan siap berkorban dan kamu menjadi contoh buat aku buat selalu mengandalkan Tuhan.\n\nTerima kasih juga menjadi contoh yang baik buat aku. Kami sangat berharap kamu bisa hadir atau menonton kami di live streaming. Your presence means the world to us! God bless you with your fams!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('ferry', 'Ferry', 'Ferry', 'Halo Ferry, aku sek inget kenangan kita nde kuliah, dan perjalanan kita bercanda terus kwkwkw. Sorry kebetulan aku gak bisa dateng nde nikahanmu tapi aku berharap yang terbaik buat kamu dan istrimu. Kamu salah satu temenku juga yang punya integritas dan saling menajamkan satu sama lain. Disaat susah kamu juga minjemno laptopmu buat aku, dan pas liburan uncal-uncalan sempake abed mbe makan kacang sama kulite mengandung vitamin kwkwkw. Kocak, tapi ya pedas, manis, suka dan duka membuat kita saling menajamkan satu sama lain.\n\nMaaf, kalau ada salah kata, aku berharap buat kamu makin diberkati Tuhan sama keluarga barumu. Kita akan sebentar lagi nikah, karena jauh kamu bisa nonton streaming. Terima kasih sudah menjadi teman yang baik semasa kuliah!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('jerry-young', 'Jerry Young', 'Jerry', 'Thank you bro atas semua hal yang kita lakukan bersama "orang tua" hahaha dan kita bakalan menjadi orang tua! Lek semisal ada barang sing bisa diambil di berau nanti tak kabari kwkwkw.\n\nSekarang kami mau memulai chapter baru. You''ve been with us through thick and thin, dan kami sangat berharap kamu bisa hadir atau nonton streaming di hari spesial kami! Tuhan berkati buat kamu dan keluarga barumu, gas di tunggu momongane!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('surya', 'Surya', 'Surya', 'Halo ko sur, terima kasih menjadi teman yang baik kwkwkw, meskipun selalu minta sesuap nasi bungkus kwkwkw. Terima kasih selalu jadi tempat rehat pas di kos hahaha. Terima kasih juga atas ko surya pas nde kuliah aku merasa sendirian, meskipun kadang sing dibahas gak jelas tapi itu keseruane kwkwkw. \n\nPernikahan kami gak akan lengkap tanpa kehadiran salah satu brother terbaik. Thank you for being an amazing friend all these years. See you at the wedding or you can watch when streaming! God speed!');


INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('michael-joshua', 'Michael Joshua', 'Michael', 'Terima kasih ko mike menjadi pelengkap keseruan pasukan elang wkwkwk. Ko Mike jadi salah satu kakak senior yang aku kagumi karena  drummer e gak ada tandingane, tapi di balik itu ko mike jadi cerminan untuk totalitas dalam pelayanan dan sunguh-sungguh didalam Tuhan\n\nSemoga ko mike, istri dan kucingnya dapat terberkati dan pelayanannya semakin lebih dalam lagi di hadapan Tuhan! Bisa nonton streaming atau dateng tapi jauh ko mike gak bisa kasih tiket, kalo nikahe semisal deket tak undang satu warnet.');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('stephanie', 'stephanie', 'stephanie', 'Halo ce steph, terima kasih dulu bimbing Joseph pas waktu masih cupu, cece juga mengajarkan aku bikin desain ppt yang keren waktu wisuda, waktu reteat fotografi dan sebagainya. Tapi dibalik itu cece juga punya integritas yang tinggi, dan kepedulian juga buat aku waktu retreat dan kuliah. Aku bersyukur kenal cece sebagai orang yang baik dan cerminan buat aku bertumbuh didalam Tuhan.\n\nSemoga apa yang dilalui ce steph entah bahagia, kecewa, suka dan duka membuat ce steph semakin tajamn didalam Tuhan! Kangen juga bisa kumpul-kumpul sama ce steph, ko mike dan temen-temen gak jelas lainnya lol (surya), aku berharap ce steph mendapatkan jawaban apa yang cece cari dan terus berkarya didalam Tuhan. Sekarang kami mau mulai chapter baru dalam hidup, dan kami harapkan kehadirannya atau cece bisa lihat streaming. Thanks for being an incredible friend!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('daniel-wongso', 'Daniel', 'Daniel', 'Terima kasih ko Daniel, menjadi pendengar dan teman yang baik. Menikmati keseruan bersama waktu kumpul-kumpul bareng\n\nDi hari bahagia kami. Terima kasih sudah jadi teman yang selalu bisa diandalkan. Can''t wait to celebrate with you!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('william-surya', 'William Surya', 'William', 'Halo bosq, semoga kamu mendapatkan jodoh, wibunya di kurangi, tapi terima kasih selalu menjadi teman yang baik dan kocak selama waktu di EZ Code. hahaha. Tapi aku bersyukur seh punya temen kayak awakmu friendly dan aku merasa gak kesepian ketika main game. Ya meskipun kamu tidak mendapatkan funny tapi hidupmu sudah kelucuan (funny) buat orang-orang lain. Terima kasih juga dulu waktu di ez code aku ya belajar coding banyak dari awakmu, aku liat kamu orangnya gak banyak komplain dan jalani apa yang ada sekarang, kamu punya integritas tau mana yang baik dan salah.So proud of you bro!\n\nSekarang kami mau mulai chapter baru dalam hidup, dan kehadiran teman seperti kamu akan membuat hari kami semakin bermakna kamu bisa lihat streaming. Thanks for being an incredible friend!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('liko-elyn', 'Liko & Elyn', 'Liko & Elyn', 'Halo ce Elyn dan ko Liko, terima kasih sudah mengajarkan aku banyak hal, aku percaya kita ketemu bukan suatu kebetulan. Terima kasih juga menjadi cerminan keluarga yang baik didalam Tuhan sebelum aku menikah, hehe. Terima kasih banyak pokoknya sudah bantu banyak hal dan membukakan pintu jawaban untuk aku dari Tuhan. Sudah membantu dan menjadi terang buat aku. Aku bersyukur banget punya pemimpin yang masih mau mengandalkan Tuhan dari setiap tindakan dan aktivitas yang ce elyn dan ko liko lakukan selalu mencerminkan buah-buah kasih baru yang buat aku pelajari.\n\nSelama di dubai aku melihat prespektif yang baru didalam hidup aku, Terima kasih yang tidak terhingga 😊, sebentar lagi kami akan menikah, kami tunggu kehadiran atau nonton streaming. May Liko`s family always be blessed and guided by the Lord Jesus!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('omtante', 'Om & Tante', 'Om & Tante', 'Halo Om dan Tante, terima kasih buat sudah makasih buat masakin Joseph selama di dubai pokoknya hawce!, Terima kasih juga om sudah doakan Joseph selama ulang tahun, menjadi cerminan terang dan kasih sayang orang tua yang baik, walaupun hanya sementara aku percaya Tuhan menyertai kalian menjadi pasangan yang indah dihadapan Tuhan. Nasihat dan bimbingan kalian sangat berharga dalam membentuk aku menjadi pribadi yang lebih baik.\n\nKami sangat berharap kalian bisa hadir atau nonton streaming. Terima kasih banyak buat om dan tante. Tuhan Yesus memberkati!.');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('brian', 'Brian', 'Brian', 'Halo bro, terima kasih buat kita satu sama lain menajamkan satu sama lain, memberikan pengalaman yang baru setiap langkah kita, keseruan yang baru selama di dubai dan mendalami firman Tuhan setiap kali kita sharing.\n\nAku sangat bersyukur punya teman seperti lu. Your presence at our wedding akan complete our joy but you can streaming. Thanks for being an awesome friend!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('garren', 'Garren', 'Garren', 'Halo bro garren makasi ger, udah dipinjemin plastik packingnya lol, semoga apa yang lu cari menjadi damai dan sejahtera didalam hidupmu.\n\nSekarang kami mau celebrate milestone penting dalam hidup kami, dan kehadiran kamu akan make it even more special but you can streaming. See you at the top, bro!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('triana', 'Triana', 'Triana', 'Halo ce Triana, cece yang .\n\nKami sangat excited untuk share our special day dengan kamu. Thank you for being not just a great colleague, but also a wonderful friend!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('djordi', 'Djordi', 'Djordi', 'Halo bosq, pedas, manis dan sing seger-seger kita rasakan, kwkwkw terima kasih sudah menjadi teman dan pendengar yang baik, saling menajamkan satu sama lain, kita ditempatkan di orang-orang yang percaya Tuhan supaya kita diasah dan ditempa menjadi lebih baik. Usaha dan bisnis kita di IT semoga diberikan pintu buat Tuhan bukakan 1000x \n\nI`m so grateful untuk perjalanan kita, dan Thank you bukan hanya teman, tapi teman yang awesome, ditunggu awakmu mbe ailen!');


INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('yunica', 'Yunica', 'yunica', 'Halo yun udah lama nih gak ketemu, hehe. Aku harap kamu baik-baik aja. Terima kasih menjadi teman dikala susah dan duka, bahagia dan kecewa. Tapi aku percaya Tuhan proses kita jadi lebih baik lagi untuk saling menajamkan di masa muda kita. \n\nI`m so grateful untuk perjalanan kita, dan Thank you bukan hanya teman, tapi teman yang awesome dan saling membangun, God bless you yun and your husband!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('elviana', 'elviana', 'elviana', 'Halo ce, terima kasih dulu Joseph belajar banyak sama cece tentang fotografi. Jadi tau juga dunia kerja seperti apa dari pengalaman sharing e cece dulu. \n\nThank you for being not just a great colleague, but also a wonderful friend!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('yosua', 'yosua', 'yosua', 'Halo ndoll, lama wes gak ketemu, terima kasih atas menjadi teman kecil yang dulu saling menajamkan satu sama lain, bertumbuh di gereja dan kamu salah satu yang membangun spiritualku menjadi lebih baik juga waktu kecil. Seru, Bahagia, Manis dan kecewa untuk saling menajamkan kita satu sama lain mbe (alm Deni). \n\nBtw, adekku nde jakarta kuliah sekarang, Thank you for being not just a great colleague, but also a wonderful friend!');