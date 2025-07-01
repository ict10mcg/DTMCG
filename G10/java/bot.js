
    // Period timings (24-hour format, 5th is interval)
    const periodTimings = [
    { start: "00:30", end: "07:49", id: "No School" },
    { start: "7:50", end: "8:30", id: "period1" }, 
    { start: "8:31", end: "9:10", id: "period2" },
    { start: "9:11", end: "9:50", id: "period3" },
    { start: "9:51", end: "9:59", id: "period4" },
            { start: "10:00", end: "10:30", id: "period4" },
    { start: "10:31", end: "10:50", id: "Interval" }, // Interval
    { start: "10:51", end: "11:30", id: "period6" },
    { start: "11:31", end: "12:10", id: "period7" },
    { start: "12:11", end: "12:50", id: "period8" },
    { start: "12:51", end: "13:30", id: "period9" },
    { start: "13:31", end: "23:59", id: "No School" }
];


    // Teacher details (ID => Name and Subject)
   
 //namp na iaga
const teachers = {
  // Sinhala
  STIN: { name: "S. T. Indrani", subjects: "Sinhala, Optional-2", img: "Image/STIN.png" },//
  STIN2: { name: "S. T. Indrani", subjects: "Tutorials Sinhala", img: "Image/STIN.JPG" },//
  SANP: { name: "S. A. Nayana Preethi Kumari", subjects: "Sinhala", img: "Image/SANP.png" },//
  SWM: { name: "S. W. M. Krishantha", subjects: "Sinhala, Tutorials Sinhala", img: "Image/SWM.JPG" },
  NUWA: { name: "G. H. N. Chathuranga", subjects: "Sinhala", img: "Image/NUWA.JPG" },//
  MDMU: { name: "M.D.M.U. Pushpakumara", subjects: "Sinhala", img: "Image/MDMU.JPG" },
  YASK: { name: "Y.A.S.K. Wijerathna", subjects: "Sinhala", img: "Image/YASK.JPG" },
  HKD: { name: "H.K. Dinesh", subjects: "Sinhala", img: "Image/HKD.JPG" },
  // English
  IUG: { name: "I. U. Godagama", subjects: "English", img: "Image/IUG.JPG" },
  SDJP: { name: "S. D. R. J. P. Samarakoon", subjects: "English", img: "Image/SDJP.JPG" },
  SMYD: { name: "S. M. Y. Darshana", subjects: "English", img: "Image/SMYD.JPG" },
  HRNG: { name: "H.R.N. Gayantha", subjects: "English", img: "Image/HRNG.JPG" },
  KSJM: { name: "K.S.J. Mendis", subjects: "English", img: "Image/KSJM.JPG" },
  NS: { name: "N.Siriwardhana", subjects: "English", img: "Image/NS.JPG" },

  // Mathematics
  MKRC: { name: "M. K. Rasika Nishantha", subjects: "Mathematics", img: "Image/MKRC.JPG" },
  HKAU: { name: "H. K. A. Udayangi", subjects: "Mathematics", img: "Image/HKAU.JPG" },
  GHDC: { name: "T. H. D. Chathulakkana", subjects: "Mathematics", img: "Image/GHDC.JPG" },
  BPLA: { name: "B. P. Lamahewa", subjects: "Mathematics", img: "Image/BPLA.png" },
  BDSE: { name: "B. D. Senanayeka", subjects: "Mathematics", img: "Image/BDSE.JPG" },
  GISA: { name: "G. Iresha Sanjeewani", subjects: "Mathematics", img: "Image/GISA.JPG" },
  NMHS: { name: "N.M.U.S.K. Nawarathne", subjects: "Mathematics", img: "Image/NMHS.JPG" },


  // Buddhism
  KSRI: { name: "K. Sirisumana", subjects: "Buddhism, Buddhism Tutorial Sciences", img: "Image/KSRI.png" },
  MACH: { name: "Makumbura Chandraloka", subjects: "Buddhism", img: "Image/MACH.png" },
  DGSR: { name: "D. G. S. R. Dodangoda", subjects: "Buddhism, Science Practical", img: "Image/DGSR.JPG" },
  RPKU: { name: "R.P. Kusumalatha", subjects: "Buddhism", img: "Image/RPKU.png" },
  // Science
  SCI: { name: "D. G. S. R. Dodangoda", subjects: "Science", img: "Image/SCI.JPG" },
  NPAM: { name: "N. P. Amila Chaturika", subjects: "Science", img: "Image/NPAM.png" },
  WHG: { name: "W. H. G. Nishani", subjects: "Science", img: "Image/WHG.png" },
  HLDP: { name: "H. L. D. P. Champika", subjects: "Science, Tutorial Sciences", img: "Image/HLDP.JPG" },
  IAGA: { name: "I.A. Gamage", subjects: "Science, Tutorial Sciences", img: "Image/IAGA.JPG" },

  // History
  KHNL: { name: "K. H. Nallaperuma", subjects: "History, Tutriols History", img: "Image/KHNL.JPG" },
  MVHD: { name: "M. V. H. D. Gunasekara", subjects: "History", img: "Image/MVHD.JPG" },
  WARW: { name: "W. A. R. Wickramarachchi", subjects: "History, Tutriols History", img: "Image/WARW.JPG" },
  ASMA: { name: "A.S. Manoja", subjects: "History, Tutriols History", img: "Image/ASMA.JPG" },

  // Optional Subjects
  RDNR: { name: "R. D. N. Rathnayaka", subjects: "Optional 1", img: "Image/RDNR.JPG" },
  MWA: { name: "M. W. Ajith", subjects: "Optional-3", img: "Image/MWA.JPG" },
  WTKK: { name: "W. T. K. Koshali", subjects: "Optional-3", img: "Image/WTKK.JPG" },
  AMRA: { name: "A. M. Ranasingha Adikari", subjects: "Optional-2", img: "Image/AMRA.JPG" },
  NTWE: { name: "Nilmini Wewalwala", subjects: "Optional-2", img: "Image/NTWE.JPG" },
  PDKW: { name: "P. D. Kariyawasam", subjects: "Optional-2", img: "Image/PDKW.JPG" },
  MMGG: { name: "M. M. Gothami Gunapali", subjects: "Optional-2", img: "Image/MMGG.JPG" },
  ABCP: { name: "B. A. C. Priyakalum", subjects: "Optional-2", img: "Image/ABCP.JPG" },

  // Practical and Tutorials
  SCPR: { name: "D. G. S. R. Dodangoda", subjects: "Science Practical", img: "Image/SCPR.JPG" },
  LAB1: { name: "Lab1", subjects: "Science Practical", img: "Image/LAB1.JPG" },
  TUTS: { name: "H. L. D. P. Champika", subjects: "Tutorial Sciences", img: "Image/TUTS.JPG" },
  TUTH: { name: "M. V. H. D. Gunasekara", subjects: "Tutriols History", img: "Image/TUTH.JPG" },
  TUSI: { name: "S. T. Indrani", subjects: "Tutorials Sinhala", img: "Image/TUSI.JPG" },
  LIOB: { name: "MRS. Library", subjects: "Library", img: "Image/LIOB.JPG" }

};
