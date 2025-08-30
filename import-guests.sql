
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
VALUES ('andy', 'Andy', 'Andy', 'Terima kasih sudah menjadi bagian dari keluarga rohani kami di SIB. Perjalanan iman kita bersama telah membentuk siapa kami hari ini, dan kami sangat bersyukur untuk setiap doa, dukungan, dan persaudaraan yang telah kita bangun bersama.\n\nKehadiranmu di hari bahagia kami akan melengkapi sukacita yang Tuhan berikan. Kiranya berkat Tuhan yang telah menyatukan kami juga menyertai perjalanan hidupmu.');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('abednego', 'Abednego', 'Abednego', 'Brother di SIB, terima kasih sudah menjadi saudara seiman yang selalu menguatkan. Dalam setiap ibadah dan persekutuan, kamu telah menjadi berkat bagi kami.\n\nKami percaya Tuhan yang telah mempertemukan kita dalam satu keluarga rohani juga akan terus menyatukan kita dalam kasih-Nya. Kehadiranmu sangat berarti bagi kami.');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('liana', 'Liana', 'Liana', 'Saudari terkasih di SIB, terima kasih untuk setiap dukungan dan doa yang telah kamu berikan. Persaudaraan kita dalam Kristus adalah anugerah yang tak ternilai.\n\nDi hari bahagia kami, kehadiranmu akan menjadi berkat tersendiri. Kiranya sukacita yang kami rasakan juga menjadi sukacitamu.');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('celine-sib', 'Celine', 'Celine', 'Dear Celine, perjalanan rohani kita di SIB telah mengajarkan kami arti persaudaraan sejati dalam Kristus. Terima kasih sudah menjadi teman yang selalu ada dalam suka dan duka.\n\nKami sangat berharap kamu bisa hadir dan merayakan berkat Tuhan bersama kami. Your presence means the world to us!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('ongky-hana', 'Ongky & Hana', 'Ongky & Hana', 'Pasangan terkasih dari SIB! Melihat perjalanan rumah tangga kalian telah menginspirasi kami. Terima kasih sudah menjadi teladan dan sahabat yang luar biasa.\n\nKami sangat bersyukur bisa berbagi kebahagiaan ini dengan kalian. Kiranya Tuhan terus memberkati rumah tangga kalian seperti Dia memberkati kami.');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('jefry', 'Jefry', 'Jefry', 'Brother Jefry, dari pelayanan bersama di SIB sampai persahabatan di luar gereja, kamu telah menjadi saudara yang sangat berarti bagi kami.\n\nTerima kasih untuk setiap nasihat, doa, dan dukungan yang kamu berikan. Kehadiranmu akan melengkapi kebahagiaan kami di hari yang special ini.');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('nafalia', 'Nafalia', 'Nafalia', 'Nafalia sayang, persaudaraan kita di SIB telah mengajarkan kami tentang kasih yang tulus. Terima kasih sudah menjadi saudari yang selalu membawa sukacita.\n\nKami sangat berharap kamu bisa hadir dan merayakan momen bersejarah ini bersama kami. Tuhan memberkati!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('vivian', 'Vivian', 'Vivian', 'Dear Vivian, pertemanan kita di SIB adalah salah satu berkat terbesar dalam hidup kami. Terima kasih sudah menjadi teman yang selalu mendukung dan mendoakan.\n\nDi hari pernikahan kami, kehadiranmu akan membuat momen ini semakin bermakna. We can''t wait to celebrate with you!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('benyamin', 'Benyamin', 'Benyamin', 'Bro Benyamin, pelayanan kita bersama di SIB telah mempererat persaudaraan kita. Terima kasih sudah menjadi partner yang bisa diandalkan dalam melayani Tuhan.\n\nKami sangat bersyukur bisa berbagi sukacita ini denganmu. Kehadiranmu sangat berarti bagi kami!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('andre', 'Andre', 'Andre', 'Andre, brother in Christ! Perjalanan iman kita di SIB telah penuh dengan momen-momen berharga. Terima kasih sudah menjadi sahabat yang selalu ada.\n\nKami berharap kamu bisa hadir dan ikut merayakan berkat Tuhan dalam hidup kami. Your presence will complete our joy!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('ferry', 'Ferry', 'Ferry', 'Bro Ferry, dari ibadah youth sampai sekarang, persahabatan kita telah bertumbuh dalam Kristus. Terima kasih untuk setiap momen yang kita lewati bersama.\n\nDi hari bahagia kami, kehadiranmu akan menjadi berkat yang luar biasa. Sampai jumpa di altar!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('regan', 'Regan', 'Regan', 'Regan, saudara sepelayanan! Terima kasih sudah menjadi teman yang selalu membawa semangat dalam setiap pelayanan di SIB.\n\nKami sangat berharap kamu bisa hadir dan merayakan kasih Tuhan yang menyatukan kami. See you at our wedding!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('felix', 'Felix', 'Felix', 'Felix, brother! Persaudaraan kita di SIB telah mengajarkan kami tentang kesetiaan dalam persahabatan. Terima kasih sudah selalu ada untuk kami.\n\nKehadiranmu di hari pernikahan kami akan melengkapi sukacita yang Tuhan berikan. Can''t wait to see you there!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('jerry-young', 'Jerry Young', 'Jerry', 'Brother Jerry! Dari Pasukan Elang sampai hari ini, persahabatan kita sudah melewati begitu banyak hal. Ingat waktu kita latihan bareng sampai malam? Those were the days!\n\nSekarang kami mau memulai chapter baru, dan gak lengkap rasanya tanpa kehadiran brother yang sudah seperti saudara kandung. You''ve been with us through thick and thin, dan kami sangat berharap kamu bisa hadir di hari spesial kami!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('surya', 'Surya', 'Surya', 'Surya bro! Pasukan Elang Brotherhood forever! Dari latihan keras bareng, sampai saling support di masa-masa sulit, kamu selalu ada untuk kami.\n\nPernikahan kami gak akan lengkap tanpa kehadiran salah satu brother terbaik dari Pasukan Elang. Thank you for being an amazing friend all these years. See you at the wedding, soldier!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('michael-joshua', 'Michael Joshua', 'Michael', 'Michael! Our Pasukan Elang brother! Persahabatan kita udah teruji waktu dan jarak. Dari masa-masa training yang berat sampai sekarang, we''ve grown so much together.\n\nKami sangat bersyukur punya brother seperti kamu dalam hidup kami. Your presence at our wedding would mean everything to us. Let''s make more memories together!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('daniel-wongso', 'Daniel Wongso', 'Daniel', 'Daniel bro! Pasukan Elang never dies! Ingat motto kita? Kebersamaan kita di Pasukan Elang udah membentuk persaudaraan yang gak akan pernah pudar.\n\nDi hari bahagia kami, we need our brother there with us. Terima kasih sudah jadi sahabat yang selalu bisa diandalkan. Can''t wait to celebrate with you!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('tegar', 'Tegar', 'Tegar', 'Tegar, my brother from Pasukan Elang! Kita udah through so much together - dari training pagi yang melelahkan sampai momen-momen victory yang unforgettable.\n\nSekarang kami mau start new mission dalam hidup, dan butuh support dari brother seperti kamu. Your presence akan membuat hari kami semakin sempurna!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('gabriel', 'Gabriel', 'Gabriel', 'Gabriel! Pasukan Elang pride! Brotherhood kita udah melewati berbagai ujian dan tantangan. You''ve always been there, dan itu sangat berarti buat kami.\n\nWe''re starting our new journey, dan gak bisa bayangin celebrate tanpa salah satu brother terbaik kami. See you at the wedding, soldier!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('abraham-ellen', 'Abraham & Ellen', 'Abraham & Ellen', 'Abraham & Ellen! Teman seperjuangan kuliah yang sudah jadi keluarga! Dari ngerjain tugas bareng sampai begadang jelang ujian, kalian selalu ada untuk support kami.\n\nSekarang kami mau memulai kehidupan baru, dan kehadiran kalian akan membuat moment ini semakin special. Thank you for being such amazing friends throughout our college years and beyond!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('sigit', 'Sigit', 'Sigit', 'Sigit bro! Dari mata kuliah killer sampai skripsi yang bikin pusing, kita udah lewatin semuanya bareng. Persahabatan kita udah teruji akademis dan kehidupan!\n\nTerima kasih sudah jadi teman yang selalu ada, baik di masa kuliah maupun setelahnya. We can''t wait to share our special day with you!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('erwin', 'Erwin', 'Erwin', 'Erwin! Partner in crime di masa kuliah! Dari presentasi kelompok sampai project yang deadline-nya mepet, kita selalu bisa rely on each other.\n\nPersahabatan kita udah melewati masa kuliah dan terus berlanjut sampai sekarang. Your presence at our wedding would complete our happiness!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('william-surya', 'William Surya', 'William', 'William! Bro, ingat masa-masa kita di kampus? Dari kantin sampai perpus, kita udah share so many memories together.\n\nSekarang kami mau mulai chapter baru dalam hidup, dan kehadiran teman seperti kamu akan membuat hari kami semakin bermakna. Thanks for being an incredible friend!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('raymond', 'Raymond', 'Raymond', 'Raymond! College buddy yang udah jadi lifetime friend! Kita udah through ups and downs bareng, dari nilai jelek sampai kelulusan yang membanggakan.\n\nKami sangat bersyukur punya teman seperti kamu. Your presence at our wedding akan melengkapi kebahagiaan kami. See you there, bro!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('theo', 'Theo', 'Theo', 'Theo bro! Dari ruang kelas sampai kehidupan nyata, persahabatan kita terus berkembang. Thank you for all the memories and support throughout the years.\n\nKami sangat excited untuk share this special moment dengan salah satu sahabat terbaik dari masa kuliah. Can''t wait to celebrate with you!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('tangtang', 'Tangtang', 'Tangtang', 'Tangtang! Pertemanan kita mungkin unexpected tapi jadi salah satu berkat terbesar dalam hidup kami. Your unique perspective dan humor selalu brighten our days.\n\nKami sangat berharap kamu bisa hadir di hari special kami. Your presence akan membuat celebration kami semakin meriah!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('liko-elyn', 'Liko & Elyn', 'Liko & Elyn', 'Liko & Elyn! Rekan kerja yang udah jadi keluarga! Dari deadline yang ketat sampai celebration project success, kalian selalu jadi support system terbaik.\n\nKalian udah melihat journey kami dari dekat, dan sekarang kami mau share happiness ini dengan kalian. Thank you for being amazing colleagues and friends!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('marry', 'Orang Tua Elyn (Marry)', 'Om & Tante', 'Om dan Tante yang terkasih, kalian sudah menjadi figur orang tua bagi kami di tempat kerja. Nasihat dan bimbingan kalian sangat berharga dalam membentuk kami menjadi pribadi yang lebih baik.\n\nKami sangat berharap kalian bisa hadir dan memberikan berkat di hari bahagia kami. Kehadiran kalian akan membuat momen ini semakin bermakna.');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('brian', 'Brian', 'Brian', 'Brian! Partner kerja yang luar biasa! Dari brainstorming session sampai coffee break conversations, you''ve made work feel less like work and more like fun.\n\nKami sangat bersyukur punya colleague seperti kamu. Your presence at our wedding akan complete our joy. Thanks for being an awesome friend!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('garren', 'Garren', 'Garren', 'Garren bro! Working with you has been an absolute pleasure. Dari project yang challenging sampai office jokes yang bikin ngakak, you''ve been there through it all.\n\nSekarang kami mau celebrate milestone penting dalam hidup kami, dan kehadiran kamu akan make it even more special. See you at the wedding!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('triana', 'Triana', 'Triana', 'Triana! Having you as a colleague has been such a blessing. Your support dan encouragement selalu membantu kami get through tough days at work.\n\nKami sangat excited untuk share our special day dengan kamu. Thank you for being not just a great colleague, but also a wonderful friend!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('djordi', 'Djordi', 'Djordi', 'Djordi! Teman kuliah yang selalu bawa positive vibes! Kamu selalu bisa bikin suasana jadi lebih fun, even during stressful exam periods.\n\nWe''re so grateful untuk persahabatan kita, dan we can''t wait untuk celebrate dengan kamu di hari special kami. Your energy akan perfect untuk wedding party kami!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('candra-niar', 'Candra & Niar', 'Candra & Niar', 'Candra & Niar! Japfa family yang luar biasa! Kalian udah jadi bagian penting dari professional journey kami. Dari project pertama sampai sekarang, it''s been an amazing ride.\n\nKami sangat bersyukur bisa bekerja dengan kalian dan build friendship beyond office walls. Your presence at our wedding would mean so much to us!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('renza', 'Renza', 'Renza', 'Renza! Japfa brother! Working with you has taught us so much about teamwork dan dedication. You''ve been an incredible colleague and friend.\n\nSekarang kami mau start new chapter, dan having you there to celebrate with us would be amazing. Thank you for all the support!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('priyanto', 'Priyanto', 'Priyanto', 'Pak Priyanto! Your leadership dan guidance di Japfa has been invaluable. Kamu bukan cuma boss yang baik, tapi juga mentor yang inspiring.\n\nKami sangat berharap Bapak bisa hadir dan share this joyful moment dengan kami. Your blessing would mean everything to us!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('martha', 'Martha', 'Martha', 'Martha! Japfa sister! Your warmth dan kindness selalu make office feel like home. Thank you for being such a supportive colleague.\n\nWe''re so excited untuk share our happiness dengan kamu. Your presence akan make our special day even brighter!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('tian-istri', 'Tian & Istri', 'Tian & Istri', 'Tian & Istri! Having couple friends like you di Japfa has been wonderful. Kalian inspire kami dengan harmony dan love dalam relationship kalian.\n\nKami sangat berharap kalian bisa join us dalam celebrating our union. Let''s make beautiful memories together!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('evan', 'Evan', 'Evan', 'Evan bro! Japfa warrior! Kita udah through many battles together di office, dan you''ve always been reliable partner.\n\nNow we''re entering new phase dalam hidup, dan your presence would complete our celebration. Thanks for being awesome colleague and friend!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('hidayat', 'Hidayat', 'Hidayat', 'Pak Hidayat! Your wisdom dan experience di Japfa selalu jadi pembelajaran berharga untuk kami. Thank you for all the guidance.\n\nKami would be honored kalau Bapak bisa hadir di wedding kami. Your blessing dan presence sangat berarti untuk kami!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('ageng', 'Ageng', 'Ageng', 'Ageng! Japfa family member yang selalu bring positive energy! Your enthusiasm dan dedication always inspire us.\n\nWe can''t wait untuk celebrate dengan kamu. Thank you for being such great colleague and friend!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('celine-japfa', 'Celine', 'Celine', 'Celine! Your cheerfulness di Japfa selalu brighten even the most stressful days. Thank you for being ray of sunshine di office!\n\nKami sangat excited untuk share our joy dengan kamu. Your presence akan make our wedding even more special!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('bella', 'Bella', 'Bella', 'Bella sayang! Sahabat Ayu yang paling setia! Dari curhat tengah malam sampai shopping bareng, kamu selalu ada untuk Ayu. You''ve seen her at her best and worst, dan selalu support unconditionally.\n\nSekarang Ayu mau start new chapter dengan Joseph, dan dia sangat butuh best friend-nya di sampingnya. Thank you for being sister Ayu never had!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('cicil', 'Cicil', 'Cicil', 'Cicil! Ayu''s partner in crime! Dari jalan-jalan random sampai deep conversation tentang life, you''ve been there through everything.\n\nAyu gak bisa bayangin hari special ini tanpa kehadiran kamu. You''re not just friend, you''re family! Can''t wait untuk kamu jadi bagian dari moment penting ini!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('leo', 'Leo', 'Leo', 'Leo! You''ve been such amazing friend to Ayu. Dari nemenin dia di saat sedih sampai celebrate happy moments together, you''re truly special.\n\nAyu sangat bersyukur punya teman seperti kamu, dan your presence at our wedding akan make everything perfect!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('kak-elly', 'Kak Elly', 'Kak Elly', 'Kak Elly tersayang! Kamu bukan cuma teman Ayu, tapi juga kakak yang selalu protect dan guide dia. Your advice selalu tepat dan meaningful.\n\nAyu sangat butuh Kakak di hari penting ini. Thank you for being wonderful sister figure dalam hidup Ayu!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('ce-lili', 'Ce Lili', 'Ce Lili', 'Ce Lili! Ayu selalu cerita how much you mean to her. Dari advice tentang relationship sampai life in general, you''ve been her guiding light.\n\nKami would be so happy kalau Cece bisa hadir dan share this beautiful moment dengan kami. Ayu needs her big sister there!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('yute', 'Yute', 'Yute', 'Yute sayang! Friendship kamu dengan Ayu is one of kind. Dari laugh sampai tears, kalian udah through everything together.\n\nAyu''s big day won''t be complete tanpa salah satu best friend-nya. We''re so excited untuk celebrate dengan kamu!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('chipeido', 'Chipeido', 'Chipeido', 'Chipeido! Your loyalty dan friendship mean world to Ayu. Kamu selalu ada whenever she needs someone to talk to.\n\nThank you for being such wonderful friend. Ayu can''t wait untuk share her happiness dengan kamu di wedding day!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('azka', 'Azka', 'Azka', 'Azka bro! Alumni SMK yang masih solid! Dari seragam putih abu-abu sampai sekarang udah pada sukses, persahabatan kita gak pernah pudar.\n\nIngat masa-masa kita bolos bareng? Haha! Sekarang kami mau nikah, dan butuh kehadiran brother dari SMK. You''ve been part of our youth, now be part of our future!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('gerry', 'Gerry', 'Gerry', 'Gerry! SMK brother! Masa-masa SMK kita penuh dengan kenangan yang unforgettable. Dari ujian sampai prom night, we''ve been through it all.\n\nSekarang kami mau start family, dan kehadiran teman lama seperti kamu akan make it more meaningful. Thanks for keeping friendship alive all these years!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('sherly', 'Sherly', 'Sherly', 'Sherly sayang! Sahabat dari SMK yang selalu setia! Dari gossip di kantin sampai support each other through heartbreaks, you''ve been amazing friend.\n\nKami sangat bersyukur masih keep in touch sampai sekarang. Your presence at our wedding akan bring back beautiful memories dan create new ones!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('aris', 'Aris', 'Aris', 'Aris bro! SMK squad forever! Kita udah lewatin teenage years bareng dengan all its drama dan adventure. Those were golden days!\n\nSekarang kami mau enter adulthood untuk real dengan menikah. Having old friend like you there would mean everything to us!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('nurmawati', 'Nurmawati', 'Nurmawati', 'Nurmawati! Teman SMK yang luar biasa! Your kindness dan friendship during school years sangat berkesan untuk kami.\n\nKami would love untuk reunite di wedding kami. Let''s reminisce old times dan celebrate new beginnings together!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('indah', 'Indah', 'Indah', 'Indah! Beautiful soul dari SMK days! Kamu selalu jadi teman yang supportive dan caring throughout school years.\n\nWe''re so happy masih bisa maintain friendship sampai sekarang. Can''t wait untuk celebrate dengan kamu!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('nanang', 'Nanang', 'Nanang', 'Nanang bro! From SMK troublemaker to successful adult! Haha! Kita udah grow so much since those days.\n\nYour presence at our wedding akan remind us of where we came from dan how far we''ve come. See you there, brother!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('putra', 'Putra', 'Putra', 'Putra! SMK brotherhood still going strong! Dari main futsal bareng sampai sekarang, you''ve been constant friend dalam hidup kami.\n\nKami excited untuk share this milestone dengan teman yang udah kenal kami dari jaman masih ABG. Thanks for everything!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('dian', 'Dian', 'Dian', 'Dian! Sweet friend dari SMK! Your friendship has been blessing sejak school days sampai sekarang.\n\nKami would be honored kalau kamu bisa join our celebration. Let''s make new memories while cherishing old ones!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('nurodotul', 'Nurodotul', 'Nurodotul', 'Nurodotul! Your cheerful personality di SMK selalu bikin hari-hari lebih colorful. Thank you for being wonderful friend!\n\nWe can''t wait untuk reunite di wedding kami. Your smile dan energy akan perfect untuk celebration!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('erlis', 'Erlis', 'Erlis', 'Erlis! SMK memories wouldn''t be same without you! Dari study group sampai hang out sessions, you made school life better.\n\nKami sangat berharap kamu bisa hadir dan celebrate dengan kami. Alumni SMK must stick together!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('yosua-kevin', 'Yosua Kevin', 'Yosua', 'Yosua! Childhood friend yang literally grow up bareng kami! Dari main kelereng di depan rumah sampai sekarang udah pada dewasa, what a journey!\n\nKamu udah jadi saksi hidup perjalanan kami dari kecil. Sekarang kami mau bikin keluarga sendiri, dan it wouldn''t feel right tanpa kehadiran brother yang udah kenal kami since day one!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('yohanes', 'Yohanes', 'Yohanes', 'Yohanes! Brother dari kecil! Kita udah through everything together - dari naik sepeda pertama kali sampai heartbreak pertama.\n\nPersahabatan kita is proof that true friendship lasts lifetime. We need you there on our big day, just like you''ve been there all our lives!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('arista', 'Arista', 'Arista', 'Arista! Growing up dengan kamu has been such blessing. Dari main masak-masakan sampai sekarang beneran masak untuk keluarga!\n\nYour friendship since childhood sangat berharga untuk kami. Can''t imagine celebrating without childhood friend yang udah jadi family!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('stefani-kristina', 'Stefani Kristina', 'Stefani', 'Stefani! Dari teman main jadi saksi perjalanan hidup! You''ve seen us grow dari anak kecil jadi adults yang ready untuk married life.\n\nThank you for being constant dalam hidup kami. Your presence akan make our wedding feel like family reunion!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('putri-yohanes', 'Putri Yohanes', 'Putri', 'Putri! Teman CG dari kecil yang grow in faith bareng kami! Dari Sunday school sampai youth service, we''ve shared spiritual journey together.\n\nKami bersyukur Tuhan unite us since young age. Your presence dan prayers sangat berarti untuk kami!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('hwat-boss', 'Hwat & Boss Gadai', 'Hwat & Boss', 'Hwat & Boss! Business partners yang luar biasa! Kalian bukan cuma partners tapi juga mentors yang teach us about business dan life.\n\nYour trust dan support dalam business ventures kami sangat berarti. We would be honored kalau kalian bisa hadir dan celebrate dengan kami!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('ipnu-subroto', 'Ipnu Subroto', 'Pak Ipnu', 'Pak Ipnu! Mentor yang sangat berharga! Your guidance dalam business world has shaped kami jadi entrepreneurs yang better.\n\nKami sangat berharap Bapak bisa hadir dan give blessing untuk new chapter dalam hidup kami. Your wisdom selalu kami hargai!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('seno', 'Seno', 'Seno', 'Seno bro! Dari random meeting jadi good friends - that''s beauty of unexpected friendship! You bring unique perspective dalam hidup kami.\n\nWe''re grateful untuk friendship yang unexpected tapi meaningful ini. Can''t wait untuk celebrate dengan kamu!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('reza', 'Reza', 'Reza', 'Reza! From stranger to brother! Pertemuan kita mungkin random, tapi friendship yang terbentuk adalah genuine dan lasting.\n\nThank you for adding color ke hidup kami dengan cara yang unexpected. Your presence akan make our wedding lebih meriah!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('yohanna-valencia', 'Yohanna Valencia', 'Yohanna V', 'Yohanna! SMK sister yang selalu supportive! Your encouragement dan friendship throughout school years dan beyond sangat berarti.\n\nKami would love untuk share our joy dengan kamu. Thank you for being such wonderful friend all these years!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('yohanna-leba', 'Yohanna Leba', 'Yohanna L', 'Yohanna! Another amazing friend dari SMK! Having two Yohannas dalam hidup kami is double blessing!\n\nYour friendship since school days sangat berharga. We can''t wait untuk reunite dan celebrate together!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('yunica', 'Yunica', 'Yunica', 'Yunica! Sweet soul dari SMK! Your gentle nature dan caring personality selalu make you special friend untuk kami.\n\nKami sangat berharap kamu bisa join celebration kami. Friends like you make life more beautiful!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('nabila', 'Nabila', 'Nabila', 'Nabila sayang! SMK bestie yang selalu ada! Your friendship has been constant source of joy dan support.\n\nDari teenage drama sampai adult life, you''ve been there. Now we want you there for our biggest milestone!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('ika-andrea', 'Ika & Andrea', 'Ika & Andrea', 'Ika & Andrea! Couple goals dari SMK! Seeing your love story inspire kami untuk believe in lasting love.\n\nKalian proof that high school sweethearts bisa build beautiful life together. We''d love untuk celebrate dengan fellow couple yang understand the journey!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('ce-yola', 'Ce Yola', 'Ce Yola', 'Ce Yola! Partner in ministry yang luar biasa! Serving God bersama kamu has been privilege dan blessing dalam hidup kami.\n\nYour dedication dalam pelayanan inspire kami untuk serve better. We would be honored kalau Cece bisa hadir dan pray untuk new chapter kami!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('jacob', 'Jacob', 'Jacob', 'Jacob! Brother in ministry! Pelayanan bersama kamu has strengthened our faith dan friendship.\n\nThank you for being faithful servant dan friend. Your presence dan prayers at our wedding would mean so much!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('dody', 'Dody', 'Dody', 'Dody! Fellow servant dalam Kingdom work! Your passion untuk serving God inspire kami every day.\n\nKami bersyukur bisa serve alongside you. We''d love untuk share our joy dengan partner pelayanan yang setia!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('abdul', 'Abdul', 'Abdul', 'Abdul bro! Work colleague yang jadi real friend! Dari deadline stress sampai project success, you''ve been amazing partner.\n\nThank you for making work environment lebih enjoyable. Your presence at our wedding akan complete our happiness!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('ratna', 'Ratna', 'Ratna', 'Ratna! Your positivity di workplace selalu brighten our days. Thank you for being supportive colleague dan friend!\n\nKami would love untuk celebrate dengan kamu outside office setting. Let''s make happy memories together!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('vidy', 'Vidy', 'Vidy', 'Vidy! Best work partner ever! Your dedication dan teamwork make every project smoother dan enjoyable.\n\nWe''re grateful untuk friendship yang grow beyond office walls. Can''t wait untuk celebrate dengan kamu!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('surdive', 'Surdive', 'Surdive', 'Surdive! Colleague yang reliable dan fun! Working dengan kamu has been great experience untuk kami.\n\nThank you for all support dan friendship. We''d be thrilled kalau kamu bisa join our wedding celebration!');