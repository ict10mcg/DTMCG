// Period timings (24-hour format, 5th is interval)
const periodTimings = [
    { start: "00:30", end: "07:29", id: "No School" },
    { start: "07:30", end: "08:10", id: "period1" },
    { start: "08:11", end: "08:50", id: "period2" },
    { start: "08:51", end: "09:30", id: "period3" },
    { start: "09:31", end: "10:10", id: "period4" },
    { start: "10:11", end: "10:30", id: "period5" }, // Interval
    { start: "10:31", end: "11:10", id: "period6" },
    { start: "11:11", end: "11:50", id: "period7" },
    { start: "11:51", end: "12:30", id: "period8" },
    { start: "12:31", end: "23:59", id: "No School" }
];

// Teacher details (ID => Name, Subjects, Image)
const teachers = {
  // Main Subjects Teachers
  "170": { name: "Mrs. C. Kumara Nishantha", subjects: "Sinhala", img: "Image/170.PNG" },
  "201": { name: "Mr. Chathuranga G. H. N.", subjects: "Sinhala", img: "Image/201.PNG" },
  "61":  { name: "Mrs. Indrani S. T.", subjects: "Sinhala", img: "Image/61.PNG" },
  "121": { name: "Mr. Weerarathna Y. R. S. K.", subjects: "Sinhala", img: "Image/121.PNG" },
  "95":  { name: "Mrs. Pushpakumari Udeni", subjects: "Sinhala", img: "Image/95.PNG" },
  "55":  { name: "Mrs. Kusumalatha R. P.", subjects: "Religion", img: "Image/55.PNG" },
  "190": { name: "Rev. Sobitha A.", subjects: "Religion", img: "Image/190.PNG" },
  "157": { name: "Hinatigala Dinesh", subjects: "Buddhism", img: "Image/157.PNG" },
  "106": { name: "Mrs. Prabodini R. K. G. B.", subjects: "Science", img: "Image/106.PNG" },
  "54":  { name: "Mrs. Champika Darshi", subjects: "Science", img: "Image/54.PNG" },
  "130": { name: "Mrs. Upeksha Gayathri", subjects: "Science", img: "Image/130.PNG" },
  "63":  { name: "Mr. Gamage Iresh", subjects: "Science", img: "Image/63.PNG" },
  "92":  { name: "Mr. Nishantha Rasika", subjects: "Mathematics", img: "Image/92.PNG" },
  "186": { name: "L. A. Madumi Shashika", subjects: "Mathematics", img: "Image/186.PNG" },
  "136": { name: "Mr. Chathulakkahana Ditipa", subjects: "Mathematics", img: "Image/136.PNG" },
  "29":  { name: "Mr. Udara Nawarathna", subjects: "Mathematics", img: "Image/29.PNG" },
  "69":  { name: "Mrs. Iresha Sanjeewani", subjects: "Mathematics", img: "Image/69.PNG" },
  "131": { name: "Mrs. Udayangi Amali", subjects: "Mathematics", img: "Image/131.PNG" },
  "59":  { name: "Mrs. Lamahewa Bimba", subjects: "Mathematics", img: "Image/59.PNG" },
  "53":  { name: "Mrs. Senanayaka Badra", subjects: "Mathematics", img: "Image/53.PNG" },
  "75":  { name: "Mr. Mendis Janaka", subjects: "English", img: "Image/75.PNG" },
  "163": { name: "Mrs. Nilanga Siriwardana", subjects: "English", img: "Image/163.PNG" },
  "85":  { name: "Mr. Jagath Samarakoon", subjects: "English", img: "Image/85.PNG" },
  "107": { name: "Mr. Darshana Yasar", subjects: "English", img: "Image/107.PNG" },
  "60":  { name: "Mr. Gunasekara M. V. H. D.", subjects: "History", img: "Image/60.PNG" },
  "109": { name: "Mr. W. A. R. Wickramarachchi", subjects: "History", img: "Image/109.PNG" },
  "90":  { name: "Mr. Nallaperuma K. H.", subjects: "History", img: "Image/90.PNG" },

  // OPTION 01 Teachers
  "62":  { name: "Mrs. Chamari Thilini", subjects: "Geography / Tamil", img: "Image/62.PNG" },
  "84":  { name: "Mrs. Dilrukshi R.", subjects: "Civics", img: "Image/84.PNG" },
  "120": { name: "Rev. Mapalagama Nandasiri", subjects: "Tamil", img: "Image/120.PNG" },
  "74":  { name: "Mrs. Kumari K. L. V.", subjects: "Commerce", img: "Image/74.PNG" },
  "181": { name: "Mr. Weerarathna Y. J. / Y. S.", subjects: "Commerce", img: "Image/181.PNG" },
  "161": { name: "Mr. Weerarathna Y. S.", subjects: "Commerce", img: "Image/161.PNG" },
  "119": { name: "Mr. Paranavithana Udayakumara", subjects: "Commerce", img: "Image/119.PNG" },
  "68":  { name: "Mrs. Dilani Thusha M.", subjects: "Commerce", img: "Image/68.PNG" },
  "86":  { name: "Mrs. Sewwandi G.", subjects: "Geography", img: "Image/86.PNG" },
  "08":  { name: "Mrs. Rathnayaka Niluka", subjects: "Japanese", img: "Image/08.PNG" },
  "105": { name: "Mrs. Kahaduwa Nisha", subjects: "German", img: "Image/105.PNG" },
  "145": { name: "Miss. Sandeepani Kasuni", subjects: "Option Subject", img: "Image/145.PNG" },
  "171": { name: "Mrs. Weerasena O. W. D. D.", subjects: "Home Science", img: "Image/171.PNG" },
  "27":  { name: "Mrs. Priyangika Nirosha", subjects: "Option Subject", img: "Image/27.PNG" },

  // OPTION 02 Teachers
  "123": { name: "Mr. Samantha J. D.", subjects: "Dancing", img: "Image/123.PNG" },
  "23":  { name: "Mr. Chamara Roshan", subjects: "Western Music", img: "Image/23.PNG" },
  "139": { name: "Mrs. Ilesinghe Sandamali", subjects: "Eastern Music", img: "Image/139.PNG" },
  "118": { name: "Mr. Godagama Uditha", subjects: "English Literature", img: "Image/118.PNG" },
  "14":  { name: "Mr. Adikari A. M.", subjects: "Drama", img: "Image/14.PNG" },
  "162": { name: "Mr. Greston Kumara", subjects: "Art", img: "Image/162.PNG" },
  "56":  { name: "Mrs. Amani Liyanapathirana", subjects: "Art", img: "Image/56.PNG" },
  "100": { name: "Mrs. Himali Athukorala", subjects: "Sinhala Literature", img: "Image/100.PNG" },
  "177": { name: "Mrs. Gayashini D. J. N.", subjects: "Western Music", img: "Image/177.PNG" },

  // OPTION 03 Teachers
  "37":  { name: "Mr. Jayarathna Dinesh", subjects: "ICT", img: "Image/37.PNG" },
  "49":  { name: "Mr. Munasinghe Harischandra", subjects: "Health", img: "Image/49.PNG" },
  "64":  { name: "Mr. Sanjeewa Ishara", subjects: "ICT", img: "Image/64.PNG" },
  "124": { name: "Mrs. Narasinghe Nisali", subjects: "ICT", img: "Image/124.PNG" },
  "127": { name: "Mr. Sampath K. D. I.", subjects: "Technical / ICT", img: "Image/127.PNG" },
  "96":  { name: "Mr. Gunawardhana Mahesh", subjects: "Agriculture & Food Tech", img: "Image/96.PNG" },
  "126": { name: "Mrs. Hemali Vithanage", subjects: "Health", img: "Image/126.PNG" },
  "78":  { name: "Mrs. Nishani G.", subjects: "Aqua Science / Science", img: "Image/78.PNG" },
  "208": { name: "Miss Wasana Kumari Savini", subjects: "Home Science", img: "Image/208.PNG" },
  "MK":  { name: "Mr. Kalansuriya Malith Chanaka", subjects: "Health", img: "Image/MK.PNG" },
  "72":  { name: "Mrs. Thilakorathna Sandamalee", subjects: "Media", img: "Image/72.PNG" },
  "166": { name: "Mrs. Kumaragiri P. M. N. S.", subjects: "Agriculture", img: "Image/166.PNG" }
};
