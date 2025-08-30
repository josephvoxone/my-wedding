
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
VALUES ('andy', 'Andy', 'Andy', 'Terima kasih sudah menjadi teman baik bagian perjalanan hidupku. Perjalanan kita bersama telah membentuk siapa kita hari ini, pedas, manis, bahagia, kecewa dan aku sangat bersyukur untuk hal yang kita lakukan, dukungan, dan persaudaraan yang telah kita bangun bersama kwkwkw.\n\nKehadiranmu di hari bahagia kami akan melengkapi sukacita yang Tuhan berikan. Kiranya berkat Tuhan juga menyertai perjalanan hidupmu ndy dan kamu dapat menemukan apa yang kamu cari!.');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('abednego', 'Abednego', 'Abednego', 'Terima kasih sudah menjadi teman sharing yang baik bed. Dalam setiap hal yang kamu lakukan menjadi pengalaman yang baik.\n\nKami percaya Tuhan yang telah mempertemukan kita untuk saling menajamkan, aku juga berharap kamu dapat menemukan pekerjaan yang baik dan pasangan yang baik bed.');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('liana', 'Liana', 'Liana', 'Terima kasih ce triana sudah bantu aku dan dukung aku dikala aku bingung, menjadi pantutan satu satunya teman baik yang mempunya integritas didalam hidup, gak ikut judi dan aneh-aneh hahaha.\n\nDi hari bahagia kami, kehadiranmu akan menjadi berkat tersendiri. Kiranya sukacita yang aku rasakan juga menjadi sukacitamu. Semoga cece mendapatkan apa yang kamu cari dan menemukannya. Amin!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('celine', 'Celine', 'Celine', 'Halo Celine Angelina, suaramu bagus cel, seperti sikapmu. Selalu juga menjadi cerminan yang baik bagi sekeliling.\n\nKami sangat berharap kamu bisa hadir dan menonton kami di live streaming. Your presence means the world to us!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('ferry', 'Ferry', 'Ferry', 'Halo Ferry, aku sek inget kenangan kita nde kuliah, dan perjalanan kita bercanda terus kwkwkw. Sorry kebetulan aku gak bisa dateng nde nikahanmu tapi aku berharap yang terbaik buat kamu dan istrimu.\n\nKita akan sebentar lagi nikah terima kasih sudah menjadi teman yang baik semasa kuliah!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('jerry-young', 'Jerry Young', 'Jerry', 'Thank you bro atas semua hal yang kita lakukan bersama "orang tua" hahaha dan kita bakalan menjadi orang tua!\n\nSekarang kami mau memulai chapter baru. You''ve been with us through thick and thin, dan kami sangat berharap kamu bisa hadir atau nonton streaming di hari spesial kami!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('surya', 'Surya', 'Surya', 'Halo ko sur, terima kasih menjadi teman yang baik kwkwkw, meskipun selalu minta sesuap nasi bungkus kwkwkw. Terima kasih selalu jadi tempat rehat pas di kos hahaha.\n\nPernikahan kami gak akan lengkap tanpa kehadiran salah satu brother terbaik. Thank you for being an amazing friend all these years. See you at the wedding or you can watch when streaming!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('michael-joshua', 'Michael Joshua', 'Michael', 'Terima kasih ko mike menjadi pelengkap keseruan pasukan elang wkwkwk.\n\nKami sangat bersyukur punya brother seperti kamu dalam hidup kami.  Semoga ko mike, istri dan kucinginya dapat terberkati dan pelayanannya semakin lebih dalam lagi di hadapan Tuhan!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('daniel-wongso', 'Daniel', 'Daniel', 'Terima kasih ko Daniel, menjadi pendengar dan teman yang baik. Menikmati keseruan bersama waktu kumpul-kumpul bareng\n\nDi hari bahagia kami. Terima kasih sudah jadi teman yang selalu bisa diandalkan. Can''t wait to celebrate with you!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('william-surya', 'William Surya', 'William', 'Halo bosq, semoga kamu mendapatkan jodoh, wibunya di kurangi, tapi terima kasih selalu menjadi teman yang baik dan kocak selama waktu di EZ Code. hahaha.\n\nSekarang kami mau mulai chapter baru dalam hidup, dan kehadiran teman seperti kamu akan membuat hari kami semakin bermakna kamu bisa lihat streaming. Thanks for being an incredible friend!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('liko-elyn', 'Liko & Elyn', 'Liko & Elyn', 'Halo ce Elyn dan ko Liko, terima kasih sudah mengajarkan aku banyak hal, aku percaya kita ketemu bukan suatu kebetulan. Terima kasih juga menjadi cerminan keluarga yang baik didalam Tuhan sebelum aku menikah, hehe. Terima kasih banyak pokoknya sudah bantu banyak hal dan membukakan pintu jawaban untuk aku dari Tuhan. Sudah membantu dan menjadi terang buat aku.\n\nSelama di dubai aku melihat prespektif yang baru didalam hidup aku, Terima kasih yang tidak terhingga 😊, sebentar lagi kami akan menikah, kami tunggu kehadiran atau nonton streaming. May Liko`s family always be blessed and guided by the Lord');

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
