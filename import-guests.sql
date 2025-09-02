
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
VALUES ('nafalia', 'nafalia', 'Nafalia', 'Halo Nafa,
Dulu kita pernah bikin video retreat bareng mbe micjos, surya dan anak2, panitia bareng dan organisasi yang lain bareng dan ternyata kamu salah satu temanku yang cukup baik sekaligus smart. Kadang aku masih heran gimana kamu bisa dapat nilai tinggi di beberapa praktikum kadang dewe aku yo minder kwkwkw. Tapi justru dari situ kamu membuat aku jadi sering berkaca, termotivasi, dan makin giat belajar.\n\n
Aku juga ingat waktu bareng anak-anak retreat, anak-anak PD, dan teman-teman sekelasmu yang aktif dan friendly—meski kadang aku sama Abed sering kena gojlokan. Aku juga pernah coba bantu kamu magang di tempat bosku dulu, karena aku pengen temenku juga bisa dapat kerjaan. Dan aku seneng banget lihat kamu sekarang makin berkembang di kantor barumu, walaupun entah itu bener-bener yang kamu mau atau bukan, haha.\n\n
Yang jelas, aku percaya kamu adalah wanita yang punya hal yang ingin di tuntaskan dalam hidupmu. Aku tahu setiap masalah kita nggak selalu mudah untuk dihadapi dan pikiran negatif kita selalu muncul, tapi aku percaya kamu bisa terus maju tanpa kehilangan sebuah pengharapan. Aku berdoa supaya kamu semakin sukses, ditinggikan Tuhan dalam pekerjaanmu, hubunganmu, dan keluargamu atau semuanya hal di pulihkan.');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('benyamin', 'benyamin', 'benyamin', 'Halo ben, terima kasih sudah menjadi teman baik waktu kuliah, kita pernah sharing keuangan juga dan pekerjaan kantoran, terima kasih juga dulu sempat carry aku pas tugas-tugas kuliah, haha. Aku sempat berpikir yak opo carane pinter koyok awakmu kwkw. Tapi aku ya aku bersyukur masih ada temen yang dulu bisa menajamkan satu sama lain dan membuka pintu kerjaan dulu buat aku bisa part time nde ez code atau sharing proyek yang lain.\n\nKamu bisa hadir atau nonton streaming di hari bahagia kami jadi melengkapi sukacita yang Tuhan berikan. Kiranya berkat Tuhan juga menyertai perjalanan hidupmu dan kamu dapat menemukan apa yang kamu cari!.');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('abednego', 'Abednego', 'Abednego', 'Terima kasih sudah menjadi teman sharing yang baik bed. Dalam setiap hal yang kamu lakukan menjadi pengalaman yang baik dan bertumbuh buat aku. aku belajar banyak mengenai kamu dunia sosial, dan keseruan yang kita rasakan, pedas, manis, asem, kecewa dan bahagia justru menajamkan satu sama lain. Terima kasih sudah menjadi teman yang baik, dengan adanya kamu dan kosmu aku merasa gak kesepian tapi tolong jangan ngekos di tempat yang luasnya kayak kamar mandi lol, bahkan tikus sempat masuk juga sampe ngira itu kamar mandi. Tapi aku bersyukur bed punya temen mbe kamu, berhubung aku juga gtw dimana dubai, berau atau surabaya, jadi kita stay in touch aja bed\n\nKami percaya Tuhan yang telah mempertemukan kita untuk saling menajamkan, aku juga berharap kamu dapat menemukan pekerjaan yang baik dan pasangan yang baik bed.');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('liana', 'Liana', 'Liana', 'Terima kasih ce triana sudah bantu aku dan dukung aku dikala aku bingung, menjadi pantutan satu satunya teman baik yang mempunya integritas didalam hidup, gak ikut judi dan aneh-aneh hahaha. Gila sih aku tanpa cece wes jadi depresi dan gak tau mau kemana, cece cocok jadi penuntun jalan orang tersesat gitu kwkwkw. Tapi aku bersyukur seh punya temen seperti cece buaaikkk poll, aku bangga seh bisa kenal sama cece. Cece jadi temen sharing yang bagus dan pendengar ya bagus walaupun aku tau cece agak strict dirumah tapi aku berdoa yang terbaik buat cece.\n\nDi hari bahagia kami, aku harap kehadirannya tapi karena jauh cece bisa liat streaming. Kiranya sukacita yang aku rasakan juga menjadi sukacitamu. Semoga cece mendapatkan jawaban apa yang kamu cari dan menemukannya. Amin!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('celine', 'Celine', 'Celine', 'Halo Celine Angelina,
\n\nAku masih inget dulu aku pernah ikut panitia Miss Kampus. Tapi aku bener-bener gak nyangka pas waktu kamu latihan nyanyi suaramu bisa sebagus itu. Dalam hati aku langsung mikir, “Gila, keren banget anak ini!”
\n\nSuaramu bagus banget cel, sama indahnya dengan sikapmu. Kamu selalu jadi cerminan yang baik bagi sekelilingmu. Aku masih inget banget, bahkan sama orang yang belum kamu kenal pun kamu tetap baik smaa orang, tulus dan punya integritas.
\n\nItu jadi contoh besar buat aku, untuk selalu belajar mengandalkan Tuhan.
\n\nTerima kasih juga karena sudah jadi teladan yang baik buat aku. Kami sangat berharap kamu bisa hadir atau menonton kami di live streaming. Your presence means the world to us!
\n\nDoa terbaik buat kamu, sukses terus jadi coach nyanyi dan juga dalam pelayananmu di GMS. God bless you and your family! 🙏✨');

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
VALUES ('liko-elyn', 'Liko & Elyn', 'Liko & Elyn', 'Halo ce Elyn dan ko Liko, terima kasih sudah mengajarkan aku banyak hal, aku percaya kita ketemu bukan suatu kebetulan. Terima kasih juga menjadi cerminan keluarga yang baik didalam Tuhan sebelum aku menikah, hehe. Terima kasih banyak pokoknya sudah bantu banyak hal dan membukakan pintu jawaban untuk aku dari Tuhan. Sudah membantu dan menjadi terang buat aku. Aku bersyukur banget punya pemimpin yang masih mau mengandalkan Tuhan dari setiap tindakan dan aktivitas yang ce elyn dan ko liko lakukan selalu mencerminkan buah-buah kasih baru yang buat aku pelajari.\n\nSelama di dubai aku melihat prespektif yang baru didalam hidup aku dan kehangatan keluarga dubai walaupun cuman sementara, Terima kasih yang tidak terhingga 😊, sebentar lagi kami akan menikah, kami tunggu kehadiran atau nonton streaming. May Liko`s family always be blessed and guided by the Lord Jesus!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('phang-meri', 'Phang Djong & Meri Chen', 'Phang Djong & Meri Chen', 'Halo Om dan Tante,
\n\nTerima kasih banyak untuk semua perhatian yang sudah Om dan Tante tunjukkan selama Joseph di Dubai. Masakan Tante selalu jadi hal yang spesial dan bikin betah hahaha, hawce! rasanya seperti berada di rumah sendiri mencari nasi dimana-mana. Aku juga sangat bersyukur karena Tante sering ingetin untuk makan, itu bentuk perhatian yang tulus seperti mama sendiri. Tidak lupa juga terima kasih buat Om yang sudah mendoakan Joseph saat ulang tahun, doa itu sangat berarti dan menjadi penguatan yang besar buatku.
\n\nOm dan Tante sungguh menjadi cerminan kasih sayang orang tua yang baik—bukan hanya lewat perkataan, tapi juga lewat teladan hidup yang sederhana dan penuh kasih. Walaupun kebersamaan kita hanya sebentar, aku percaya Tuhan yang baik sedang menyertai setiap langkah Om dan Tante, dan menjadikan kalian pasangan yang indah di hadapan-Nya. Nasihat serta bimbingan yang kalian bagikan sangat berharga untukku, membantu membentuk aku menjadi pribadi yang lebih dewasa dan mengingatkan untuk terus berjalan sesuai firman Tuhan.
\n\nKami sangat berharap Om dan Tante bisa hadir langsung di pernikahan kami nanti. Tapi sekalipun tidak bisa, kami tetap senang jika Om dan Tante bisa ikut melalui streaming, karena doa dan kehadiran kalian sangat berarti bagi kami.');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('brian', 'Brian', 'Brian', 'Halo bro, terima kasih buat kita satu sama lain menajamkan satu sama lain, memberikan pengalaman yang baru setiap langkah kita, keseruan yang baru selama di dubai dan mendalami firman Tuhan setiap kali kita sharing pas berangkat kerja. Kadang lu menjadi figur yang saling menguatkan dan pribadi yang memberikan prespektif baru buat aku belajar, walaupun kita ketemu cuman bentar tapi gua bangga sih punya temen kayak lu, kayak cerita lu mau totalitas juga kasih semuanya buat adik-adik lu. Lu pengorbanan yang besar sebagai kakak buat adik-adik lu, tapi gua belajar bahwa lu gak ada alasan melayani Tuhan.\n\nAku sangat bersyukur punya teman seperti lu dan kiranya Tuhan akan menambahkan apa yang lu cari, apa yang lu dambakan dan apa yang lu ingin perjuangkan di hati lu selama ini. Your presence at our wedding akan complete our joy but you can streaming. Thanks for being an awesome friend!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('garren', 'Garren Solikin', 'Garren Solikin', 'Halo bang messi, makasi ya gar udah dipinjemin plastik packingnya lol tanpa lu kayanya gua kesusahan. Dari hal sederhana yang lu kasih, tapi juga jadi pengingat betapa tulusnya lu dalam memberikan barang lu ke orang lain. Semoga apa yang lu cari menjadi damai dan sejahtera didalam hidupmu.\n\nSekarang kami mau celebrate milestone penting dalam hidup kami, dan kehadiran kamu akan make it even more special but you can streaming. See you at the top, bro!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('triana', 'Triana', 'Triana', 'Halo ce, terima kasih banyak ya, untuk semua perhatian dan kebaikan yang sudah Cece tunjukkan. Aku ga menyangka dapat hadiah berupa mug dari Cece, rasanya sederhana tapi sangat berkesan. Hadiah itu bukan hanya sekadar barang, tapi juga jadi pengingat betapa tulusnya Cece dalam menghargai orang lain.\n\n
Aku juga mau mengucapkan terima kasih karena Cece selalu berusaha menjaga timeline, ritme kerja, dan lingkungan kita tetap sehat.\n\n
Aku tahu kita semua pasti pernah berada dalam situasi sulit, penuh tantangan, bahkan mungkin terasa berat sekali. Tapi aku percaya, seperti halnya Cece yang selalu menyebarkan semangat positif, selalu ada pengharapan baru yang Tuhan sediakan setiap harinya. Jadi jangan pernah kehilangan pengharapan itu, Ce. Teruslah melangkah dengan hati yang teguh, karena aku yakin kebaikan dan kerja keras Cece tidak akan pernah sia-sia.\n\nJadi bentar lagi kami akan menikah cece bisa datang tapi jauh sih, boleh juga kalau live streaming. Thank you for being not just a great colleague, but also a wonderful leader!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('djordi', 'Djordi', 'Djordi', 'Halo bosq, pedas, manis dan sing seger-seger kita rasakan, kwkwkw terima kasih sudah menjadi teman dan pendengar yang baik, saling menajamkan satu sama lain, kita ditempatkan di orang-orang yang percaya Tuhan supaya kita diasah dan ditempa menjadi lebih baik. Usaha dan bisnis kita di IT semoga diberikan pintu buat Tuhan bukakan 1000x \n\nI`m so grateful untuk perjalanan kita, dan Thank you bukan hanya teman, tapi teman yang awesome, ditunggu awakmu mbe ailen!');


INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('yunica', 'Yunica', 'yunica', 'Halo yun udah lama nih gak ketemu, hehe. Aku harap kamu baik-baik aja. Terima kasih menjadi teman dikala susah dan duka, bahagia dan kecewa. Tapi aku percaya Tuhan proses kita jadi lebih baik lagi untuk saling menajamkan di masa muda kita. \n\nI`m so grateful untuk perjalanan kita, dan Thank you bukan hanya teman, tapi teman yang awesome dan saling membangun, God bless you yun and your husband!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('elviana', 'elviana', 'Elviana Tjoa', 'Terima kasih ya, dulu Joseph banyak belajar dari Cece tentang fotografi. Dari sharing Cece, aku jadi lebih tahu seperti apa dunia kerja yang sebenarnya. Makasih juga karena Cece sudah jadi contoh senior yang baik dan profesional. Aku kagum banget sama skill Cece, terutama kerja kerasnya. Apalagi Cece selalu bisa klop bikin produk yang keren, ide-idenya inovatif, dan berani ngerjain hal-hal baru. Itu benar-benar menginspirasi aku sampe aku kepikiran gimana caranya aku kayak cece. hahaha.
\n\nAku juga tahu kehilangan Papa pasti jadi hal yang berat buat Cece. Tapi justru dari situ aku lihat bagaimana Cece jadi semakin berani, semakin kuat, dan tetap semangat menghadapi hari-hari. Itu bukti nyata kalau Tuhan terus menyertai Cece dalam setiap langkah.\n\nThank you for being not just a great colleague, but also a wonderful friend!');


INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('yosua', 'yosua', 'yosua', 'Halo ndoll, lama wes gak ketemu, terima kasih atas menjadi teman kecil yang dulu saling menajamkan satu sama lain, bertumbuh di gereja dan kamu salah satu yang membangun spiritualku menjadi lebih baik juga waktu kecil. Seru, Bahagia, Manis dan kecewa untuk saling menajamkan kita satu sama lain mbe (alm Deni). \n\nBtw, adekku nde jakarta kuliah sekarang, Thank you for being not just a great colleague, but also a wonderful friend!');


INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('renza', 'renza', 'Renza', ' Halo mas Renza,\n\nTerima kasih banyak sudah menjadi teman yang baik selama di Japfa. Mas Renza selalu jadi pendengar yang baik setiap kali aku sharing sesuatu, sekaligus juga sering berbagi pengalaman dan cerita. Aku juga berterima kasih karena Mas Renza sudah menyediakan katering harian, jadi bisa makan lebih enak dan teratur.
\n\nKehadiran Mas Renza bikin suasana di Japfa jadi lebih seru, apalagi dengan pengalaman Mas sebagai senior yang banyak memberikan contoh positif. Semoga kita bisa terus saling mendukung dan menjaga hubungan baik ini ke depannya.Thank you for being not just a great colleague, but also a wonderful friend!');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('Aris', 'Aris', 'Aris', ' Suwon cak Aris, sing biasane ngeterno aku muleh sekolah. Guyonan karo arek-arek liyane rasane pedes, manis, asem, pokoke lengkap koyok permen sedot. Kenangan bareng koe pas jaman SMK dadi salah siji sing tak eling terus, soale kowe nggawe saben dina luwih rame.
\n\nTerusno hobimu, cak, karo reog lan kabeh sing nggawe kowe iso explore dirimu luwih jero. Aku percaya nek kowe terus semangat, orderanmu bakal akeh nang endi-endi sampe tembus Singapura.
\n\nTak dungakne awakmu sukses terus, rejeki lancar, lan tetep eling kanca-kanca lawasmu sing biyen bareng golek kenangan nang bangku SMK.');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('nanang', 'nanang', 'Nanang', ' Suwon Nang, sing biyen tau nganterno aku sekolah. Katokmu nganti kencatol bolong wae dadi crito sing tak eling terus. Kowe yo tau dadi saksi tabrakan nganti tekan RS, pokoke momen sing ora iso ilang.

\n\nAku suwon tenan wis kerep ngancani. Lek gak ono awakmu, ra ono serune blas.

\n\nTak dungakno kerjoanmu tambah seger, rejeki lancar terus, lan awakmu tetep dadi kanca sing gawe rame nang endi wae.');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('gerry', 'gerry', 'Gerry', ' Halo Ger kwkwkw, eling yo jaman biyen dolen bareng arek-arek metu nang Tretes.
\n\nNgadem pinik nang villa, rasane asik pol, momen sing gak iso ilang saka memori. Lek gak ono kowe, ra seru blas kui, wong kowe wes dadi bagian gawe rame dewe.
\n\nPokoke makasih yo Ger, wes dadi kanca sing apik lan gawe kenangan sing lucu-lucu bareng.
\n\nTak dungakno uripmu tambah lancar, rejeki akeh, lan lek Gusti Allah maringi, mugo-mugo engko kowe iso entuk anak maneh sing sehat lan nggawa kabungahan anyar sak keluarga.');

INSERT INTO guests (slug, name, nickname, special_message) 
VALUES ('indah', 'indah', 'Indah', ' Halo Ndah, salah satu temenku cewek yang aktif banget nggak ada matinya. Aku masih inget dulu kamu ikut eskul eco, aktif di macem-macem kegiatan, rame banget kalo ada kamu.
\n\n
Tapi di sisi lain, kamu juga bisa jadi pendengar yang baik dan punya integritas. Aku masih inget kamu pernah cerita soal mau resign, dan menurutku itu langkah yang tepat. Di luar sana pasti banyak hal baru yang bisa bikin kamu berkembang, nggak cuma stuck di satu tempat.
\n\n
Sebelum itu juga aku inget banget waktu kamu ikut panitia yel-yel. Pas kamu latihan, aku sampai mikir dalam hati: “gila, energynya gak ada habisnya.”
\n\n
Terima kasih Ndah buat pertemanan kita dari sekolah sampai sekarang. Semoga apa pun yang kamu kejar dalam hidup ini selalu disertai Tuhan. Bentar lagi aku akan nikah karena kejauhan kamu bisa nonton streaming ndah. TYM');