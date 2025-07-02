
    // Period timings (24-hour format, 5th is interval)
    const periodTimings = [
    { start: "00:30", end: "7:49", id: "No School" },
    { start: "7:50", end: "8:30", id: "period1" }, 
    { start: "8:30", end: "9:10", id: "period2" },
    { start: "9:10", end: "9:50", id: "period3" },
    { start: "9:50", end: "10.00", id: "period4" },
    { start: "10:00", end: "10:30", id: "period4" },


    { start: "10:30", end: "10:50", id: "period5" }, // Interval


    
    { start: "10:50", end: "11:30", id: "period6" },
    { start: "11:30", end: "12:10", id: "period7" },
    { start: "12:10", end: "12:50", id: "period8" },
    { start: "12:50", end: "13:30", id: "period9" },
    { start: "13:30", end: "23:59", id: "No School" }
];


    // Teacher details (ID => Name and Subject)
   
 //namp na iaga
const teachers = {
  // Sinhala
  STIN: { name: "S. T. Indrani", subjects: "Sinhala, Optional-2", img: "Image/STIN.png" },//
  STIN2: { name: "S. T. Indrani", subjects: "Tutorials Sinhala", img: "Image/STIN.PNG" },//
  SANP: { name: "S. A. Nayana Preethi Kumari", subjects: "Sinhala", img: "Image/SANP.png" },//
  SWM: { name: "S. W. M. Krishantha", subjects: "Sinhala, Tutorials Sinhala", img: "Image/SWM.PNG" },
  NUWA: { name: "G. H. N. Chathuranga", subjects: "Sinhala", img: "Image/NUWA.PNG" },//
  MDMU: { name: "M.D.M.U. Pushpakumara", subjects: "Sinhala", img: "Image/MDMU.PNG" },
  YASK: { name: "Y.A.S.K. Wijerathna", subjects: "Sinhala", img: "Image/YASK.PNG" },

  // English
  IUG: { name: "I. U. Godagama", subjects: "English", img: "Image/IUG.PNG" },
  SDJP: { name: "S. D. R. J. P. Samarakoon", subjects: "English", img: "Image/SDJP.PNG" },
  SMYD: { name: "S. M. Y. Darshana", subjects: "English", img: "Image/SMYD.PNG" },
  HRNG: { name: "H.R.N. Gayantha", subjects: "English", img: "Image/HRNG.PNG" },

  // Mathematics
  MKRC: { name: "M. K. Rasika Nishantha", subjects: "Mathematics", img: "Image/MKRC.PNG" },
  HKAU: { name: "H. K. A. Udayangi", subjects: "Mathematics", img: "Image/HKAU.PNG" },
  GHDC: { name: "T. H. D. Chathulakkana", subjects: "Mathematics", img: "Image/GHDC.PNG" },
  BPLA: { name: "B. P. Lamahewa", subjects: "Mathematics", img: "Image/BPLA.png" },
  BDSE: { name: "B. D. Senanayeka", subjects: "Mathematics", img: "Image/BDSE.PNG" },
  GISA: { name: "G. Iresha Sanjeewani", subjects: "Mathematics", img: "Image/GISA.PNG" },

  // Buddhism
  KSRI: { name: "K. Sirisumana", subjects: "Buddhism, Buddhism Tutorial Sciences", img: "Image/KSRI.png" },
  MACH: { name: "Makumbura Chandraloka", subjects: "Buddhism", img: "Image/MACH.png" },
  DGSR: { name: "D. G. S. R. Dodangoda", subjects: "Buddhism, Science Practical", img: "Image/DGSR.PNG" },

  // Science
  SCI: { name: "D. G. S. R. Dodangoda", subjects: "Science", img: "Image/SCI.PNG" },
  NPAM: { name: "N. P. Amila Chaturika", subjects: "Science", img: "Image/NPAM.png" },
  WHG: { name: "W. H. G. Nishani", subjects: "Science", img: "Image/WHG.png" },
  HLDP: { name: "H. L. D. P. Champika", subjects: "Science, Tutorial Sciences", img: "Image/HLDP.PNG" },
  IAGA: { name: "I.A. Gamage", subjects: "Science, Tutorial Sciences", img: "Image/IAGA.PNG" },

  // History
  KHNL: { name: "K. H. Nallaperuma", subjects: "History, Tutriols History", img: "Image/KHNL.PNG" },
  MVHD: { name: "M. V. H. D. Gunasekara", subjects: "History", img: "Image/MVHD.PNG" },
  WARW: { name: "W. A. R. Wickramarachchi", subjects: "History, Tutriols History", img: "Image/WARW.PNG" },
  ASMA: { name: "A.S. Manoja", subjects: "History, Tutriols History", img: "Image/ASMA.PNG" },

  // Optional Subjects
  RDNR: { name: "R. D. N. Rathnayaka", subjects: "Optional 1", img: "Image/RDNR.PNG" },
  MWA: { name: "M. W. Ajith", subjects: "Optional-3", img: "Image/MWA.PNG" },
  WTKK: { name: "W. T. K. Koshali", subjects: "Optional-3", img: "Image/WTKK.PNG" },
  AMRA: { name: "A. M. Ranasingha Adikari", subjects: "Optional-2", img: "Image/AMRA.PNG" },
  NTWE: { name: "Nilmini Wewalwala", subjects: "Optional-2", img: "Image/NTWE.PNG" },
  PDKW: { name: "P. D. Kariyawasam", subjects: "Optional-2", img: "Image/PDKW.PNG" },
  MMGG: { name: "M. M. Gothami Gunapali", subjects: "Optional-2", img: "Image/MMGG.PNG" },
  ABCP: { name: "B. A. C. Priyakalum", subjects: "Optional-2", img: "Image/ABCP.PNG" },

  // Practical and Tutorials
  SCPR: { name: "D. G. S. R. Dodangoda", subjects: "Science Practical", img: "Image/SCPR.PNG" },
  LAB1: { name: "Lab1", subjects: "Science Practical", img: "Image/LAB1.PNG" },
  TUTS: { name: "H. L. D. P. Champika", subjects: "Tutorial Sciences", img: "Image/TUTS.PNG" },
  TUTH: { name: "M. V. H. D. Gunasekara", subjects: "Tutriols History", img: "Image/TUTH.PNG" },
  TUSI: { name: "S. T. Indrani", subjects: "Tutorials Sinhala", img: "Image/TUSI.PNG" }
};
